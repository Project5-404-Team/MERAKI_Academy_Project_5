const pool = require("../models/db");

const getAllCompanies = (req, res) => {
    const query = `SELECT * FROM companies `;
    pool
      .query(query)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "All companies",
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


  
  module.exports = {getAllCompanies};