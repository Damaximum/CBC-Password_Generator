// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variables with the desired items in the password.
var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var CapLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '_', '`', '{', '|', '}', '~'];
// Blank array variable for creating the custom set for passwor generation
var finalSet = [];
var PassEmpty = [];

function generatePassword() {

// Function to check what the user wants.
  function Criteria() {
    finalSet = [];
    PassEmpty = [];

    // Choose if lowercase letters are in the password
    var letterselect = confirm('Do you want lowercase letters in the password?');
    if(letterselect === true){
      finalSet = finalSet.concat(letter);
      console.log(letterselect);
    }

    // Choose if uppercase letters are in the password
    var CapLetterselect = confirm('Do you want uppercase letters in the password?');

    if(CapLetterselect === true){
      finalSet = finalSet.concat(CapLetter);
      console.log(CapLetterselect);
    }

    // Choose if numbers are in the password
    var numberselect = confirm('Do you want numbers in the password?');

    if(numberselect === true){
      finalSet = finalSet.concat(numbers);
      console.log(numberselect);
    }

    // Choose if special characters are in the password
    var specialselect = confirm('Do you want special letters in the password?');

    if(specialselect === true){
      finalSet = finalSet.concat(specials);
      console.log(specialselect);
    }

    console.log(finalSet);
    
    // Checking if the user has selected at least one criteria.
    if (letterselect !== true && CapLetterselect !== true && numberselect !== true && specialselect !== true) {

      var cont = confirm('You MUST choose at least one criteria!');

      if (cont === false) {
        return ' ';
      } else {
        Criteria();
      }
    
    }

  }


// setting the length of the password
  var PassLength = prompt('How long you want the password to be? (minimum 8, maximum 128)', 8);
  // checking if the input is a number and if it is within 8 and 128
  if (PassLength !== null) {
    if (!isNaN(PassLength)) {
      if (PassLength < 8) {
        alert('The number you have chosen is too small!');
        console.log('Short num');
      } else if (PassLength > 128) {
        alert('The number you have chosen is too large!')
        console.log('Long num');
        return ' ';
      } else {
        Criteria();
        PassGen();
        console.log('Good Number. Chosen: ' + PassLength);
      }
      
    } else {
      alert('That is not a number!');
    }
  } 


// generates and "saves" the password
  function PassGen() {
    for (var i = 0; i < PassLength; i++) {
      var generated = finalSet[Math.floor(Math.random() * finalSet.length)];
      PassEmpty.push(generated);
      console.log(PassEmpty);
    }
  }

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = PassEmpty.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
