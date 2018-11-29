import from from 'from';
import { Feed } from 'feed';
import ezs from 'ezs';
import statements from '../src';

ezs.use(statements);

describe('convertToAtom', () => {
    let atomFeed;
    beforeEach(() => {
        atomFeed = new Feed({
            title: 'title',
            generator: 'Lodex',
            id: 'id',
            link: 'link',
            image: 'https://user-images.githubusercontent.com/7420853/30152932-1794db3c-93b5-11e7-98ab-a7f28d0061cb.png',
        });
    });

    it('should return the correct feed from empty data', (done) => {
        from([{}])
            .pipe(ezs('convertToAtom', { fields: [], config: {}, atomFeed }))
            .pipe(ezs((input) => {
                try {
                    const lines = input.split('\n');
                    expect(lines[0]).toBe('<?xml version="1.0" encoding="utf-8"?>');
                    expect(lines[1]).toBe('<feed xmlns="http://www.w3.org/2005/Atom">');
                    expect(lines[2]).toBe('    <id>id</id>');
                    expect(lines[3]).toBe('    <title>title</title>');
                    expect(lines[5]).toBe('    <generator>Lodex</generator>');
                    expect(lines[6]).toBe('    <link rel="alternate" href="link"/>');
                    expect(lines[7]).toBe('    <logo>https://user-images.githubusercontent.com/7420853/30152932-1794db3c-93b5-11e7-98ab-a7f28d0061cb.png</logo>');
                    expect(lines[8]).toBe('</feed>');
                    done();
                } catch (e) {
                    done(e);
                }
            }))
            .on('error', done);
    });

    it('should return the correct feed from one resource', (done) => {
        const fields = [
            { overview: 1, name: 'title' },
            { overview: 2, name: 'description' },
        ];
        from([{
            uri: 'http://uri',
            title: 'Title',
            description: 'Description.',
        }])
            .pipe(ezs('convertToAtom', { fields, config: {}, atomFeed }))
            .pipe(ezs('debug'))
            .pipe(ezs((input) => {
                try {
                    const lines = input.split('\n');
                    expect(lines[0]).toBe('<?xml version="1.0" encoding="utf-8"?>');
                    expect(lines[1]).toBe('<feed xmlns="http://www.w3.org/2005/Atom">');
                    expect(lines[2]).toBe('    <id>id</id>');
                    expect(lines[3]).toBe('    <title>title</title>');
                    expect(lines[5]).toBe('    <generator>Lodex</generator>');
                    expect(lines[6]).toBe('    <link rel="alternate" href="link"/>');
                    expect(lines[7]).toBe('    <logo>https://user-images.githubusercontent.com/7420853/30152932-1794db3c-93b5-11e7-98ab-a7f28d0061cb.png</logo>');
                    expect(lines[8]).toBe('    <entry>');
                    expect(lines[9]).toBe('        <title type="html"><![CDATA[Title]]></title>');
                    expect(lines[10]).toBe('        <id>http://uri</id>');
                    expect(lines[11]).toBe('        <link href="http://uri">');
                    expect(lines[12]).toBe('        </link>');
                    expect(lines[13]).toContain('<updated>');
                    expect(lines[14]).toBe('        <summary type="html"><![CDATA[Description.]]></summary>');
                    expect(lines[15]).toBe('    </entry>');
                    expect(lines[16]).toBe('</feed>');
                    done();
                } catch (e) {
                    done(e);
                }
            }))
            .on('error', done);
    });
});
