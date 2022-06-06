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

// 
var arr = [4, 3, 2];
console.log(arr);               // [4, 3, 2]
console.log(...arr);            // 4, 3, 2
