let pendingTask = new Array();
let completedTask = new Array();



//Adding a new Task
let newTask = document.getElementById('new-task-btn');
let task_container = document.getElementById('recent-task-container');

function checkforKey(id) {
    if (id == 'new-task' && event.key === 'Enter')
        document.querySelector('button.new.add-btn').click();
    else if (id == 'edit-task') {
        if (event.key === 'Esc')
            document.querySelector('button.edit.cancel-btn').click();
        else if (event.key === 'Enter')
            document.querySelector('button.edit.save-btn').click();
    }
    else if (id == 'delete-task') {
        if (event.key === 'Esc')
            document.querySelector('button.delete.cancel-btn2').click();
        else if (event.key === 'Enter')
            document.querySelector('button.delete.delete-btn2').click();
    }

}

let id = 0;
newTask.addEventListener('click', function () {

    //get the text
    let myTask = (document.getElementById('task-input').value).trim();

    //check: input should not be empty
    if (myTask != '') {
        id++;
        var task = {
            id: id,
            task: myTask
        }
        pendingTask.push(task);

        //crate element for the task
        let editIcon = document.createElement('i');
        editIcon.classList.add('bi', 'bi-pen-fill');

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn', 'btn', 'bg-success-subtle', 'text-dark', 'd-flex', 'py-2', 'rounded-0', 'fs-6', 'fw-bold');
        editBtn.id = 'edit-' + id;
        editBtn.setAttribute('type', 'button');
        editBtn.setAttribute('data-bs-toggle', 'modal');
        editBtn.setAttribute('data-bs-target', '#edit-task-Modal');
        editBtn.setAttribute('onclick', 'openEditTaskModal(' + id + ')');

        editBtn.innerHTML = 'Edit&nbsp;';
        // editBtn.appendChild(editIcon);

        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('bi', 'bi-trash-fill');

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn', 'btn', 'bg-danger-subtle', 'text-dark', 'd-flex', 'py-2', 'rounded-0', 'rounded-end', 'fs-6', 'fw-bold');
        deleteBtn.id = 'delete-' + id;
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('data-bs-toggle', 'modal');
        deleteBtn.setAttribute('data-bs-target', '#delete-task');
        deleteBtn.setAttribute('onclick', 'openDeleteTaskModal(' + id + ')');


        deleteBtn.innerHTML = 'Delete&nbsp;';
        // deleteBtn.appendChild(deleteIcon);a

        let checkbox = document.createElement("input");
        checkbox.classList.add('form-check-input', 'task-item-checkbox')
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('oninput', 'setTaskCompleted(' + id + ')');
        checkbox.id = 'checkbox-' + id;

        let text = document.createElement('p');
        text.classList.add('task-text', 'form-control', 'mx-2', 'fs-6', 'fw-bold');
        text.id = 'text-' + id;
        // text.setAttribute('type', 'text');
        // text.setAttribute('readonly', 'true')
        text.innerText = myTask;

        let li = document.createElement("li");
        li.classList.add('task-item', 'd-flex', 'align-items-center', 'border', 'rounded-2', 'ps-2');
        li.id = 'task-' + id;

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        task_container.prepend(li);

        //reset value of input
        document.getElementById('task-input').value = '';
    }
});


//Edit task
function openEditTaskModal(id) {
    let modalInput = document.getElementById('modal-input');
    modalInput.setAttribute('value', document.getElementById('text-' + id).innerText);
    document.querySelector('button.save-btn').id = 'save-' + id;
}

function saveTask(id) {
    id = id.substring(5);
    let myTask = document.getElementById('modal-input').value;

    //update in array
    pendingTask.forEach(ele => {
        if (ele.id === parseInt(id)) {
            ele.task = myTask;
        }
    })

    //update in the ui
    document.getElementById('text-' + id).innerText = myTask;

    //close modal
    document.querySelector('button.cancel-btn').click();
}


//delete task
function openDeleteTaskModal(id) {
    let modalText = document.getElementById('modal-text');
    modalText.setAttribute('value', document.getElementById('text-' + id).innerText);
    document.querySelector('button.delete-btn2').id = 'delete-' + id;
}
function deleteTask(id) {
    id = id.substring(7);

    //remove from array
    for (var i = 0; i < pendingTask.length; i++) {
        if (pendingTask[i].id == parseInt(id)) {
            pendingTask.splice(i, 1);
        }
    }

    //remove from ui
    document.getElementById('task-' + id).remove();
    console.log(pendingTask);

    //close modal
    document.querySelector('button.cancel-btn2').click();
}



//Task is completed

function setTaskCompleted(id) {
    console.log('completed - ' + id);
    if (document.getElementById('checkbox-' + id).checked)
        document.getElementById('task-' + id).classList.add('task-completed');
    else
        document.getElementById('task-' + id).classList.remove('task-completed');


}













