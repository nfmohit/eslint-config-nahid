# eslint-config-nahid

##### My sharable and pluggable ESLint + Prettier configuration.

## Contents

-   [`eslint`](https://www.npmjs.com/package/eslint)
-   [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)
-   [`@wordpress/eslint-plugin`](https://www.npmjs.com/package/@wordpress/eslint-plugin)
-   [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier)
-   [`prettier-config-nahid`](https://www.npmjs.com/package/prettier-config-nahid)

## Features

-   Lints JS according to latest standards using [ESLint](https://www.npmjs.com/package/eslint).
-   Formats JS using [Prettier](https://www.npmjs.com/package/prettier).
-   Lints & formats React using [Airbnb's very popular ESLint config](https://www.npmjs.com/package/eslint-config-airbnb).

## Requirements

-   [NodeJS](https://nodejs.org/en/) ( >=12.0.0 )
-   [NPM](https://www.npmjs.com/) ( >=6.14.5 )

## Installation

1. If your project doesn't have a `package.json` file already, create one using the [`npm init` command](https://docs.npmjs.com/cli-commands/init.html).
2. Run the command: `npx install-peerdeps --dev eslint-config-nahid`
3. Create a file named `.eslintrc` and insert the following there:

```json
{
	"extends": [ "nahid" ]
}
```

This object can also be added in your `package.json` file instead under the `eslintConfig` property.

Learn more about using shareable ESLint config [here](https://eslint.org/docs/developer-guide/shareable-configs).

## Usage

1. You can try running the following command `eslint .` to run ESLint. Look at ESLint's command-line interface guide [here](<[https://eslint.org/docs/user-guide/command-line-interface](https://eslint.org/docs/user-guide/command-line-interface)>).
2. I prefer adding two scripts to the `package.json` file:

```json
"scripts": {
	"lint-js": "eslint \"**/*.js\"",
	"lint-js:fix": "eslint \"**/*.js\" --fix",
}
```

That way, I can run `npm run lint-js` and `npm run lint-js:fix` to lint and lint/fix all the JS files in the codebase.

The documentation for ESLint as a whole can be found [here](https://eslint.org/docs/user-guide/getting-started).
