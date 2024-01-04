function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2]; // 짝수일 경우, 두글자 가져오기
  } else {
    answer = s[Math.floor(s.length / 2)]; // 홀수일 경우, 반내림 하기
  }
  return answer;
}

// 다른 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
