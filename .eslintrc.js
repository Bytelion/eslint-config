module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  'extends': [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
  ],
  plugins: [
    'jsx-a11y',
    'no-secrets',
    'react-hooks',
    'react',
    'security',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'capitalized-comments': 'off',
    'global-require': 0, // Used by React Native.
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 0, // monorepo setup
    'jsx-a11y/anchor-is-valid': 'warn',
    'key-spacing': ['error', { 'align': 'value' }],
    'max-len': [2, { 'code': 99, 'tabWidth': 2, 'ignoreUrls': true }],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1 }],
    'no-nested-ternary': 'error',
    'no-return-assign': 'off', // airbnb use error, handy for react ref assign.
    'no-underscore-dangle': 0, // disallows 'private' properties
    'operator-linebreak': ['error', 'after'], // aibnb is disabling this rule
    'quote-props': ['error', 'as-needed', { 'keywords': true, 'unnecessary': false }],
    'react/forbid-prop-types': ['error', { 'forbid': ['any'] }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 3 }], // airbnb is disabling this rule
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [2, { 'callbacksLast': true, 'shorthandLast': true }],
    'react/no-direct-mutation-state': 'error', // airbnb is disabling this rule
    'react/require-default-props': 'warn',
    'sort-destructure-keys/sort-destructure-keys': ['warn', { 'caseSensitive': false }],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-vars': ['error', { 'ignoreCase': true }],

    // Import ordering
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        'internal',
      ],
      'pathGroups': [{
        'pattern': 'react',
        'group': 'external',
        'position': 'before',
      }],
      'pathGroupsExcludedImportTypes': ['react'],
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true,
      },
    }],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
