//BRUTE FORCE 
// each number should be added to each *other* number in the array, and if we ever find two which add to the target, stop and return the indicies that we are on 

// begin with an iteration 
 for(let i=0; i<nums.length; i++){

 }

// iterate again 
 for(let i=0; i<nums.length; i++){
    let currentNum = nums[i] 
        // currentNum keeps track of the current number in the array and needs to be compared against every other number in the array. 
    for (let j=i+1; j<nums.length; j++){
        let comparingNum = nums[j]
    }
}

// add currentNum and comparingNumb and see if it equals out to the target 
for(let i=0; i<nums.length; i++){
    let currentNum = nums[i] 
    for (let j=i+1; j<nums.length; j++){
        let comparingNum = nums[j]
        
        if(comparingNum + currentNum === target){
            // we know we have found the solution, so we should return the two indicies here. 
            return [i, j]
        }
    }
}
// time complexity : O(n^2)
// space complexity : O(n)


//ELEGANT 
// create a dictionary of the numbers (aka hash or object). Leverage ability to find potential matches for each of the numbers. 

let dictionary = {}
for (let i=0; i<nums.length; i++){
    // each go around, we are going to make a new entry into the dictionary so we can keep track of the numbers we have seen and potential matches. 
    let currentNum = nums[i]
    if (dictionary[currentNum] === 0 || dictionary[currentNum]){
        return [dictionary[currentNum], i]
    }
    else {
        let match = target - currentNum
        dictionary[match] = i
        // since we have to return the index, we save the index of the match 
    }
}

//FOR EXAMPLE 
nums = [2,7,11,15] 
target = 9

const twoSum = (nums, target) => {
    let dictionary = {}
    for (let i=0; i<nums.length; i++){
        let currentNum = nums[i]
        if (dictionary[currentNum] === 0 || dictionary[currentNum]){
            return [dictionary[currentNum], i]
        } else {
            let match = target - currentNum
            dictionary[match] = i
        }
    }
};

// First Iteration
    i= 0
    currentNum = 2 
    // 2 does not exist as a key in the dictionary object, so it moves on to the else statement 
    match = 9 - 2 = 7
    // save match value as a key (7) and index as value of that key (0)
    // Therefore, the dictionary object will be updated as follows: 
    dictionary = {7:0}
// Second Iteration 
    i = 1
    currentNum = 7
    // 7 exists in dictionary object so we return the value of the key (0) and current iteration (1)
     


