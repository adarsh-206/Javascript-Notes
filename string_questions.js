const msg = "Hello, How are you?";

// Ques-1) Convert this whole string to 1 array.
console.log("1) ", msg.split());                 // [ 'Hello, How are you?' ]
console.log("2) ", [msg]);                       // [ 'Hello, How are you?' ]

// Ques-2) Convert string to array with each character
console.log("3) ", [...msg]);                   // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ',  'y', 'o', 'u', '?' ]
console.log("4) ", msg.split(''));

// Ques-3) Convert string to array on the basis pf space.
console.log("5) ", msg.split(' '));             // [ 'Hello,', 'How', 'are', 'you?' ]s

// Ques-4) Convert string to array on the basis of 'a'
console.log("6) ", msg.split('a'));             // [ 'Hello, How ', 're you?' ]

// Ques-5) Replace any character
console.log("7) ", msg.replace('H', 'd'));      // dello, How are you?

// Ques-6) Extract part of string 
console.log("8) ", msg.substring(6, 10));        //  How  (startIndex is inclusive while endIndex is exclusive)

// Ques-7) Remove first and last character of string.
console.log("9) ", msg.substring(1, msg.length));           // ello, How are you?
console.log("9) ", msg.substring(0, msg.length - 1));      // ello, How are you?

// Ques-8) Reverse a string
console.log("10) ", msg.split('').reverse().join(''));      // ?uoy era woH ,olleH

// Ques-9) Remove all extra space from start and end
const str = "     Hello       ";
console.log("11) ", str.trim());                            // Hello

// Ques-10) Reverse the string without using any inbuilt method.
function reverseString(str) {
    let rev = [];
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev;
}
console.log(reverseString("Hello, How are you?"));



