function solution(numbers) {
    var answer = 0;
    // 배열을 내림차순으로 정렬
    // a-b는 오름차순, b-a는 내림차순
    numbers.sort((a, b) => b - a);

    return numbers[0] * numbers[1];
}
