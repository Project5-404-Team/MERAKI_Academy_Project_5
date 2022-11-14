const express = require("express");

const { addNewJob, getAllJobs, jobApply, addFavJob, getUserAppliedJobs, getUserFavoriteJobs,deleteJobById,updateJobById, jobsSearch,deleteJobApplication,deleteFavoriteJob, getCompanyJobs,getCompanyAppliedJobs, jobsSearchByCompanyIndustry} = require("../controllers/jobs");
const jobsRouter = express.Router();

jobsRouter.post("/:companyId", addNewJob);
jobsRouter.get('/',getAllJobs)
jobsRouter.get('/:companyId',getCompanyJobs)
jobsRouter.post("/jobapply/:userId",jobApply);
jobsRouter.post("/favjobs/:userId",addFavJob)
jobsRouter.delete('/:id',deleteJobById)
jobsRouter.put('/:id',updateJobById)
jobsRouter.get("/jobapply/:userId",getUserAppliedJobs)
jobsRouter.get("/jobapplies/:companyId",getCompanyAppliedJobs)
jobsRouter.get("/favjobs/:userId",getUserFavoriteJobs)
jobsRouter.get('/search/:search',jobsSearch)
jobsRouter.get('/Industrysearch/:searchIndustry',jobsSearchByCompanyIndustry)
jobsRouter.delete('/jobapply/:id',deleteJobApplication)
jobsRouter.delete('/favjobs/:id',deleteFavoriteJob)
module.exports = jobsRouter;
