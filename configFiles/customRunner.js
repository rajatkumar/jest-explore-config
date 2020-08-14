const util = require('util');
const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
// we still use the default runTest
const runTest = require('jest-runner/build/runTest').default;

class CustomRunner {
    _globalConfig = null;
    _context = {};
    constructor(globalConfig, context) {
        log(`${NAME} constructor `);
        // this globalConfig is the same globalConfig that is received by globalSetup and globalTeardown
        this._globalConfig = globalConfig;
        // log(`${NAME} globalConfig ${util.inspect(globalConfig)} `);
        this._context = context || {};
        log(`${NAME} context ${util.inspect(context)} `);
    }

    // Runs all tests sequentially!
    async runTests(tests, watcher, onStart, onResult, onFailure, options) {
        log(`${NAME} tests ${util.inspect(tests)}`);
        log(`${NAME} watcher ${util.inspect(watcher)}`);
        log(`${NAME} options ${util.inspect(options)}`);
        const resultsList = [];
        for (let i = 0; i < tests.length; i++) {
            const test = tests[i];
            log(
                `${NAME} serializableModuleMap ${JSON.stringify(
                    test.context.moduleMap.toJSON()
                )}`
            );
            const onStartValue = await onStart(test);
            // onStartValue is undefined, ie no value is returned
            log(`${NAME} onStartValue ${util.inspect(onStartValue)}`);
            try {
                const runTestValue = await runTest(
                    test.path,
                    this._globalConfig,
                    test.context.config,
                    test.context.resolver,
                    this._context,
                    undefined
                );

                log(`${NAME} runTestValue ${util.inspect(runTestValue)}`);
                log(
                    `${NAME} runTestValue - perfStats ${util.inspect(
                        runTestValue.perfStats
                    )}`
                );
                // test Results can also be accessed
                log(
                    `${NAME} testResults ${util.inspect(
                        runTestValue.testResults
                    )} \n ancestorTitles ${util.inspect(
                        runTestValue.testResults[0].ancestorTitles
                    )}`
                );
                // let's modify the value and force the 1st test result to be `failed`
                runTestValue.testResults[0].status = 'failed';
                log(
                    `${NAME} Modified testResults[0] to failed ${util.inspect(
                        runTestValue.testResults
                    )}`
                );
                const onResultValue = await onResult(test, runTestValue);
                log(`${NAME} onResultValue ${util.inspect(onResultValue)}`);
                resultsList.push({
                    testFile: test.path,
                    result: onResultValue,
                    error: false,
                });
            } catch (err) {
                const onFailureValue = await onFailure(test, err);
                log(`${NAME} onFailureValue ${util.inspect(onFailureValue)}`);
                resultsList.push({
                    testFile: test.path,
                    result: onFailureValue,
                    error: true,
                });
            }
        }
    }
}

module.exports = CustomRunner;
