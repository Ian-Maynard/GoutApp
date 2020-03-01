/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var Bitly = require('bitlyapi');
var Note = require("../models/note.js");
var Article = require("../models/Article.js");
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL
var app = express.Router();

app.get("/articles", function(req, res) {
            Article.find({}, function(error, doc) {
            // Log any errors
            if (error) {
              console.log(error);
            }
            // Or send the doc to the browser as a json object
            else {
              res.json(doc);
            }
          });
});

        // Grab an article by it's ObjectId
app.get("/articles/:id", function(req, res) {
          Article.findOne({ "_id": req.params.id })
          // ..and populate all of the notes associated with it
          .populate("note")
          // now, execute our query
          .exec(function(error, doc) {
            // Log any errors
            if (error) {
              console.log(error);
            }
            // Otherwise, send the doc to the browser as a json object
            else {
              res.json(doc);
            }
          });
});

app.post("/articles/:id", function(req, res) {
          var newNote = new Note(req.body);
        
          newNote.save(function(error, doc) {
            if (error) {
              console.log(error);
            }
            else {
              Article.findOneAndUpdate({ "_id": req.params.id }, { "note": doc._id }).exec(function(err, doc) {
                if (err) {
                  console.log(err);
                }
                else {
                  res.send(doc);
                }
              });
            }
          });
});


module.exports = app;