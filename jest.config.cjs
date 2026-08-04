module.exports = {
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'NodeNext',
          target: 'ES2022',
        },
        useESM: true,
      },
    ],
  },
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest/presets/default-esm',
};