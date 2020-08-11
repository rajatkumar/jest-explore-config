// do you need to export anything? No!
// Think of it like any file that will be executed

const { getTestNameFromFilepath, log } = require('../helpers');
const NAME = getTestNameFromFilepath(__filename);
log(`---- START: ${NAME} ----`);
// You cannot do this here!
// beforeEach(function() {
//     log(`${NAME} beforeEach`);
// });
log(`${NAME} Global NODE_DEBUG is ${global.__NODE_DEBUG__}`);
// We can define global utility functions
global.funnyHelloWorld = function(callerName) {
    log(`${NAME} says Heoll Wrold. Called from ${callerName}`);
};
log(`---- END: ${NAME} ----`);
