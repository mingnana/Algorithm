function solution(numbers, num1, num2) {
    // slice 메서드 == num1 번째부터 num2번째까지 부분 배열을 추출
    return numbers.slice(num1, num2 + 1);
}
