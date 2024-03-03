// 오답 코드
// slice-n 이 음수일때만 answer를 증가 시키고 있지만 slice가 더 큰 경우에도 피자를 시켜야 할 필요가 있음
// 반복문 안에서 break를 사용하는데, 반복문을 한번만 실행하고 끝내는 것으로 slice가 n보다 클 경우 바로 반복문 종료함
function solution(slice, n) {
    var answer = 0;
    while (slice - n < 0) {
        answer++;
        if (slice - n > 0) {
            answer++;
            break;
        }
    }
    return answer;
}

// 다른 풀이
// slice 가 0보다 클때까지 반복하며, 각 반복마다 slice - n 처리
// anser의 횟수를 증가함

function solution(slice, n) {
    // Math.ceil = 소수점 올림
    var answer = Math.ceil(slice / n);
    return answer;
}
// 다른 풀이
function solution(slice, n) {
    var answer = 0;

    if (n <= slice) {
        answer = 1;
    } else if (n > slice) {
        answer = n % slice === 0 ? n / slice : parseInt(n / slice) + 1;
    }

    return answer;
}
