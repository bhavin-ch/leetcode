function isIsomorphic(s: string, t: string): boolean {
    let done: number[] = [];
    let letters: string[] = [];
    const s1 = s.split('');
    const t1 = t.split('');
    for (let i=s.length - 1; i>=0; i--) {
        if (done.indexOf(i) === -1) {
            if (letters.indexOf(t1[i]) !== -1) return false;
            console.log('#########');
            console.log(`i is ${i}`);
            console.log(`t[${i}] is ${t1[i]}`);
            console.log(`s[${i}] is ${s1[i]}`);
            for (let j=i-1; j>=0; j--) {
                if (done.indexOf(j) !== -1) continue;
                console.log('---');
                console.log(`j is ${j}`);
                console.log(`s[${j}] is ${s1[j]}`);
                console.log(s1[j], t1[i]);
                if (s1[j]===s1[i]) {
                    s1[j] = t1[i];
                    done.push(j);
                    console.log('done -> ', done);
                }
            }
            s1[i] = t1[i];
            letters.push(t1[i])
            console.log(s1.join(''),t1.join('')) 
        }
    }
    return s1.join('') === t1.join('');
};

// console.log(isIsomorphic('paper', 'title'))
// console.log(isIsomorphic('badc', 'baba'))
console.log(isIsomorphic('abab', 'baba'))


// c -> a
// d -> b
// a -> a
// b -> b

// xxx -> 012
// egg -> 577
// add -> 144


// 565
// 132