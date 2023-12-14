import Jeux from '../models/jeux.model.js';

export const createJeux = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newJeux = await Jeux.create(req.body);
        res.status(201).json(newJeux);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Jeux", error: error.message });
    }
};

// Obtenir tous les Jeuxs
export const getAllJeux = async (req, res) => {
    try {
        const newJeux = await Jeux.findAll();
        res.status(200).json(newJeux);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Jeuxs", error: error.message });
    }
};


// Obtenir un Jeux par ID
export const getJeuxById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newJeux = await Jeux.findByPk(idProduit);
        if (newJeux) {
            res.status(200).send(newJeux);
        } else {
            res.status(404).send({ message: 'Jeux non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Jeux



export const deleteJeux = async (req, res, next) => {
    try {
      const newJeux = await Jeux.findByPk(req.params.id);
      if (newJeux) {
        await newJeux.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Jeux


export const updateJeux = async (req, res, next) => {
    try {
      const newJeux = await Jeux.findByPk(req.params.id);
      if (newJeux) {
        await newJeux.update(req.body);
        res.status(200).json(newJeux);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };