// Assignment Code
var generateBtn = document.querySelector("#generate");
const btn =document.querySelector('button');

var userChoice = window.prompt("password criteria:length (8 to 125) characters");
console.log(userChoice)
window.prompt("character types to include? !,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,^,_,`,{,|,},~,");
window.prompt ("do you want to include lowercase? (yes or no)");
window.prompt("Include uppercase? (Yes or No)");
window.prompt("Include numeric? (Yes or No)");

var minlength= "8";
var maxlength= "125";
var specialCharacters= "!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,^,_,`,{,|,},~";
  var lowerCases= "abcdefghijklmnopqrstuvwxyz";
  var upperCases= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number= "0123456789";


// document.getElementById("selectAll").onclick = () => {
//   document.getElementById("userPassword").select();
// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  password += lowerCases[Math.floor(Math.random() * lowerCases.length)];
  password += upperCases[Math.floor(Math.random() * upperCases.length)];
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  