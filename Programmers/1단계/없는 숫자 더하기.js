function solution(numbers) {
  var answer = 0;
  for (i = 0; i <= 9; i++) {
    // Array.includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드임
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

// reduce 메서드를 사용한 다른 풀이
function solution(numbers) {
  return (
    45 -
    numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
}

// array.reduce((accumulator, currentValue)=>accumulator + currentValue, initialValue)
// reduce 사용법
const arr = [1, 2, 3, 4, 5];

arr.reduce(function (acc, cur, idx) {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

// arr cur idx
// 0 1 0
// 1 2 1
// 3 3 2
// 6 4 3
// 10 5 4
