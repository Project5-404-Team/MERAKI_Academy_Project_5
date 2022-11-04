const express = require("express");

const { addNewJob } = require("../controllers/jobs");
const jobsRouter = express.Router();

jobsRouter.post("/:companyId", addNewJob);

module.exports = jobsRouter;
