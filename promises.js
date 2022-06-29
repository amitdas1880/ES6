// PROBLEM (With out use promises)

let data = 1;
console.log(data);
data = 2;
setTimeout(()=>
{
console.log(data);
},2000)
 data = 3;
 console.log(data);

// Promises use

let data = new Promise ((resolve, reject)=>
{
    setTimeout(()=>
    {
       resolve ("code are executed successfully");
        //reject ("code are not executer successfully");
    },2000)
}
)
data.then((item)=>
{
console.log(item);
}
)
console.log("hello");

// Promise Channing :- In Promise channing , we can use more then one promises in a program.

let data = new Promise ((resolve, reject)=>
{
    setTimeout(()=>
    {
       resolve (10);
    },2000)
}
)
data.then((item)=>
{
   console.log ("1st",item);
    return item*10;
})

.then ((item)=>{
    console.log ("2nd",item);
    return item*10;
})

.then ((item)=>{
console.log ("3rd",item);
    
    
})
.catch((reject)=>{
    console.log("catch is block",reject)
})

// ALL-SETTELED

let data = Promise.allSettled ([
new Promise ((resolve, reject)=>
{
    setTimeout(()=>
    {
       resolve ("2 SECOND");
    },2000)
}),
new Promise ((resolve, reject)=>
{
    setTimeout(()=>
    {
       reject ("4 SECOND");
    },4000)
}),
new Promise ((resolve, reject)=>
{
    setTimeout(()=>
    {
       resolve ("3 SECOND");
    },3000)
})
])
data.then((item)=>
{
console.log("then block",item);
})
.catch((reject)=>{
        console.log("catch is block",reject)
    })
    
