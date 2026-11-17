# EPAM: unit, API, UI tests

A JavaScript test automation repository for EPAM practical tasks. It holds unit, UI, and API test assignments, with each type of test kept on its own branch.

## Unit tests

The [`unit_tests`](https://github.com/vira-harasymiv/epam-auto-tests-js/tree/unit_tests) branch contains unit tests for the `NumbersValidator` class, located in the `numbers-validator.js` file (`app` folder).

The unit tests are located in the `test/numbers-validator` folder, in the `isNumberEven.spec.js` file.

Tools used:

- [Mocha](https://mochajs.org/) - test framework
- [mochawesome](https://www.npmjs.com/package/mochawesome) - test reporter
- [c8](https://www.npmjs.com/package/c8) - code coverage analyzer
- [ESLint](https://eslint.org/) v8 - static code analysis

### Commands

- `npm test` - run the tests
- `npm run coverage` - check the code coverage
- `npm run lint` - run static code analysis using ESLint v8
