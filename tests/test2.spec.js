const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
describe(`${NAME}`, function() {
    beforeEach(function() {
        log(
            `${NAME} beforeEach - value of NODE_DEBUG: ${global.__NODE_DEBUG__}`
        );
    });

    afterEach(function() {
        // this will show the modified value
        log(
            `${NAME} afterEach - value of NODE_DEBUG: ${global.__NODE_DEBUG__}`
        );
    });

    it('tests 1', function() {
        log(`${NAME} it`);
        log(`${NAME} Current value of NODE_DEBUG: ${global.__NODE_DEBUG__}`);
        global.__NODE_DEBUG__ = 'WHAT_THE_JEST-TEST2';
        log(`${NAME} New value of NODE_DEBUG: ${global.__NODE_DEBUG__}`);
    });
});
