// controllers/purchaseController.js
import Purchase from "../models/PurchaseModel.js";

export const getPurchasesByAdmin = async (req, res) => {
  try {
    // Assuming `req.userId` holds the ID of the authenticated admin after passing through the auth middleware
    const purchases = await Purchase.find({ adminId: req.userId }).populate(
      "buyerId",
      "name email"
    );
    res.json(purchases);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching purchases: " + error.message });
  }
};
