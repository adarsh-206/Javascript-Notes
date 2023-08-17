// Ques-1) Find length of array in JavaScript with and without using length method.

// using length method
function lengthOfArray(arr) {
    return arr.length;
}
console.log("1) ", lengthOfArray([1, 2, 3, 4, 5]));
console.log("2) ", lengthOfArray(["apple", "ball", "cat", "doll", "elephants"]));

// without using length method
function lenOfArray(arr) {
    let length = 0;
    while (arr[length] !== undefined) {
        length++;
    }
    return length;
}
console.log("3) ", lenOfArray([1, 2, 3, 4, 5]));
console.log("4) ", lenOfArray(["apple", "ball", "cat", "doll", "elephants"]));

// ================================================================================================ //

// Ques-2) Find sum of all elements of array using inbulit method and without using any inbuilt method

function sumOfArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log("5) ", sumOfArray([1, 2, 3, 4, 5]));

// ================================================================================================ //

// Ques-3) Find reverse of array without using inbuilt method.

function reverseOfArray(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
    }
    return nums;
}
console.log("6) ", reverseOfArray([1, 2, 3, 4, 5]));
console.log("7) ", lenOfArray(["apple", "ball", "cat", "doll", "elephants"]));

// ================================================================================================ //

// Ques-4) Calculate the count of duplicate elements of array.

function duplicateCount(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}
console.log("8) ", duplicateCount([1, 2, 3, 4, 5, 1, 4, 3, 3]));
console.log("9) ", duplicateCount(["apple", "ball", "cat", "doll", "elephants", "apple", "ball"]));

// ================================================================================================ //

// Ques-5) Count of occurence of each element.

function occurenceCount(nums) {
    let count = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    return count;
}
console.log("8) ", occurenceCount([1, 2, 3, 4, 5, 1, 4, 3, 3]));
console.log("9) ", occurenceCount(["apple", "ball", "cat", "doll", "elephants", "apple", "ball"]));

// ================================================================================================ //

// Ques-6) Print all distinct elements of array.

function distictElements(nums) {
    let unique = [];
    for (let i = 0; i < nums.length; i++) {
        if (unique.indexOf(nums[i]) == -1) {
            unique.push(nums[i]);
        }
    }
    return unique;
}
console.log("10) ", distictElements([1, 2, 3, 4, 5, 1, 4, 3, 3]));

// ================================================================================================ //

// Ques-7) 