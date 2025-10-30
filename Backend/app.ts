import express from "express"
import cors from "cors"

const app = express()

// Middleware to parse JSON bodies
app.use(express.json())
app.use(cors())

import booksRouter from "./routes/books.route"

app.use("/books",booksRouter)




export {app}