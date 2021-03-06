import ezs from 'ezs';

const testOne = (stream, expectation, done) => {
    stream.pipe(
        ezs((data) => {
            try {
                expectation(data);
                done();
            } catch (e) {
                done(e);
            }
        }),
    ).on('error', done);
};
export default testOne;
