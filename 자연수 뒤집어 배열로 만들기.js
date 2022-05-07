function solution(n) {
    var answer = [];

    return n.toString()
    .split('')
    .reverse()
    .map(n => parseInt(n));
}