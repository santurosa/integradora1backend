import { Router } from "express";
import Products from "../manager/products.js";

const router = Router();
const productManager = new Products();

router.get("/api/products", async (req, res) => {
    try {
        const result = await productManager.getProducts();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
})

router.get("/api/products/:pid", async (req, res) => {
    try {
        const pid = req.params.pid;

        const result = await productManager.getProductById(pid);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
})

router.post("/api/products", async (req, res) => {
    try {
        const product = req.body;

        const result = await productManager.saveProducts(product);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
})

router.delete("/api/products/:pid", async (req, res) => {
    try {
        const pid = req.params.pid;

        const result = await productManager.deleteProduct(pid);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
})

router.put("/api/products/:pid", async (req, res) => {
    try {
        const pid = req.params.pid;
        const upgrate = req.body;

        const result = await productManager.upgrateProduct(pid, upgrate);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
})

export default router;