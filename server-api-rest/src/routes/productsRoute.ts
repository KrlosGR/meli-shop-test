import { Router } from "express";
import { cbProducts, cbItemsID } from "../controllers/products.controller";

const router = Router();

export const ItemsRoute = router.get('/items', cbProducts);
export const ItemsIDRoute = router.get('/items/:id', cbItemsID);