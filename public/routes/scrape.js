/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var Note = require("../models/note.js");
var Article = require("../models/Article.js");
var urlScraper = require("../controllers/urlScraper.js");
const router= express.Router(); 

router.get("/scrape",  (req, res) =>  {
           const  reuters = urlScraper("Reuters", "http://www.reuters.com/", true, ".article-heading");
           console.log(reuters);
           //  res.render("../public/index.html",reuters);
          //  const upi = urlScraper("UPI","http://www.upi.com/",false,".story");
          //  const deutschWelle = urlScraper("Deutsche Welle","http://www.dw.com/",true,".news");
          //  const bloomberg = urlScraper("Bloomberg","https://www.bloomberg.com/",true,".top-news-v3-story-headline");
          //  const time =  urlScraper("Time","http://www.time.com/",true,".rail-article-title");                   
  });
  
module.exports = router;