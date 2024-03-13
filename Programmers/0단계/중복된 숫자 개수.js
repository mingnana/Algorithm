function solution(array, n) {
    return array.filter((x) => x === n).length;
}
function solution(array, n) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === n) {
            count++;
        }
    }

    return count;
}
