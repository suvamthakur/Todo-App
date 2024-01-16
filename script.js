let main = document.querySelector(".container");
let form = document.querySelector("form");
let task = document.querySelector(".add-task");
let taskList = document.querySelector(".task-list");
let taskBox = document.querySelector(".task-box");
let taskListItem = document.querySelector(".task-container")

form.addEventListener("submit", (e)=> {
    e.preventDefault();  //To stop refreshing the page after clicking the submit button

    if(!task.value) {
        alert("Please Enter a task");   
    } else {
        taskListItem = document.createElement("div");   // Creating all html divs and adding classes in each div
        taskListItem.classList.add("task-container");
        taskList.appendChild(taskListItem);

        taskBox = document.createElement("div");
        taskBox.classList.add("task-box");
        taskListItem.appendChild(taskBox);

        const input = document.createElement("input");
        input.classList.add("task");
        input.type = "task";
        input.setAttribute("readonly", "true"); // So user can't write in this input text box
        input.value = task.value;   // Adding the task value into the task taskBox/input
        taskBox.appendChild(input);
        task.value = "";   // After creating a new task. The main task adder box's text get deleted

        // Adding edit and delete buttons into the new taskBox 
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.innerHTML = `<i class="fa-solid fa-lg fa-pen-to-square"></i>`;
        taskBox.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = `<i class="fa-solid fa-lg fa-trash" style="color: #ffffff;"></i>`;
        taskListItem.appendChild(deleteBtn);

        // Edit operation
        editBtn.addEventListener("click", ()=> {
            if(editBtn.innerHTML != "Save") {
                input.removeAttribute("readonly");
                input.focus();  // to focus the selected task automatic 
                editBtn.parentNode.style.outline = "1px solid black";   // to display outline the selected task for edit
                editBtn.innerHTML = "Save";
            } else {
                input.setAttribute("readonly", "true");
                editBtn.parentNode.style.outline = "none";
                editBtn.innerHTML = `<i class="fa-solid fa-lg fa-pen-to-square"></i>`;
            }
        })

        // Delete operation
        deleteBtn.addEventListener("click", ()=> {
            taskList.removeChild(deleteBtn.parentNode);
        })
    }
})
