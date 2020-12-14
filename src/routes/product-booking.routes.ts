import { Router } from "express";
import { productBookingController } from "../controllers/product-booking.controller";

class ProductBookingRoutes {
    public router: Router = Router();

    constructor() {

        this.router.get("/", productBookingController.getBookings);
        this.router.post("/", productBookingController.postBookings);
        this.router.delete("/:id", productBookingController.deleteBookings);
        this.router.put("/:id", productBookingController.updateBookings);
    }
}

export const productBookingRoutes = new ProductBookingRoutes();