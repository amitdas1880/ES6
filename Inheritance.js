
// The properties of parent class is used in child class with the help of inheritance.
// (Parent class)
class category 
{
dry_fruits()
{
    return "Almond is dry fruits"
}
pome_fruits()
{
    return "apple is pome fruit"
}
}

let c1 = new category ;                         // Call the function
console.log (c1.dry_fruits())
console.log (c1.pome_fruits()) 

// (Child class)
class fruits extends category                                 
{
constructor()                                // Constructor is not mandatory, to define in class.
{
 super()                           // If we define constructor in child class, and after inherit the properties of parant class then it is necessary to define supper () key under constructor.
    console.log ("constructor") ;              
}                                             
getfruit ()
{
return "apple"; 
}
}

let f1 = new fruits;                            // Call the function
console.log (f1.getfruit());

// After inheriting the properties of parent class in to child class.
console.log (f1.pome_fruits());
console.log (f1.dry_fruits());

