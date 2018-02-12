/* JS JQ */

jQuery(function(){ // JQuery function call to run code

    // $.getJSON("js/data.js", function(result){
    //     $.each(result, function(i, field){
    //         $("body").append(field + " ");
    //     });
    // });

    for(i = 0; i < myObj.length; i++) { 
        
        var homeBtn = myObj[i]["home"]["navbtn"];
        var portfolioBtn = myObj[i]["portfolio"]["navbtn"];
        var resumeBtn = myObj[i]["resume"]["navbtn"];
        var contactBtn = myObj[i]["contact"]["navbtn"];

        console.log(homeBtn);
        console.log(portfolioBtn);
        console.log(resumeBtn);
        console.log(contactBtn);
            
      }

});(jQuery); 