var countPalindromicSubsequence = function(s) {
    const n = s.length;

    // first[i]  = first position of character 'a' + i in the string
    // last[i]   = last position of character 'a' + i in the string
    const first = new Array(26).fill(n);   // init with n (not seen yet)
    const last  = new Array(26).fill(-1);  // init with -1 (not seen yet)

    // 1) Find first and last occurrence of each character
    for (let i = 0; i < n; i++) {
        const idx = s.charCodeAt(i) - 97;  // 'a' -> 0, 'b' -> 1, ...
        first[idx] = Math.min(first[idx], i);
        last[idx] = Math.max(last[idx], i);
    }

    let result = 0;

    // 2) For each possible outer character 'x'
    for (let c = 0; c < 26; c++) {
        const left = first[c];
        const right = last[c];

        // If the character appears less than twice,
        // we cannot form x ? x with it
        if (left >= right - 1) continue;

        // Use a Set to count distinct middle characters y
        const middleChars = new Set();

        // Scan characters strictly between left and right
        for (let i = left + 1; i < right; i++) {
            middleChars.add(s[i]);
        }

        // Each distinct y gives a unique palindrome x y x
        result += middleChars.size;
    }

    return result;
};
