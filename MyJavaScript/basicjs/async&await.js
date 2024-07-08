
function makeRequest(request){

    return new Promise((resolve, reject) => {
        if(request == "YOUTUBE"){
            resolve("Success");
        }else{
            reject("Failed to make request");
        }
    })
}

async function doWork(){

    const a = await makeRequest("YOUTUBE");
    console.log(a);
}
doWork();