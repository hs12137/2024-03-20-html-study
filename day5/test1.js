const onClickHandler = () => alert("버튼");
const interval = setInterval(() => {
    console.log("aa");
}, 1000);
const onClickStopInterval = () => clearInterval(interval);
const p = document.getElementById
const onClickRemove = () => {
    const re = document.getElementById("hide");
    if(re) return re.remove();
    const body = document.getElementsByTagName("body");
    const p = document.createElement("p");
    p.setAttribute("id", "hide");
    p.innerHTML = "showwwwwwwwww";
    body[0].append(p);
}