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
        // note: we can skip calling with global prefix if they were done in setup files or through
        // jest config
        // We can read the values passed using `testEnvironmentOptions` in tests
        // example: `${teKey1} | ${teKey2}`
        funnyHelloWorld(NAME);
        log(
            `${NAME} ${__NEW_VALUE__} |  ${__NODE_DEBUG__} | ${teKey1} | ${teKey2}`
        );
    });
});
