const jasmineRunner = require('jest-jasmine2');
const circusRunner = require('jest-circus/runner');
const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
const util = require('util');
function customTestRunner(
    globalConfig,
    config,
    environment,
    runtime,
    testPath
) {
    log(`${NAME} testPath ${testPath}`);
    const randomNum = Math.random() * 100;
    // This has Jest runtime
    // log(`${NAME} runtime ${util.inspect(Object.keys(runtime))}`);
    // This has our `customTestEnvironment`
    // log(`${NAME} environment ${util.inspect(environment)}`);
    // has all the options from jest.config.js
    // log(`${NAME} config ${util.inspect(config)}`);
    // log(`${NAME} globalConfig ${util.inspect(globalConfig)}`);

    if (randomNum > 50) {
        log(`${NAME} - ${randomNum} - Now calling Jasmine Runner`);
        return jasmineRunner(
            globalConfig,
            config,
            environment,
            runtime,
            testPath
        );
    } else {
        log(`${NAME} - ${randomNum} - Now calling Circus Runner`);
        log(`${NAME} Expect to see state handler logs`);
        return circusRunner(
            globalConfig,
            config,
            environment,
            runtime,
            testPath
        );
    }
}

module.exports = customTestRunner;
