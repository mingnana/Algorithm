function solution(s) {
    var answer = true;
    var parseInts = parseInt(s);
    if(s.length == 4 || s.length == 6){
        if(s == parseInts){
            return true
        }
    }
    return false
}

// 출처 : https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%8B%A4%EB%A3%A8%EA%B8%B0-%EA%B8%B0%EB%B3%B8.js
function solution(s) {
    // 길이가 4 혹은 6이 아니면 false 반환
    if (s.length !== 4 && s.length !== 6) return false;
    // 각 자리중에 숫자가 아닌 것이 하나라도 있으면 false 반환
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) return false;
    }
    // 위의 모든 조건에 포함되지 않으면
    // (길이가 4 혹은 6이고, 숫자로만 구성되어 있으면) true 반환
    return true;
  }
  