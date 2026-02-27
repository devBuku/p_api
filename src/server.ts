import { app } from "./app";
import http from "http";

const server = http.createServer(app);
const port = 3000;

function startServer() {
  try {
    server.listen(port, function () {
      console.log(`Server is listening to port: ${port}`);
    });
  } catch (error) {
    console.error(`Error in running the Server: ${error}`);
  }
}

startServer();
