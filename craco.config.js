const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@app": "./src/app",
          "@entities": "./src/entities",
          "@features": "./src/features",
          "@pages": "./src/pages",
          "@shared": "./src/shared",
          "@widgets": "./src/widgets",
        },
      },
    },
  ],
};
