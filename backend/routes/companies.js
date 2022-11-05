const express = require("express");

const { getAllCompanies } = require("../controllers/companies");
const companiesRouter = express.Router();

companiesRouter.get('/',getAllCompanies)


module.exports = companiesRouter;
