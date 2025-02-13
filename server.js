// const express = require("express")
// const path = require("path")
// const {JSDOM} = require("jsdom")
// const {window} = new JSDOM("<!DOCTYPE html><html><body></body></html>");
// const document =window.document
// const resultEl = document.getElementById("result")
// const lengthEl = document.getElementById("length")
// const upperCaseEl = document.getElementById("uppercase")
// const lowerCaseEl = document.getElementById("lowercase")
// const numbersEl = document.getElementById("numbers")
// const symbolsEl = document.getElementById("symbols")
// const generateEl = document.getElementById("generate")
// const clipboard = document.getElementById("clipboard")

// // const app = express();
// // const PORT = 3000;
// // // app.use(express.static(path.join(__dirname)))


// // const randomFunc = {
// //     lower : getRandomLower,
// //     upper : getRandomUpper,
// //     number: getRandomNumber,
// //     symbol : getRandomSymbol
// // };

// // clipboard.addEventListener('click', () => {
// //     const textarea = document.createElement("textarea")
// //     const password = resultEl.innerText

// // if(!password) {return; }

// // textarea.value = password;
// // document.body.appendChild(textarea)
// // textarea.select();
// // document.execCommand("copy")
// // textarea.remove()
// // alert("Password copied!")
// // })

// // generate.addEventListener("click", () => {
// //     const length = +lengthEl.value;
// //     const hasLower = lowerCaseEl.checked;
// //     const hasUpper = upperCaseEl.checked;
// //     const hasNumber = numbersEl.checked;
// //     const hasSymbol = symbolsEl.checked;

// //     resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
// // })

// // function generatePassword(lower,upper,number,symbol,length) {
// //     let generatedPassword = "";
// //     const typesCount = lower + upper + number + symbol;
// //     const typeArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item[0]));

// //     if(typesCount == 0 ){
// //         return;
// //     }

// //     for (let i=0; i<length; i+=typesCount){
// //         typesArr.forEach(type => {
// //             const funcName = Object.keys(type)[0];
// //             generatedPassword += randomFunc[funcName]();
// //         })
// //     }
// //     const finalPassword = generatedPassword.slice(0,length)

// //     return finalPassword;

// // }
// // function getRandomLower() {
// //     const lettersS ="abcçdefgğhıijklmnoöprsştuüvyzqx"
// //     return letterS [Math.floor(Math.random() * lettersS.length)];  
// // }
// // function getRandomUpper() {
// //     const lettersB = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQX"
// //     return lettersB [Math.floor(Math.random() * lettersB.length)]; //ASCII kod ile ing harfler daha kısa kodlanabilir 
// // }
// // function getRandomNumber(){
// //     return String.fromCharCode(Math.floor(Math.random() * 10)+ 48); //ASCII numbers 49 = "0" +10
// // }
// // function getRandomSymbol(){
// //     const symbols = "!^+%&/()=?#${}[]*<>-.,:;|"
// //     return symbols[Math.floor(Math.random() * symbols.length)];
// // }

// // // const floating_btn = document.querySelector(".floating-btn")
// // // const close_btn = document.querySelectorAll(".close-btn")
// // // const social_panel_container = document.querySelector(".social-panel-container")

// // // floating_btn.addEventListener("click", () => {
// // //     social_panel_container.classList.toggle("visible")
// // // })

// // // close_btn.addEventListener("click", () => {
// // //     social_panel_container.classList.remove("visible")
// // // })








// // app.listen(PORT, () => {
// //     console.log(`Server is running on ${PORT}...`)
// // });

// // const resultEl = document.getElementById("result");
// // const lengthEl = document.getElementById("length");
// // const upperCaseEl = document.getElementById("uppercase");
// // const lowerCaseEl = document.getElementById("lowercase");
// // const numbersEl = document.getElementById("numbers");
// // const symbolsEl = document.getElementById("symbols");
// // const generateEl = document.getElementById("generate");
// // const clipboard = document.getElementById("clipboard");

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// };

// clipboard.addEventListener('click', () => {
//     const textarea = document.createElement("textarea");
//     const password = resultEl.innerText;

//     if (!password) return;

//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand("copy");
//     textarea.remove();
//     alert("Password copied!");
// });

// generateEl.addEventListener("click", () => {
//     const length = +lengthEl.value;
//     const hasLower = lowerCaseEl.checked;
//     const hasUpper = upperCaseEl.checked;
//     const hasNumber = numbersEl.checked;
//     const hasSymbol = symbolsEl.checked;

//     resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// });

// function generatePassword(lower, upper, number, symbol, length) {
//     let generatedPassword = "";
//     const typesCount = lower + upper + number + symbol;
//     const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

//     if (typesCount === 0) {
//         return '';
//     }

//     for (let i = 0; i < length; i += typesCount) {
//         typeArr.forEach(type => {
//             const funcName = Object.keys(type)[0];
//             generatedPassword += randomFunc[funcName]();
//         });
//     }

//     const finalPassword = generatedPassword.slice(0, length);
//     return finalPassword;
// }

// function getRandomLower() {
//     const lettersS = "abcçdefgğhıijklmnoöprsştuüvyzqx";
//     return lettersS[Math.floor(Math.random() * lettersS.length)];
// }

// function getRandomUpper() {
//     const lettersB = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQX";
//     return lettersB[Math.floor(Math.random() * lettersB.length)];
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//     const symbols = "!^+%&/()=?#${}[]*<>-.,:;|";
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }
