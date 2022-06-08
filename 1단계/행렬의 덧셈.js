function solution(arr1, arr2) {
    var answer = [];
    
    for(var i = 0; i<arr1.length; i++){
        var sum = [];
        for(var j = 0; j<arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }
    return answer;
}

// ***********************

function solution2(arr1, arr2){
    return arr1.map((a,i) => arr2[i].map((b,j) =>b + arr2[i][j]));
}

// ***********************
var value = 3 // 값이 상속받는것, 스칼라
var value = [1, 2, 3] // 배열값, 벡터
var value = [[1,2,3] , [1,2,3]] // 배열내 배열값, 행렬(matrix)

var value = [3] // 벡터
var value = [[3]] // 행렬
