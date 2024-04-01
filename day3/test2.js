// let i = 0;

for(let i = 0; i < 10; i++){
    console.log(i);
}
for(let i = 0; i < 10; i++){
    if(i === "0") console.log(i);
    else if (i === 0) console.log(true);
}
if("true" === true) console.log("같다");

function isDecimal(num){
    for(let i = 2; i*i <= num; i++){
        if(num % i == 0) return false;
    }
    return true;
}

console.log("------------------------");
for(let i = 2; i <= 100; i++){
    if(isDecimal(i)) console.log(i);
}
