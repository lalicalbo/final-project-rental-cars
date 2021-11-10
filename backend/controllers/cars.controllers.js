import dataBase from "../dataBase.js";
import { Car } from "../models/index.js";

export const getAllCars =( req ,res )=>{
    dataBase.connect();
    Car.find((err, data)=>{
        if(err) res.status(500).send()
        res.status(200).send(data)
    })   
};


export const getOneCar =(req, res)=>{
 
    res.send("/get one")

}