import mongoose from "mongoose";

const cartCollection = "Carts";

const cartsSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products",
                default: []
            },
            quantity: {
                type: Number,
            },
            _id: false
        }
    ]
})

export const cartsModel = mongoose.model(cartCollection, cartsSchema);