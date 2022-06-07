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

//배열.reduce((누적값, 현잿값, 인덱스, 요소) => {return 결과}, 초기값);
const oneTwoThree = [1, 2, 3];
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6
