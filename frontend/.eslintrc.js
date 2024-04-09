module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'cypress/globals': true, // Adicionando ambiente Cypress
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', // Adicionando plugin React
    'cypress', // Adicionando plugin Cypress
  ],
  rules: {
    'react/prop-types': 1, // Desativando verificação de PropTypes (opcional)
    'no-unused-vars': 0, // Desativando aviso de variáveis não utilizadas (opcional)
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
