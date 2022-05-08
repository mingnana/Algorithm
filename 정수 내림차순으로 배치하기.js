function solution(n) {
    return Number(n.toString()
                .split('')  //문자열을 구분자로 잘라서 배열로 저장
                .sort() // 배열정렬
                .reverse()  // 배열을 반대로
                .join('')   // 합쳐서 문자열로 만듬
)}