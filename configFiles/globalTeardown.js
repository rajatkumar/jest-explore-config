const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
module.exports = async function(globalConfig) {
    // log(globalConfig);
    log(`${NAME} - Current __NODE_DEBUG__ value is ${global.__NODE_DEBUG__}`);
    // let's get the modified config value
    log(`maxConcurrency: ${globalConfig.maxConcurrency}`);
    // let's read value
    log(`Custom Flag ${global.__customFlag__}`);
};
