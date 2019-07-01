var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("goutDB");
  var myobj = [
    { name: 'Ian',  Zip: '27713', dateOfBirth:"06/21/1966"},
    { name: 'Jennifer',  Zip: '18015', dateOfBirth:"04/02/1996"},
    { name: 'Keith',  Zip: '07745', dateOfBirth:"11/15/1974"},
    { name: 'Maxine',  Zip: '15672', dateOfBirth:"03/14/1968"},
    { name: 'James',  Zip: '27713', dateOfBirth:"02/18/1995"},
    { name: 'Jasmine',  Zip: '27713', dateOfBirth:"05/21/1985"},
    { name: 'Erika',  Zip: '27713', dateOfBirth:"10/06/1966"},
  ];
  dbo.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
