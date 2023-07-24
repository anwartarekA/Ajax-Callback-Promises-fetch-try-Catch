// // Ajax -->stands for Asynchronous javascript and xml
// // 1- technices enables to interacts with server 
// // 2- enables us to use html css js and dom together
// // 3- the keybone for Ajax is request 
// // 4- enables to upload things without refersh (Asynchronous).

// /*
// --------> readystate
// 0- request not initialze
// 1- server connection established
// 2- request received
// 3- request is processing
// 4- request finished and response is ready
// ---------> status
// [200]--> ok
// [403]--> forbidden
// [404]--> not found
// */

let request = new XMLHttpRequest();
request.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200){
        let data = this.responseText;
        let jsdata = JSON.parse(data);
        for(let i = 0 ; i< jsdata.length ; i++)
        {
            let element = document.createElement('div');
            element.append(jsdata[i].name);
            document.body.appendChild(element)
        }
        
    }
}
request.open('GET','https://api.github.com/users/anwartarekA/repos');
request.send();
// /////////////////////////////////////////////////////////////////
// // what is callback ?
// // it is a function passed to another function as a parameter will excute later
// // call back hell == pyramid of Doom
// function myname (ele){
//     ele.target.style.color  = 'red';
// }
// let p =document.querySelector('p');
// p.addEventListener('click',myname);

// callback hell

setTimeout(function(){
    console.log('taskOne');
    setTimeout(function(){
        console.log('taskTwo');
        setTimeout(function(){
            console.log('taskThree');
            setTimeout(function(){
                console.log('taskFour');
                setTimeout(function(){
                    console.log('taskfive');
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

// Promise in javascript 
// promise does something that will happen in the future
// promise avoids callback hell or pyramid of Doom 
// promise is asynchronous function 

// status promise:-
// pending ---- promise not fulfilled or rejected
// fulfilled --- promise successfully
// rejected --- promise rejected

let promise = new Promise(function(resolve,reject){
    let number = 3;
    if(number == 1)
    {
        resolve('true the connection established');
    }
    else
    {
        reject(Error('not this number !'));
    }
}).then(
    (resolveValue)=> {console.log(`Good ${resolveValue}`)},
    (rejectValue)=> {console.log(`Bad ${rejectValue}`)}
)

// // example 

let mypromise = new Promise((resolve , reject)=>{
let employees = [];
if(employees.length == 4)
{
    resolve(employees)
}
else
{
    reject(Error('The number of employees are not 4 !'));
}
}).then(
    (resolveValue)=>{
        resolveValue.length=2;
        return resolveValue;
    }
).then((resolve)=>{
    resolve.length = 1
    return resolve
}).then((chosen)=>{
    console.log(`The chosen employee is ${chosen}`);
}).catch((rejected)=>{
        console.log(rejected);
}
)
// // promise with XHR

function getdata (link)
{
    return new Promise((resolve,reject)=>{
      let myrequest = new XMLHttpRequest();
      myrequest.onload = function(){
        if(this.status == 200 && this.readyState == 4)
        {
            resolve(JSON.parse(this.responseText));
        }
        else
        {
            reject(Error('No data found !'));
        }
      }
      myrequest.open('GET',link);
      myrequest.send();
    })
}
getdata('https://api.github.com/users/anwartareka/repos')
.then(
     (resolveValue)=>{
        resolveValue.length = 10;
        return resolveValue;
     }
    )
.then((finalData)=>{console.log(finalData[0].full_name);})
.catch((rejected)=>{console.log(rejected)});

// // fetch(url) ---> return promise 
fetch('https://api.github.com/users/anwartareka/repos')
.then((result)=>{
    return result.json()
})
.then((mydata)=>{
    mydata.length = 10;
    console.log(mydata);
    return mydata;
})
.then((element)=>{
    console.log(element[0].id);
})
.catch((reject)=>{
console.log(`Bad ${reject}`);
})
// // async --> it asynchronous keyword make the function retrun promise with clean code

async function mydetails ()
{
    let arr = [];
    if(arr.length > 0)
    {
        return 'Users Found'
    }
    else
    {
        throw new Error('No users found!');
    }
}
console.log(mydetails());
mydetails()
.then((resolve)=>{console.log(resolve);})
.catch((rejected)=>{console.log(`no no no ${rejected}`);});
// Await
// await used only in async function 
// await makes javascript waits to the result of the promise 
// await is the cleaver element for getting the result of the promise

let wold_promise1 = new Promise(function(resolve,reject){
 setTimeout(()=>{
    resolve("iam anwar tarek")
 },3000)
})
 async function getname ()
{   console.log('Before promise');
    //  wold_promise.then((res)=>{console.log(res)});
    console.log(await wold_promise1);
    console.log('After promise');
}
getname();

// rejected


let wold_promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
       reject(Error('Bad promise'));
    },3000)
   })
    async function getname ()
   {   console.log('Before promise');
       //  wold_promise.then((res)=>{console.log(res)});
       await wold_promise.catch((err)=>{console.log(err);})
       console.log('After promise');
   }
   getname();

   // try and catch

let promise_age = new Promise((res,rej)=>{
    let myAge = 15 ;
    if(myAge > 20)
    {
      setTimeout(()=>{
        res('You are youth!');
      },3000)
    }
    else{
        setTimeout(function(){
            rej('you are still boy!');
        },2000)
    }
});

async function myage ()
{
    console.log('before age');
    try
    {
        console.log(await promise_age);
    }catch(reason)
    {
        console.log(`the reason :${reason}`);
    }
    console.log('after age');
}
myage();

// try and catch with fetch 

async function datas(){
    console.log('Before Fetch');
    try{
       let mydata =  await fetch('https://api.github.com/users/anwartareka/repos');
        let res = await mydata.json();
        console.log(res);
    }catch(reason)
    {
       console.log(reason);
    } finally
    {
        console.log('After Fetch');
    }
}
datas();

// properites of promises

let pro1 =new Promise((resolve,reject)=>{
    if(true)
    {
        resolve('Good first promise')
    }
})

let pro2 =new Promise((resolve,reject)=>{
    if(true)
    {
        resolve('Good second promise')
    }
})
let pro3 =new Promise((resolve,reject)=>{
    if(true)
    {
        resolve('Good the last promise');
    }
})
Promise.all([pro1,pro2,pro3]).then((resolve)=>{console.log(resolve)}) 

// Promise.all([pro1,pro2,pro3]).then((reject)=>{console.log(reject);});
// promise.all ---> return an array of results when all promise is resolved or return reject ehen any promise is rejected return the first one 

// Promise.allSettled([pro1,pro2,pro3]).then((resolve)=>{
//     console.log(resolve);
// })

// promise.allsettled ---> return an array of all promises (resolved or rejected)

// Promise.race([pro1,pro2,pro3]).then((re)=>{console.log(re)})

// promise.race retuen the first promise that saw it (resolved or rejected)