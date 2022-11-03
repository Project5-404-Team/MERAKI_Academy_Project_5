const express = require("express");

const { registerCompany, registerCompanyComplete } = require("../controllers/registerCompany");

const registerCompanyRouter = express.Router();

registerCompanyRouter.post("/", registerCompany);
registerCompanyRouter.put("/:companyId",registerCompanyComplete)

module.exports = registerCompanyRouter;


