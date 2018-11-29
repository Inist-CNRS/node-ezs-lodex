import jsonld from 'jsonld';

export default function convertJsonLdToNQuads(data, feed) {
    if (this.isLast()) {
        feed.close();
    } else {
        jsonld.toRDF(
            data,
            {
                format: 'application/nquads',
            },
            (err, nquads) => {
                if (err) {
                    // eslint-disable-next-line no-console
                    console.error('toRDF: ', err);
                    throw new Error(err);
                }
                feed.send(nquads);
            },
        );
    }
}
