var findFinalValue = function(nums, original) {

    // Convert the array into a Set to allow fast lookups (O(1) time complexity)
    const set = new Set(nums);

    // Keep checking as long as the current value of "original" exists in the Set
    while (set.has(original)) {

        // If found, multiply the value by 2
        original *= 2;
    }

    // When the value is no longer found in the Set, return the final result
    return original;
};