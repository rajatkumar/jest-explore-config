const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);

const { longRunningAdd, simpleAdd } = require('../src');
describe(`${NAME}`, function() {
    beforeAll(function() {
        log(`${NAME} beforeAll`);
    });
    beforeEach(function() {
        log(`${NAME} beforeEach`);
    });

    afterEach(function() {
        // this will show the modified value
        log(`${NAME} afterEach`);
    });
    afterAll(function() {
        // this will show the modified value
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
    });
});
