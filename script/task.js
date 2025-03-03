let completeButtons = document.getElementsByClassName("complete-btn");
let taskAssigned = document.getElementById("task-assigned");
let completedTasks = document.getElementById("completed-tasks");
let activityLog = document.getElementById("activity-log");

for(let i = 0; i < completeButtons.length; i++){
    completeButtons[i].addEventListener("click", function(){
        alert("Task Completed Successfully!");

        let taskCount = document.getElementById("task-assigned").innerText;
        let convertedTaskCount = parseInt(taskCount);
        let completedCount = document.getElementById("completed-tasks").innerText;
        let convertedCompletedCount = parseInt(completedCount);

        if(convertedTaskCount > 0){
            taskAssigned.innerText = convertedTaskCount - 1;
            completedTasks.innerText = convertedCompletedCount + 1;
        }

        let taskContainer = this.closest(".task");
        let taskTitle = taskContainer.querySelector(".task-title").innerText;
        let currentTime = new Date();
        let timeString = currentTime.toLocaleTimeString();

        let activityContainer = document.getElementById("activity-log");
        let div = document.createElement("div");
        div.innerHTML = `<p class="bg-[#F4F7FF] p-2.5 mt-6.25 rounded-lg opacity-70">You have Complete The Task ${taskTitle}</b> at ${timeString}</p>`;
        activityContainer.appendChild(div);

        this.disabled = true;
        this.style.opacity = "0.5";
        this.style.cursor = "not-allowed";

        let remainingTasks = document.querySelectorAll(".complete-btn:not(:disabled)").length;
        if(remainingTasks === 0){
            alert("🎉 Congratulations! All tasks are completed.");
        }

    })
}

let clearHistoryBtn = document.getElementById("clear-history");
clearHistoryBtn.addEventListener("click", function(){
    let confirmClear = confirm("Are you sure you want to clear the activity log?");
    if(confirmClear){
        activityLog.innerHTML = "";
        alert("Activity log has been cleared.");

        this.disabled = true;
        this.style.opacity = "0.5";
        this.style.cursor = "not-allowed";
    }
})