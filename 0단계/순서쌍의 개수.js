// 1부터 n까지의 모든 숫자 쌍을 확인하므로 반복문을 최적화해야함
function solution(n) {
    var answer = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if (i * j === n) {
                answer++;
            }
        }
    }
    return answer;
}

// 다른 풀이
function solution(n) {
    // 정답 배열 생성
    const result = [];
    // n까지 반복하면서 현재 숫자 i가 n의 약수인지 확인함
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) result.push(i);
    }
    // 모든 약수의 수는 순서쌍의 수와 같음
    return result.length;
}
