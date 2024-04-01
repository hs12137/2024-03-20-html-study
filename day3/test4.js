const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
//짝 홀 계산해서 리스트 반환
// const isEvenList = [];
// for(let num of list){
//     if(num % 2 == 1 || num == 0) isEvenList.push(false);
//     else isEvenList.push(true);
// }
// console.log(isEvenList);
const isEvenList = list.map((element, index, arr) => {
    return element % 2 == 0;
});
console.log(isEvenList);