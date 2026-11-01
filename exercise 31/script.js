async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`);
        }

        const users = await response.json();
        console.log("users:", users);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getUsers();