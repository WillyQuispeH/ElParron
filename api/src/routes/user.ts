import { Router } from "express";
import * as UserController from "../controllers/User";

const UserRouter = Router();

UserRouter.get("/getAll", UserController.getAll);
UserRouter.post("/create", UserController.create);

export default UserRouter;
