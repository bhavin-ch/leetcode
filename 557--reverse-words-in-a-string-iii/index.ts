function reverseWords(s: string): string {
    const words = s.split(' ');
    for (let word of words) {
        let temp: string, chars = word.split('');
        const len = chars.length;
        const halflen = Math.floor(len/2);
        for (let i = len-1; i >= halflen; i--) {
            temp = chars[i];
            chars[i] = chars[len - i - 1];
            chars[len - i - 1] = temp;
        }
        word = chars.join('')
        console.log(word)
    }
    return words.join(' ');
};

reverseWords("Let's take LeetCode contest")