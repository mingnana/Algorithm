// filter 메서드는 주어진 함수의 조건을 만족하는 모든 요소로 이루어진 새로운 배열을 생성함
// 각 요소에 대해 주어진 함수를 호출하고, 그 결과가 true인 요소만을 새 배열에 포함시킴
function solution(array, height) {
  var answer = 0;

  answer = array.filter((x) => x > height);
  return answer.length;
}

// 다른 풀이
// for+조건문을 통해 갯수를 늘려가는 방식
function solution(array, height) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}
