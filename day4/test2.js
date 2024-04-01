const students = [
    {name:"김부자", age:22},
    {name:"조진호", age:32},
    {name:"김세현", age:15},
    {name:"정희석", age:33},
];
// for(let i = 0; i < students.length; i++){
//     students[i].age++;
// };
console.log(students);
const ageup = [];
// for(const student of students){
//     student.age++;
//     ageup.push(student);
// }
// ageup.push(students.map((element, index, arr) => {
//     element.age++;
//     return element;
// }));

// 1.
// for(let i = 0; i < students.length; i++){
//     const obj = {name: students[i].name, age: students[i].age + 1};
//     ageup.push(obj);
// };
// 2.
for(let i = 0; i < students.length; i++){
    const obj = {...students[i], age: students[i].age + 1};
    ageup.push(obj);
};
console.log(students);
console.log(ageup);

const [b, js] = students;
const {name, age} = js;


const isAdultList = [];
for(const student of students){
    const obj = {...student};
    if(obj.age < 20) obj.isAdult = false;
    else obj.isAdult = true;
    isAdultList.push(obj);
}
console.log(isAdultList);
