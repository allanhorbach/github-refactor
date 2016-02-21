$(document).ready(function(){

    function processUserInput(){
      setTimeout(function(){
             $('#alert p').remove();
       $('#results li').remove();
        $("#results").css('display', 'none');
         $("#alert").css('display', 'none');
        var userInput = Number( $("#userInputTextfield").val() );
        var counter = 1;
        var countString = '';
        if ( isNaN(userInput) || userInput < 1 || userInput > 100 ) {
            $('#alert').html('<p>Please enter a valid number up to 100</p>').fadeIn(500);  
           $("#userInputTextfield").val('');
           
        } else{
          
         $('#alert').html('<p id="thanks">Yahtzee!</p>').fadeIn(300);

        $("#results").append("<li class='choice'>Number : " + userInput +"</li>");

        while ( counter <= userInput ) {
            if ( counter % 3 == 0 && counter % 5 == 0 ) {
                countString += "<li class='fizzbuzz'>FizzBuzz</li>";
            } else if ( counter % 3 == 0 ) {
                countString += "<li class='fizz'>Fizz</li>";
            } else if ( counter % 5 == 0 ) {
                countString += "<li class='buzz'>Buzz</li>";
            } else {
                countString += "<li>"+counter+"</li>";
            }
            counter++;
        }
        $("#results").append(countString).fadeIn(500);
          
          $("#userInputTextfield").val('');

    }  
 },200); 
    }
    $("#userButton").on("click", processUserInput );
                
  $(document).keydown(function(e) {

       var keycode = (event.which);
    if(keycode == '13'){
      processUserInput();
    }
  });
  
});