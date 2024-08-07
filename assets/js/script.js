// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const uId = Date.now();
    console.log(uId); // for testing purposes remove prior to deploy
    uId.toString;
    localStorage.setItem('nextId', uId);
    localStorage.getItem("nextId")
}

generateTaskId(); // for testing purposes remove prior to deploy

// Todo: create a function to create a task card
function createTaskCard() {
    localStorage.getItem("tasks")
    const taskCard = document.getElementById('todo-cards');
    taskCard.insertAdjacentHTML('beforeend',
        `<div class="card my-2">
            <div class="card-header">
            <h5 class="card-title">${taskList[0].title}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-subtitle mb-4">${taskList[0].desc}</h6>
                <p class="card-text">DUE: ${taskList[0].due}</p>
                <p class="card-text">TASK ID: ${taskList[0].id}</p>
                <button type="button" class="btn btn-danger">DELETE</button>
            </div>
        </div>`
    )
}

// Todo: create a function to handle adding a new task
function handleAddTask(){
    $('#saveTask').on('click', function () {    
        let titleInput = $('#titleInput').val();  
        console.log(titleInput); // for testing purposes remove prior to deploy
        let dueDate = $('#datePicker').val();
        console.log(dueDate); // for testing purposes remove prior to deploy
        let descInput = $('#descInput').val();
        console.log(descInput); // for testing purposes remove prior to deploy
        let taskId = localStorage.getItem("nextId");
        console.log(taskId); // for testing purposes remove prior to deploy
    
        const newTask = {
            title: titleInput,
            due: dueDate,
            desc: descInput,
            id: taskId,
        }
        taskList.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        $(".formInput")[0].reset();
        $(".modal").modal("hide");

        createTaskCard(); // for testing purposes remove prior to deploy
    })
}

handleAddTask(); // for testing purposes remove prior to deploy


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
