export default {
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".jsx"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
  },
};
