
import express from "express"

const app = express()

// Middleware to parse JSON bodies
app.use(express.json())

import booksRouter from "./routes/books.route"

app.use("/books",booksRouter)




export {app}