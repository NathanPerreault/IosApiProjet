import Livre from '../models/livre.model.js';

export const createLivre = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newLivre = await Livre.create(req.body);
        res.status(201).json(newLivre);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du livre", error: error.message });
    }
};

// Obtenir tous les livres
export const getAllLivres = async (req, res) => {
    try {
        const livres = await Livre.findAll();
        res.status(200).json(livres);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des livres", error: error.message });
    }
};


// Obtenir un livre par ID
export const getLivreById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const livre = await Livre.findByPk(idProduit);
        if (livre) {
            res.status(200).send(livre);
        } else {
            res.status(404).send({ message: 'Livre non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un livre



export const deleteLivre = async (req, res, next) => {
    try {
      const livres = await Livre.findByPk(req.params.id);
      if (livres) {
        await livres.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un livre


export const updateLivre = async (req, res, next) => {
    try {
      const livres = await Livre.findByPk(req.params.id);
      if (livres) {
        await livres.update(req.body);
        res.status(200).json(livres);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };