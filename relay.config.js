const path = require("path");

module.exports = {
  customScalars: {
    Date: "string",
    DateTime: "string"
  },
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  schema: "./schema.graphql",
  src: path.resolve(__dirname, "/src")
};
