module.exports = {
    globals: {
        __NODE_DEBUG__: process.env.NODE_DEBUG,
    },
    globalSetup: './configFiles/globalSetup.js',
    globalTeardown: './configFiles/globalTeardown.js',
};
