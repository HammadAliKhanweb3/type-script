import Router from "express"
import { createBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/books"



const router = Router()



router.route("/").get(getAllBooks)
router.route("/:_id").get(getOneBook)
router.route("/create").post(createBook)
router.route("/delete").delete(deleteBook)
router.route("/update").patch(updateBook)

export default router