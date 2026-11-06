const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistoryButton = document.querySelector('#clearHistoryButton');

// Preview changes while you choose
colorPicker.addEventListener('input', function () {
    colorPreview.style.backgroundColor = colorPicker.value;
});

// History is written once, when you finish choosing
colorPicker.addEventListener('change', function () {
    const li = document.createElement('li');
    li.textContent = colorPicker.value;
    li.style.color = colorPicker.value;
    colorHistory.appendChild(li);
});

clearHistoryButton.addEventListener('click', function () {
    colorHistory.innerHTML = '';
});