const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);

const { longRunningAdd, simpleAdd } = require('../src');
describe(`${NAME}`, function() {
    beforeAll(function() {
        log(`${NAME} beforeAll`);
        funnyHelloWorld(NAME);
    });
    beforeEach(function() {
        log(`${NAME} beforeEach`);
    });

    afterEach(function() {
        log(`${NAME} afterEach`);
    });
    afterAll(function() {
        log(`${NAME} afterAll`);
    });
    it('tests simple add', function() {
        log(`${NAME} it - tests simple add`);
        const value = simpleAdd(2, 2);
        expect(value).toBe(4);
    });
    it('tests long running add', async function() {
        log(`${NAME} it - tests long running add`);
        const value = await longRunningAdd(2, 2, 1000);
        expect(value).toBe(4);
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
