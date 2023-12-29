function solution(s) {
  var answer = "";

  if (s.split("p").length === s.split("y").length) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

// 다른 사람 풀이
function solution(s) {
  var answer = true;

  var p = s.toLowerCase().split("p").length;
  var y = s.toLowerCase().split("y").length;

  return p == y ? true : false;

  // 문자열에 특정문자의 개수를 구하려면 split을 사용하면됨
  // "ababb".split("a") 의 결과는 ["", "b", "bb"]
  // 즉, "a"의 갯수는 3에서 1을 뺀 2
}
