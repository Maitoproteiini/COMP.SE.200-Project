module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  // moduleNameMapper: {
  //   "^src/(.*)$": "<rootDir>/$1"
  // },
  collectCoverageFrom: [
    "COMP.SE.200-2024-2025-1/src/**/*.js"
  ],
  collectCoverage: true,
  coverageDirectory: "coverage/jest",
  coverageReporters: ["lcov", "text"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.internal/"
  ]
};
