module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [
          ".ts",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
          ".svg",
          ".jpg",
          ".png",
        ],
        alias: {
          "~": "./src",
          "@modules": "./src/modules",
          "@assets": "./src/assets",
          "@uiCore": "./src/uiCore",
          "@contains": "./src/contains",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
