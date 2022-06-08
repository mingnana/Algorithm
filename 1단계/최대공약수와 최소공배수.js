function solution(n, m) {
    var answer = [];
    var bigger = 0;
    var smaller = 0;

    if(n>m){
        bigger =n;
        smaller = m;
    }else{
        bigger = m;
        smaller = n;
    }
    
    function cal(bigger, smaller){
        if(bigger % smaller === 0){
            return answer.push(smaller)
        }else{
            cal(smaller, bigger % smaller);
        }
    }
    cal(bigger, smaller);
    answer.push(bigger * smaller / answer[0]);
    
    return answer;
}