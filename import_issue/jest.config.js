
console.log('load config');

const config = {
	"extensionsToTreatAsEsm": [
		".ts",
		".esm.js"
	],
	"cacheDirectory": "<rootDir>../../cache/jest",
	"transformIgnorePatterns": [
		"node_modules/(?!.*?\\.esm\\.js$|.*?\\.mjs$)"
	],
	"testPathIgnorePatterns": [
		"node_modules/(?!.*?\\.esm\\.js$|.*?\\.mjs$)",
		"<rootDir>/node_modules/"
	],
	"testRegex": ".test.ts$",
	"transform": {
		"^.+\\.(t|j)s$": ["@swc/jest", {
			jsc: {
				parser: {
					syntax: 'typescript',
					decorators: true
				},
				transform: {
					decoratorMetadata: true
				},
				target: 'es5'
			},
			module: {
				type: 'commonjs'
			}
		}]
	},
	"testEnvironment": "node"
};

module.exports = config;
