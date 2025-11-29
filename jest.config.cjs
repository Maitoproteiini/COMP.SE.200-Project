module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/COMP.SE.200-2024-2025-1/$1"
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.internal/"
  ]
};
