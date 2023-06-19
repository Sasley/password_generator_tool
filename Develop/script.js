// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", window);
generateBtn.addEventListener("click", writePassword);

var userChoice = window.prompt("password criteria:length (8 to 125) characters");
console.log(userChoice)
window.prompt("character types to include? !,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,^,_,`,{,|,},~,");
window.prompt ("do you want to include lowercase? (yes or no)");
window.prompt("Include uppercase? (Yes or No)");
window.prompt("Include numeric? (Yes or No)");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// const generate = generatePassword

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// var minlength= "8";
// var maxlength= "125";
// var specialCharacters= "!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,^,_,`,{,|,},~";
// var lowerCases= "abcdefghijklmnopqrstuvwxyz";
// var upperCases= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var number= "0123456789";

  
//   password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//   password += lowerCases[Math.floor(Math.random() * lowerCases.length)];
//   password += upperCases[Math.floor(Math.random() * upperCases.length)];