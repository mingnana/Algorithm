function solution(n) {
    var answer = [];

    return n.toString()
    .split('')
    .reverse()
    .map(n => parseInt(n));
}

// map
배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과는 모아 새로운 배열로 반환함
var array = [1, 4, 7, 10]
var map = array.map(x => x*2);
console.log(map)
    :: array [2, 8, 14, 20] 반환 
