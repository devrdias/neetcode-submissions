class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // target = nums[i] + nums[j]
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0 ; i < nums.length; i++) {
            const diff = target - nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (diff === nums[j]) {
                    return [i,j];
                }
            }
        }
        return [0,0];
    }
}
