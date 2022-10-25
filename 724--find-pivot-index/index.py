from typing import List

def pivotIndex(nums: List[int]) -> int:
    w_sum = sum(nums)
    l_sum = 0
    for i in range(0,len(nums)):
        if l_sum == w_sum - nums[i] - l_sum:
            return i
        l_sum += nums[i]
    return -1

print(pivotIndex([1,7,3,6,5,6]))