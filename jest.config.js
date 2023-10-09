module.exports = {
  // Archivos que Jest debe buscar para pruebas
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],

  // Transformar archivos TypeScript
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Directorios donde buscar módulos
  moduleDirectories: ["node_modules", "src"],

  // Configuración adicional de TypeScript
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
};
