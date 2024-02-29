const express = require("express")
const { getUser, postUser, getById, putUser, deleteUser } = require("../usercontrollers/usercontrollers")


const router = express.Router()


router.get("/get-user",getById)
router.get("/mainpage",getUser)
router.post("/signup",postUser)
router.put("/update/:id", putUser)
router.delete("/delete-user/:id",deleteUser)


module.exports = router