import { Router } from "express";
import { productController } from "../controllers/product.controller";
import multer from 'multer';
import path from 'path';

// Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename:(req, file, cb) => {
        console.log(file);
        cb(null, file.originalname); 
    }
    })

const upload = multer({ storage: storage })

class ProductRoutes {
    public router: Router = Router();

    constructor() {

        this.router.get("/:category", productController.getProductsByCategory);
        this.router.get("/product/:id", productController.getById);
        this.router.get("/user/:id", productController.getUserById);
        this.router.get("/", productController.getProducts);
        // this.router.get("/:id/bookings", productController.getProducts);
        // para recoger todos los mensajes que hacen referencia al productId específico
        this.router.post("/", productController.postProducts);
        this.router.post("/fotos", upload.array('file', 5), productController.postPics);
        this.router.delete("/:id", productController.deleteProducts);
        this.router.put("/:id", productController.updateProucts);

    }
}

export const productRoutes = new ProductRoutes();