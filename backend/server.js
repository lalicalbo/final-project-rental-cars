console.log("********API CAR**********");

import express from "express";

import { carsRoutes } from "./routes/index.js";
console.log("routes",carsRoutes)
import { getAllCars  } from "./controllers/index.js";


//creating app
const app = express();

//routes

app.get(carsRoutes.GET, getAllCars)


//lauch server
app.listen(3007, ()=>{
    console.log("inizializing server")
});
