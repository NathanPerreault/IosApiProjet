import Jeu from '../models/jeu.model.js';

// Créer un nouveau jeu
export const createJeu = async (req, res) => {
    try {
        // Ici, vous pouvez ajouter une validation pour les données entrantes si nécessaire
        const newJeu = await Jeu.create(req.body);
        res.status(201).json(newJeu);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du jeu", error: error.message });
    }
};

// Obtenir tous les jeux
export const getAllJeux = async (req, res) => {
    try {
        const jeux = await Jeu.findAll();
        res.status(200).json(jeux);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des jeux", error: error.message });
    }
};


// Obtenir un jeu par ID
export const getJeuById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const jeu = await Jeux.findByPk(idProduit);
        if (jeu) {
            res.status(200).send(jeu);
        } else {
            res.status(404).send({ message: 'Jeu non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un jeu
export const deleteJeu = async (req, res) => {
    try {
        const idProduit = req.params.id;
        await Jeux.destroy({ where: { idProduit } });
        res.status(200).send({ message: `Jeu ${idProduit} supprimé` });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un jeu
export const updateJeu = async (req, res) => {
    try {
        const idProduit = req.params.id;
        await Jeux.update(req.body, { where: { idProduit } });
        res.status(200).send({ message: `Jeu ${idProduit} mis à jour` });
    } catch (error) {
        res.status(500).send(error);
    }
};