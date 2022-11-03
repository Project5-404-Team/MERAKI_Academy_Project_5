const express = require("express");

const { registerUser ,registerUserComplete} = require("../controllers/registerUser");

const registerUserRouter = express.Router();

registerUserRouter.post("/", registerUser);
registerUserRouter.put("/:userId",registerUserComplete)

module.exports = registerUserRouter;