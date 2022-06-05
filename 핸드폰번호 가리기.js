function solution(phone_number) {
    var answer = '';
    for(var i=0; i<phone_number.length; i++){
        if(i >= phone_number.length-4){
            answer += phone_number[i]
        }else{
            answer += "*"
        }
    }
    return answer;
}

// *****************************

function solution2(phone_number){
    var answer = '';
    
    answer = "*".repeat(phone_number.length-4) + phone_number.slice(-4);    
    return answer

/*
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]
    
    출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    */
