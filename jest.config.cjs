module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/$1"
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.internal/"
  ]
};
