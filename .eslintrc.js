module.exports = {
    root: true,
    extends: [ 'plugin:vue/essential', 'airbnb-base' ],
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    rules: {
      'import/no-unresolved':0,
      'import/extensions':0,
      'import/prefer-default-export':0,
      'max-len' : ["error", {code : 300}],
      'no-tabs': 'off'
    }
}
