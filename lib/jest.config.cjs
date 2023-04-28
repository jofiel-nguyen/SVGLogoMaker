module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.js?(x)',
    '**/?(*.)+(spec|test).js?(x)'
  ],
  collectCoverageFrom: [
    'lib/**/*.js',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  extensionsToTreatAsEsm: []
};
