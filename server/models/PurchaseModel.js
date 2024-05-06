// models/purchaseModel.js

import mongoose from 'mongoose';

const purchaseSchema = mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
