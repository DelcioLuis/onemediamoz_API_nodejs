const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload")

const ProdutoController = require("./controllers/ProdutoController")



const routes = express.Router();
const upload = multer(uploadConfig);


routes.post("/produtos", upload.single("imagem"), ProdutoController.create)
routes.get("/produtos", ProdutoController.index)


module.exports = routes;


