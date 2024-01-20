const config = {
   production: {
      client: "sqlite3",
      connection: {
         filename: "./family-command-center.db3"
      },
      useNullAsDefault: true,
      migrations: {
         directory: "./data/production/migrations"
      },
      seeds: {
         directory: "./data/production/seeds"
      }
   },
   test: {
      client: "sqlite3",
      connection: {
         filename: ":memory:"
      },
      useNullAsDefault: true,
      migrations: {
         directory: "./data/test/migrations"
      },
      seeds: {
         directory: "./data/test/seeds"
      }
   }
};

module.exports = config;
