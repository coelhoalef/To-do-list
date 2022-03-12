// Pegar o valor do input

let input = document.getElementById("inputTask");
let taskArray = [];
let list = document.getElementById("container")

loadTask();

// colocar o valor do input em um array com button 

function createTask() {
    taskArray.push(input.value);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    updateScreen();
}



// adicionar as tasks na tela 

function updateScreen() {
    list.innerHTML = ""
    taskArray.forEach(task => {
        list.innerHTML += `<li><input type="checkbox" class="check">${task}<button class="btnDelete" onclick="deleteTask(this,'${task}')"><p class="delete">X</p></button></li>`
    })
    document.getElementById("inputTask").value = "";
}


// deletar uma task e remover do localStorage

function deleteTask(element, task) {
    console.log(element, task)
    taskArray = taskArray.filter(value => value != task)
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    updateScreen();
}


// carregar tasks na tela
function loadTask() {
    taskArray = JSON.parse(localStorage.getItem('taskArray')) || []
    updateScreen();
}





