function solution(num_list) {
  return [
    num_list.filter((x) => x % 2 === 0).length,
    num_list.filter((x) => x % 2 != 0).length,
  ];
}

// 다른 풀이 1
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    // 반복문을 돌면서 a가 홀수인지 짝수인지를 판별하여 배열에 1을 더해줌
    // a가 홀수라면 결과는 1이 되고, 짝수라면 a % 2의 결과는 0이 됨
    // 홀수일 경우 answer[1]에 1을 더하고, 짝수일 경우 answer[0]에 1을 더해줌
    answer[a % 2] += 1;
  }

  return answer;
}

// 다른 풀이 2
function solution(num_list) {
  const evenLength = num_list.filter((n) => n % 2 === 0).length;
  return [evenLength, num_list.length - evenLength];
}
