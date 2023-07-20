// {
//  let a = 5;
//  console.log(a);
// }
// if ( true) {
//     let a = 4;
//     console.log(a);
// }

let b = 200;
{
    var a = 10;
    let b= 20;     // block scope let varibale hosited by the initialized let 
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b); 

var a = 4;
{
    let a =5;

}
console.log(a)          //we can do like this var can shadow the let but not the viceversa