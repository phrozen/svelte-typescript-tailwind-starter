module.exports = {
    future: {
      purgeLayersByDefault: true,
      removeDeprecatedGapUtilities: true,
    },
    plugins: [
    ],
    content: [
      "./src/*.svelte",
      "./src/utils.js",
      "./public/index.html",
    ],
    theme: {
    }
  };