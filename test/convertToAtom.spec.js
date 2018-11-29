import fs from 'fs';
import path from 'path';
import { Feed } from 'feed';
import ezs from 'ezs';
import statements from '../src';

ezs.use(statements);

describe('convertToAtom', () => {
    it('should return the correct feed from empty data', (done) => {
        const atomFeed = new Feed({
            title: 'title',
            generator: 'Lodex',
            id: 'id',
            link: 'link',
            image:
                'https://user-images.githubusercontent.com/7420853/30152932-1794db3c-93b5-11e7-98ab-a7f28d0061cb.png',
        });
        const mongoData = fs.createReadStream(
            path.resolve(__dirname, './fixture.data.mongo.json'),
        );
        mongoData
            .pipe(ezs('convertToAtom', { fields: [], config: {}, atomFeed }))
            .pipe(ezs((input) => {
                try {
                    const lines = input.split('\n');
                    expect(lines[0]).toBe(
                        '<?xml version="1.0" encoding="utf-8"?>',
                    );
                    expect(lines[1]).toBe(
                        '<feed xmlns="http://www.w3.org/2005/Atom">',
                    );
                    expect(lines[2]).toBe('    <id>id</id>');
                    expect(lines[3]).toBe(
                        '    <title>title</title>',
                    );
                    expect(lines[5]).toBe(
                        '    <generator>Lodex</generator>',
                    );
                    expect(lines[6]).toBe(
                        '    <link rel="alternate" href="link"/>',
                    );
                    expect(lines[7]).toBe(
                        '    <logo>https://user-images.githubusercontent.com/7420853/30152932-1794db3c-93b5-11e7-98ab-a7f28d0061cb.png</logo>',
                    );
                    expect(lines[8]).toBe('</feed>');
                    done();
                } catch (e) {
                    done(e);
                }
            }));
        mongoData.on('error', done);
    });
});
