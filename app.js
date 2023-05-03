let pendingTask = new Array();
let compeltedTask = new Array();

let newTask = document.getElementById("new-task-btn");
let task_container = document.getElementById("recent-task-container");

function checkforEnter() {
    if (event.key === 'Enter')
        newTask.click()
}

let id = 0;
newTask.addEventListener("click", function () {
    let myTask = document.getElementById("task-input").value;
    id++;
    const task = {
        id: id,
        text: myTask,
    };
    pendingTask.push(task);

    let docparser = new DOMParser();
    let tasks = docparser.parseFromString("<li class=\"d-flex align-items-center border rounded-2 ps-2\"><input type=checkbox class=\"form-check-input\" value=checkedValue ><input type=text class=\"task-text form-control mx-2 fs-6 fw-bold\" value=" + task.text + " > <button class=\"btn bg-success-subtle text-dark d-flex py-2 rounded-0 fs-6 fw-bold\" type=button  data-bs-toggle=\"modal\" data-bs-target=\"#edit-task-Modal\" > <i class=\"bi bi-pen-fill\" ></i> &nbsp; Edit </button> <button class=\"btn bg-danger-subtle text-dark d-flex py-2 rounded-0 rounded-end fs-6 fw-bold\" type=button data-bs-toggle=modal data-bs-target=\"#delete-task\"><i class=\"bi bi-trash-fill\"></i>&nbsp;delete </button> </li>", 'text/html');

    task_container.appendChild(tasks.documentElement)
    console.log(pendingTask)


});










