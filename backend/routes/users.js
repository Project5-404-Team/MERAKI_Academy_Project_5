const express = require("express");

const { getAllUsers, usersSearch, userUpdate } = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.get('/',getAllUsers )
usersRouter.get('/search',usersSearch)
usersRouter.put('/:userId',userUpdate)


module.exports = usersRouter;