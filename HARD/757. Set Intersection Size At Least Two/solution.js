var intersectionSizeTwo = function(intervals) {

    // Sort intervals by their end value in ascending order.
    // If two intervals have the same end, sort by start in descending order.
    // This ordering helps us place points as far to the right as possible,
    // increasing the chance that the same points will satisfy upcoming intervals.
    intervals.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });

    // 'a' and 'b' represent the two largest points currently chosen.
    // They always satisfy all previously processed intervals.
    // Initially set to -1 because no points are selected yet.
    let a = -1;
    let b = -1;

    // 'res' counts the total number of points added to the containing set.
    let res = 0;

    // Iterate over each interval in the sorted order.
    for (const [start, end] of intervals) {

        // Check whether the current selected points are inside the interval.
        // 'a' is inside if a >= start (since a <= end by construction)
        const inA = a >= start;

        // 'b' is inside if b >= start
        const inB = b >= start;

        // If both a and b are already inside the current interval,
        // the interval already has at least two points → nothing to add.
        if (inA && inB) continue;

        // If only 'b' is inside, we need exactly one more point
        // to make at least two points inside this interval.
        if (inB) {
            res += 1;       // We add one point
            a = b;          // Shift 'a' up to the old 'b'
            b = end;        // Add the new point at the farthest right position
        } else {
            // If neither point is inside the interval,
            // we must add two new points to satisfy it.
            // The optimal choice is: (end - 1) and end.
            res += 2;
            a = end - 1;
            b = end;
        }
    }

    // Return the total number of points added.
    return res;
};
