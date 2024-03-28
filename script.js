const inputText = document.getElementById("input-box")
const ul = document.querySelector(".list-content")

function AddTask(){
    if(inputText.value === ""){
        alert("You must write samething")
    }else{
        var li = document.createElement("li")
        li.innerHTML = inputText.value
        ul.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputText.value =""
    saveDate()
}
ul.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveDate()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveDate()
    }
})

// vamos salvar os nosso dados no localstorage

function saveDate(){
    localStorage.setItem("data", ul.innerHTML)
}
function showTask(){
    ul.innerHTML = localStorage.getItem("data")
}
showTask()