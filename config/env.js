// Enviroment variables used in webpack configuration, to enable code targetted to enviroments.
// Default enviorment variables
const env = {
  NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`
};

// Overrides targetting bundle types
module.exports = {
  client: Object.assign({}, env),
  server: Object.assign({}, env),
  unit: Object.assign({}, env),
};
