// my_string 배열만큼 반복문을 돌리고, 그 안에서 n만큼 또 반복문을 돌려서 answer에 할당하는 방식으로 풀었음
function solution(my_string, n) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++) {
        for (var j = 0; j < n; j++) {
            answer += my_string[i];
        }
    }
    console.log(answer);
    return answer;
}

// 다른 풀이
// 특정 인덱스에 있는 문자를 반환하는 메서드 charAt 사용
function solution(my_string, n) {
    let str = '';
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            str += my_string.charAt(i);
        }
    }
    return str;
}
