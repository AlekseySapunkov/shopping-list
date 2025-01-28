export default {
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".jsx"],
  globals: {
    axios: require("axios"),
   },
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|scss)$": "jest-css-modules-transform"
  },
};
