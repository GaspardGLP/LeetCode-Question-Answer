class Solution:
    def minOperations(self, nums):
        stack = []
        ans = 0
        for x in nums:
            while stack and stack[-1] > x:
                stack.pop()
            if x > 0 and (not stack or stack[-1] < x):
                stack.append(x)
                ans += 1
        return ans