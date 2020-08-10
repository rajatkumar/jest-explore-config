const { sep } = require('path');
const { debuglog } = require('util');
const log = debuglog('logging');
function getTestNameFromFilepath(filepath) {
    return filepath
        .split(sep)
        .pop()
        .split('.')[0];
}

module.exports = { getTestNameFromFilepath, log };
