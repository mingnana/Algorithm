process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(var i = 0; i < b; i++){
        var answer = '';
        for(var j = 0; j < a; j++){
            answer += '*'
        }
    console.log(answer);
    }
});

// **********************************************************


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    var row="*".repeat(a)
    for(var i=0; i<b; i++){
        console.log(row);
    }
});
