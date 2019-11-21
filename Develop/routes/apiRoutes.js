// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");


// MODULE EXPORTS FUNCTION FOR API FUNCTIONALITY 
module.exports = function(app) {

   const db = path.join(__dirname, "../db/db.json");

   const dbRead = JSON.parse(fs.readFileSync(db,(err,data)=> {
      if (err) throw err;
   }));

   const dbWrite = (dbRead) => {
      fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(dbRead), (err) => {
         if (err) throw err;
      });
   }

   let x = 1;
   
   app.post("/api/notes", function(req,res){
      let newNote = req.body;
      newNote.id = x;
      x++;
      dbRead.push(newNote);
      dbWrite(dbRead);
      return res.json(dbRead);
   })


   app.post("/api/delete/:id", function(req,res){
      let id = req.params.id;
      delete dbRead[id-1];
      let filtered = dbRead.filter(function(el){
         return el != null;
      });
      dbWrite(filtered);
      res.send(filtered);
   })
}