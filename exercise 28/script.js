function FetchUserData(){
    return new Promise((resolve, reject){
        setTimeout(() => {
            const success = true;
            if(success) {
                resolve({id: 12, " abdala", city:"beydhabo",school: "beydhao janaay" })

            }else{
                reject(new error("failed to fetch"));

            }
            
        }, 3000);
    });
}

async function showUser(){
    try{
        const data = await FetchUserData()
        console.log("userdata ", data)
    } catch (error){
        console.error("Error:", error)

    }


}

showUser()