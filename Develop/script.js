// Assignment Code
let generateBtn = document.querySelector("#generate");
// function 
//    let generate = "generatebtn";
//    console.log (generate);
//    return;
// }

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var userChoice = window.prompt("password criteria:length (8 to 125) characters");
console.log(userChoice)

window.prompt("character types to include? !,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,^,_,`,{,|,},~,");
window.prompt ("do you want to include lowercase? (yes or no)");
window.prompt("Include uppercase? (Yes or No)");
window.prompt("Include numeric? (Yes or No)");

  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  password += lowerCases[Math.floor(Math.random() * lowerCases.length)];
  password += upperCases[Math.floor(Math.random() * upperCases.length)];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
