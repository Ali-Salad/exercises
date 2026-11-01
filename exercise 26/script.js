function getUserData(callback) {
   
    setTimeout(() => {
        const userData = { id: 7, name: "Alisalad" }; 
        callback(userData); 
    }, 3000); 
}

console.log("Starting to fetch user data...");

getUserData(function(user) {
    console.log("Here is the user data:", user); 
});

console.log("This message shows up immediately.");


