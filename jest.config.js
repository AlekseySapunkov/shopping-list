import axios from "axios";
export default {
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".jsx"],
  globals: {
    axios: axios,
   },
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|scss)$": "jest-css-modules-transform"
  },
};
