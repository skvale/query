module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.{tsx,ts}'],
  testPathIgnorePatterns: ['<rootDir>/types/'],
  moduleNameMapper: {
    'react-query': '<rootDir>/src/index.ts',
  },
  clearMocks: true,
}
