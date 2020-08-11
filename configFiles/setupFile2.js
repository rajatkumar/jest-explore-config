// do you need to export anything? No!
// Think of it like any file that will be executed

const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
log(`---- START: ${NAME} ----`);
log(`${NAME} Global NODE_DEBUG is ${global.__NODE_DEBUG__}`);
// we can also call this function
funnyHelloWorld(NAME);
log(`---- END: ${NAME} ----`);
