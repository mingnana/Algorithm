function solution(s) {
    var answer = '';
    return s.toString() // 문자열로 전환
    .split('')  // 배열로 전환
    .reverse()  // 순서 바꾸기
    .join('')   // 문자열로 전환
}