var prefixesDivBy5 = function(nums) {  
    const result = [];  // Array to store results for each prefix
    let count = 0;      // Variable to keep track of the current binary number

    for (let bit of nums) {
        // Update the current binary number by shifting left and adding the new bit
        count = ((count << 1) + bit) % 5;
        // Check if the current number is divisible by 5
        result.push(count === 0);
    }
    return result;  // Return the array of results
};