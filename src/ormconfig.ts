export = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || "solo_project_api",
    password: process.env.DB_PASSWORD || "solo_project_api",
    database: process.env.DB_NAME || "solo_project_api",
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    seeds: ["src/seeds/**/*.ts"],
    logging: false,
    migrationsRun: false /* Disable auto-run migration */,
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migrations",
    },
  };