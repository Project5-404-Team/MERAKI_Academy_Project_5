const pool = require("../models/db");

const addNewJob = (req, res) => {
    const { jobTitle, expiryDate,jobLocation,careerLevel,jobType,jobRole,yearsOfExperience,countryOfCitizenship,countryOfResidence,salary,numberOfHires,jobDescription,language,jobRequirements } = req.body;
    const  companyId = req.params.companyId
    const data = [jobTitle, expiryDate,jobLocation,careerLevel,jobType,jobRole,yearsOfExperience,countryOfCitizenship,countryOfResidence,salary,numberOfHires,jobDescription,language,jobRequirements];
    const query = `INSERT INTO jobs(jobTitle, expiryDate,jobLocation,careerLevel,jobType,jobRole ,yearsOfExperience,countryOfCitizenship,countryOfResidence,salary,numberOfHires,jobDescription,language,jobRequirements) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *`;
    pool
      .query(query, data)
      .then((result) => {
        console.log(result.rows[0].id)
        const jobId = result.rows[0].id
        const data = [companyId,jobId]
        const query = `INSERT INTO companiesCreatedJobs(companyId,jobId) VALUES($1,$2);`
        pool
        .query(query, data)
        .then((result)=>{
          res.status(200).json({
            success: true,
            massage: "Job created",
            result: result,
          });
        })
        .catch((err)=>{
          res.status(500).json({
            success: false,
            massage: "Server error",
            err: err,
          });
        })
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "Server error",
          err: err,
        });
      });
  };
  
  const getAllJobs = (req, res) => {
    const query = `SELECT * FROM companiesCreatedJobs INNER JOIN
    jobs ON companiesCreatedJobs.jobId = jobs.id
    INNER JOIN companies ON companiesCreatedJobs.companyId = companies.id;`;
    pool
      .query(query)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "All Jobs",
          result: result.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      });
  };


const jobApply = (req,res)=>{
    const userId= req.params.userId
const {jobId} = req.body
const values = [userId,jobId]
const query = `INSERT INTO usersAppliedJobs (U)`

}

  module.exports = {addNewJob,getAllJobs};

/*SELECT * FROM companiesCreatedJobs INNER JOIN
jobs ON companiesCreatedJobs.jobId = jobs.id
INNER JOIN
companies ON companiesCreatedJobs.companyId = companies.id;*/