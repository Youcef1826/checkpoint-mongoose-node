import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  addFoodToPerson,
  updatePersonAge,
  deletePersonById,
  deletePeopleByName,
  search,
} from "./controllers/person.controllers.js";

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());

const mongoURI = process.env.MONGO_URI;

const bootstrap = async () => {
  try {
    await mongoose.connect(`${mongoURI}`);
    app.listen(port, () => {
      console.log(`Server start at http://localhost:${port}/`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB : ", error);
    process.exit(1);
  }
};
bootstrap();

// Calls functions

// createAndSavePerson();
// createManyPeople([
//   { name: "Youcef", age: 25, favoriteFoods: ["Pasta", "Salad"] },
//   { name: "Karim", age: 22, favoriteFoods: ["Steak", "Pizza"] },
//   { name: "Yazid", age: 35, favoriteFoods: ["Sushi", "Burritos"] },
// ]);

// findPeopleByName("Youcef");
// findOneByFood("Sushi");
// findPersonById("some_person_id");
// addFoodToPerson("some_person_id");
// updatePersonAge("Youcef");
// deletePersonById("some_person_id");
// deletePeopleByName("Yazid");
// search();
