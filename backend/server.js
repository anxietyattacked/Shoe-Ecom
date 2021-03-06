import express from "express"
import products from "./data/products.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()
connectDB()


const app = express()

app.get("/", (req, res) => {
    res.send("API is running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))