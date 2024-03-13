function solution(n) {
  var answer = 0;
  for (var i = 0; i <= n; i++) {
    if (n % i === 0) {
      // n으로 i를 나눴을 때, 나머지가 0이면 약수
      answer += i;
    }
  }
  return answer;
}
