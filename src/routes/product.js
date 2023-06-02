import express from "express";
import { addPro, getAllPro, getOnePro } from "../controllers/product";

const router = express.Router();

router.get( "/products", getAllPro );
router.get( "/products/:id", getOnePro );
router.post( "/products/add", addPro );
router.put("/products/edit/:id", updatePro);

export default router;
