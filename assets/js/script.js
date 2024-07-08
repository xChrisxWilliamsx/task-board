// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const uId = Date.now();
    console.log(uId); // for testing purposes remove prior to deploy
    localStorage.setItem('uId', uId);
}

generateTaskId(); // for testing purposes remove prior to deploy

// Todo: create a function to create a task card
function createTaskCard(task) {
    const toDo = document.getElementById('todo-cards');
    toDo.insertAdjacentHTML('beforeend',
        `<div class="card">
            <div class="card-header">
            <h5 class="card-title">TEST TITLE</h5>
            </div>
            <div class="card-body">
                <h6 class="card-subtitle mb-4">TEST DESC.</h6>
                <p class="card-text">DUE: -TEST DATE- 01/01/0101</p>
                <button type="button" class="btn btn-danger">DELETE</button>
            </div>
        </div>`
    )
}

createTaskCard(); // for testing purposes remove prior to deploy

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

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
