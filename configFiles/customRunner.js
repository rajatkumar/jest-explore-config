const util = require('util');
const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
// we still use the default runTest
const runTest = require('jest-runner/build/runTest').default;

class CustomRunner {
    _globalConfig = null;
    _context = {};
    constructor(globalConfig, context) {
        this._globalConfig = globalConfig;
        this._context = context || {};
    }

    // Runs all tests sequentially!
    async runTests(tests, watcher, onStart, onResult, onFailure, options) {
        log(`${NAME} tests ${util.inspect(tests)}`);
        log(`${NAME} watcher ${util.inspect(watcher)}`);
        log(`${NAME} options ${util.inspect(options)}`);
        for (let i = 0; i < tests.length; i++) {
            const test = tests[i];
            const onStartValue = await onStart(test);
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
                const onResultValue = await onResult(test, runTestValue);
                log(`${NAME} onResultValue ${util.inspect(onResultValue)}`);
                return onResultValue;
            } catch (err) {
                const onFailureValue = await onFailure(test, err);
                log(`${NAME} onFailureValue ${util.inspect(onFailureValue)}`);
                return onFailureValue;
            }
        }
    }
}

module.exports = CustomRunner;
