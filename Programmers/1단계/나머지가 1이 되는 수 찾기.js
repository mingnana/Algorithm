function solution(n) {
  var answer = 0;
  var i = 0;
  for (i = 0; i < n; i++) {
    if (n % i === 1) {
      answer = i;
    }
    if (answer > 0) {
      break;
    }
  }
  return answer;
}
