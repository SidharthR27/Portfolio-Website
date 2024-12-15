const characterAmountRange = document.getElementById("characterAmountRange");
const characterCountDisplay = document.getElementById("characterCountDisplay");
const includeNumbers = document.getElementById("includeNumbers");
const includeLetters = document.getElementById("includeLetters");
const includeMixedCase = document.getElementById("includeMixedCase");
const includePunctuation = document.getElementById("includePunctuation");
const passwordDisplayArea = document.getElementById("passwordDisplayArea");
const copyButton = document.querySelector("button");

const letters = "abcdefghijklmnopqrstuvwxyz";
const mixedCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const punctuations = "!@#$%^&*()_+-=";

const createPassword = () => {
    let password = "";
    let allowedChars = "";
    allowedChars += includeNumbers.checked ? numbers : "";
    allowedChars += includeMixedCase.checked ? mixedCase : "";
    allowedChars += includeLetters.checked ? letters : "";
    allowedChars += includePunctuation.checked ? punctuations : "";

    const passwordLength = characterAmountRange.value;

    if (allowedChars.length < 1) {
        passwordDisplayArea.textContent = "";
        return
    }
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordDisplayArea.textContent = password;
}

characterAmountRange.addEventListener("input", () => {
    characterCountDisplay.textContent = characterAmountRange.value;
    createPassword();
});

includePunctuation.addEventListener("click", createPassword);
includeNumbers.addEventListener("click", createPassword);
includeLetters.addEventListener("click", createPassword);
includeMixedCase.addEventListener("click", () => {
    if(!includeLetters.checked && includeMixedCase.checked) includeLetters.checked= true;
    createPassword();
});

copyButton.addEventListener("click", () => navigator.clipboard.writeText(passwordDisplayArea.textContent))

createPassword();
