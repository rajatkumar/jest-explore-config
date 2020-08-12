const NodeEnvironment = require('jest-environment-node');
const util = require('util');
const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);

class CustomTestEnvironment extends NodeEnvironment {
    myContext = null;
    myConfig = null;
    constructor(config, context) {
        super(config, context);
        log(`${NAME} inside constructor`);
        // log(`${NAME} config: ${JSON.stringify(config, null, 2)}`);
        // log(`${NAME} context: ${JSON.stringify(context, null, 2)}`);
        // we can read the values passed using `testEnvironmentOptions`
        log(`${NAME} got ${JSON.stringify(config.testEnvironmentOptions)}`);
        log(`${NAME} current test file: ${context.testPath}`);
        this.myContext = context;
        this.myConfig = config;
    }

    async setup() {
        log(`${NAME} Setup`);
        // lets modify our global
        // this.myConfig.globals.__NODE_DEBUG__ = 'NOT LOGGING!'; // <-- you can set this value but this is incorrect way
        this.global.__NODE_DEBUG__ = 'NOT LOGGING!'; // <-- you can play around with this too!
        log(`${NAME} changed __NODE_DEBUG__`);
        // alternate way to access the same value
        log(`${NAME} __NODE_DEBUG__ ${this.global.__NODE_DEBUG__}`);
        // create a new one
        this.global.__NEW_VALUE__ = 'Hello from Custom Env';
    }

    async teardown() {
        log(`${NAME} Teardown`);
    }

    // when is this run? Never if you have `getVmContext` defined,
    // to use this change `getVmContext = null;`
    runScript(script) {
        log(`${NAME} runScript - ${util.inspect(script)}`);
        return super.runScript(script);
    }

    getVmContext() {
        const context = super.getVmContext();
        // this is printed way too many times!
        // log(`${NAME} getVmContext -  ${util.inspect(Object.keys(context))}`);
        return context;
    }

    // when is this run? only when you use `jest-circus/runner`
    handleTestEvent(event, state) {
        // `test_start` happens right before `beforeEach` is called
        // `test_fn_start` happens right after `beforeEach` is called
        if (event.name === 'test_start' || event.name === 'test_fn_start') {
            log(`${NAME} handleTestEvent - ${event.name}`);
            log(
                `${NAME} state ${util.inspect(state.currentlyRunningTest.name)}`
            );
        }
        return;
    }
}

module.exports = CustomTestEnvironment;
