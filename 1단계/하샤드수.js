function solution(x) {
  var answer = true;

  var arr = String(x).split("");
  // 문자열로 바꾼 x를 split을 통해 자릿수마다로 나눔
  // (''): 자릿수
  // (' ') : 단어별
  // () : 전체

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    // Number : 표현식을 숫자로 변환
  }

  var answer = x % sum === 0 ? true : false;
  // x를 sum으로 나눴을때 나머지가 0이라면 true 출력, 아니면 false 출력
  return answer;
}
