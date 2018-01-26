// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/lambda.sqlite3'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'rd_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'lambda',
      user: 'cmoore',
      password: '1and3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'database/migrations',
      tableName: 'rb_migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
