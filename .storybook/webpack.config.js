const rules = require("../configs/rules.config");
const { aliases } = require("../configs/aliases.config");

module.exports = ({ config }) => {
  //   console.log(baseConfig, env, defaultConfig);
  config.module.rules = rules;
  config.resolve.alias = aliases;

  return config;
};
