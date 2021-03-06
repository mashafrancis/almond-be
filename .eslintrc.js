module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-parameter-properties': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		// "no-throw-literal": "off",
		// "@typescript-eslint/no-throw-literal": ["error"]
	},
};
