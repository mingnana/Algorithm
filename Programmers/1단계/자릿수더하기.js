function solution1(n) {
  var answer = 0;

  var answer = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  // 첫번째 값 + 현재값 == 누적값1
  // 누적값1 + 다음 현재값 == 누적값2
  // 누적값2 + 다다음 현재값 == 누적값3

  return answer;
}

// 풀이2
function solution2(n) {
  var answer = 0;

  var a = String(n);
  for (var i = 0; i < a.length; i++) {
    answer += parseInt(a[i]);
  }

  return answer;
}

// 풀이3
function solution(n) {
  var answer = 0;

  n.toString()
    .split("")
    .forEach((n) => {
      answer += parseInt(n);
    });
  return answer;
}

// forEach는 주어진 함수를 배열요소에 각각 실행함
/*
    const test = ['a', 'b', 'c', 'd']
    test.forEach(element => console.log(element))
    
    결과값
    :: 'a', 'b', 'c', 'd' 출력
*/
