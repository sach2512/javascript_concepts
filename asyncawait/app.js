const getdata = async ()=>{
    return true;
}
const data = getdata();
console.log(data);
data.then((res)=>console.log(res));
// it always return promise it will wrap true inside promise 
// we can handle our promise as usual


// normal to handle promise
let id=1;
const getid = ()=>{
    const promise = new Promise((resolve,reject)=>{
        if(id){
           setTimeout(()=>{
            console.log("promis is resolved");
            resolve(id)
           },6000)
           
        }else{
           
            reject("promise is rejected")
        }
    })
    return promise;
}
const getid2 = ()=>{
    const promise = new Promise((resolve,reject)=>{
        if(id){
           setTimeout(()=>{
            console.log("promis is resolved");
            resolve(id)
           },10000)
           
        }else{
           
            reject("promise is rejected")
        }
    })
    return promise;
}
const getid3 = ()=>{
    const promise = new Promise((resolve,reject)=>{
        if(id){
           setTimeout(()=>{
            console.log("promis is resolved");
            resolve(id)
           },10000)
           
        }else{
           
            reject("promise is rejected")
        }
    })
    return promise;
}

// normal way to handle promise
getid3().then((id)=>{  // promise is reolvoing here
    console.log("promise is solved id is 20sec",id); // these will get executed first
})
.catch((err)=>{
    console.log("promise is error")
})
getid2().then((id)=>{  // promise is reolvoing here
    console.log("promise is solved id is 16 secs",id); // in nromal way sthes egets excuted first
}) 
getid().then((id)=>{  // promise is reolvoing here
    console.log("promise is solved id is 5sec",id); // these will get executed first
})
.catch((err)=>{
    console.log("promise is error")
})

.catch((err)=>{
    console.log("promise is error")
})
console.log("hello from promise"); // js engine will not stop untill promsise to excute

// so in promises nomatter what as soon as promise gets excuted it will log 
// for example above first rpmise takes 20 sec send 15 third  5 
//thrid promise wont wait untill first gets exuted 
// order of log promise 3 promise 2 promise 1



// in async await other promises wait untill first promise gets excuted
// lets suppose first promise takes longer tan all othr promises then all other promises  ait untill first gets excuted
// it logs one after one even second promise is reolved earliner than first

// async await way to handle promise

async function handlepromise(){
     const data3= await getid3(); // here it will take 20 sec to resolve  and will rpint 1 
    console.log("hello from async await 20 sec ")
    console.log(data3);
     const data2= await getid2(); // here it will take 16 sec to resolve  and will rpint 1 
    console.log("hello from async await 16 sec ")
    console.log(data2);
    const data = await getid(); // promis is resolving here  in 5 seconds and even it will wait for 166 secc to resolve
    console.log("hello from async await 5 sec")// here engine will stop untill promise is excuted
    console.log(data)
   
  }
  handlepromise();
// sceneario two chnaging the executin 
  async function handlepromise(){
    const data = await getid(); // promis is resolving here  in 5 seconds and even it will not wait for 166 secc to resolve
  console.log("hello from async await 5 sec")// here engine will stop untill promise is excuted
  console.log(data)
    const data2= await getid2(); // here it will take 16 sec to resolve  and will rpint 2
  console.log("hello from async await 16 sec ")
  console.log(data2);
   
  
  }
  handlepromise();
  

  






