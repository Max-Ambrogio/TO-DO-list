let toDoBox = document.querySelector(".todo-list")
let textInput = document.querySelector(".text-input")
let addButton = document.querySelector(".add")



let createTask = function(){
    console.log(textInput.value)
    let newLi = document.createElement('li');
    newLi.innerText = textInput.value;
    newLi.classList.add('list')
    toDoBox.append(newLi)
    let checkBox = document.createElement('div')
    checkBox.classList.add('checkbox')
    newLi.append(checkBox)
    let completed = function(){
        newLi.classList.add('strike')
        checkBox.innerText = "X"
    }
    checkBox.addEventListener('click' , completed)
    let removeButton = document.createElement('button')
    removeButton.classList.add('remove')
    newLi.append(removeButton)
    removeButton.innerText = "remove"
    let removeTask = function(){
        newLi.remove();
    }
    removeButton.addEventListener('click' , removeTask)
}

addButton.addEventListener('click' , createTask)



