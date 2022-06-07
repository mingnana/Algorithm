function solution1(n)
{
    var answer = 0;

    var answer = n.toString()
    .split('')
    .reduce((acc,cur)=> acc + Number(cur), 0)
    // 첫번째 값 + 현재값 == 누적값1
    // 누적값1 + 다음 현재값 == 누적값2
    // 누적값2 + 다다음 현재값 == 누적값3
    
    return answer;
}


//
function solution2(n)
{
    var answer = 0;

    var a = String(n)
    for(var i = 0; i<a.length; i++){
        answer += parseInt(a[i])
    }

    return answer;
}