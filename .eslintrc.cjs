module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,
  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: [ '.vue' ]
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended',
    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'airbnb-base'
  ],
  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue'
  ],
	settings: {
		// ...createAliasSetting({
		// 	"@": `${path.resolve(__dirname, "./frontend")}`
		// }),
		"import/resolver": {
			typescript: {},
			alias: [
				["@", "./frontend"],
			],
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
			},
		},
	},
  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },
  // add your custom rules here
  rules: {
    'no-plusplus': 'off',
    "no-whitespace-before-property": "error",
    "no-trailing-spaces": "error",
    "no-mixed-operators": "error",
    yoda: ["error", "never", { exceptRange: true }],
    "spaced-comment": ["error", "always"],
    curly: "error",
    "no-unreachable-loop": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-unreachable": "error",
    "prefer-const": "error",
    "no-var": "error",
    "no-useless-catch": "error",
    "no-extra-semi": 2,
    "no-nested-ternary": "off",
    "no-extra-boolean-cast": "error",
    "no-multi-spaces": ["error", { exceptions: { ObjectExpression: true, ImportDeclaration: true } }],
    "max-classes-per-file": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": ["error", { props: false }],
    'no-void': 'off',
    "object-curly-newline": ["off", { multiline: true, minProperties: 2 }],
    "space-unary-ops": [2, { words: true, nonwords: false }],
    "space-infix-ops": ["error", { int32Hint: false }],
    "brace-style": ["error", "stroustrup"],
    "space-before-blocks": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/first': 'off',
    'import/no-duplicates': 'off',
    'import/named': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-named-as-default-member': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'off',
    'import/no-self-import': 'off',
    'import/no-relative-packages': 'off',
    'import/no-cycle': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',
    eqeqeq: "off",
    quotes: ["error", "double"],
    indent: ["error", 2],
    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',
    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',
    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset) does not work with type definitions
    'no-unused-vars': 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		"vue/this-in-template": ["error", "never"],
    "vue/no-unused-properties": ["warn", {
			groups: ["props", "data", "computed", "methods", "setup"],
			deepData: false,
			ignorePublicMembers: true,
		}],
		"vue/no-empty-component-block": "error",
    "vue/html-indent": ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 1,
      alignAttributesVertically: true,
      ignores: [],
    }],
    "vue/script-indent": ["error", 2, {
      baseIndent: 1,
      switchCase: 1,
      ignores: [],
    }],
    "vue/max-attributes-per-line": ["off", {
      singleline: {
        max: 7,
      },
      multiline: {
        max: 7,
      },
    }],
    "vue/no-unused-components": ["warn", {
      ignoreWhenBindingPresent: true,
    }],
    "vue/html-self-closing": ["error", {
      html: {
        void: "always",
        normal: "always",
        component: "always",
      },
      svg: "always",
      math: "always",
    }],
    "vue/max-len": ["error", {
      code: 200,
      comments: 9000,
			template: 9000,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
			ignoreStrings: true,
		}],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
      },
    },
  ],
}
