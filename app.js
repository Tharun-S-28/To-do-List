
function AddTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("tasklist");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}






