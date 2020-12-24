const numbers = [2,7,11,15,21]

const twoSum = (numbers, target) => {
    const comp = {};
    for (let i=0, i < numbers.length; i++) {
        if (comp[numbers[i]]){
            return [comp[numbers[i]], i]
        }
        comp[target - numbers[i]] = 1
    }
    return 'Not Found'
}; 

twoSum(numbers, 26)