function canThreePartsEqualSum(arr: number[]): boolean {
    const sum = arr.reduce((a,b) => a+b);
    // i iterates from len - 1 -> 2
    let i_sum = 0;
    for (let i=arr.length - 1; i > 1; i--) {
        i_sum += arr[i];
        // j iterates from i - 1 -> 1
        let j_sum = 0;
        for (let j=i-1; j > 0; j--) {
            j_sum += arr[j];
            console.log(i, j, i_sum, j_sum, sum - i_sum - j_sum);
            if (i_sum === j_sum && j_sum === sum - i_sum - j_sum) {
                console.log(`i => ${i}`)
                console.log(`j => ${j}`)
                console.log(`arr[i] => ${arr[i]}`)
                console.log(`arr[j] => ${arr[j]}`)
                return true
            };
        }
    }
    return false;
};

// console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]));
console.log(canThreePartsEqualSum([1,-1,1,-1]));