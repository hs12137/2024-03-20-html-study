const list = [];
for(let i = 1; i < 11; i++){
    list.push(i);
}
console.log(list);

list[4] = 10;
console.log(list);

list["5"] = 20;
console.log(list);

//object {}
const obj = { age: 10, print: () => console.log(obj["age"]) };
obj["name"] = "park";
// Map<String, Integer> map = new HashMap<>():
console.log(obj);
obj["print"]();

const classroom = {
    students : [
        {name:"김부자", age:22},
        {name:"조진호", age:32},
    ],
    manager : [{ name:"송희", age:30}]
};
console.log(classroom.students[1].name);
classroom.list = list;
list[0] = 100;
console.log(classroom);