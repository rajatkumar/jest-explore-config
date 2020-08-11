const { sep } = require('path');
const { debuglog } = require('util');
const log = debuglog('logging');
const colors = {
    // foreground colors
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
function getTestNameFromFilepath(filepath) {
    let textColor = colors.yellow;
    const name = filepath
        .split(sep)
        .pop()
        .split('.')[0];
    if (name.includes('test')) {
        textColor = colors.green;
    }
    if (name.includes('setup')) {
        textColor = colors.blue;
    }
    if (name.includes('AfterEnv')) {
        textColor = colors.magenta;
    }
    return `${textColor} ${name}`;
}

module.exports = { getTestNameFromFilepath, log };
