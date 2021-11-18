console.log("********API CAR**********");

import express from "express";

import { router, routerQuotation} from "./routes/index.js";
console.log("SERVER WORKING")

//creating app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Main page BUGGY Y BUMPER,INC")

});

app.use("/api", router);
app.use("/home", routerQuotation);


//lauch server
app.listen(3007, () => {
    console.log("inizializing server")
});