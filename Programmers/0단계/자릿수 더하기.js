function solution(n) {
    var answer = 0;
    var numString = n.toString(); // 정수를 문자열로 변환

    for (var i = 0; i < numString.length; i++) {
        answer += parseInt(numString[i]); // 각 자리 숫자를 정수로 변환하여 합에 더함
    }

    return answer;
}

// 다른풀이
function solution(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10; // 현재 자릿수의 숫자를 더함
        n = Math.floor(n / 10); // 다음 자릿수로 이동함
    }
    return sum;
}
