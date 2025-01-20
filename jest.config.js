export default {
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".jsx"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|scss)$": "jest-css-modules-transform"
  },
};
