const numbers = [2,7,11,15,21]

const twoSum = (numbers, target) => {
    const comp = {};
    for (let i=0; i < numbers.length; i++) {
        if (comp[numbers[i]]){
            return [comp[numbers[i]], i]
        }
        comp[target - numbers[i]] = 1
    }
    return 'Not Found'
}; 

twoSum(numbers, 26)

// brute force
const bruteForce = (numbers, target) => {
    for (let i=0; i < numbers.length; i++){
        for (let j=0; j < numbers.length; j++){
            if (numbers[i] + numbers[j] === target) {
                return [i,j]
            }
        }
    }
};

bruteForce(numbers, 26)