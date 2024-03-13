function solution(arr, divisor) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
      // answer.push(arr[i]).sort((a, b) => a - b) 로직이 안되는 이유?
      // 배열에 arr[i]를 추가하고 그 후 에 sort 메서드가 호출되므로 기존의 배열에 적용됨 -> 원래의 answer 배열 반환
    }
  }

  // sort 비교함수는 두개의 인자를 받아서 두 값을 비교한 결과에 따라 정렬 순서를 결정함
  // a-b = 오름 차순
  // b-a = 내림차순
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
