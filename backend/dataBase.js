import mongoose from "mongoose";

const dataBase = {
    connect: function () {
        mongoose.connect('mongodb://localhost:27017/api_cars', {
            useNewUrlParser: true
        });
        mongoose.connection.on("error", function (e) { console.error(e); });
    }
}

export default dataBase;