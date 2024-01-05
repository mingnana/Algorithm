function solution(my_string, index_list) {
  var answer = "";
  for (i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }
  return answer;
}

// 다른 풀이
function solution(my_string, index_list) {
  var answer = "";
  // index_list를 for .. of문을 활용해 원소를 순회하고
  for (let x of index_list) {
    // my_string을 slice로 x번째에서 x+1까지 잘라서 answer에 넣어줌
    answer += my_string.slice(x, x + 1);
  }
  return answer;
}
