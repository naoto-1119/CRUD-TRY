import setupServer from "./app";
import DatabaseConnectionManager from "./database";

DatabaseConnectionManager.connect().then(() => {
  const server = setupServer();
  const port = 3000;
  server.listen(port, () => {
      console.log("Server listening on Port", port);
  })
});