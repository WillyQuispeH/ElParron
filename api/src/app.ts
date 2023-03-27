import express from "express";
import cors from "cors";

import * as routes from "./routes";

import { reqLogger } from "./middlewares/logger";
import { auth } from "./middlewares/auth";

class App {
  public server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    /*this.server.use(
      cors({
        credentials: true,
        preflightContinue: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        origin: true,
      })
    );*/
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use("/api/user", auth, reqLogger, routes.UserRouter);
    this.server.use("/api/order", auth, reqLogger, routes.OrderRouter);
    this.server.use("/api/person", auth, reqLogger, routes.PersonRouter);
    this.server.use("/api/price", auth, reqLogger, routes.PriceRouter)
  }
}

export default new App().server;
