function solution(s) {
    var answer = '';
    return s.split('')  // 배열로 전환
    .sort() // 정렬
    .reverse()  // 순서 바꾸기
    .join('')   // 문자열로 전환
}