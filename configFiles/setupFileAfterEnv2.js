// do you need to export anything? No!
// Think of it like any file that will be executed

const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
log(`---- START: ${NAME} ----`);
log(`${NAME} Global NODE_DEBUG is ${global.__NODE_DEBUG__}`);
// log(`${NAME} Another interesting fact is this will be run once per test file!`);
log(`---- END: ${NAME} ----`);
