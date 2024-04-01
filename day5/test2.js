

const name = "asdas";
const obj = { name };
console.log(obj);
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) { 
            console.log('확인');
            entry.target.className = "box show"
        }
        else {
            console.log("실패");
            entry.target.className = "box"
        }
    })
});
const target = document.getElementsByClassName("box")[3];
observer.observe(target);