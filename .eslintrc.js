module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y'],
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['build/*.js', '.eslintrc.js', 'webpack.config.js'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'esnext',
        sourceType: 'commonjs',
        project: ['./tsconfig.json'],
    },
}
