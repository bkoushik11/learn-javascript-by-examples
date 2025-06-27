function login(username,password)
{
    return new Promise((resolve,reject)=>
        {
        console.log("Login is working");
        if(username=='koushik' && password=='1811'){
            resolve(username)
        }
        else{
            reject('username and password is not matching')
        }
    })
}

function displayData(username){
    return new Promise((resolve)=>{
        console.log("displaying the data");
        resolve("hello "+username);
    })
}

// login('koushik','1811').then((data)=>{
//     console.log(data)
//     displayData(data).then((res)=>{
//         console.log(res);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })


// Instead of writing that much above code, write below code using async and await

async function doThis(){
    try{
        const data = await login('koushik','1811');
        // console.log("code is working")
        const res = await displayData(data);
        console.log(res);
    }
    catch(err){
        console.log(err)
    }
}
doThis();