# COMP.SE.200-Project
Project repo for COMP.SE.200 Software Testing course.

This project is designed to implement automated tests using Mocha and Jest.

## Mocha
Mocha is a feature-rich testing framework that runs on Node.js. Mocha tests run serially which allows flexible and accurate reporting.

## Jest
Jest is a testing framework designed primarily for unit testing React applications, but it can also be used for any JavaScript codebase.

## How to run?
Prerequisites, make sure you have the following installed:
- Node.js (v18+ recommended)
- npm (comes with Node.js)
```bash
    node -v
    npm -v
```

Installation
1. Clone the repository
```bash
    git clone <repository-url>
    cd <project>
```

2. Install dependencies
```bash
   npm ci
```

3. Run tests
- Mocha
```bash
   npm run test:mocha 
```

- Jest
```bash
   npm run test:jest 
```

- Run all tests
```bash
   npm run test:coverage
```

3. Open HTML coverage report in browser
```bash
   open coverage/lcov-report/index.html     # macOS
   xdg-open coverage/lcov-report/index.html # Linux
   start coverage\lcov-report\index.html    # Windows (option 1)
   start coverage/lcov-report/index.html    # Windows (option 2)
```

## Project structure
.<br/>
├── .github/<br />
├   ├── workflows/<br />
├   ├   ├── CI.yaml<br />
├── COMP.SE.200-2024-2025-1<br />
├   ├── 'submodule files'<br />
├── tests<br />
├   ├── AIgeneratedByElli<br />
├   ├   ├── AIupperFirst.test.js<br />
├   ├── AIgeneratedByOtto<br />
├   ├   ├── testToString.js<br />
├   ├── designedByElli<br />
├   ├   ├── filter.test.js<br />
├   ├   ├── get.test.js<br />
├   ├   ├── isArguments.test.js<br />
├   ├   ├── isEmpty.test.js<br />
├   ├   ├── upperFirst.test.js<br />
├   ├── designedByOtto<br />
├   ├   ├── testAdd.js<br />
├   ├   ├── testEq.js<br />
├   ├   ├── testEvery.js<br />
├   ├   ├── testToString.js<br />
├   ├   ├── testWords.js<br />
├── babel.config.cjs<br />
├── jest.config.cjs<br />
├── package-lock.json<br />
├── package.json<br />
├── README.md<br />
