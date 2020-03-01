/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var allIngredients = [];
var numberOfpages = 1;
var currentPage = 0; 
var pageLength = 10;
var numberOfingredients= 0;
thisPage = ""; 

function getAllingredients() {
  // Get's and formats all ingredients 
$.getJSON("/ingredients", function(data) {
    // Grab the articles as a json
      // For each one, format and store. 
      if (data.length === 0) {
        console.log('NO INGREDIENTS FOUND');
      }

      numberOfingredients = data.length;
      if (numberOfingredients <= pageLength)
       { 
         numberOfpages= 1; 
         pageLength = numberOfingredients;
       }
       else { 
         numberOfpages = math.floor(numberOfingredients/pageLength);
        }

      for (var i = 0; i < data.length; i++) {        
        allIngredients.push = 
        arformat+"<p data-id='" + data[i]._id+"'>" 
        + data[i].source+": "+ "<br>" 
        + data[i].title + "<br>" 
        + data[i].link + "</p> </div>";
      } 
    });
}


function getDisplayPage(currentPage) {
    if ( currentPage == 1 ) {
      for (var i = 0; i < pageLength; i++) {
        pageContents = pageContents + allIngredients[i]; 
      }
    }
    else { 
      for (var n = math.floor((pageLength*currentPage)); n < math.floor((pageLength*currentPage))+pageLength; n++)
      {        
        pageContents = pageContents + allIngredients[n];
      }
    }

  return(pageContents);
}

getAllingredients();
thisPage = getDisplayPage(1);
$("#list").html(thisPage);






            
  