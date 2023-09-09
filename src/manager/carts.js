import { cartsModel } from "../dao/db/models/carts.js";

export default class Carts {
    constructor(){
    }
    getCartById = async (idCart) => {
        try {
            const result = await cartsModel.findById(idCart);
            return result;
        } catch (error) {
            throw error;
        }
    }

    saveCart = async (idProduct) => {
        try {
            const result = await cartsModel.create({
                products: {
                    product: idProduct,
                    quantity: +1
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    upgrateCart = async (idCart, idProduct) => {
        try {
            const result = await cartsModel.updateOne({ _id: idCart }, {
                products: {
                    product: idProduct,
                    quantity: +1
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

}