import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { checkJwt } from '../middlewares/checkJwt';

class UserRoutes {
    public router: Router = Router();

    constructor(){

        this.router.get("/", [checkJwt], userController.getUsers);
        // this.router.get("/:id/products",  [checkJwt], userController.getUserProducts);
        // para coger todos los productos que haya subido el usuario con id x
        this.router.post("/", userController.postUsers);
        this.router.delete("/", [checkJwt], userController.deleteUsers);
        this.router.put("/", [checkJwt], userController.updateUsers);
        this.router.get("/:email", userController.getUserByEmail);
        //User authentication
        this.router.post('/auth', userController.authUser);
    }
}
export const userRoutes = new UserRoutes();