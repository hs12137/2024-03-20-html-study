const students = [
    {name:"김부자", age:22},
    {name:"조진호", age:32},
    {name:"김세현", age:15},
    {name:"정희석", age:33},
];
//map
const isAdultList = students.map((element, index, arr) => {
    return {...element, isAdult: element.age > 19};
});
console.log(isAdultList);

const ageUpFunc = (element) => ({...element, age: element.age+1});
const ageup = students.map(ageUpFunc);
console.log(ageup);

const kimList = students.filter((element) => element.name.includes("김"));
console.log(kimList);

//sort
const ageAsc = students.sort((a, b) => b.age - a.age);
console.log(ageAsc);