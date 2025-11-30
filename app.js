function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === '') {
        alert("Wpisz treść zadania!");
        return;
    }

    const ul = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskText;

    // Logika usuwania po kliknięciu
    li.onclick = function() {
        this.parentNode.removeChild(this);
    };

    ul.appendChild(li);
    input.value = "";
}
