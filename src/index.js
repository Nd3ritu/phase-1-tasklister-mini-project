document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    buildToDo(event.target.new_task_description.value);
    form.reset();
  });
});

function buildToDo(todo) {
  //console.log(todo);
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  p.textContent = `${todo}`;
  p.appendChild(btn);
  console.log(p);
  document.querySelector("#tasks").appendChild(p);
}

function handleDelete(event) {
  event.target.parentNode.remove();
}
