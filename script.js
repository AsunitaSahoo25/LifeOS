const dateElement = document.querySelector(".small-date");

const today = new Date();

const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
};

dateElement.textContent = today.toLocaleDateString("en-US", options);


const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {

    const checkbox = task.querySelector(".checkbox");

    checkbox.addEventListener("click", () => {

        task.classList.toggle("completed");

        if (task.classList.contains("completed")) {

            checkbox.innerHTML = '<i class="fa-solid fa-check"></i>';

        } else {

            checkbox.innerHTML = "";

        }

        updateTaskCount();
    });

});
