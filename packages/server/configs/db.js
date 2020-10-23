module.exports = {
  development: {
    host: 'localhost',
    port: 27017,
    database: 'chats-dev-db-test-2',
  },
  production: {
    useEnvVariables: true,
  },
};
