import { Store, Writer } from 'n3';

/**
 * Take quad or prefixes object and return turtle string.
 *
 * @export
 * @return {String} turtle
 * @name writeTurtle
 */
export default function writeTurtle(data, feed) {
    const defaultPrefixes = {
        schema: 'http://schema.org/',
    };
    if (this.isLast()) {
        feed.close();
        return;
    }
    if (this.isFirst()) {
        this.store = new Store();
    }
    if (data && data.quad) {
        const { quad } = data;
        this.store.addQuad(quad);
    }
    if (data && data.prefixes) {
        const { prefixes } = data;
        this.writer = new Writer({ prefixes: { ...defaultPrefixes, prefixes } });
        const quads = this.store.getQuads();
        this.writer.addQuads(quads);
        this.writer.end((error, result) => {
            if (error) {
                return feed.stop(new Error(error));
            }
            return feed.send(result);
        });
        this.store = null;
        this.writer = null;
    }
    feed.end();
}
