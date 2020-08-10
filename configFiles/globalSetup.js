const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
module.exports = async function(globalConfig) {
    // log(globalConfig);
    log(`${NAME} - Current __NODE_DEBUG__ value is ${global.__NODE_DEBUG__}`);
    // let's change some existing config here
    globalConfig.maxConcurrency = 2;
    log(
        `MaxConcurrency is ${globalConfig.maxConcurrency}, we tried setting it to 2`
    );
    // let's add global value
    global.__customFlag__ = 'IS_THIS_AVAILABLE?';
    log(`Custom flag set to ${global.__customFlag__}`);
};
