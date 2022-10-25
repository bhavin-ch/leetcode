function search1(nums: number[], target: number, guess = 0, start= 0, left=false): number {
    // const newGuess = guess + (left ? -1 : 1)*Math.floor(nums.length/2);
    const delta = Math.floor(nums.length/2);
    const newGuess = left ? guess - delta + 1 - (nums.length % 2) : guess + delta;
    console.log(`∆=${delta}; start=${start}; newGuess=${newGuess} ===> nums[${newGuess}]=${nums[delta]}; nums=[${nums.join(' ,')}];`)
    if (nums[delta] === target) return start + newGuess;
    if (nums[delta] < target) return search1(nums.slice(newGuess+1), target, newGuess+1, start + newGuess + 1, false);
    if (nums[delta] > target) return search1(nums.slice(0, newGuess), target, newGuess-1, start, true);
    return -1;
};

function search2(nums: number[], target: number): number {
    const search2Fn = (guess: number, delta: number) => {
        const newGuess = guess + delta;
        console.log(`∆=${delta}; newGuess=${newGuess} ===> nums[${newGuess}]=${nums[newGuess]}`)
        if(nums[newGuess] === target) return newGuess;
        const newDelta = Math.abs(Math.floor(delta/2)) + 1;
        // const calculateNewDelta = (left: boolean) => {
        //     if (left) return newGuess/2
        // }
        if (nums[newGuess] < target) return search2Fn(newGuess, newDelta)
        if (nums[newGuess] > target) return search2Fn(newGuess, -1*newDelta)
        return -1
    }
    return search2Fn(0, Math.floor(nums.length/2));
};

function search(nums: number[], target: number): number {
    const searchFn = (start: number, stop: number) => {
        const mid = start + Math.floor((stop - start)/2)
        console.log(`start=${start}; mid=${mid}; stop=${stop}; ===> nums[${mid}]=${nums[mid]}`)
        if (stop < start) return -1;
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) return searchFn(mid + 1, stop);
        if (nums[mid] > target) return searchFn(start, mid - 1);
        return -1;
    }
    return searchFn(0, nums.length - 1);
}
console.log(search([-1, 0, 3, 5, 9,12,15,19,60,71,72], 77));
// console.log(search([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10], 5));