import from from 'from';
import ezs, { use } from 'ezs';
import testOne from './testOne';

use(require('../lib'));

describe('objects2columns', () => {
    it('should return when columns', (done) => {
        const stream = from([
            {
                truc: {
                    hello: 'world',
                },
            },
        ]).pipe(ezs('objects2columns'));
        testOne(
            stream,
            (output) => {
                expect(output);
                expect(output.truc).toEqual('{"hello":"world"}');
            },
            done,
        );
    });
});
