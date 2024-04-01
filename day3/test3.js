//list, object
const list = [];
const list369 = [];
// list.push(2);
// for(let i = 1; i < 101; i++){
//     list.push(i);
// }
// console.log(list);
for(let i = 100; i < 1001; i++){
    list.push(i);
}
for(const num of list){
    let result = num.toString();
    result = result.includes("3") || result.includes("6") || result.includes("9") ? "짝" : num;
    list369.push(result);
}
console.log(list369);

// for (let i = 1; i < 101; i++) {
//     let num = i.toString();
//     num = (num.indexOf("3") != -1) || (num.indexOf("6") != -1) || (num.indexOf("9") != -1) ? "짝" : i;
//     list.push(num);
// }
// console.log(list369);
