
const isBadVersionFactory = (threshold: number) => (v: number) => {
    console.count('isBadVersion called');
    console.log(`v = ${v}`);
    console.log('############################')
    return v >= threshold; 
};

const solution = function(isBadVersion: (version: number) => boolean) {
    return function(n: number): number {
        let good=1, bad=n;
        while(bad > good) {
            console.log(`##### bad=${bad}; good=${good} #####`);
            if (bad - good === 1) return good === 1 ? isBadVersion(good) ? good : bad : bad;
            const mid = good + Math.floor((bad - good)/2);
            if (isBadVersion(mid)) bad = mid;
            else good = mid;
        }
        return good === 1 ? isBadVersion(good) ? good : bad : bad;
    };
};

const solution1 = function(isBadVersion: any) {
    return function(n: number): number {
        while (isBadVersion(Math.floor(n / 2))) {
            n = Math.floor(n / 2);
        }
        while (isBadVersion(--n)) {}

        
        return n + 1;
    };
};

const ans = solution(isBadVersionFactory(1))(1);

console.log(`answer is ${ans}`);