console.log("********API CAR**********");

import express from "express";

import { carsRoutes } from "./routes/index.js";
console.log("routes",carsRoutes)
import { getAllCars,getOneCar,createOneCar,updateCar,deleteCar } from "./controllers/index.js";


//creating app
const app = express();

app.use(express.json());

//routes

app.get(carsRoutes.GET, getAllCars)
app.get(carsRoutes.GET_ONE, getOneCar)
app.post(carsRoutes.CREATE, createOneCar)
app.put(carsRoutes.UPDATE, updateCar)
app.delete(carsRoutes.DELETE, deleteCar)



//lauch server
app.listen(3007, ()=>{
    console.log("inizializing server")
});
