module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: [0, 4],
        'comma-dangle': ['error', 'only-multiline'],
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never', asyncArrow: 'always' }
        ],
        'multiline-ternary': ['off'],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ]
    }
}
