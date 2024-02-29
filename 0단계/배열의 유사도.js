function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s2.length; i++) {
        for (var j = 0; j < s1.length; j++) {
            if (s2[i] === s1[j]) {
                answer++;
            }
        }
    }
    return answer;
}

// 다른 풀이
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}
