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

  const companiesSearch = (req,res)=>{
    const searchWord=req.query.search
const value=[`%${searchWord}%`]
const query = `SELECT * FROM companies
WHERE companyName LIKE $1;`;
pool
  .query(query,value)
  .then((result) => {
    if(result.rows.length>0){
    res.status(200).json({
      success: true,
      massage: "Searched Companies",
      result: result.rows,
    });}
    else{
      res.status(200).json({
        success: true,
        massage: "No Matching Companies founded"
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
  
  const addFavoriteUser = (req,res)=>{
    const companyId=req.params.companyId
    const {userId} = req.body
    const values = [companyId,userId]
    const query = `INSERT INTO companiesFavoriteUsers (companyId,userId) VALUES($1,$2) RETURNING *`
    pool.query(query,values).then((result)=>{
        res.status(200).json({
            success: true,
            massage: "User added to Favorite Successfully",
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
  const deleteFavoriteUser = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE companiesFavoriteUsers SET is_deleted=1 WHERE id=${id};`;
  
    pool
      .query(query)
      .then((result) => {
        if (result.rowCount === 0) {
          res.status(404).json({
            success: false,
            massage: ` ${id} is not found`,
            err: err,
          });
        } else {
          res.status(200).json({
            success: true,
            massage: `Succeeded to delete Favorite User with id: ${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "Server Error",
          err: err,
        });
      });
  };

  const getCompanyFavoriteUsers = (req,res)=>{
    const companyId=req.params.companyId
    const values = [companyId]
    const query = `SELECT * FROM companiesFavoriteUsers INNER JOIN users ON companiesFavoriteUsers.userId = users.id WHERE companyId=$1 AND companiesFavoriteUsers.is_deleted=0;`
    pool.query(query,values).then((result)=>{
      if(result.rows.length>0){res.status(200).json({
        success: true,
        massage: "Company Favorite Users",
        result: result.rows,
      });}
      else{
        res.status(404).json({
          success: false,
          massage: "No Favorite Users Founded"
        })
      }
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            massage: "server error",
            err: err,
          });
    })
 
  }
  module.exports = {getAllCompanies,companiesSearch,addFavoriteUser,deleteFavoriteUser,getCompanyFavoriteUsers};