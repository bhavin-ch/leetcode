
function twoSum(nums: number[], target: number): number[] | undefined {
    const binSearch = (secondIndex: number): number => {
        let start = 0, end = secondIndex - 1;    
        console.log(`start = ${start}`);
        console.log(`end = ${end}`);
        while (start <= end) {
            const firstIndex: number = start + Math.floor((end - start) / 2);
            console.log('secondIndex', secondIndex);
            console.log('firstIndex', firstIndex);
            console.log('nums[firstIndex]', nums[firstIndex]);
            console.log('nums[secondIndex]', nums[secondIndex]);
            if (nums[secondIndex] + nums[firstIndex] > target) {
                console.log('left');
                end = firstIndex - 1;
            } else if (nums[secondIndex] + nums[firstIndex] < target) {
                console.log('right');
                start = firstIndex + 1;
            } else {
                return firstIndex;
            }
        }
        return -1;
    }
    for (let i = nums.length-1; i >=0; i--) {
        console.log(`############# secondIndex = ${i}`);
        const j = binSearch(i);
        if (j > -1) {
            return [j, i];
        }
    }
};

twoSum([2,7,11,13,15,19,23], 32);