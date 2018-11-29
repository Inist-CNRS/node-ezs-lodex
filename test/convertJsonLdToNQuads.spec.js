import ezs from 'ezs';
import from from 'from';
import testOne from './testOne';

import statements from '../src';

ezs.use(statements);

describe('convertJSonLdToNquads', () => {
    it('should convert a correct JSON-LD into NQuads', (done) => {
        // see https://json-ld.org/playground/ for the Person example
        const stream = from([
            {
                '@context': 'http://schema.org/',
                '@graph': [
                    {
                        id: 'http://uri/janedoe',
                        type: 'Person',
                        jobTitle: 'Professor',
                        name: 'Jane Doe',
                        telephone: '(425) 123-4567',
                        url: 'http://www.janedoe.com',
                    },
                ],
            },
        ]).pipe(ezs('convertJsonLdToNQuads'));
        const expectedNquads = [
            '<http://uri/janedoe> <http://schema.org/jobTitle> "Professor" .',
            '<http://uri/janedoe> <http://schema.org/name> "Jane Doe" .',
            '<http://uri/janedoe> <http://schema.org/telephone> "(425) 123-4567" .',
            '<http://uri/janedoe> <http://schema.org/url> <http://www.janedoe.com> .',
            '<http://uri/janedoe> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://schema.org/Person> .',
        ];
        testOne(
            stream,
            (data) => {
                const lines = data.split('\n');
                expect(expectedNquads).toContain(lines[0]);
                expect(expectedNquads).toContain(lines[1]);
                expect(expectedNquads).toContain(lines[2]);
                expect(expectedNquads).toContain(lines[3]);
                expect(expectedNquads).toContain(lines[4]);
            },
            done,
        );
    },
    8000);

    it.skip('should cut the feed when error', (done) => {
        // see https://json-ld.org/playground/ for the Person example
        try {
            const stream = from([
                {
                    '@context': 'http://schema.org/',
                    '@graph': [
                        {
                            id: 1,
                            type: 'Person',
                            jobTitle: 'Professor',
                            name: 'Jane Doe',
                            telephone: '(425) 123-4567',
                            url: 'http://www.janedoe.com',
                        },
                    ],
                },
            ])
                .pipe(ezs('convertJsonLdToNQuads'))
                .pipe(ezs((data) => {
                    try {
                        expect(data).toBeDefined();
                        done(new Error('Should not work'));
                    } catch (e) {
                        expect(e).toBeDefined();
                        done();
                    }
                }))
                .on('end', () => {
                    done(new Error('Should not work'));
                });
        } catch (error) {
            return done();
        }

        // stream.pipe(ezs.catch((error) => {
        //     expect(error).toBeDefined();
        //     done();
        // }));

        // stream
        //     .on('error', (err) => {
        //         expect(err).toBeDefined();
        //         done();
        //     })
        //     .on('data', (data) => {
        //         expect(data);
        //         done(new Error('Should not work'));
        //     });
    },
    8000);
});
