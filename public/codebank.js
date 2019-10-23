 $("#fieldOne").on({
                keyup: function(){
                $(this).css("background-color", "lightgray");
                },  
                mouseleave: function(){
                $(this).css("background-color", "lightblue");
                }, 
                click: function(){
                $(this).css("background-color", "yellow");
                    }  
        });

        $("#fieldTwo").on({
                mouseenter: function(){b
                $(this).css("background-color", "lightgray");
                },  
                mouseleave: function(){
                $(this).css("background-color", "lightblue");
                }, 
                click: function(){
                $(this).css("background-color", "yellow");
                    }  
        });


        $("#fieldThr").on({
                mouseenter: function(){
                $(this).css("background-color", "lightgray");
                },  
                mouseleave: function(){
                $(this).css("background-color", "lightblue");
                }, 
                click: function(){
                $(this).css("background-color", "yellow");
                    }  
        });



        var thread = null;
    
    function findMember(t) {
        alert(t);
    }

    $('#target').keyup(function() {
      clearTimeout(thread);
      var $this = $(this); thread = setTimeout(function(){findMember($this.val())}, 6000);
    });




       
    $('#fieldOne').keyup(
        function() {
        clearTimeout(thread);
        var $this = $(this); 

        thread = setTimeout(function(){findMember($this.val());}, 3000); // Set the timer and after x seconds send the take
        });

$('#fieldTwo').keyup(
            function() {
            clearTimeout(thread);
            var $this = $(this); 
            thread = setTimeout(function(){findMember($this.val());}, 3000); // Set the timer and after x seconds send the take
            });

    $('#fieldThr').keyup(
                function() {
                clearTimeout(thread);
                var $this = $(this); 
                thread = setTimeout(function(){findMember($this.val());}, 3000); // Set the timer and after x seconds send the take
                });   
                
