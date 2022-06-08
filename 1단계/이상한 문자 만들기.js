function solution(s) {
    var answer = [];
    
    var x = s.split(' ')    // 단어별로 나눔 ['try', 'hello', 'world']
    for(var i=0; i<x.length; i++){
        answer.push(
            x[i].split('') // 나눈것을 기준으로 요소를 하나씩 나눠줌 [[ 't', 'r', 'y' ], [ 'h', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd' ]]
            .map((cur, j)=> j %2 ? cur.toLowerCase() : cur.toUpperCase())
            .join('')   // 작은 배열들을 합쳐줌 ['Try', 'HeLlO', 'WoRlD']
        )
    }
    
    return answer.join(" ") // 큰 배열들을 합쳐줌 [Try HeLlo WoRlD]
}