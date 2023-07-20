function x(){
    var a = 5;
    function y(){
        console.log(a);
    }
    return y;     //when function is retuned it will move out of the call stack
}                  // and it will not resides in function  x()
var z = x();
console.log(z);
z();              //still maintain their lexical scope