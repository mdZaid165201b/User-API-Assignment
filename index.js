const express = require("express");
const mongoose = require("mongoose");
const dotenv  = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/user");

const PORT = 5000;
const app = express();
app.use(express.json());


app.use("/api/v1", userRoutes);

mongoose.connect(process.env.DATABASE_URI).then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY!!!");
    app.listen(PORT, () => {

        console.log(`Server is listening on PORT: ${PORT}`);
    })
}).catch(err =>{
    console.log(err)
})
