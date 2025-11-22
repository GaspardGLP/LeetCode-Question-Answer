var minimumOperations = function(nums) {
    // Initialize a counter to track how many operations are needed
    let count = 0;

    // Loop through each number in the array
    for (let num of nums) {

        // If the number is NOT divisible by 3
        // then it will take exactly 1 operation (+1 or -1) to make it divisible.
        if (num % 3 !== 0) {
            count++;  // Increase the operation count
        }
    }

    // Return the total minimum number of operations required
    return count;
};
