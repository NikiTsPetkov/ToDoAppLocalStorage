let buttonTask = document.querySelector(".buttonSubmit");
const list = document.querySelector(".time");

let icon = document.createElement("i")
icon.setAttribute("class","fa fa-trash");


let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));
buttonTask.addEventListener("click",addTodos);

list.addEventListener("click",function(event){
  event.preventDefault();
  let iconNumber = String(event.path[2].getAttribute("id"));
  let index = iconNumber.substr(iconNumber.length-1);
  itemsArray.splice(index,1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  resetTodos();
  renderTodos();
})

window.addEventListener("load", function(){
  renderTodos();
});

function addTodos(){
  let task = document.querySelector(".taskText").value;
  let deadline = document.querySelector(".deadline").value;
  itemsArray.push([task,deadline]);
  document.querySelector(".taskText").value = "", document.querySelector(".deadline").value = "";
  localStorage.setItem("items", JSON.stringify(itemsArray));
}

const renderTodos = () => {
    itemsArray.forEach(([key, values],n) => {
    document.querySelector(".todo").innerHTML += `<p>${key}</p>`;
    document.querySelector(".time").innerHTML += `<p id="icon${n}">${values} <span>${icon.outerHTML}</span></p>`;
    });
}

const resetTodos = () => {
  document.querySelector(".todo").innerHTML = ``;
  document.querySelector(".time").innerHTML = ``;
}

buttonTask.addEventListener("click", function () {
  resetTodos();
  renderTodos();
  document.querySelector(".taskText").value = "", document.querySelector(".deadline").value = "";
})
