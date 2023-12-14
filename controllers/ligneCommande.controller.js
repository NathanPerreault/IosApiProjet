import LigneCommande from '../models/ligneCommande.model.js';

// Ajouter un produit à une commande
export const createLigneCommande = async (req, res) => {
    try {
        const newLigneCommande = await LigneCommande.create(req.body);
        res.status(201).send(newLigneCommande);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un produit d'une commande
export const DeleteLigneCommande = async (req, res) => {
    try {
        const { idProduit, numeroCommande } = req.params;
        await LigneCommande.destroy({ where: { idProduit, numeroCommande } });
        res.status(200).send({ message: 'Produit supprimé de la commande' });
    } catch (error) {
        res.status(500).send(error);
    }
};