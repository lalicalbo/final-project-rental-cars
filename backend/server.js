console.log("********API CAR**********");

import express from "express";

import { router ,rentRoutes} from "./routes/index.js";
console.log("routes",rentRoutes)
import {rents} from "./controllers/index.js";


//creating app
const app = express();

app.use(express.json());

app.get("/" ,(req, res)=>{
    res.send("Main page BUGGY Y BUMPER,INC")

});

app.use("/api", router);


app.post(rentRoutes.RENT , rents.quotation)



//lauch server
app.listen(3007, ()=>{
    console.log("inizializing server")
});
