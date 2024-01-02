function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort() // 배열정렬
      .reverse() // 배열을 반대로
      .join("") // 합쳐서 문자열로 만듬
  );
}
