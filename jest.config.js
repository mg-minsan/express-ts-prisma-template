/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  // setupFilesAfterEnv: ['<rootDir>/__test__/singletons.ts'],
  clearMocks: true,
};
