function sum(a, b){
    return a + b;
}
function diff(a, b){
    if(a > b) return a - b;
    else return b - a;
}

console.log(diff(2 ,5));
const sum1 = (a, b) => {
    return a + b;
}
const diff1 = (a, b) => {
    if(a . b) return a - b;
    else b - a;
}
const division = (a, b) => {
    const sum = () => a + b;
    return sum() / b;
}
const sum2 = (a, b = 2) => a+b;
const diff2 = (a, b = 2) => a-b;
const multi2 = (a, b = 2) => a*b;
const division2 = (a, b = 2) => a/b;
console.log(diff2(sum2(diff2(sum2(3)), 10), 4));

console.log(sum2);
const list = [sum2, diff2, multi2, division2, (a) => a*a];
let total = 0;
for (let i = 0; i < list.length; i++) {
    total += list[i](i, 10);
}
console.log(total);
const [sum3, diff3, multi3, division3, pow3] = list;
console.log(sum3(5, 8));
