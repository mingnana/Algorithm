function solution(arr, divisor) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }

  // sort 비교함수는 두개의 인자를 받아서 두 값을 비교한 결과에 따라 정렬 순서를 결정함
  // a-b = 오름 차순
  // b-a = 내림차순
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
