/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var thread = null;
    
    function findMember(t) {
        alert(t);
    }

    $('#target').keyup(function() {
      clearTimeout(thread);
      var $this = $(this);
      thread = setTimeout(function(){
      findMember($this.val())
      }, 
      1000);
    });