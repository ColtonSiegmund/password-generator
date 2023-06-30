// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variable asking for password criteria
function generatePassword() {
var charLength = window.prompt ("How many characters would you like in your password?");
console.log (charLength);

var upperCase = window.confirm ("Would you like uppercase characters in your password?");
console.log (upperCase);

var lowerCase = window.confirm ("Would you like lowercase characters in your password?");
console.log (lowerCase);

var numbers = window.confirm ("Would you like numbers in your password?");
console.log (numbers);

var specialChar = window.confirm ("Would you like special characters in your password?");
console.log (specialChar);

//if statements to create password based on user input
if (lowerCase) {
  selectedArray = selectedArray.concat(lowerCasedCharacters);
}
if (upperCase) {
  selectedArray = selectedArray.concat(upperCasedCharacters);
}
if (numbers) {
  selectedArray = selectedArray.concat(numericCharacters);
}
if (specialChar) {
  selectedArray = selectedArray.concat(specialCharacters);
}

var passwordString = "";

// for loop to randomly select characters out of array
for (var i = 0; i < charLength; i++) {
  passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
}

return passwordString;
}
// arrays for different characters
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowerCasedCharacters = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var selectedArray = [];
