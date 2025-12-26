function setLocalStorageWithExpiry(key, value) {
  const now = new Date();
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const item = {
    value: value,
    expiry: now.getTime() + ONE_DAY,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

let main = () => {
  let elems = document.querySelectorAll(".elem");
  let fullElems = document.querySelectorAll(".fullElem");
  elems.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElems[elem.id].style.display = "block";
      fullElems[elem.id].childNodes[1].addEventListener("click", () => {
        fullElems[elem.id].style.display = "none";
      });
    });
  });
  let arr = [
    `/* Backgrounds: Very Dark Brown */
  --bg-base: #1a1614;
  --pane-bg: rgba(255, 255, 255, 0.04);
  
  /* Accent: Mint Green */
  --accent: #6ee7b7;
  --accent-glow: rgba(110, 231, 183, 0.15);
  
  /* Text */
  --text-primary: #ecfdf5;
  --text-secondary: #d1fae5;
  --text-muted: #57534e;
  --text-main: #f5f5f4;
  --text-dim: #a8a29e;
  
  /* Borders */
  --border-soft: rgba(255, 255, 255, 0.08);
  --border: rgba(255, 255, 255, 0.12);
  
  /* Utilities */
  --danger: #ef4444;
  --transition-smooth: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  --card-radius: 28px;`,
    `/* Backgrounds: Dark Blue-Gray */
  --bg-base: #282a36;
  --pane-bg: rgba(255, 255, 255, 0.05);
  
  /* Accent: Dracula Purple */
  --accent: #bd93f9; 
  --accent-glow: rgba(189, 147, 249, 0.15);
  
  /* Text */
  --text-primary: #f8f8f2;
  --text-secondary: #ff79c6; /* Pinkish secondary text */
  --text-muted: #6272a4;
  --text-main: #f8f8f2;
  --text-dim: #8be9fd;       /* Cyan dim text */
  
  /* Borders */
  --border-soft: rgba(255, 255, 255, 0.06);
  --border: rgba(98, 114, 164, 0.3);
  
  /* Utilities */
  --danger: #ff5555;
  --transition-smooth: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  --card-radius: 28px;`,
    `/* Backgrounds: Slate Black */
  --bg-base: #0f0f0f;
  --pane-bg: rgba(255, 255, 255, 0.04);
  
  /* Accent: Pure White */
  --accent: #ffffff;
  --accent-glow: rgba(255, 255, 255, 0.1);
  
  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #a3a3a3;
  --text-muted: #525252;
  --text-main: #e5e5e5;
  --text-dim: #737373;
  
  /* Borders */
  --border-soft: rgba(255, 255, 255, 0.1);
  --border: rgba(255, 255, 255, 0.15);
  
  /* Utilities */
  --danger: #ef4444;
  --transition-smooth: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  --card-radius: 28px;  `,
    `/* Backgrounds: Dark Warm Gray */
  --bg-base: #1c1917;
  --pane-bg: rgba(255, 255, 255, 0.03);
  
  /* Accent: Orange / Amber */
  --accent: #f59e0b;
  --accent-glow: rgba(245, 158, 11, 0.15);
  
  /* Text */
  --text-primary: #fff7ed;
  --text-secondary: #d6d3d1;
  --text-muted: #78716c;
  --text-main: #fafaf9;
  --text-dim: #a8a29e;
  
  /* Borders */
  --border-soft: rgba(255, 255, 255, 0.06);
  --border: rgba(255, 255, 255, 0.09);
  
  /* Utilities */
  --danger: #ef4444;
  --transition-smooth: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  --card-radius: 28px;`,
    `/* Backgrounds: Pure Black */
  --bg-base: #000000;
  --pane-bg: rgba(255, 255, 255, 0.05);
  
  /* Accent: Hot Pink / Magenta */
  --accent: #f472b6;
  --accent-glow: rgba(244, 114, 182, 0.25);
  
  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #e5e7eb;
  --text-muted: #6b7280;
  --text-main: #f3f4f6;
  --text-dim: #9ca3af;
  
  /* Borders */
  --border-soft: rgba(255, 255, 255, 0.1);
  --border: rgba(255, 255, 255, 0.15);
  
  /* Utilities */
  --danger: #ef4444;
  --transition-smooth: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  --card-radius: 28px;`,
    `/* Backgrounds: Very dark green/black */
  --bg-base: #020604;
  --pane-bg: rgba(255, 255, 255, 0.02);
  
  /* Accent: Emerald Green */
  --accent: #10b981;
  --accent-glow: rgba(16, 185, 129, 0.15);
  
  /* Text */
  --text-primary: #ecfdf5;
  --text-secondary: #a7f3d0;
  --text-muted: #064e3b;
  --text-main: #d1fae5;
  --text-dim: #6ee7b7;
  
  /* Borders */
  --border-soft: rgba(255, 255, 255, 0.06);
  --border: rgba(255, 255, 255, 0.08);
  
  /* Utilities */
  --danger: #ef4444;
  --transition-smooth: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  --card-radius: 28px;`,
    `/* Backgrounds: Deep Navy/Slate */
  --bg-base: #0f172a;
  --pane-bg: rgba(255, 255, 255, 0.03);
  
  /* Accent: Sky Blue / Cyan */
  --accent: #38bdf8;
  --accent-glow: rgba(56, 189, 248, 0.2);
  
  /* Text */
  --text-primary: #f0f9ff;
  --text-secondary: #94a3b8;
  --text-muted: #475569;
  --text-main: #e2e8f0;
  --text-dim: #64748b;
  
  /* Borders */
  --border-soft: rgba(255, 255, 255, 0.05);
  --border: rgba(255, 255, 255, 0.1);
  
  /* Utilities */
  --danger: #f43f5e;
  --transition-smooth: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  --card-radius: 28px;`,
  ];
  let changeThemeBtn = document.querySelector(".change");
  let themeIndex = 0;
  changeThemeBtn.addEventListener("click", () => {
    document.documentElement.style.cssText = arr[themeIndex];
    themeIndex = (themeIndex + 1) % arr.length;
  });
};

main();

const todoList = [];

const renderTodoList = () => {
  const todoContainer = document.querySelector(".task-list");
  let taskElem = "";

  let currentTodoList =
    JSON.parse(localStorage.getItem("todoList")) || todoList;

  currentTodoList.forEach((task) => {
    taskElem =
      taskElem +
      `<li class="task-item priority-urgent">
                <input type="checkbox" class="custom-checkbox" />
                <div class="task-content" style="flex: 1">
                  <div class="task-header">
                    <span class="category-tag">${task.date}</span>
                    <span style="color: var(--text-muted)">&bull;</span>
                    ${
                      task.urgent
                        ? `<span class="text-urgent">Urgent</span>`
                        : ""
                    }
                  </div>
                  <p class="task-title">${task.title}</p>
                  <div class="task-detail">
                    ${task.description}
                  </div>
                </div>
              </li>`;
  });

  todoContainer.innerHTML = taskElem;
};

renderTodoList();
const addToLocalStorage = (todoList) => {
  setLocalStorageWithExpiry("todoList", JSON.stringify(todoList));
};
const addTaskBtn = document.querySelector(".summit");

addTaskBtn.addEventListener("click", () => {
  const titleInput = document.querySelector(".add-title");
  const descInput = document.querySelector(".add-description");
  const urgentCheckbox = document.querySelector(".custom-checkbox");

  let currentTodoList =
    JSON.parse(localStorage.getItem("todoList")) || todoList;

  const newTask = {
    id: currentTodoList.length + 1,
    title: titleInput.value,
    description: descInput.value,
    date: new Date().toISOString().split("T")[0],
    urgent: urgentCheckbox.checked,
  };

  currentTodoList.push(newTask);
  addToLocalStorage(currentTodoList);
  renderTodoList();

  // Clear inputs
  titleInput.value = "";
  descInput.value = "";
  urgentCheckbox.checked = false;
});

const dayTask = Array(13).fill("");

let textarea = document.querySelectorAll(".hour-block textarea");

textarea.forEach((area, index) => {
  area.addEventListener("input", (e) => {
    console.log(area.value);
    dayTask[index] = area.value;
    localStorage.setItem("dayTask", JSON.stringify(dayTask));
  });
});

const loadDayTasks = () => {
  let savedTasks = JSON.parse(localStorage.getItem("dayTask"));
  if (savedTasks) {
    textarea.forEach((area, index) => {
      area.value = savedTasks[index];
    });
  }
};

loadDayTasks();

let motivation = document.querySelector(".motivation-container");

let quotes = async () => {
  await fetch("https://dummyjson.com/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(document.querySelector(".quote-text"));
      document.querySelector("#quote-text").innerHTML = data.quote;
      document.querySelector("#quote-author").innerHTML = `- ${data.author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
};

quotes();

let pomodoro = () => {
  const config = {
    work: 25 * 60,
    break: 5 * 60,
  };

  let timeLeft = config.work;
  let totalTime = config.work;
  let timerId = null;
  let isRunning = false;

  const display = document.getElementById("display");
  const startBtn = document.getElementById("start-btn");
  const resetBtn = document.getElementById("reset-btn");
  const card = document.getElementById("card");
  const liquid = document.getElementById("liquid");
  const statusText = document.getElementById("status");
  const modes = document.querySelectorAll('input[name="mode"]');

  function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    // Update liquid progress
    const percent = (timeLeft / totalTime) * 100;
    document.documentElement.style.setProperty("--progress", `${percent}%`);

    document.title = `${display.textContent} | Pomodoro`;
  }

  function toggleTimer() {
    if (isRunning) {
      clearInterval(timerId);
      startBtn.textContent = "Resume";
      card.classList.remove("is-running");
      statusText.textContent = "Paused";
    } else {
      card.classList.add("is-running");
      startBtn.textContent = "Pause";
      statusText.textContent =
        document.querySelector('input[name="mode"]:checked').value === "work"
          ? "Deep Work"
          : "In Break";
      timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
          completeSession();
        }
      }, 1000);
    }
    isRunning = !isRunning;
  }

  function completeSession() {
    clearInterval(timerId);
    isRunning = false;
    const currentMode = document.querySelector(
      'input[name="mode"]:checked'
    ).value;

    if (currentMode === "work") {
      alert("Session complete. Take a rest.");
      document.getElementById("break-mode").checked = true;
    } else {
      alert("Break finished. Ready to focus?");
      document.getElementById("work-mode").checked = true;
    }
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    totalTime = config[mode];
    timeLeft = totalTime;
    startBtn.textContent = "Start Session";
    card.classList.remove("is-running");
    statusText.textContent = "Stationary";
    updateDisplay();
  }

  modes.forEach((m) => m.addEventListener("change", resetTimer));
  startBtn.addEventListener("click", toggleTimer);
  resetBtn.addEventListener("click", resetTimer);

  updateDisplay();
};

pomodoro();

let name = document.querySelector(".name-input");
let entryBtn = document.querySelector(".entry-btn");

entryBtn.addEventListener("click", () => {
  let nameValue = name.value.trim();
  if (nameValue === "") {
    alert("Please enter your name.");
    return;
  }
  localStorage.setItem("userName", nameValue);
  document.querySelector(".welcome-1").classList.add("hidden");
  document.querySelector(".welcome").style.display = "none";
  console.log(nameValue);
  document.querySelector(".user-name-display").textContent = nameValue;
});

let getName = () => {
  let savedName = localStorage.getItem("userName");
  if (savedName) {
    document.querySelector(".welcome-1").classList.add("hidden");
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".user-name-display").textContent = savedName;
  } else {
    document.querySelector(".welcome-1").classList.remove("hidden");
    document.querySelector(".welcome").style.display = "block";
  }
};

getName();

let setName = () => {
  let savedName = localStorage.getItem("userName");
  if (savedName) {
    document.querySelector(".user-name-display").textContent = savedName;
  } else {
    document.querySelector(".user-name-display").textContent = "User";
  }
};

setName();

let userNameDisplay = document.querySelector(".edit-name-btn");
userNameDisplay.addEventListener("click", () => {
  document.querySelector(".welcome-1").classList.remove("hidden");
  document.querySelector(".welcome").style.display = "block";
  document.querySelector(".welcome-1").scrollIntoView({
    behavior: "smooth",
  });
});

let timechange = () => {
  const dayText = document.getElementById("day-text");
  const timeMain = document.getElementById("time-main");
  const timeSeconds = document.getElementById("time-seconds");

  function updateClock() {
    const now = new Date();
    const days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    dayText.textContent = days[now.getDay()];
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    timeMain.textContent = `${hours}:${minutes}`;
    timeSeconds.textContent = seconds;
  }
  setInterval(updateClock, 1000);
  updateClock();
};

timechange();

let dayGoals = () => {
  const goalInput = document.getElementById("goal-input");
  const goalsList = document.getElementById("goals-list");
  const progressBar = document.getElementById("progress-bar");
  const progressPercent = document.getElementById("progress-percent");
  const emptyState = document.getElementById("empty-state");

  let goals = JSON.parse(localStorage.getItem("daystack-goals")) || [];

  function saveGoals() {
    localStorage.setItem("daystack-goals", JSON.stringify(goals));
    renderGoals();
  }

  function updateProgress() {
    if (goals.length === 0) {
      progressBar.style.width = "0%";
      progressPercent.textContent = "0%";
      return;
    }
    const completed = goals.filter((g) => g.completed).length;
    const percentage = Math.round((completed / goals.length) * 100);
    progressBar.style.width = `${percentage}%`;
    progressPercent.textContent = `${percentage}%`;
  }

  function renderGoals() {
    goalsList.innerHTML = "";

    if (goals.length === 0) {
      emptyState.style.display = "flex";
    } else {
      emptyState.style.display = "none";
      goals.forEach((goal, index) => {
        const li = document.createElement("li");
        li.className = "goal-item";
        li.id = index;
        li.innerHTML = `
                        <input type="checkbox" class="goal-check" ${
                          goal.completed ? "checked" : ""
                        } >
                        <span class="goal-text">${goal.text}</span>
                        <button class="delete-btn" >✕</button>
                    `;

        goalsList.appendChild(li);
      });
    }
    updateProgress();
  }

  function toggleGoal(index) {
    goals[index].completed = !goals[index].completed;
    saveGoals();
  }

  function deleteGoal(index) {
    goals.splice(index, 1);
    saveGoals();
    addDeleteListenersAndToggle();
  }

  goalInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && goalInput.value.trim()) {
      goals.push({
        text: goalInput.value.trim(),
        completed: false,
      });
      goalInput.value = "";
      saveGoals();
      addDeleteListenersAndToggle();
    }
  });

  const options = { month: "long", day: "numeric" };
  document.getElementById("date-display").textContent = new Date()
    .toLocaleDateString("en-US", options)
    .toUpperCase();

  function addDeleteListenersAndToggle() {
    let goalsItems = document.querySelectorAll(".goal-item");
    console.log("Adding listeners to goals:", goalsItems);
    console.log("Adding delete and toggle listeners to goals.");
    goalsItems.forEach((item) => {
      const index = item.id;
      const checkbox = item.querySelector(".goal-check");
      const deleteBtn = item.querySelector(".delete-btn");

      checkbox.addEventListener("change", () => {
        console.log("Toggling goal at index:", index);
        toggleGoal(index);
        addDeleteListenersAndToggle();
      });

      deleteBtn.addEventListener("click", () => {
        console.log("Deleting goal at index:", index);
        deleteGoal(index);
        addDeleteListenersAndToggle();
      });
    });
  }

  addDeleteListenersAndToggle();

  renderGoals();
};

dayGoals();
