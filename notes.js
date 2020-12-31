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

