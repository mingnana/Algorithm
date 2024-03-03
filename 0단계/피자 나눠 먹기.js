function solution(slice, n) {
    var answer = 0;

    if (n <= slice) {
        answer = 1;
    } else if (n > slice) {
        answer = n % slice === 0 ? n / slice : parseInt(n / slice) + 1;
    }

    return answer;
}
