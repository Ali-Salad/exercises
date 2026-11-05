const list = document.getElementById('list');

function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
}

function removeItem() {
    if (list.lastChild) {

        list.removeChild(list.lastChild);

    } else {
        alert(" dont remove anything")
    }

}

function ChangeImage() {
    const image = document.querySelector('#image');

    // const url = prompt("Enter your image url");
    image.setAttribute('src', 'https://images.unsplash.com/photo-1789758385758-a18794e41c05?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D');

}


image.style.border = '2px solid red ';
image.style.padding = '10px';

image.style.backgroundColor = 'gray';

function ChangeContentStyle() {
    const header = document.querySelector('#header');
    const text = document.querySelector('.text');

    header.style.color = 'skyblue';
    text.style.padding = '20px';
    text.style.border = '1px solid #8e4fc6';
    text.style.fontSize = '30px';
}

function SetDarkMode() {
    document.body.style.background = "black"
    document.body.style.color = "white"

}

function SetLightMode() {
    document.body.style.background = ""
    document.body.style.color = "black"
}



function fetchUserDataSync() {
    alert("Fetching user data..."); // Blocks the code until the user clicks "OK"
    return { id: 1, name: "John Doe" };
}

console.log("Start fetching user data...");
const user = fetchUserDataSync(); // This blocks the rest of the code
console.log("User data:", user);
console.log("This message is blocked until user data is fetched.");



function getUserData(callback) {
    // Simulate waiting for 3 seconds
    setTimeout(() => {
        const userData = { id: 1, name: "John Doe" }; // This is the data we get
        callback(userData); // Once we have the data, we call the callback
    }, 3000); // 3-second wait
}

console.log("Starting to fetch user data...");

getUserData(function(user) {
    console.log("Here is the user data:", user); // This runs after 3 seconds
});

console.log("This message shows up immediately.");


const text = document.querySelectorAll('.text');
console.log(text);

text[0].style.backgroundColor = 'lime';
text[1].style.backgroundColor = 'lime';
text[1].style.padding = '27px';
text[1].style.margin = '27px';
text[1].style.textAlign = 'justify';
text.style.color = 'white';
// ------------------------
const pragraph = document.querySelector('.pragraph');
pragraph.style.backgroundColor = 'blue';

const button = document.querySelector('#MyButton');
const removeButton = document.querySelector('#removeButton');

function handleClick() {
    console.log(' handle clicked')
}
button.addEventListener('click', handleClick);

removeButton.addEventListener('click', function(){
    button.removeEventListener('click', handleClick );
    console.log('click Event Removed');

}) ;



const colorSelect = document.querySelector('#color');
const selectedColor = document.querySelector('#selectedColor');

const UserName = document.querySelector('#UserName');
const CurrentUserName = document.querySelector('#CurrentUserName');

colorSelect.addEventListener("change", function () {
    // console.log(" change to", selectedColor.value);
    selectedColor.textContent = 'selected Color: ' + colorSelect.value;
});


UserName.addEventListener("change", function(){
    console.log("Current UserName is :", UserName.value )
    CurrentUserName.textContent = `Current UserName is ${UserName.value}`;
});

const form = document.querySelector('#Myform');
const mesasage = document.querySelector('#ForMessage');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log("submited...")
    mesasage.textContent = "form submision is prevented "
})

const form = document.querySelector("#registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const error = document.querySelector("#error");

    if (username === "") {
        error.textContent = "Username is required";
        return;
    }

    if (email === "") {
        error.textContent = "Email is required";
        return;
    }

    if (password === "") {
        error.textContent = "Password is required";
        return;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match";
        return;
    }

    error.textContent = "Successfully Registered";
});

const form = document.querySelector("#registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const error = document.querySelector("#error");

    if (username === "") {
        error.textContent = "username is required";
        return;
    }

    if(email === "") {
        error.textContent = "Email is required";
        return;
    }

    if (password === "") {
        error.textContent = "password is required";
        return;
    }

    if (password !==confirmPassword ) {
        error.textContent = "the password did not march"
        return;
    }
    error.textContent = "Successfully Registered"
});














