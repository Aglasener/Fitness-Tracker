var db = require("../models");



module.exports = function(app) {
  app.delete("/reset", (req, res) => {
    db.Exercise.remove({}, function (error, response) {
      if (error) {
        return res.send(error);
      } else {
        return res.send(response);
      }
    });
  });
  
  app.get("/exercises", function(req, res) {
    db.Exercise.find({}, function(err, dbExercises) {
      if (err) {
        return console.log(err);
      } else {
        return res.json(dbExercises);
      }
    });
  });
  
  app.post("/submit", function({body}, res) {
    
    db.Exercise.create(body)
      .then(function(dbExercises) {
        res.json(dbExercises);
      })
      .catch(function(err){
        res.json(err);
      });
  });
}