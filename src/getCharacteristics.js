import { MongoClient } from 'mongodb';

/**
 * Return the last characteristics (the dataset covering fields) of a LODEX.
 *
 * @example <caption>Output:</caption>
 *
 * [
 *   {
 *     "characteristics": {
 *       "_id": "5d289071340bb500201b5146",
 *       "qW6w": "Catégories WOS",
 *       "ImiI": "Cette table correspond aux catégories Web Of Science.",
 *       "alRS": "/api/run/syndication",
 *       "aDLT": "Dans le cadre de l'enrichissement des documents du...",
 *       "SFvt": "https://enrichment-process.data.istex.fr/ark:/67375/R0H-PWBRNFQ8-H",
 *       "RzXW": "https://docs.google.com/drawings/d/1LzjO-oD6snh0MYfqxfPB7q-LU6Dev1SRmJstXFGzgvg/pub?w=960&h=720",
 *       "E4jH": "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
 *       "MvkG": "Plateforme ISTEX",
 *       "m7G5": "Inist-CNRS",
 *       "1TvM": "2016-05-12",
 *       "WcNl": "2019-01-16",
 *       "publicationDate": "2019-07-12T13:51:45.129Z"
 *     }
 *   }
 * ]
 *
 * @export
 * @param {string} connectionStringURI MongoDB connection string
 * @name LodexGetCharacteristics
 */
export async function LodexGetCharacteristics(data, feed) {
    if (this.isLast()) {
        return feed.close();
    }
    const connectionStringURI = this.getParam(
        'connectionStringURI',
        data.connectionStringURI || '',
    );
    const client = await MongoClient.connect(
        connectionStringURI,
        {
            useNewUrlParser: true,
        },
    );
    const db = client.db();

    const collection = db.collection('publishedCharacteristic');
    const cursor = collection.find();
    cursor
        .limit(1)
        .sort({ publicationDate: -1 })
        .on('data', (characteristics) => {
            if (typeof characteristics === 'object') {
                feed.write({ characteristics });
            }
        })
        .on('error', (error) => {
            feed.write(error);
        })
        .on('end', () => {
            feed.end();
            client.close();
        });
};

export default {
    getCharacteristics: LodexGetCharacteristics,
};
