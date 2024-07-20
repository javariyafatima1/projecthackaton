const { Router } = require("express");
const { createUser, getUser, login } = require("../controllers/UserController");
const router = Router();
router.get("/", getUser)
router.post("/", createUser);
router.post("/login", login);
module.exports = router