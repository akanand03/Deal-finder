import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import paymentRoutes from "./routes/payment.js"; // Ensure this is correctly imported
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";
import purchaseRoutes from "./routes/purchase.js";

const app = express();
dotenv.config();

// Setting higher limits for JSON and URL-encoded bodies
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

// Mount routers
app.use("/payment", paymentRoutes);
app.use("/posts", postRoutes);
app.use("/user", userRouter);
app.use('/admin', purchaseRoutes);  

const CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const PORT = process.env.PORT || 3001;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
