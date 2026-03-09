/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(remark|unified|bail|devlop|is-plain-obj|trough|vfile|unist-util-stringify-position|mdast-util-from-markdown|mdast-util-to-markdown|mdast-util-to-string|mdast-util-phrasing|micromark|micromark-.*|decode-named-character-reference|character-entities|longest-streak|zwitch|unist-util-visit|unist-util-is)/)',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};
