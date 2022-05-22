import livros from "../models/Livro.js";

class LivroController{

    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((error, livros) => {
                if(error) { return res.status(500).send({error: error.message})}
                res.status(200).json(livros)
        })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor','nome')
            .exec((error, livro) => {
                if(error){return res.status(400).send({message: `${error.message} - Falha ao buscar o livro`})}
                res.status(200).json(livro);
            })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((error) => {
            if(error){return res.status(500).send({message: `${error.message} - Falha ao cadastrar o livro.`})}
            res.status(201).send(livro.toJSON());
        })
    }

    static atualizarLivros = (req, res)  => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(error) {return res.status(500).send({message: `${error.message} - Falha ao atualizar o livro.`})}
            res.status(200).send({message: "livro atualizado com sucesso"});
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (error) => {
            if(error) {return res.status(500).send({message: error.message})}
            res.status(200).send({message: "Registro deletado com sucesso"});
        });
    }

    static listarLivroPorEditora = (req, res) => {
        let editora = req.query.editora
        livros.find({'editora':editora}, {}, (error, livros) => {
            if(error){return res.status(500).send({error: error.message})}
            res.status(200).send(livros);
        })
    }
}
    
export default LivroController;