const express = require("express");

const { getAllUsers, usersSearch } = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.get('/',getAllUsers )
usersRouter.get('/search',usersSearch)


module.exports = usersRouter;