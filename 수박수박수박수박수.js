function solution(n) {
    var answer = '';
    
    for(i=0; i<n; i++){
        answer += i % 2 === 0 ? "수" : "박"
    }    
    return answer
}

//풀이2
// 출처 : https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98.js
function solution(n) {
    // "수박"을 n번 반복한 문자열의 0번 인덱스부터 n만큼 추출해서 반환
    return "수박".repeat(n).substr(0, n);
  }


//substr : 특정 자릿수만큼 잘라내는 함수
// var test = 'ABCDEFG' 에서 'CD' 문자열만 잘라내고 싶을 경우
// SUBSTR('ABCDEFG', 3, 2)
