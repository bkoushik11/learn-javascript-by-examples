console.log("hello! It is executed very fast");
setTimeout(function(){
    console.log("It is executed after 5 seconds");
},5000);
console.log("It is executed 2nd")

// Synchronous function 1st func exected 1st and then only  it executes the next func : CALLBACK

function login(cb){
    console.log("Logged In");
    cb();
}
function displayUser(){
    console.log("hello koushik")
}

login(displayUser);

// Promise function. After executing it either resolves or rejects depends on the code

const mypromise =  new Promise(function(resolve, reject){
    let x=1;
    if(x==1){
        resolve('ok! task completed');
    }
    else{
        reject('Sorry.The task is rejected');
    }
})

mypromise.then((res)=>
{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}
)

// fetch  and inheritence have to know very deep and perform some programs on it.

// fetch('APIs are dropped here')
// .then((res)=>
//     {
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })



// Using Return promise function is performing

const demo=()=>{
    const y=2;
    return new Promise((resolve,reject)=>{
        if(y==2){
            resolve("Done")
        }
        else{
            reject("failed")
        }
    })
}

demo().then((resi)=>{
    console.log(resi)
})
.catch((errr)=>{
    console.log(errr)
})