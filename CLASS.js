// Class function

// FIRST TYPE
 class fruits
 {
    a = "Mango" 
    b = "orange"
    c = 12
    d = 15
   constructor ()
   {

   console.log(this.a , this.b , this.c + this.d)    
   }
}
let f1 = new fruits ;     // for call the function


// SECOND TYPE 

class animal
{
    a = "lion"
    constructor (ani)
    {
    return ani
    }
}
 
let f2 =new animal ;
console.log (f2.a)