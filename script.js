var generateBtn = document.querySelector("#generate");

var useLowercase =  'abcdefghijklmnopqrstuvwyz';
var useUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
var useNumbers = '1234567890';
var useSpecialChar = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';



function generatePassword() {
  var selectedChars = '';
  var finalPassword = '';

var characterLength = prompt("Choose a password length between 8-128 character.");
  if(isNaN(characterLength)|| characterLength<=8 || characterLength>=128){
    alert("Please enter a number within the range of 8-128.");
    return;
  }

  if(confirm("Do you want to include lowercase in your password?")){
    selectedChars +=  useLowercase; 
    finalPassword += useLowercase[Math.floor(Math.random()*useLowercase.length)];
  }
  if(confirm("Do you want to include uppercase in your password?")){
    selectedChars += useUppercase;
    finalPassword += useUppercase[Math.floor(Math.random()*useUppercase.length)];
  }
  if(confirm("Do you want to include numeric in your password?")){
    selectedChars += useNumbers;
    finalPassword += useNumbers[Math.floor(Math.random()*useNumbers.length)];
  }
  if(confirm("Do you want to include special characters in your password?")){
    selectedChars += useSpecialChar;
    finalPassword += useSpecialChar[Math.floor(Math.random()*useSpecialChar.length)];
  }
console.log(finalPassword);

for (let index = finalPassword.length; index < characterLength; index++) {
  finalPassword += selectedChars[Math.floor(Math.random()*selectedChars.length)]
}

console.log(finalPassword)
return finalPassword
}

  function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

generateBtn.addEventListener("click", writePassword);
