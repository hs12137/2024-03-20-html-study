let text = "hi";
text = 1;

// function sum(a, b){
//     return a + b;
// }
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 5));

if(sum(2, 3)==5 || sum(4, 1)>5) console.log("aa");

const arr = [1, 2, 3 ,4 ,5];

arr.sort // sort
arr.map // 원본을 가고
arr.filer // 거를때

const obj = {
    name: "박미람",
    age: 24,
    gender: 2,
    toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`
};
console.log(obj.toString());

const obj2 = {
    name: "박미람",
    age: 24,
    gender: 2,
};
const {name, age, gender } = obj2;
const makePerson =(name, age) => {
    return {name, age};
};
console.log(makePerson("이수진", 20));
const isAdult = (obj) => {
    return { name: obj.name, age: obj.age, isAdult: obj.age > 19};
};
const 이수진 = makePerson("이수진", 20);
console.log(isAdult(이수진));