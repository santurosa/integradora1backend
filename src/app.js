import express from "express";
import __dirname from './utils.js'
import mongoose from "mongoose";
import handlebars from "express-handlebars";

import productsRouter from "./routes/products.js"
import cartsRouter from "./routes/carts.js"

const app = express();
const PORT = 8080;
const connection = mongoose.connect("mongodb+srv://santurosa999:Jana2022San@clustercursobackend.c9erwbe.mongodb.net/ecommerce");

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/", productsRouter);
app.use("/", cartsRouter);


app.listen(PORT, () => {
    console.log("Server on PORT " + PORT);
})