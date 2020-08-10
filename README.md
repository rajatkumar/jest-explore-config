# Explore Jest Config and Lifecycle

## Simple Setup

-   Checkout `simple_setup` branch
-   yarn install

Run:

```sh
yarn tl
```

You should see some logs show up and this should give you some idea of the lifecycle.

```sh
LOGGING 6123: test1 beforeEach
LOGGING 6123: test1 it
LOGGING 6123: test1 afterEach
LOGGING 6122: test2 beforeEach
LOGGING 6122: test2 it
LOGGING 6122: test2 afterEach
 PASS  tests/test1.spec.js
 PASS  tests/test2.spec.js
LOGGING 6121: test3 beforeEach
LOGGING 6121: test3 it - tests simple add
LOGGING 6121: test3 afterEach
LOGGING 6121: test3 beforeEach
LOGGING 6121: test3 it - tests long running add
LOGGING 6121: test3 afterEach
 PASS  tests/test3.spec.js
```

![Screenshot](img/img_simple_setup.png)

🎉🎉 Congrats! You have a working setup!

## Explore Global Variables

([`global` Documentation](https://jestjs.io/docs/en/configuration#globals-object))

Set of `global` variables → made available in all test environments

-   Checkout `explore_globals` branch
-   See `jest.config.js`

```js
module.exports = {
    globals: {
        __NODE_DEBUG__: process.env.NODE_DEBUG,
    },
};
```

-   Accessing `__NODE_DEBUG__` value

```js
console.log(`Current __NODE_DEBUG__ value is ${global.__NODE_DEBUG__}`);
```

Try running:

-   `yarn tl`
-   `yarn tlb` (this runs the tests one after another and uses `--runInBand`)

Result:

-   Any mutation won't reflect between tests (even in the same test runs) although the mutation will be reflected for that particular test file
    -   so any changes in `it` block is seen in `afterEach` block
-   Values for global variables must be json-serializable.
    -   You can't create a `function` and try using this `function` in your test!
    -   Use `setupFiles` config instead

![Screenshot](img/explore_globals.png)

## Explore Global Setup and Global Teardown

([`globalSetup` Documentation](https://jestjs.io/docs/en/configuration#globalsetup-string))
([`globalTeardown` Documentation](https://jestjs.io/docs/en/configuration#globalteardown-string))

-   Checkout `explore_globals` branch
-   See `jest.config.js`

```js
    globalSetup: './configFiles/globalSetup.js',
    globalTeardown: './configFiles/globalTeardown.js',
```

Try running:

-   `yarn tl`
-   `yarn tlb`

Results:

-   Any `global` variable defined in `globalSetup` can be read in `globalTeardown` but it cannot be read by any of the tests or test-suite
-   `global` variable defined in `jest.config.js` cannot be read in `globalSetup` and `globalTeardown`
-   Execution Sequence: `globalSetup` → ...[`beforeAll`, `beforeEach`, `test`, `afterEach`, `afterAll`]... → `globalTeardown`
-   `globalConfig` passed to `globalSetup` and `globalTeardown` functions cannot bo modified!
