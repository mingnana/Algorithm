function solution(s, n){
    return s.split("")  // 배열을 문자열로 나눔
        .map(value => { // mapping
        if (value === " ") return value;    // 문자열의 값이 공백일경우 값 그대로 리턴
        return value.toUpperCase().charCodeAt() + n > 90    
        // 왜 90인가?
        // 대문자 아스키코드는 65가 A, 90이 Z이다
        // 소문자 아스키코드는 97이 a, 122가 z임
        // 변환한 아스키코드 + n이 90이상이면 알파벳 단어 길이 25 + 알파벳 앞으로 이동 1만큼 빼주고 그렇지 않으면 그대로 더한 후 해당 아스키코드의 알파벳으로 변환해줌
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n)
    }).join("");
}

/*
    - charCodeAt 이란? 
    - 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 함수
    - var stringName = '생활코딩'
    - alert(stringName.charCodeAt(0)); // 493373 
    - http://www.unicode.org/charts/PDF/UAC00.pdf 에서 '생'을 찾아보면 'C0DD'인데 이것은 16진수다. 
    - 이를 10진수로 변환하면 493373이 된다.
    (출처 : https://opentutorials.org/course/50/87)
*/
/*
    - fromCharCode 이란?
    - 아스키코드번호를 받아 문자열을 구성해주는 함수
    문1) 아스키 코드값이 111에 해당하는 문자를 출력할때는?
        :: var val = 111;
        :: document.write(String.fromCharCode(val));
        :: o 출력
    문2) String.fromCharCode를 이용하여 문자열 "ASCII" 를 출력?
        :: document.write("String.fromCharCode(65, 83, 67, 73, 73) : " + String.fromCharCode(65, 83, 67, 73, 73) + "<br>");
        :: String.fromCharCode(65, 83, 67, 73, 73) : ASCII
*/