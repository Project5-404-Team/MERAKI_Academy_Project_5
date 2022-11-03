const express = require("express");

const { loginUsers } = require("../controllers/loginUsers");

const loginUserRouter = express.Router();

loginUserRouter.post("/", loginUsers);

module.exports = loginUserRouter;