const fib = (n: number) => {
    const ans = Array(n);
    ans[0] = ans[1] = 1;
    for (let i=2; i < n; i++) {
        ans[i] = ans[i-1] + ans[i-2];
    }
    return ans[n-1];
}

console.log(fib(1000))