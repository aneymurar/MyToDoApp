function addTask() {
    let input = document.getElementById("taskInput");
    let taskValue = input.value;
    
    if (taskValue === "") {
        alert("Kuch toh likho!");
        return;
    }

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskValue;
    
    ul.appendChild(li);
    input.value = ""; // Input box khali karne ke liye
}
