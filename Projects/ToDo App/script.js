const addButton = document.getElementById("addTaskButton");
const showOptionsBtn = document.querySelector(".showOptionsBtn");
const options = document.querySelector(".options");
const daysContainer = document.getElementById("days");
const taskDateInput = document.getElementById("taskDateInput");
const taskTimeInput = document.getElementById("taskTimeInput");
const searchInput = document.getElementById("searchInput");
const todayDate = new Date();
taskDateInput.value = `${todayDate.getFullYear()}-${String(todayDate.getMonth() + 1).padStart(2, "0")}-${String(todayDate.getDate()).padStart(2, "0")}`;
taskTimeInput.value = `${String(todayDate.getHours()).padStart(2, "0")}:${String(todayDate.getMinutes()).padStart(2, "0")}`;

const loadTasksFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTask(task.content, task.date, task.time, task.completed);
    });
}

const saveTasksToLocalStorage = () => {
    const tasks = [];
    document.querySelectorAll(".item").forEach(item => {
        const content = item.querySelector("label").textContent;
        const date = item.closest(".day").getAttribute("data-date");
        const time = item.querySelector(".itemTime").textContent.replace("🕒", "").trim();
        const completed = item.querySelector("input[type=checkbox]").checked;
        tasks.push({ content, date, time, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const createTask = (taskContent, taskDate, taskTime, completed = false) => {

    if (taskContent === "" || taskDate === "" || taskTime === "") return

    let dayContainer = document.querySelector(`[data-date="${taskDate}"]`);

    if (!dayContainer) {
        dayContainer = document.createElement("div");
        dayContainer.classList.add("day");
        dayContainer.setAttribute("data-date", taskDate);
        const dropdownBtn = document.createElement("img");
        dropdownBtn.setAttribute("src", "https://ucarecdn.com/49e8d458-9ddb-4180-86cf-20afc232624a/down.png")
        const dayHeader = document.createElement("div");
        dayHeader.classList.add("dayHeader");
        const dropdownclicked = (event) => {
            parentOfBtn = event.target.parentElement;
            parentOfparent = parentOfBtn.parentElement;
            childrenofparent = parentOfparent.children;

            for (let i = 1; i < childrenofparent.length; i++) {
                if (!childrenofparent[i].classList.contains("item")) continue
                childrenofparent[i].classList.toggle("hiddenItem");
            }
        }

        dropdownBtn.addEventListener("click", dropdownclicked);

        const listDate = document.createElement("h2");
        listDate.classList.add("listDate");
        listDate.textContent = new Date(taskDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: "numeric" });

        dayHeader.appendChild(dropdownBtn);
        dayHeader.appendChild(listDate);
        dayContainer.appendChild(dayHeader);
        daysContainer.appendChild(dayContainer);
    }

    const item = document.createElement("div");
    const itemLeft = document.createElement("div");
    const itemRight = document.createElement("div");
    const itemCheckBox = document.createElement("input");
    const itemLabel = document.createElement("label");
    const itemTime = document.createElement("p");
    const showOptionsBtn = document.createElement("button");
    const options = document.createElement("div");
    const itemEditBtn = document.createElement("button");
    const itemDeleteBtn = document.createElement("button");

    if (completed) {
        item.classList.add("disabled");
        itemCheckBox.checked = true;
    }

    item.classList.add("item")
    itemLeft.classList.add("itemLeft");
    itemRight.classList.add("itemRight");
    itemCheckBox.type = "checkbox";
    itemLabel.textContent = taskContent;
    itemTime.classList.add("itemTime");
    itemTime.innerHTML = `&#x1F552 ${taskTime}`;
    showOptionsBtn.textContent = "•••";
    showOptionsBtn.classList.add("showOptionsBtn");

    const showOptions = (event) => {
        event.stopPropagation();
        options.classList.toggle("optionsDisplay");
        document.addEventListener("click", hideOptions);
    }

    const hideOptions = (event) => {
        if (!options.contains(event.target) && !showOptionsBtn.contains(event.target)) {
            options.classList.remove("optionsDisplay");
            // Remove the global click event listener
            document.removeEventListener("click", hideOptions);
        }
    }

    showOptionsBtn.addEventListener("click", showOptions);
    options.classList.add("options")
    itemEditBtn.textContent = "Edit";
    itemEditBtn.classList.add("optionBtn");

    itemDeleteBtn.textContent = "Delete";
    itemDeleteBtn.classList.add("deleteBtn");
    itemDeleteBtn.classList.add("optionBtn")


    // Delete task
    itemDeleteBtn.addEventListener("click", () => {
        item.remove();
        // Remove the day container if it has no tasks left
        if (dayContainer.querySelectorAll(".item").length === 0) {
            dayContainer.remove();
        }
        saveTasksToLocalStorage();
    });

    // Edit task
    itemEditBtn.addEventListener("click", () => {
        const newTaskContent = prompt("Edit task:", taskContent);
        if (newTaskContent) {
            itemLabel.textContent = newTaskContent;
        }
        saveTasksToLocalStorage();
    });

    itemCheckBox.addEventListener("change", () => {
        item.classList.toggle("disabled");
        saveTasksToLocalStorage();
    });

    itemLeft.appendChild(itemCheckBox);
    itemLeft.appendChild(itemLabel);
    itemRight.appendChild(itemTime);
    itemRight.appendChild(showOptionsBtn);
    options.appendChild(itemEditBtn);
    options.appendChild(itemDeleteBtn);
    itemRight.appendChild(options);

    item.appendChild(itemLeft);
    item.appendChild(itemRight);
    dayContainer.appendChild(item);

    document.getElementById("taskContentInput").value = "";
}


addButton.addEventListener("click", () => {
    const taskContentInput = document.getElementById("taskContentInput").value;
    const taskDateInput = document.getElementById("taskDateInput").value;
    const taskTimeInput = document.getElementById("taskTimeInput").value;
    createTask(taskContentInput, taskDateInput, taskTimeInput);
    saveTasksToLocalStorage();
});


const search = () => {
    daysContainer.innerHTML = "";
    const searchQuery = document.getElementById("searchInput").value;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        if (task.content.includes(searchQuery)) createTask(task.content, task.date, task.time, task.completed);
    });

}

searchInput.addEventListener("input", search);

document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);




