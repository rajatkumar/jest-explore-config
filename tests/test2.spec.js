const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
describe(`${NAME}`, function() {
    beforeEach(function() {
        log(`${NAME} beforeEach`);
    });

    afterEach(function() {
        log(`${NAME} afterEach`);
    });

    it('tests 1', function() {
        log(`${NAME} it`);
    });
});
