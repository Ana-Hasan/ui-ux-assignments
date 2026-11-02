
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Add a new task
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;

    createTask(title, description);

    taskForm.reset();
});

function createTask(title, description) {

    // Create task div
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Create title and description
    let taskHeading = document.createElement("h3");
    taskHeading.textContent = title;

    let taskDesc = document.createElement("p");
    taskDesc.textContent = description;

    // Create buttons
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark as Completed";
    completeBtn.className = "completeBtn";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    // Mark as completed or incomplete
    completeBtn.addEventListener("click", function() {

        taskHeading.classList.toggle("completed");
        taskDesc.classList.toggle("completed");

        if (completeBtn.textContent === "Mark as Completed") {
            completeBtn.textContent = "Mark as Incomplete";
        }
        else {
            completeBtn.textContent = "Mark as Completed";
        }
    });

    // Delete task
    deleteBtn.addEventListener("click", function() {

        taskList.removeChild(taskDiv);

    });

    // Edit task
    editBtn.addEventListener("click", function() {

        if (editBtn.textContent === "Edit") {

            const titleInput = document.createElement("input");
            titleInput.value = taskHeading.textContent;

            const descInput = document.createElement("textarea");
            descInput.value = taskDesc.textContent;

            taskDiv.replaceChild(titleInput, taskHeading);
            taskDiv.replaceChild(descInput, taskDesc);

            editBtn.textContent = "Save";
            editBtn.className = "saveBtn";

        }

        else {

            const newTitle = document.createElement("h3");
            newTitle.textContent = titleInput.value;

            const newDesc = document.createElement("p");
            newDesc.textContent = descInput.value;

            if (completeBtn.textContent === "Mark as Incomplete") {
                newTitle.classList.add("completed");
                newDesc.classList.add("completed");
            }

            taskDiv.replaceChild(newTitle, titleInput);
            taskDiv.replaceChild(newDesc, descInput);

            taskHeading = newTitle;
            taskDesc = newDesc;

            editBtn.textContent = "Edit";
            editBtn.className = "editBtn";
        }

    });

    // Add elements to task div
    taskDiv.appendChild(taskHeading);
    taskDiv.appendChild(taskDesc);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);

    // Add task to task list
    taskList.appendChild(taskDiv);
}
