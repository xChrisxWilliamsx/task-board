// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const uId = Date.now();
    uId.toString;
    localStorage.setItem('nextId', uId);
    localStorage.getItem("nextId")
}

generateTaskId(); // for testing purposes remove prior to deploy

// Todo: create a function to handle adding a new task
function handleAddTask() {
    $(() => { 
        $("#datePicker").datepicker({  
          changeMonth: true,
          changeYear: true,
          todayHighlight: true,
        })
    }); 

    $('#saveTask').on('click', () => {    
        let titleInput = $('#titleInput').val();  
        let dueDate = $('#datePicker').val();
        let descInput = $('#descInput').val();
        let taskId = localStorage.getItem("nextId");
    
        const newTask = {
            title: titleInput,
            due: dueDate,
            desc: descInput,
            id: taskId,
            lane: 'todo-cards', 
        }

        const today = dayjs().format("MM/DD/YYYY");

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

    $('#cancelTask').on('click', () => {
        $('#titleInput').val("");
        $('#datePicker').val("");
        $('#descInput').val("");
    })
}

handleAddTask(); // for testing purposes remove prior to deploy

// Todo: create a function to create a task card
function createTaskCard(tasks) {
    const taskCard = document.getElementById(`${tasks.lane}`);
    taskCard.insertAdjacentHTML('afterbegin',
        `<div class="taskCard card my-2 text-dark border border-dark border-2">
            <div class="card-header border-bottom border-dark border-2">
                <h5 class="card-title fw-bold">${tasks.title}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-subtitle mt-2 mb-4">${tasks.desc}</h6>
                <p class="card-text">DUE: ${tasks.due}</p>
                <p class="card-text idData">${tasks.id}</p>
                <p class="card-text laneData">${tasks.lane}</p>
                <button type="button" class="btn carddeleteBtn bg-danger border border-dark border-2 text-dark fw-bold" >DELETE</button>
            </div>
        </div>`
    )    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    taskList.forEach(tasks => {
        createTaskCard(tasks);
        
        // if (dayjs(tasks.due).isBefore(dayjs().add(2, 'd'))) {
        //     $('.taskCard').addClass('bg-danger bg-gradient text-white'); 
        // } else if (dayjs(tasks.due).isBefore(dayjs().add(1, 'w'))) {
        //     $('.taskCard').addClass('bg-warning bg-gradient'); 
        // } else {
        //     return;  
        // }
    });
}

renderTaskList(); // for testing purposes remove prior to deploy

// Todo: create a function to handle deleting a task
function handleDeleteTask(){
    $('.carddeleteBtn').on('click', () => {
        const idData = $('.taskCard').children().eq(1).children().eq(2).text();
        const removeCard = taskList.filter((taskList) => taskList.id !== idData);
        localStorage.removeItem('tasks');
        localStorage.setItem('tasks', JSON.stringify(removeCard));
        location.reload();
    });
}

handleDeleteTask(); // for testing purposes remove prior to deploy

// Todo: create a function to handle dropping a task into a new status lane
function handleSort() {
    $(() => {
      $( "#todo-cards, #in-progress-cards, #done-cards").sortable({
        connectWith: ".connectedSortable"
      }).disableSelection();
    });
    
    $('.taskCard').on("mouseup", (event) => {
        event.preventDefault();

        setTimeout(() => {
            const cardLocation = $(event.target).closest('.w-75').attr('id');
            const cardId = $(event.target).closest('.taskCard').children().eq(1).children().eq(2).text();
   
            taskList.map(tasks => tasks.id === cardId && (tasks.lane = cardLocation, true));
            localStorage.removeItem('tasks');
            localStorage.setItem('tasks', JSON.stringify(taskList));
            location.reload();
        }, 0.1);
    })
} 

handleSort(); // for testing purposes remove prior to deploy

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});