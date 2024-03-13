function solution(money) {
  var answer = [];
  answer.push(Math.floor(money / 5500));
  answer.push(money % 5500);
  return answer;
}

// 다른 풀이
// push를 하는 것보다 배열 형태로 return을 시켜주는게 훨씬 더 효율적인 방법인것같음
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
