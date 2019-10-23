/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var thread = null;

function findIngredient(thisName) {
      alert(thisName);
      console.log(thisName);
      $.ajax({ 
            method: "GET",
             url: "/api/ingreds/name/" + thisName}
             )
      .done(function(data) {
             alert(data);
          });
  }

          $('#fieldOne').keyup(function() {
            clearTimeout(thread);
            var $this = $(this); thread = setTimeout(function(){findIngredient($this.val())}, 1000);
          });


       