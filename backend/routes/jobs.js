const express = require("express");

const { addNewJob, getAllJobs, jobApply, addFavJob, getUserAppliedJobs, getUserFavoriteJobs } = require("../controllers/jobs");
const jobsRouter = express.Router();

jobsRouter.post("/:companyId", addNewJob);
jobsRouter.get('/',getAllJobs)
jobsRouter.post("/jobapply/:userId", jobApply);
jobsRouter.post("/favjobs/:userId",addFavJob)
jobsRouter.get("/jobapply/:userId",getUserAppliedJobs)
jobsRouter.get("/favjobs/:userId",getUserFavoriteJobs)
module.exports = jobsRouter;
