const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
describe(`${NAME}`, function() {
    beforeEach(function() {
        log(`${NAME} beforeEach`);
    });

    afterEach(function() {
        // this will show the modified value
        log(`${NAME} afterEach`);
    });

    it('tests 1', function() {
        log(`${NAME} it`);
        log(`${NAME} Custom flag set to ${global.__customFlag__}`);
        log(`${NAME} Global NODE_DEBUG set to ${global.__NODE_DEBUG__}`);
    });
});
