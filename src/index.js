// require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import connectDB from './db/index.js'


dotenv.config({
    path: './env'
})


connectDB()










// import express from "express";
// const app = express()

// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MANGODB_URL}/${DB_NAME}`)
//        app.on("errror", (error) => {
//         console.log("error", error)
//         throw error
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is listing on ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log("ERROR", error);
//         throw err
//     }
// })()