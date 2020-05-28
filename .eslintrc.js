/**
 * ESLint configuration file.
 *
 * @author Nahid Ferdous Mohit.
 * @since  1.0.0
 */

/*
 * Dependencies
 */
const nahidPrettierConfig = require( 'prettier-config-nahid' );

/*
 * ESLint configuration
 */
module.exports = {
	extends: [
		'airbnb',
		'plugin:@wordpress/eslint-plugin/recommended',
		'prettier'
	],
	plugins: [ 'prettier' ],
	rules: {
		'prettier/prettier': [
			'error',
			{
				...nahidPrettierConfig
			}
		],
		'max-len': [
			'error',
			{
				"code": 80,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true
			}
		],
		'no-console': 'warn',
		eqeqeq: [ 'error', 'smart' ],
		"react/jsx-filename-extension": [
			'error',
			{
				"extensions": [ ".js", ".jsx" ]
			}
		],
		'no-param-reassign': [
			'error',
			{
				'props': false
			}
		]
	},
	parserOptions: {
		ecmaVersion: 2018
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		commonjs: true
	}
};
