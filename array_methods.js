const arr = [51, 42, 33, 24, 15];

// length = no. of elements in array
console.log("1)", arr.length);              // 5

// shift = removes the 1st element of array
console.log("2)", arr.shift());            // 51, gives value of deleted element,
console.log("3)", arr)                     // [ 42, 33, 24, 15 ]

// unshift = adds an element at first index
console.log("4)", arr.unshift(51));       // 5; gives length of array and add an element at first position
console.log("5)", arr.unshift(60, 70))    // 7; can add multiple elements at beginning of array
console.log("6)", arr);                   // [60, 70, 51, 42, 33, 24, 15]


// pop = remove element from end
// push = add element at end
const arr1 = [10, 20, 30, 40, 50];
console.log("7)", arr1.pop());                   // 50; gives the removed element
console.log("8)", arr1)                          // [ 10, 20, 30, 40 ]
console.log("9)", arr1.push(50, 60));           // 6; add element at end => returns length of array after addition
console.log("10)", arr1);                       // [ 10, 20, 30, 40, 50, 60 ]


// indexOf = gives index of given element
const arr2 = [10, 20, 30, 40, 50];
console.log("11)", arr2.indexOf(50));                // 4 (if not present then return -1)


// lastIndexOf = gives last occurence
const arr3 = [10, 20, 30, 40, 50, 30];
console.log("12)", arr3.lastIndexOf(30));            // 5


// includes = return true if present and false if not present
const arr4 = [10, 20, 30, 40, 50];
console.log("13)", arr4.includes(300));             // false


// join
const arr5 = [10, 20, 30, 40, 50];
console.log("14)", arr5.join(','));                  // 10,20,30,40,50                


// reverse
console.log("15)", arr5.reverse());      // [ 50, 40, 30, 20, 10 ]  return type will be an array

// concat = merge array or values to array
const arr6 = [10, 20, 30, 40, 50];
console.log("16)", arr6.concat(60, 70));        // [10, 20, 30, 40, 50, 60, 70]


// forEach
const numbers = [1, 2, 3, 4];

numbers.forEach(function (number, index, array) {
    array[index] = number * 2;
});

console.log("17", numbers);                 // [ 2, 4, 6, 8 ]            


// every = checks every element and return true/false based on checking condition
const nums = [40, 10, 67, 56];
const x = nums.every((item) => {
    return item >= 10;
})
console.log("18)", x);                      // true


// some = return true if any one element satisfies the condition
const nums1 = [40, 55, 23, 54, 65, 34];
const res = nums1.some((item) => {
    return item > 55;
})
console.log("19)", res);                    // true


// filter = return portion of array which satisfies the condition
const filter = nums1.filter((item) => {
    return item > 23;
})
console.log("20)", filter);                    // [ 40, 55, 54, 65, 34 ]


// slice = used to extract a portion of an array and return it as a new array, takes two arguments: the starting index (inclusive) and the ending index (exclusive) of the portion you want to extract.
// 5-1 = 4 elements are removed
const y = nums1.slice(1, 5);
console.log("21)", y);                         // [ 40, 55, 54, 65, 34 ]


// splice = used to change the contents of an array by removing or replacing elements; modify the original array in place and returns an array of the removed elements
// splice(startIndex, deleteCount, ...itemsToInsert);
// startIndex: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array, starting at the startIndex. If set to 0, no elements are removed.
// itemsToInsert: Optional. Elements to insert at the startIndex.
const ress = nums1.splice(2, 1);                           // remove 5 elements starting from index=2
console.log("22)", ress);                                 // [23];  returns the array of removed elements
console.log("23)", nums1);                                // [ 40, 55, 54, 65, 34 ] remaining array
const nums2 = [40, 55, 23, 54, 65, 34, 87, 56];
const rex = nums2.splice(2, 5, 22, 33);                   // remove 5 elements starting from index=2 and add [22, 33]
console.log("24)", nums2);                                // [ 40, 55, 22, 33, 56 ]


// map = used to create a new array by applying a given function to each element of an existing array
const nums3 = [40, 55, 23, 54, 65, 34];
const rest = nums3.map((item) => {
    return item * 2;
})
console.log("25)", rest);                               // [ 80, 110, 46, 108, 130, 68 ]