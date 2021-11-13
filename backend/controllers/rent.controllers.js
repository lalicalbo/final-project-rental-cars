import Car from "../models/cars.models.js";
import dataBase from "../dataBase.js"

export const rentACar =(req, res)=>{
    console.log("BODY",req.body)
    const { id ,quantity}= req.body
    
    dataBase.connect();
    Car.findById(id,(err,data)=>{
        console.log("data",data)
        if(err)res.status(400).send(err)

    })


};