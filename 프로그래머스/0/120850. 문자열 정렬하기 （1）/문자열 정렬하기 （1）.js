function solution(my_string) {
    var answer = [];
    
    var splitString = my_string.split("");
    console.log(splitString, "ㅎㅎ");
    for(let i=0; i<=my_string.length; i++){
        if(/[0-9]/g.test(splitString[i])){
            answer.push(parseInt(splitString[i]))
        }
    }
    return answer.sort((a,b)=>a-b);
}