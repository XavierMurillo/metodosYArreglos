const buttonToDo = document.querySelector(".addToDo");
const inputToDo = document.querySelector(".inputTodo");
const idDisplay = document.querySelector(".idList");
const taskNameDisplay = document.querySelector(".taskList");
const taskCountDisplay = document.querySelector(".taskNumber");
const completeButtonDisplay = document.querySelector(".completeButton");
const deleteButtonDisplay = document.querySelector(".deleteButton");
const toDoList = [
  { id: 1, tarea: "Hacer desafio", completado: false },
  { id: 2, tarea: "Ir a clases", completado: false },
  { id: 3, tarea: "Estudiar", completado: false },
];

function deleteTask(tarea) {
  indexTask = toDoList.findIndex((task) => task.tarea == tarea);
  toDoList.splice(indexTask, 1);
  renderToDo(toDoList);
  taskCounter(toDoList);
}

function completeTask(tarea) {
  indexTask = toDoList.findIndex((task) => task.tarea == tarea);
  toDoList[indexTask].completado = !toDoList[indexTask].completado;
  renderToDo(toDoList);
  taskCounter(toDoList);
}

function renderToDo(toDoList) {
  let htmlId = "";
  let htmlTaskName = "";
  let htmlDelete = "";
  let htmlComplete = "";
  for (let task of toDoList) {
    if (task.completado == true) {
      htmlId = htmlId + `<li style="color:blue">${task.id}</li> `;
      htmlTaskName = htmlTaskName + `<li style="color:blue">${task.tarea}</li>`;
      htmlComplete =
        htmlComplete +
        `<li><input type="checkbox" onclick="completeTask('${task.tarea}')" checked></input></li>`;
    } else {
      htmlId = htmlId + `<li>${task.id}</li> `;
      htmlTaskName = htmlTaskName + `<li>${task.tarea}</li>`;
      htmlComplete =
        htmlComplete +
        `<li><input type="checkbox" onclick="completeTask('${task.tarea}')"></input></li>`;
    }
    htmlDelete =
      htmlDelete +
      `<li><button onclick="deleteTask('${task.tarea}')">X</button></li>`;
  }
  idDisplay.innerHTML = htmlId;
  taskNameDisplay.innerHTML = htmlTaskName;
  completeButtonDisplay.innerHTML = htmlComplete;
  deleteButtonDisplay.innerHTML = htmlDelete;
}

function taskCounter(toDoList) {
  let allTasks = toDoList.length;
  let completedTasks = 0;
  for (task of toDoList) {
    if (task.completado == true) {
      completedTasks = completedTasks + 1;
    }
  }
  let html = `<p>Total: ${allTasks}</p> <p>Realizadas: ${completedTasks}</p>`;
  taskCountDisplay.innerHTML = html;
}

function addElement(toDoList) {
  let id;
  let newTaskValue = inputToDo.value;
  if (toDoList.length > 0) {
    id = toDoList.length + 1;
  } else {
    id = 1;
  }
  if (newTaskValue == "") {
    alert("Ingrese una tarea");
  } else {
    let newTask = { id: id, tarea: newTaskValue, completado: false };
    toDoList.push(newTask);
    inputToDo.value = "";
  }
  renderToDo(toDoList);
  taskCounter(toDoList);
}
taskCounter(toDoList);
renderToDo(toDoList);
buttonToDo.addEventListener("click", () => addElement(toDoList));
