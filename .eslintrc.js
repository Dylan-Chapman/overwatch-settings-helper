module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
  ],
  rules: {
    "array-bracket-spacing": [
		"warn",
		"always"
	],
	"arrow-body-style": [
		"warn",
		"as-needed"
	],
	"arrow-parens": [
		"warn",
		"as-needed"
	],
	"arrow-spacing": [
		"warn",
		{
			after: true,
			"before": true
		}
	],
	"block-scoped-var": "warn",
	"brace-style": [
		"warn",
		"1tbs",
		{
			allowSingleLine: false
		}
	],
	"comma-dangle": [
		"warn",
		"never"
	],
	"comma-spacing": [
		"warn",
		{
			after: true,
			before: false
		}
	],
	"comma-style": [
		"warn",
		"last"
	],
	"complexity": [
		"warn",
		{
			max: 10
		}
	],
	"computed-property-spacing": [
		"warn",
		"never"
	],
	"consistent-this": [
		"warn",
		"me"
	],
	"constructor-super": "warn",
	"curly": [
		"warn",
		"all"
	],
	"dot-location": [
		"warn",
		"property"
	],
	"dot-notation": [
		"warn",
		{
			allowKeywords: true
		}
	],
	"eol-last": [
		"warn",
		"always"
	],
	"eqeqeq": [
		"warn",
		"smart"
	],
	"func-call-spacing": [
		"warn",
		"never"
	],
	"func-name-matching": [
		"warn",
		"always"
	],
	"guard-for-in": "warn",
	"key-spacing": [
		"warn",
		{
			afterColon: true,
			beforeColon: false,
			mode: "strict"
		}
	],
	"keyword-spacing": [
		"warn",
		{
			after: true,
			before: true
		}
	],
	"line-comment-position": [
		"warn",
		"above"
	],
	"indent": [
		"warn",
		"tab",
		{
			SwitchCase: 1,
			outerIIFEBody: 0,
			MemberExpression: 0
		}
	],
	"lines-around-comment": [
		"warn",
		{
			beforeBlockComment: true,
			beforeLineComment: true
		}
	],
	"max-depth": [
		"warn",
		3
	],
	"max-nested-callbacks": [
		"warn",
		{
			max: 5
		}
	],
	"max-params": [
		"warn",
		4
	],
	"max-statements-per-line": [
		"warn",
		{
			max: 1
		}
	],
	"multiline-ternary": [
		"warn",
		"always-multiline"
	],
	"new-cap": [
		"warn",
		{
			newIsCap: true,
			capIsNew: true,
			capIsNewExceptions: [
				"DataSaver",
				"Velocity"
			]
		}
	],
	"new-parens": "warn",
	"newline-after-var": [
		"warn",
		"always"
	],
	"newline-per-chained-call": [
		"warn",
		{
			ignoreChainWithDepth: 2
		}
	],
	"no-array-constructor": "warn",
	"no-bitwise": "warn",
	"no-caller": "warn",
	"no-case-declarations": "warn",
	"no-class-assign": "warn",
	"no-confusing-arrow": [
		"warn",
		{
			allowParens: true
		}
	],
	"no-console": 0,
	"no-const-assign": "warn",
	"no-delete-var": "warn",
	"no-div-regex": "warn",
	"no-dupe-args": "warn",
	"no-dupe-class-members": "warn",
	"no-dupe-keys": "warn",
	"no-duplicate-case": "warn",
	"no-duplicate-imports": "warn",
	"no-else-return": "warn",
	"no-empty": "warn",
	"no-empty-function": "warn",
	"no-empty-pattern": "warn",
	"no-eq-null": "warn",
	"no-eval": "warn",
	"no-extra-bind": "warn",
	"no-extra-boolean-cast": "warn",
	"no-extra-label": "warn",
	"no-extra-semi": "warn",
	"no-fallthrough": "warn",
	"no-floating-decimal": "warn",
	"no-func-assign": "warn",
	"no-global-assign": "warn",
	"no-implicit-coercion": "warn",
	"no-implied-eval": "warn",
	"no-inline-comments": "warn",
	"no-irregular-whitespace": "warn",
	"no-label-var": "warn",
	"no-lone-blocks": "warn",
	"no-lonely-if": "warn",
	"no-loop-func": "warn",
	"no-mixed-operators": "warn",
	"no-mixed-spaces-and-tabs": "warn",
	"no-multi-assign": "warn",
	"no-multi-spaces": "warn",
	"no-multi-str": "warn",
	"no-multiple-empty-lines": [
		"warn",
		{
			max: 2,
			maxBOF: 1,
			maxEOF: 1
		}
	],
	"no-negated-condition": "warn",
	"no-nested-ternary": "warn",
	"no-new-func": "warn",
	"no-new-object": "warn",
	"no-new-symbol": "warn",
	"no-new-wrappers": "warn",
	"no-octal": "warn",
	"no-octal-escape": "warn",
	"no-plusplus": [
		"warn",
		{
			allowForLoopAfterthoughts: true
		}
	],
	"no-proto": "warn",
	"no-redeclare": "warn",
	"no-return-await": "warn",
	"no-script-url": "warn",
	"no-self-assign": [
		"warn",
		{
			props: true
		}
	],
	"no-self-compare": "warn",
	"no-sequences": "warn",
	"no-shadow": "warn",
	"no-shadow-restricted-names": "warn",
	"no-template-curly-in-string": "warn",
	"no-this-before-super": "warn",
	"no-trailing-spaces": "warn",
	"no-undef": "warn",
	"no-undef-init": "warn",
	"no-undefined": "warn",
	"no-underscore-dangle": 0,
	"no-unexpected-multiline": "warn",
	"no-unmodified-loop-condition": "warn",
	"no-unneeded-ternary": "warn",
	"no-unreachable": "warn",
	"no-unsafe-negation": "warn",
	"no-unused-expressions": "warn",
	"no-unused-labels": "warn",
	"no-unused-vars": "warn",
	"no-useless-call": "warn",
	"no-useless-computed-key": "warn",
	"no-useless-concat": "warn",
	"no-useless-constructor": "warn",
	"no-useless-escape": "warn",
	"no-useless-rename": "warn",
	"no-useless-return": "warn",
	"no-use-before-define": [
		"warn",
		{
			functions: false,
			classes: true
		}
	],
	"no-var": "warn",
	"no-void": "warn",
	"no-warning-comments": "warn",
	"no-whitespace-before-property": "warn",
	"no-with": "warn",
	"object-curly-newline": [
		"warn",
		{
			ObjectExpression: {
				consistent: true,
				minProperties: 2
			},
			ObjectPattern: {
				consistent: true
			}
		}
	],
	"object-curly-spacing": [
		"warn",
		"always"
	],
	"object-property-newline": "warn",
	"object-shorthand": [
		"warn",
		"always"
	],
	"one-var": [
		"warn",
		"never"
	],
	"one-var-declaration-per-line": [
		"warn",
		"always"
	],
	"operator-assignment": [
		"warn",
		"always"
	],
	"operator-linebreak": [
		"warn",
		"before",
		{
			overrides: {
				"=": "after"
			}
		}
	],
	"prefer-const": "warn",
	"prefer-promise-reject-errors": [
		"warn",
		{
			allowEmptyReject: true
		}
	],
	"prefer-template": "warn",
	"quotes": [
		"warn",
		"double",
		"avoid-escape"
	],
	"require-await": "warn",
	"semi": [
		"warn",
		"always"
	],
	"semi-spacing": [
		"warn",
		{
			after: true,
			before: false
		}
	],
	"space-before-blocks": [
		"warn",
		"always"
	],
	"space-before-function-paren": [
		"warn",
		"never"
	],
	"spaced-comment": [
		"warn",
		"always",
		{
			exceptions: [
				"*",
				"="
			]
		}
	],
	"space-in-parens": [
		"warn",
		"always",
		{
			exceptions: [
				"empty"
			]
		}
	],
	"space-infix-ops": [
		"warn",
		{
			int32Hint: false
		}
	],
	"strict": 0,
	"template-curly-spacing": [
		"warn",
		"never"
	],
	"use-isnan": "warn",
	"valid-jsdoc": [
		"warn",
		{
			requireReturn: false,
			prefer: {
				return: "returns"
			}
		}
	],
	"valid-typeof": "warn",
	"yoda": [
		"warn",
		"never"
	],
	// Allow debugger during development
	"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
