let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = count + " - ";
  // 3. Render the variable in the saveEl using innerText
  saveEl.textContent += countStr;
  // NB: Make sure to not delete the existing content of the paragraph
  //count elemrnt to zer0
  countEl.innerText = 0;
  count = 0;
}
