import Employer from '../models/employer.model.js';

export const createEmployer = async (req, res) => {
    try {
        // Validation des données entrantes (req.body) peut être ajoutée ici
        const newEmployer = await Employer.create(req.body);
        res.status(201).json(newEmployer);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du Employer", error: error.message });
    }
};

// Obtenir tous les Employers
export const getAllEmployer = async (req, res) => {
    try {
        const newEmployer = await Employer.findAll();
        res.status(200).json(newEmployer);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des Employers", error: error.message });
    }
};


// Obtenir un Employer par ID
export const getEmployerById = async (req, res) => {
    try {
        const idProduit = req.params.id;
        const newEmployer = await Employer.findByPk(idProduit);
        if (newEmployer) {
            res.status(200).send(newEmployer);
        } else {
            res.status(404).send({ message: 'Employer non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un Employer



export const deleteEmployer = async (req, res, next) => {
    try {
      const newEmployer = await Employer.findByPk(req.params.id);
      if (newEmployer) {
        await newEmployer.destroy();
        res.status(200).json({ message: 'Produit deleted' });
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };



// Mettre à jour un Employer


export const updateEmployer = async (req, res, next) => {
    try {
      const newEmployer = await Employer.findByPk(req.params.id);
      if (newEmployer) {
        await newEmployer.update(req.body);
        res.status(200).json(newEmployer);
      } else {
        res.status(404).json({ message: 'Produit not found' });
      }
    } catch (error) {
      next(error);
    }
  };