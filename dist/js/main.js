let toDoBox=document.querySelector(".todo-list"),textInput=document.querySelector(".text-input"),addButton=document.querySelector(".add"),createTask=function(){console.log(textInput.value);let e=document.createElement("li");e.innerText=textInput.value,e.classList.add("list"),toDoBox.append(e);let t=document.createElement("div");t.classList.add("checkbox"),e.append(t);t.addEventListener("click",(function(){e.classList.add("strike"),t.innerText="X"}));let n=document.createElement("button");n.classList.add("remove"),e.append(n),n.innerText="remove";n.addEventListener("click",(function(){e.remove()}))};addButton.addEventListener("click",createTask);
//# sourceMappingURL=main.js.map