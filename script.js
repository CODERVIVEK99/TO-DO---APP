let list = document.getElementById("list");

function addTask() {
  let input = document.getElementById("inputBox");
  
  if (input.value === "") {
    alert("Enter something!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = input.value;

  // Delete button
  let btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.onclick = function() {
    li.remove();
    saveData();
  };

  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";

  saveData();
}

// Save data
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

// Show data
function showData() {
  list.innerHTML = localStorage.getItem("data");
}

showData();