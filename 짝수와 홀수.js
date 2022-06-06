// 풀이1
function solution(num){
    var answer = '';
    if (num % 2 === 0){
        return answer = "Even"
    } else {
        return answer = "Odd"
    }
}

// 풀이2
function solution(num) {
    var answer = '';
    return num % 2 === 0 ? "Even" : "Odd"
    
}
