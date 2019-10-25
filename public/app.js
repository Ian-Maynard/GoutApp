/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var thread = null;

          $('#fieldOne').keyup(function() {
            clearTimeout(thread);
            var $this = $(this); 
                thread = setTimeout(
                  function()
                        {
                            $.ajax({ 
                              method: "GET",
                              url: "/api/ingreds/name/" + $this
                              }).
                              done(function(data) {
                              alert(data);
                              });
                            }, 1000);
          });


