import autores from "../models/Autor.js";

class autorController{
    static listarAutores = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        
        autores.findById(id, (error, autor) => {
            if(error){return res.status(400).send({message: `${error.message} - Falha ao buscar o autor`})}
            res.status(200).json(autor);
        })
    }

    static cadastrarAutores = (req, res) => {
        let autor = new autores(req.body);

        autor.save((error) => {
            if(error){return res.status(500).send({message: `${error.message} - Falha ao cadastrar o autor.`})}
            res.status(201).send(autor.toJSON());
        })
    }

    static atualizarAutores = (req, res)  => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(error) {return res.status(500).send({message: `${error.message} - Falha ao atualizar o autor.`})}
            res.status(200).send({message: "autor atualizado com sucesso"});
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (error) => {
            if(error) {return res.status(500).send({message: error.message})}
            res.status(200).send({message: "Erro inserido com sucesso"});
        });
    }
}
    
export default autorController;