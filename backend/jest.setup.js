module.exports = {
  // Indica a pasta onde os testes estão localizados
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  // Define quais arquivos serão considerados para os testes
  testMatch: ["**/*.test.js"],
  // Configura o ambiente de teste
  testEnvironment: "node",
  // Define os reporters para exibir os resultados dos testes
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results",
        outputName: "jest-junit.xml",
      },
    ],
  ],
  // Configurações de setup para os testes
  setupFilesAfterEnv: ["./jest.setup.js"],
};
