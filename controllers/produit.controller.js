
// Importez vos modèles de film, jeux et livre
import Produit from '../models/produit.model.js';
import  Film  from '../models/film.model.js';
import  Jeux  from '../models/jeux.model.js';
import  Livre  from '../models/livre.model.js';
// Fonction pour récupérer tous les produits
export const getAllProduits = async () => {
    try {
        // Récupérer tous les films
        const films = await Film.findAll();

        // Récupérer tous les jeux
        const jeux = await Jeux.findAll();

        // Récupérer tous les livres
        const livres = await Livre.findAll();

        // Combinez les résultats de chaque module en une seule liste
        const tousLesProduits = [...films, ...jeux, ...livres];

        return tousLesProduits;
    } catch (error) {
        console.error('Erreur lors de la récupération de tous les produits :', error);
        throw error;
    }
};

// // Exemple d'utilisation de la fonction
// const tousLesProduits = await getAllProduits();
// console.log(tousLesProduits);















// export const getAllProduits = async (req, res) => {
//     try {
//         const produits = await Produit.findAll();
//         res.json(produits);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

export const getProduitById = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.idProduit);
        if (produit) {
            res.json(produit);
        } else {
            res.status(404).send('Produit non trouvé');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


// Méthodes existantes...

export const createProduit = async (req, res) => {
    try {
        const newProduit = await Produit.create(req.body);
        res.status(201).json(newProduit);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateProduit = async (req, res) => {
    try {
        const [updated] = await Produit.update(req.body, {
            where: { idProduit: req.params.idProduit }
        });
        if (updated) {
            const updatedProduit = await Produit.findByPk(req.params.idProduit);
            res.status(200).json(updatedProduit);
        } else {
            res.status(404).send('Produit non trouvé');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteProduit = async (req, res) => {
    try {
        const deleted = await Produit.destroy({
            where: { idProduit: req.params.idProduit }
        });
        if (deleted) {
            res.status(200).send('Produit supprimé');
        } else {
            res.status(404).send('Produit non trouvé');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

