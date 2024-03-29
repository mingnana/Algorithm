function solution(my_string) {
 var answer = 0;

    const numbers = my_string.match(/[0-9]/gi);
    

    answer = numbers.reduce((acc, cur)=>acc + parseInt(cur),0)

    return answer;
}
