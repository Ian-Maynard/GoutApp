/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const express = require("express");
const rp = require('request-promise');
const $ = require('cheerio');
var request = require("request");
var Note = require("../models/note.js");
var Article = require("../models/Article.js");
const router = express.Router(); 
// skraper("Reuters", "http://www.reuters.com/", true, ".article-heading");
// wikiUrls.push($('big > a', html)[i].attribs.href);

router.get("/pullr",  (req, res) =>  {

        function scrap (sURL) {
            rp(sURL,sParm)
                    .then(function(html){
                        //success!
                        for (let i = 0; i < 3; i++) {
                            var link = $(this).children("a").attr("href");
                            var title = $(this).children("a").text().trim();
                            console.log(link+" = "+title);
                        }
                        console.log(sURL);
                    })
                    .catch(function(err){
                        //handle error
                    });
        }

 scrap("http://www.reuters.com/",".article-heading");

 });
  
                // const reuters = skraper("Reuters", "http://www.reuters.com/", true, ".article-heading");
                // const upi = skraper("UPI","http://www.upi.com/",false,".story");
                // const deutschWelle = skraper("Deutsche Welle","http://www.dw.com/",true,".news");
                // const bloomberg = skraper("Bloomberg","https://www.bloomberg.com/",true,".top-news-v3-story-headline");
                // const time =  skraper("Time","http://www.time.com/",true,".rail-article-title");
                // res.render("../public/index.html",articles);
                

module.exports = router;