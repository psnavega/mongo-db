import mongoose from "mongoose";

const livroScheema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true},
        editora: {type: String, required: true},
        paginas: {type: Number}
    }    
);

const livros = mongoose.model('livros', livroScheema); // se nao tivesse criado essa colecao no banco teria criado sozinho 

export default livros;