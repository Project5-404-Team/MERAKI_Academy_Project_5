const pool = require("../models/db");

const getAllUsers = (req, res) => {
    const query = `SELECT * FROM Users `;
    pool
      .query(query)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "All Users",
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

  const usersSearch = (req,res)=>{
    const searchWord=req.query.search
const value=[`%${searchWord}%`]
const query = `SELECT * FROM users
WHERE industryOfRecentJob LIKE $1;`;
pool
  .query(query,value)
  .then((result) => {
    if(result.rows.length>0){
    res.status(200).json({
      success: true,
      massage: "Searched Users",
      result: result.rows,
    });}
    else{
      res.status(200).json({
        success: true,
        massage: "No Matching users founded"
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      massage: "server error",
      err: err,
    });
  });

  }
  
  module.exports = {getAllUsers,usersSearch};