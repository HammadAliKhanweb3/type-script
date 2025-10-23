import Router from "express"
import { createBook } from "../controllers/books"



const router = Router()



router.route("/create").post(
    createBook
)