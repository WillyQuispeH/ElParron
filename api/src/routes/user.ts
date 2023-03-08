import { Router } from "express";
import * as UserController from "../controllers/User";

const UserRouter = Router();

UserRouter.get("/getByRut/:rut", UserController.getByRut);
UserRouter.get("/getByName/:name", UserController.getByName);

export default UserRouter;

