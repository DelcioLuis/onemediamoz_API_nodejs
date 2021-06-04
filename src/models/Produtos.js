const mongoose = require("mongoose");


const ProdutosShema = new mongoose.Schema({
    nome_produto: String,
    preco: Number,
    preco_extenso: String,
    imagem: String,
    /* user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    } */
},{
    toJSON:{
        virtuals:true,
    }
})

ProdutosShema.virtual(`imagem_url`).get(function(){
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model("Produtos", ProdutosShema);


