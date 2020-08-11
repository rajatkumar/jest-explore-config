module.exports = {
    globals: {
        __NODE_DEBUG__: process.env.NODE_DEBUG,
    },
    globalSetup: './configFiles/globalSetup.js',
    globalTeardown: './configFiles/globalTeardown.js',
    setupFiles: ['./configFiles/setupFile1.js', './configFiles/setupFile2.js'],
    setupFilesAfterEnv: [
        './configFiles/setupFileAfterEnv1.js',
        './configFiles/setupFileAfterEnv2.js',
    ],
};
