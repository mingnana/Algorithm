function solution(array) {
    
    var answer = 0;
    
    const ceilMath = Math.floor(array.length / 2)
    const Array = array.sort((a, b) => a - b);
    return Array[ceilMath];
}