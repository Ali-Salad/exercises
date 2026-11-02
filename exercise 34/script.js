// function addItem() {
//     const list = document.querySelector("#list");
//     const newItem = document.createElement("li");
//     newItem.textContent = "New Item";
//     list.appendChild(newItem);
// }

// function removeItem() {
//     const list = document.querySelector("#list");
//     if (list.lastChild) {
//         list.removeChild(list.lastChild);
//     }
// }



const input = document.querySelector("#name");
const list = document.querySelector("#list");

function addStudent() {
    const name = input.value.trim();
    if (name === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = name;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => li.remove());

    li.append(span, " ", removeBtn);
    list.appendChild(li);

    input.value = "";
    input.focus();
}

document.querySelector("#add").addEventListener("click", addStudent);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addStudent();
});