const express = require("express");
const authController = require("../controller/authentication");
const auth = require("../middleware/Auth")

const Router = express.Router();
Router.use(express.json());

Router.post("/api/login", authController.userLogin);
Router.post("/api/signup", authController.userSignUp);
Router.put("/api/updateUser/:id", authController.updateUser);
Router.delete("/api/deleteUser/:id", authController.deleteUser);


module.exports = Router;