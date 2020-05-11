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
		'max-len': [ 'error', 80 ],
		'no-console': 'warn',
		eqeqeq: [ 'error', 'smart' ]
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
