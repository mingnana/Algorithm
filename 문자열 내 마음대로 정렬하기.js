function solution(strings, n) {
    var answer = [];
    strings.sort((a,b) => {
        if(a[n].charCodeAt() === b[n].charCodeAt()){
            return a > b ? 1 : -1;
        } else return a[n].charCodeAt() - b[n].charCodeAt();
    })
    return strings
}

// charCodeAt란?
// 주어진 인덱스에 대한 utf-16코드는 나타내는 정수를 반환함