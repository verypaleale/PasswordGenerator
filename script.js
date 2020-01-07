
var generateBtn = document.querySelector("#generate");
var clipboardBtn = document.querySelector("#password");

var lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ["0", "1", "0", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

randomCharacters = [];

var password = "";

function generatePassword() {

  var charcNumber = parseInt(prompt("How many characters would you like your password to contain?"));
  if (charcNumber > 7 && charcNumber < 129) {

    choiceLowerCase()
    choiceUpperCase()
    choiceNumber()
    choiceSymbol()

    function choiceLowerCase() {
      var userAlpha = confirm("Would you like to use lower letters?")
      if (userAlpha) {
        randomCharacters = randomCharacters.concat(lowerCaseAlpha);

      }
    }

    function choiceUpperCase() {
      var userBeta = confirm("Would you like to use capital letters?")
      if (userBeta) {
        randomCharacters = randomCharacters.concat(upperCaseAlpha);
      }
    }

    function choiceNumber() {
      var userNum = confirm("Would you like to use numbers?")
      if (userNum) {
        randomCharacters = randomCharacters.concat(number);
      }
    }

    function choiceSymbol() {
      var userSym = confirm("Would you like to use symbols?")
      if (userSym) {
        randomCharacters = randomCharacters.concat(symbol);
      }
    }

    for (a = 0; a < charcNumber; a++) {
      password = password.concat(randomCharacters[Math.floor(Math.random() * Math.floor(randomCharacters.length))]);
      console.log(password[a]);
    }
    return password;

  } else {
    alert("Please pick a number between 8 and 128.");
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyToClipboard() {
  var copyPassword = document.getElementById("password");
  copyPassword.select();
  document.execCommand("copy");
  alert("Copied your password: " + copyPassword.value);
}
clipboardBtn.addEventListener("click", copy);

generateBtn.addEventListener("click", writePassword);