const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const tasks = []; 

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {

        const maxText = taskText.substring(0,35);

        const li = document.createElement("li");
        li.innerHTML = `

            <span>${maxText}</span>
            <button class="editButton">Editar</button>
            <button class="deleteButton">Remover</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        const editButton = li.querySelector(".editButton");
        const deleteButton = li.querySelector(".deleteButton");

        editButton.addEventListener("click", editTask);
        deleteButton.addEventListener("click", deleteTask);

        tasks.push({
            text: taskText,
            element: li
        });
    }
}

function editTask(event) {
    const li = event.currentTarget.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Editar Tarefa:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
        
        const task = tasks.find(t => t.element === li);
        task.text = newText;
    }
}

function deleteTask(event) {
    const li = event.currentTarget.parentElement;
    li.remove();
    
    const taskIndex = tasks.findIndex(t => t.element === li);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }
}