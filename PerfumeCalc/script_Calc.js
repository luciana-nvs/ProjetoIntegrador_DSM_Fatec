function calculatePerfume () {
  // COLLECT USER DATA -------<<
  var bottleSize = parseInt(document.getElementById('bottleSize').value);   // Get value for bottle size in ml
  var spraysPerDay = parseInt(document.getElementById('spraysPerDay').value); // Get value for how many sprays they use of perfume a day

  // CALCULATE INPUT -------<<
  // The following variables calculate
  // how many days to finish perfume for user
  var spraysInBottle = bottleSize * 14.7; // Calculate how many sprays are left in bottle; Assume 1ml of perfume = 14.7 sprays
  var daysToFinish = Math.round(spraysInBottle / spraysPerDay);
  var monthsToFinish = Math.round(daysToFinish / 30.42); //30.42 days in a regular month (non-leap year)
  var yearsToFinish = Math.floor(monthsToFinish/12);
  var monthsRemaining = (monthsToFinish)%12;


  // OUTPUT MESSAGES (Users see this stuff!) -------<<
  //Below is a repeating base message for every "result" output. Each message begins with the following:
  var introMessage = "<p>Se você tem " + bottleSize + "ml de perfume e borrifa " + spraysPerDay + " vezes ao dia, você terminará seu perfume em aproximadamente " + daysToFinish + " dias  ou ";
  
  
  //Check to make sure that user entered numerical input for bottleSize and spraysPerDay variables 
  		if (isNaN(bottleSize && spraysPerDay) === true) {
				document.getElementById('result').innerHTML = "<p> Ei! Parece que você esqueceu de inserir o tamanho do frasco de perfume (em ml) e a quantidade de sprays que usa por dia. Vamos tentar isso de novo. :) </p>";
      } 
//Custom message for when there are exactly 12 months to finish perfume
//Condition set for correct grammar
      else if (monthsToFinish === 12) {
              document.getElementById('result').innerHTML = introMessage + yearsToFinish + " ano(s) </b> e <b>" + (daysToFinish - 365) + " dias </b>.";
      }
//Custom message for when there is one or more years remaining + exactly one month
//This condition is created to make output grammatically correct
      else if (monthsToFinish > 12 && monthsRemaining === 1) {
                      document.getElementById('result').innerHTML = introMessage + yearsToFinish + " ano(s) e" + monthsRemaining +" meses</b>.";
      } else if (monthsToFinish > 12 && monthsRemaining > 1) {
                      document.getElementById('result').innerHTML = introMessage + yearsToFinish + " ano(s) e " + monthsRemaining + " meses</b>.";
      }
  
  else {
      document.getElementById('result').innerHTML = introMessage + monthsToFinish + " meses</b>.";
      }
}

// JQUERY UI --------<<
// JQUERY --------<<
// Calculates when user hits "enter"
// Conditional checks for actual input
$(document).on('keyup', function (e) {
    if (e.keyCode == 13 && spraysPerDay !="" && bottleSize !="") {
        calculatePerfume();
    }
});