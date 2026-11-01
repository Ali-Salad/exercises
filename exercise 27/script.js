// function FetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve({ id: 3, name: "geele" })
//             } else {
//                 reject(new Error("failed to fetch"));
//             }
//         }, 3000);
//     });
// }

// FetchUserData()
//     .then(data =>console.log("UserData:", data))
//     .catch(error =>console.error("Error:", error))


function FetchUserData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({id:6, name:"farah", city:"galkacyo"});

            }else{
                reject(new Error("failed to fetch"));

            }

            
        }, 3000);
    });
}

FetchUserData()
.then(data => console.log("userdata", data))
.catch(error => console.error("Error:" ,error))
