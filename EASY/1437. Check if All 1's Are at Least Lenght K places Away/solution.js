var kLengthApart = function(nums, k) {

    let lastOneIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (lastOneIndex !== -1 && i - lastOneIndex - 1 < k) {
                return false;
            }
            lastOneIndex = i;
        }
    }

    return true;
    
};