function solution(num) {
    for(var i = 0; i < 500; i++){   // 500번을 반복해라
        
        if(num%2 === 0){    // 나눈값이 0이라면
            num = num /2
        } else if(num==1){  // 1이 결과로 나왔다면
            return i;
        } else if (num% 2 ==1){
            num = num *3 +1    
        }
    } 
    return -1   // 500번을 반복했는데도 원하는 값이 안나왔다면
}