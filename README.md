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
