import { Router } from "express";
import { userController } from "../controllers/user.controller";

class UserRoutes {
    public router: Router = Router();

    constructor(){

        this.router.get("/", userController.getUsers);
        this.router.post("/", userController.postUsers);
        this.router.delete("/", userController.deleteUsers);
        this.router.put("/", userController.updateUsers);
    }
}
export const userRoutes = new UserRoutes();