const pool = require("../models/db");

const addNewJob = (req, res) => {

    const {jobTitle, expiryDate,jobLocation,careerLevel,jobType,jobRole,yearsOfExperience,countryOfCitizenship,countryOfResidence,salary,numberOfHires,jobDescription,language,jobRequirements } = req.body;
    const companyId = req.params.companyId
    const data = [companyId,jobTitle, expiryDate,jobLocation,careerLevel,jobType,jobRole,yearsOfExperience,countryOfCitizenship,countryOfResidence,salary,numberOfHires,jobDescription,language,jobRequirements];
    const query = `INSERT INTO jobs(companyId,jobTitle, expiryDate,jobLocation,careerLevel,jobType,jobRole ,yearsOfExperience,countryOfCitizenship,countryOfResidence,salary,numberOfHires,jobDescription,language,jobRequirements) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING *`;
    pool
      .query(query, data)
      .then((result) => {
          res.status(200).json({
            success: true,
            massage: "Job created",
            result: result.rows,
          });
        })
        .catch((err)=>{
          res.status(500).json({
            success: false,
            massage: "Server error",
            err: err,
          });
        })
  };
  
  const getAllJobs = (req, res) => {
    const query = `SELECT * FROM jobs INNER JOIN companies ON jobs.companyId=companies.id `;
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
const query = `INSERT INTO usersAppliedJobs (userId,jobId) VALUES($1,$2) RETURNING *`
pool.query(query,values).then((result)=>{
    res.status(200).json({
        success: true,
        massage: "Job application created",
        result: result.rows,
      });
}).catch((err)=>{
    res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
})
}
const getUserAppliedJobs = (req, res) =>{
    const userId=req.params.userId
    const value=[userId]
    const query = `SELECT * FROM usersAppliedJobs INNER JOIN
    jobs ON usersAppliedJobs.jobId = jobs.id WHERE userId=$1;`;
    pool
      .query(query,value)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "User Applied Jobs",
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

const addFavJob = (req,res)=>{
    const userId= req.params.userId
    const {jobId} = req.body
    const values = [userId,jobId]
    const query = `INSERT INTO usersFavoriteJobs (userId,jobId) VALUES($1,$2) RETURNING *`
    pool.query(query,values).then((result)=>{
        res.status(200).json({
            success: true,
            massage: "Job added to Favorite Successfully",
            result: result.rows,
          });
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            massage: "server error",
            err: err,
          });
    })
    }
    const getUserFavoriteJobs = (req, res) =>{
        const userId=req.params.userId
        const value=[userId]
        const query = `SELECT * FROM usersFavoriteJobs INNER JOIN
        jobs ON usersFavoriteJobs.jobId = jobs.id WHERE userId=$1;`;
        pool
          .query(query,value)
          .then((result) => {
            res.status(200).json({
              success: true,
              massage: "User Applied Jobs",
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
  module.exports = {addNewJob,getAllJobs,jobApply,addFavJob,getUserAppliedJobs,getUserFavoriteJobs};

