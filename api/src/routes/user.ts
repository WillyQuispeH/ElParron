import { Router } from "express";

import * as UserController from "../controllers/User";

const UserRouter = Router();

UserRouter.get("/getAll", UserController.getAll);
UserRouter.get("/getById/:id", UserController.getById);
UserRouter.post("/create", UserController.create);
UserRouter.put("/assignPassword/:id", UserController.assignPassword);
UserRouter.post("/validate", UserController.validate);
UserRouter.post("/recoveryPassword", UserController.recoveryPassword)

export default UserRouter;
