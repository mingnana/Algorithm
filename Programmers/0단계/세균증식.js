// 다른 풀이
function solution(n, t) {
    var answer = 0;
    // 2 ** t는 2를 t번 곱한 값을 의미함
    // 그 값에 n을 곱하면 n을 2의 t제곱만큼 곱한 결과가 됨
    return n * 2 ** t;
}

// 다른풀이
function solution(n, t) {
    // i는 1부터 t+1 까지 반복문을 돌면서 반복됨
    // 각 반복에서 n은 2를 곱한값으로 갱신됨
    // n = 3, t =4라면,
    // 첫번째 반복에서 n은 2에 2를 곱한 4가 됨
    // 두번째 반복에서 n은 4에 2를 곱한 8이 됨
    for (let i = 1; i < t + 1; i++) n *= 2;
    return n;
}
