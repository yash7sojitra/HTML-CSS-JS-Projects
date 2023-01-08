let inputTask = document.querySelector(".inputTask");
let inputBtn = document.querySelector("#inputBtn");
let pendingTask = document.querySelector("#pendingTask");
let clearAllBtn = document.querySelector("#clearAll");

inputTask.onkeyup = () => {
  let userEnteredValue = inputTask.value;
  if (userEnteredValue.trim() != 0) {
    inputBtn.classList.add("active");
  } else {
    inputBtn.classList.remove("active");
  }
};
