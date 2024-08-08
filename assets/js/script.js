// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));
const today = dayjs().format("MM/DD/YYYY");

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const uId = Date.now();
    uId.toString;
    localStorage.setItem('nextId', uId);
    localStorage.getItem("nextId")
}

generateTaskId(); // for testing purposes remove prior to deploy

// Todo: create a function to handle adding a new task
function handleAddTask(){
    
    $(function () { 
        $("#datePicker").datepicker({  
          changeMonth: true,
          changeYear: true,
          todayHighlight: true,
        }).datepicker('update', new Date()); 
    }); 

    $('#saveTask').on('click', function () {    
        let titleInput = $('#titleInput').val();  
        let dueDate = $('#datePicker').val();
        let descInput = $('#descInput').val();
        let taskId = localStorage.getItem("nextId");
    
        const newTask = {
            title: titleInput,
            due: dueDate,
            desc: descInput,
            id: taskId,
        }

        if ($('#datePicker').val() < today) {
            alert("Please Select A Valid Date");
            $('#datePicker').val("");
        } else {
            taskList.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(taskList));
            $(".formInput")[0].reset();
            $(".modal").modal("hide");
            location.reload();
        }
    })
}

handleAddTask(); // for testing purposes remove prior to deploy

// Todo: create a function to create a task card
function createTaskCard(tasks) {
    localStorage.getItem("tasks");
    const taskCard = document.getElementById('todo-cards');
    taskCard.insertAdjacentHTML('afterbegin',
        `<div class="taskCard card my-2 text-dark border border-dark border-2">
        <div class="card-header border-bottom border-dark border-2">
        <h5 class="card-title fw-bold">${tasks.title}</h5>
        </div>
        <div class="card-body">
        <h6 class="card-subtitle mt-2 mb-4">${tasks.desc}</h6>
        <p class="card-text">DUE: ${tasks.due}</p>
        <p class="card-text visually-hidden">TASK ID: ${tasks.id}</p>
        <button type="button" class="btn bg-danger border border-dark border-2 text-dark fw-bold">DELETE</button>
        </div>
        </div>`
    )
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    taskList.forEach(tasks => {
        createTaskCard(tasks);
        
        if (dayjs(tasks.due).isBefore(dayjs().add(2, 'd'))) {
            $('.taskCard').addClass('bg-danger bg-gradient text-white'); 
        } else if (dayjs(tasks.due).isBefore(dayjs().add(1, 'w'))) {
            $('.taskCard').addClass('bg-warning bg-gradient'); 
        } else {
            return;  
        }

        $( function() {
            $( ".taskCard" ).draggable();
        });
    });
}

renderTaskList(); // for testing purposes remove prior to deploy

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
