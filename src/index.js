async function longRunningAdd(a, b, timeout) {
    await new Promise((r) => setTimeout(r, timeout));
    return a + b;
}

function simpleAdd(a, b) {
    return a + b;
}

module.exports = { simpleAdd, longRunningAdd };
