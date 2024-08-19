import Person from "../models/Person.js";
import mongoose from "mongoose";

// Créer et sauvegarder un enregistrement d'un modèle
export const createAndSavePerson = async () => {
  try {
    const person = new Person({
      name: "Youcef G",
      age: 33,
      favoriteFoods: ["Pizza", "Burger"],
    });
    const savedPerson = await person.save();
    console.log("Personne enregistrée : ", savedPerson);
  } catch (error) {
    console.log("Erreur lors de l'enregistrement de la personne : ", error);
  }
};

// Créer de nombreux enregistrements avec model.create()
export const createManyPeople = async (arrayOfPeople) => {
  try {
    const people = await Person.create(arrayOfPeople);
    console.log("Personnes créées : ", people);
  } catch (error) {
    console.log("Erreur lors de la création des personnes : ", error);
  }
};

// Utilisez model.find() pour rechercher dans votre base de données
export const findPeopleByName = async (personName) => {
  try {
    const people = await Person.find({ name: personName });
    console.log("Personnes trouvées : ", people);
  } catch (error) {
    console.log("Erreur lors de la recherche des personnes : ", error);
  }
};

// Utilisez model.findOne() pour renvoyer un seul document correspondant à partir de votre base de données
export const findOneByFood = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log("Personne trouvée : ", person);
  } catch (error) {
    console.log("Erreur lors de la recherche de la personne : ", error);
  }
};

// Utilisez model.findById() pour rechercher dans votre base de données par _id
export const findPersonById = async (personId) => {
  try {
    const person = await Person.findById(personId);
    console.log("Personne trouvée : ", person);
  } catch (error) {
    console.log("Erreur lors de la recherche de la personne par ID : ", error);
  }
};

// Effectuez des mises à jour classiques en exécutant Rechercher, Modifier, puis Enregistrer
export const addFoodToPerson = async (personId) => {
  try {
    const person = await Person.findById(personId);
    if (!person) {
      console.log("Personne non trouvée");
    }
    person.favoriteFoods.push("hamburger");
    const updatedPerson = await person.save();
    console.log("Personne mise à jour : ", updatedPerson);
  } catch (error) {
    console.log("Erreur lors de la mise à jour de la personne : ", error);
  }
};

// Effectuer de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()
export const updatePersonAge = async (personName) => {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log("Personne mise à jour : ", updatedPerson);
  } catch (error) {
    console.log("Erreur lors de la mise à jour de la personne : ", error);
  }
};

// Supprimer un document à l'aide de model.findByIdAndRemove
export const deletePersonById = async (personId) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);
    console.log("Personne supprimée : ", deletedPerson);
  } catch (error) {
    console.log("Erreur lors de la suppression de la personne : ", error);
  }
};

// MongoDB et Mongoose - Supprimer de nombreux documents avec model.remove()
export const deletePeopleByName = async (personName) => {
  try {
    const result = await Person.deleteMany({ name: personName });
    console.log("Résultat de la suppression : ", result);
  } catch (error) {
    console.log("Erreur lors de la suppression des personnes : ", error);
  }
};

// Aides à la recherche de chaîne pour affiner les résultats de recherche
export const search = async () => {
  try {
    const data = await Person.find({ favoriteFoods: "Burritos" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age")
      .exec();
    console.log("Résultats de la recherche : ", data);
  } catch (error) {
    console.log("Erreur lors de la requête : ", error);
  }
};
