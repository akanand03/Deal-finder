// routes/purchaseRoutes.js
import express from "express";
import { getPurchasesByAdmin } from "../controllers/purchaseController.js";
import auth from "../middleware/auth.js"; // Make sure this middleware is set to identify and authenticate admins

const router = express.Router();

router.get("/admin/purchases", auth, getPurchasesByAdmin);

export default router;
