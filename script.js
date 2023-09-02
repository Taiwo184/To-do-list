const inputPart = document.getElementById("main")
const listContainer = document.getElementById("list-container")
var submitBtn = document.getElementById("addTask");

submitBtn.addEventListener("click", ()=>{
    if(inputPart.value === ''){
        // console.log("write something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputPart.value;
        console.log(li)
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00D7";
        li.appendChild(span)
    }
    inputPart.value = ''
    saveData();
});
listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // console.log(e)
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove("LI")
    }
})
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
    console.log("showData");
}
showData();