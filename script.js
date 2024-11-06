const passBox = document.getElementById("password");
const passHistory = document.getElementById("passwordHistory");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#~%&^*";


function createPassword(){
    const length = parseInt(document.getElementById("passwordLength").value);
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let allChars = "";
    let password = "";

    //Add checked characters types
    if(includeUppercase){
        allChars += upperCase;
        password += upperCase[Math.floor(Math.random()*upperCase.length)];
    }
    if(includeLowercase){
        allChars += lowerCase;
        password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    }
    if(includeNumbers){
        allChars += numbers;
        password += numbers[Math.floor(Math.random()*numbers.length)];
    }
    if(includeSymbols){
        allChars += symbols;
        password += symbols[Math.floor(Math.random()*symbols.length)];
    }

    if(allChars.length === 0){
        alert("Please select at least one character type.");
        return;
    }

    //Complete the password 
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    //Mess the password order
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passBox.value = password;

    //Add the password to the history
    addPasswordToHistory(password);
}

function copyPassword(){
    passBox.select();
    document.execCommand("copy");
}

function addPasswordToHistory(password) {
    const listItem = document.createElement("li");
    listItem.textContent = password;
    passHistory.prepend(listItem);
}