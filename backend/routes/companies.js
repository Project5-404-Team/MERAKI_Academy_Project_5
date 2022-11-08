const express = require("express");

const { getAllCompanies, companiesSearch,addFavoriteUser,deleteFavoriteUser,getCompanyFavoriteUsers } = require("../controllers/companies");
const companiesRouter = express.Router();

companiesRouter.get('/',getAllCompanies)
companiesRouter.get('/search',companiesSearch)
companiesRouter.post('/favusers/:companyId',addFavoriteUser)
companiesRouter.delete('/favusers/:id',deleteFavoriteUser)
companiesRouter.get('/favusers/:companyId',authenticathio,getCompanyFavoriteUsers)

module.exports = companiesRouter;
