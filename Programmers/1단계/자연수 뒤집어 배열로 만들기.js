// 풀이1 - 해결은 했으나 i=1로 고정시켰기때문에 근본적인 해결방법은 아닌듯 함 ..
function solution(n) {
    var answer = [];
    var a = String(n)
    for(i=1; i<=a.length; i++){
        answer.push(i)
    }
    return answer.reverse();
}


// 풀이2
function solution(n) {
    var answer = [];

    return n.toString()
    .split('')
    .reverse()
    .map(n => parseInt(n));
}

// map
// 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과는 모아 새로운 배열로 반환함
var array = [1, 4, 7, 10]
var map = array.map(x => x*2);
console.log(map)
    :: array [2, 8, 14, 20] 반환 

//예제2
const oneTwoThree = [1, 2, 3]
result = oneTwoThree.map((v) => {
    return v});
// 결과값은 [1, 2, 3]이 찍힘

result = oneTwoThree.map((v) => {
    return v + 1; });
// 결과값은 [2, 3, 4]가 찍힘
