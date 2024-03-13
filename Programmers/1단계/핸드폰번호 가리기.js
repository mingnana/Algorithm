function solution(phone_number) {
  var answer = "";
  for (var i = 0; i < phone_number.length; i++) {
    if (i >= phone_number.length - 4) {
      answer += phone_number[i];
    } else {
      answer += "*";
    }
  }
  return answer;
}

// 다른 풀이

function solution2(phone_number) {
  // 뒤 4자리를 기준으로 앞의 번호들을 repeat를 사용해 *처리해주고, substring은 인덱스 값을 사용해 시작점을 정해줄 수 있다.

  return (
    "*".repeat(phone_number.length - 4) +
    phone_number.substring(phone_number.length - 4)
  );
}
/*
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]
    
    출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    */
