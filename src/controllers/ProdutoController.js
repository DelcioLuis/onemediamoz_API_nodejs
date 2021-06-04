const numero = require("numero-por-extenso");

const Produtos = require("../models/Produtos");


module.exports ={

    async index(request, response){

        const produtos = await Produtos.find({})


        console.log("produtos")

        return response.json(produtos)
    },

    async create(request, response){


        console.log(request.body)
        return

        const { nome_produto, preco} = request.body;
        const {filename } = request.file;

        const preco_extensos = numero.porExtenso(preco)

        const preco_extenso = `${preco_extensos} meticais`


        if(!nome_produto || !preco){
            return response.status(400).json("Bed request")
        }


        try{
            const produto = await Produtos.create({
                nome_produto,
                preco,
                preco_extenso,
                imagem:filename,
            })

            return response.json(produto)
        }catch{ return response.status(400).json({error:"Falha ao cadastrar produto"})}

    }
}