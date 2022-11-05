const express = require("express");

const { getAllUsers } = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.get('/',getAllUsers )


module.exports = usersRouter;