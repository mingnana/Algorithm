function solution(price) {
    var answer = 0;
    if (price >= 500000) {
        return price * 0.8;
    } else if (price >= 300000) {
        {
            return price * 0.9;
        }
    } else {
        return price * 0.95;
    }
}
