function solution(my_string) {
    var answer = '';

    for (var i = 0; i <= my_string.length - 1; i++) {
        if (my_string[i] != 'a' && my_string[i] != 'e' && my_string[i] != 'i' && my_string[i] != 'o' && my_string[i] != 'u') {
            answer += my_string[i];
        }
    }

    return answer;
}

// 다른 풀이 1
function solution(my_string) {
    const str = 'aeiou';
    let newString = my_string
        // 문자 단위로 분리하여 배열로 변환
        .split('')
        // 필터 함수 사용하여 str에 포함되지 않는 문자들을 선택하여 필터링
        .filter((el) => !str.includes(el))
        // 문자열로 결합
        .join('');

    return newString;
}
// 다른 풀이 2
function solution(my_string) {
    // 정규 표현식을 사용하여 문자열에서 모음을 제거
    return my_string.replace(/[aeiou]/g, '');
}
