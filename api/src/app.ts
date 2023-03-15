import express from "express";

import * as routes from "./routes";

import { reqLogger } from "./middlewares/logger";

class App {
  public server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use("/api/user", reqLogger, routes.UserRouter);
    this.server.use("/api/order", reqLogger, routes.OrderRouter);
    this.server.use("/api/person", reqLogger,  routes.PersonRouter)
  }
}

export default new App().server;
