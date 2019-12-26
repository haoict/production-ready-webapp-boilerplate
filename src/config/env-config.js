const dotEnv = require('dotenv');

const env = process.env.NODE_ENV; // 'development' or 'production'
dotEnv.config({ path: '.env' });

const development = {
  app: {
    host: process.env.APP_HOSTNAME || 'localhost',
    port: parseInt(process.env.APP_PORT, 10) || 3001,
    apiUrl: process.env.API_URL || 'http://localhost:3001/api/'
  }
};

// config in docker run --env-file
const production = {
  ...development
};

const envConfig = {
  development,
  production
};

module.exports = envConfig[env];
