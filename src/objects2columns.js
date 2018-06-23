/**
 * Take `Object` and ...
 *
 * @name objects2columns 
 * @alias flatten
 * @param none.
 * @returns {Object}
 */
export default function objects2columns(data, feed) {
    if (this.isLast()) {
        feed.close();
        return;
    }
    const obj = {};
    Object.keys(data)
        .sort((x, y) => x.localeCompare(y))
        .forEach(key => {
            if (typeof data[key] === 'object') {
                obj[key] = JSON.stringify(data[key]);
            } else {
                obj[key] = data[key];
            }
        });
    feed.send(obj);
}
