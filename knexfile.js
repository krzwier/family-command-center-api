const config = {
   production: {
      client: "sqlite3",
      connection: {
         filename: "./family-command-center.db3"
      },
      useNullAsDefault: true,
      migrations: {
         directory: "./data/migrations"
      },
      seeds: {
         directory: "./data/seeds/production"
      }
   },
   test: {
      client: "sqlite3",
      connection: {
         filename: ":memory:"
      },
      useNullAsDefault: true,
      migrations: {
         directory: "./data/migrations"
      },
      seeds: {
         directory: "./data/seeds/test"
      }
   }
};

module.exports = config;
