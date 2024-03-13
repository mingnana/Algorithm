function solution(seoul) {
  for (var i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

// seoul 배열의 길이만큼 for문을 이용해 반복하고, kim과 일치할경우 index로 반환하기

// 풀이2
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}

// 풀이3
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

// 억음부호 (``)
// string 값에 사용하는데, 문자열을 그대로 표현할 수 있으며, 문자열 내부에 표현식을 포함할 수 있다.

// indexOf
// 특정문자의 위치를 찾기 위해 사용하는 함수
