import jsonld from 'jsonld';

export default function convertJsonLdToNQuads(data, feed) {
    if (this.isLast()) {
        feed.close();
    }
    jsonld.toRDF(
        data,
        {
            format: 'application/nquads',
        },
        (err, nquads) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.error('toRDF: ', err);
                return feed.end();
            }
            return feed.send(nquads);
        },
    );
}
