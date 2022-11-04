const express = require("express");

const { addNewJob, getAllJobs } = require("../controllers/jobs");
const jobsRouter = express.Router();

jobsRouter.post("/:companyId", addNewJob);
jobsRouter.get('/',getAllJobs)

module.exports = jobsRouter;
