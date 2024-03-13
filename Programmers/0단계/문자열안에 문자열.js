function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}
// includes는 두가지 방식으로 사용가능
// 문자열 : String.prototype.includes()
// 배열 : Array.prototype.includes()

// .includes( valueToFind[, fromIndex] )
// 첫번째 매개변수에는 찾고자 하는 값을 입력
// 두번째 매개변수에는 생략가능하나 시작위치를 입력할 수 있음

// 다른풀이
function solution(str1, str2) {
    if (str1.indexOf(str2) !== -1) {
        return 1; // str1 안에 str2가 포함되어 있음
    } else {
        return 2; // str1 안에 str2가 포함되어 있지 않음
    }
}
// indexOf - 배열에서 주어진 요소를 찾을 수 있는 첫번째 인덱스를 반환하고,
// 찾을 수 없는 경우 -1 반환
