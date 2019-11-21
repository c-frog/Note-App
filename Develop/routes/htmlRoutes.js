// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");


// MODULE EXPORT FUNCTION FOR ALL .GET FUNCITONALITY
module.exports = function(app) {
   
   const db = path.join(__dirname, "../db/db.json");

   const dbRead = JSON.parse(fs.readFileSync(db,(err,data)=> {
      if (err) throw err;
   }));

   app.get("/assets/css/styles.css", function(req,res){
      res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
   });
   
   app.get("/assets/js/index.js", function(req,res){
      res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
   });
   
   app.get("/db.json", function(req,res){
      res.sendFile(path.join(__dirname, "../db/db.json"));
   });
   
   app.get("/", function(req,res){
      res.sendFile(path.join(__dirname, "../public/index.html"));
   });
   
   app.get("/notes", function(req,res){
      res.sendFile(path.join(__dirname, "../public/notes.html"));
   });
   
   app.get("/api/notes", function(req,res){
      return res.json(dbRead);
   })
}