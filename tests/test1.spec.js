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
        log(`${NAME} Custom flag set to ${global.__customFlag__}`);
        log(`${NAME} Global NODE_DEBUG set to ${global.__NODE_DEBUG__}`);
        funnyHelloWorld(NAME);
    });
});
