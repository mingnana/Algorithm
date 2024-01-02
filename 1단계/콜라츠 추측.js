function solution(num) {
  for (var i = 0; i < 500; i++) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num == 1) {
      return i;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// 다른 사람 풀이

function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
