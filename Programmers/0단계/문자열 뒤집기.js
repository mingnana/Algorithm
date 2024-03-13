function solution(my_string) {
    var answer = [];

    // length -1 부터 시작 후 0보다 크거나 같을때까지 감소시키기
    for (var i = my_string.length - 1; i >= 0; i--) {
        // push는 배열에 새로운 요소를 추가해야 할 때 사용함
        answer.push(my_string[i]);
    }
    // join은 배열을 문자열로 변환할수있음
    return answer.join('');
}

function solution(my_string) {
    // split 메서드를 ㅅ용해서 문자열을 배열로 전환
    // reverse 메서드 사용하여 배열 뒤집기
    var reversedArray = my_string.split('').reverse();
    return reversedArray.join('');
}
