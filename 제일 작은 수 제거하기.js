function solution(arr) {
    if(arr.length > 1){
        var min = Math.min(...arr);
        var idx = arr.indexOf(min);
        //조건에 해당하는 범위중 첫번째인덱스를 선택
        arr.splice(idx, 1)
        // idx 자기자신을 제외시킴
    }else{
        arr = [-1]
    }
    return arr;
}

// ... arr
var arr = [4, 3, 2];
console.log(arr);               // [4, 3, 2]
console.log(...arr);            // 4, 3, 2

//splice
arr.aplice(시작점, 길이, 추가요소1, 추가요소2)

* 요소추가
var num1 = ['a', 'b', 'c', 'd']
var num2 = num1.splice(1, 0, 'f', 'g')
    :: 배열의 index 1번 위치에서 길이가 0만큼 잘라내고, f와 g를 추가
* 결과
num2 = ['a', 'f', 'g', 'b', 'c', 'd']


* 요소추가
var num1 = ['a', 'b', 'c', 'd']
var num2 = num1.splice(1,1)
    :: 배열의 index 1번 위치에서 1만큼 잘라내기
* 결과
num2 = ['a', 'c', 'd']
