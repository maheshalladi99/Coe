var x:number = 4 
var y:number = 10
console.log("x vale is:",x," y value is:",y)
//Arithmetic Operators
console.log("Addition of x and y  is :",x+y)
console.log("Subtraction of x and y  is :",x-y)
console.log("Multiplication of x and y  is :",x*y)
console.log("Division of x and y  is :",x/y)
console.log("Modulus of x and y  is :",x%y)
console.log("Increment of x++   is :","Actual number: ",x,"  Increment: ",x++,"  After Increment",x)
console.log("PreIncrement of ++x   is :","Actual number: ",x,"  PreIncerement:", ++x,"  After Increment",x)
console.log("Decrement of x--  is :","Actual number: ",x,"  Dcrement: ",x--,"  After Dncrement",x)
console.log("PreDecrement of ++x  is :","Actual number: ",x,"  PreDcerement:", --x,"  After Increment",x)

//Relational Operators
console.log("\n\nx vale is:",x," y value is:",y,
"\nfor x>y :",x>y,"\nfor x<y :",x<y,"\nfor x<=y :",x<=y,
"\nfor x>=y :",x>=y,"\nfor x==y :",x==y,"\nfor x!=y :",x!=y)

//Logical Operators
console.log("\n\nfor x&&y :",x>10&&y<12,"\nfor x||y :",x>10||y<12,"\nfor !(x>10) :",!(x>10))

//Bitwise operators
var a:number = 4 
var b:number = 5
console.log("\n\na vale is:",a," b value is:",b)
console.log("for &",a&b,"\n for |",a|b,"\nfor ^",a^b,"\nfor ~",~b,"\nfor >>",a>>b,"\nfor <<",a<<b)

//Assignment
var x:number = 4 
var y:number=1
console.log("\n\nx vale is:",x," y value is:",y)
console.log("value of y+=x: ",y+=x,"\nvalue of y-=x: ",y-=x,"\nvalue of y*=x: ",y*=x,"\nvalue of y/=x: ",y/=x,"\n\n"); 

//Miscellaneous Operators
var y = -x; 

console.log("value of x: ",x);   
console.log("value of y: ",y,"\n\n");

//String Operators: Concatenation operator (+)
var msg:string = "hello"+"world" +"\n\n"
console.log(msg)

//Conditional Operator (?)
var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

//typeof
var num = 12 
console.log(typeof num);