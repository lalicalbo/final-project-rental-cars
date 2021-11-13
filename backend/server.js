console.log("********API CAR**********");

import express from "express";

import { carsRoutes ,rentRoutes} from "./routes/index.js";
console.log("routes",rentRoutes)
import { getAllCars,getOneCar,createOneCar,updateCar,deleteCar ,rentACar} from "./controllers/index.js";


//creating app
const app = express();

app.use(express.json());

app.get("/" ,(req, res)=>{
    res.send("Main page BUGGY Y BUMPER,INC")

});

//routes

app.get(carsRoutes.GET, getAllCars)
app.get(carsRoutes.GET_ONE, getOneCar)
app.post(carsRoutes.CREATE, createOneCar)
app.put(carsRoutes.UPDATE, updateCar)
app.delete(carsRoutes.DELETE, deleteCar)

//rent routes

app.post(rentRoutes.RENT , rentACar)



//lauch server
app.listen(3007, ()=>{
    console.log("inizializing server")
});
