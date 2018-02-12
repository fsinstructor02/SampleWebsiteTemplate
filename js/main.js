/* JS JQ */

jQuery(function(){ // JQuery function call to run code

    for(i = 0; i < myObj.length; i++) { 
        

        // Homepage Data
        var homeBtn = myObj[i]["home"]["navbtn"];

        // Portfolio Page Data
        var portfolioBtn = myObj[i]["portfolio"]["navbtn"];

        // Resume Page Data
        var resumeBtn = myObj[i]["resume"]["navbtn"];

        // Contact Page Data
        var contactBtn = myObj[i]["contact"]["navbtn"];

        console.log(homeBtn);
        console.log(portfolioBtn);
        console.log(resumeBtn);
        console.log(contactBtn);
            
      }

});(jQuery); 