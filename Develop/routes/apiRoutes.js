// DEPENDENCIES
const path = require("path");
const db = require("../db/db.json");
const fs = require("fs");

// MODULE EXPORTS FUNCTION FOR API FUNCTIONALITY 
module.exports = function(app) {
   x = 1;
   
   app.post("/api/notes", function(req,res){
      let newNote = req.body;
      newNote["id"] = i;
      db.push(newNote);
         
         fs.appendFile(path.join(__dirname, '../db/db.json'), db, 'utf8', function(err){
            if (err) throw err;
            console.log('db.json updated!');
         })
         x++;
   })


   app.post("/api/delete/:id", function(req,res){
      let deletedItem = req.params;
      for (let i = 0; i < db.length; i++) {
         if(db[i].id === deletedItem.id) {
            db.splice(i,1);
         };
      }
      let newDb = JSON.stringify(db);
      fs.writeFile(path.join(__dirname, '../db/db.json'), newDb, 'utf8', function(err){
         if (err) throw err;
         console.log('Deleted Note');
      });
      res.json(noteToDelete.Title)
   })
}