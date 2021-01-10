module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
    "^api(.*)$": "<rootDir>/src/api$1",
    "^assets(.*)$": "<rootDir>/src/assets$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^shared(.*)$": "<rootDir>/src/shared$1",
    "^containers(.*)$": "<rootDir>/src/containers$1",
    "^views(.*)$": "<rootDir>/src/views$1",
    "^helpers(.*)$": "<rootDir>/src/helpers$1",
    "^hooks(.*)$": "<rootDir>/src/hooks$1",
    "^styles(.*)$": "<rootDir>/src/styles$1",
    "^fixtures(.*)$": "<rootDir>/src/fixtures$1",
  },
};
