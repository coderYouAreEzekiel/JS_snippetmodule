# JavaScript Snippet Module
#### The JavaScript Snippet Module contains snippet code that must be inside a module. It includes various syntax elements, statements, loops, and more.
#### I have provided a JavaScript code file where the snippet is added. You only need to copy/paste the code.

# **REMEMBER: Always read comments to understand how to code works.**

> // Variables
> let variableName; // Declare a variable  
> const CONSTANT_NAME = "value"; // Constant value  
>   
> // Functions  

> function exampleFunction(param1, param2) {  
    
>     // Logic goes here  

> }  

>   

> // Arrow Functions  

> const arrowFunction = (param1, param2) => {  
    
>     // Logic goes here  

> };  

>   

> // Control Flow  

> if (true) {  
    
>     // If block  

> } else {  
    
>     // Else block  

> }  

>   

> // Loops  

> for (let i = 0; i < 10; i++) {  
    
>     // Loop logic  

> }  

>   

> // Classes  

> class ExampleClass {  
    
>     constructor(param) {  
    
>         this.param = param;  

>     }  

>   

>     methodName() {
>         // Method logic
>     }
> }  

> 
> // Modules (Export/Import)  

> export function exportedFunction() {  
    
>     // Logic goes here  

> }  

>  

> // Async/Await Example  

> async function asyncFunction() {  
    
>     try {  
    
>         const result = await fetch('https://api.example.com/data');  

>         const data = await result.json();  

>         // Logic with data  

>     } catch (error) {  
    
>         console.error(error);  

>     }  

> }  


## You may think how can I use `let`, `const` and `var` inside of function?   
Here are the example:

1. let (Block-scoped)<br>
Best for variables that change value.<br>
Limited to the block (e.g., inside { }) where it's declared.<br>
<br>
function exampleLet() {<br>
    let count = 0; // Declared inside the function<br>
    if (true) {<br>
        let temp = 5; // Block-scoped (only inside this if-statement)<br>
        console.log(temp); // ✅ 5<br>
    }<br>
    // console.log(temp); ❌ Error (temp is not accessible here)<br>
}<br>
<br>
<br>
2. const (Block-scoped, Immutable)<br>
Best for constants or variables that should not be reassigned.<br>
Also limited to the block where it's declared.<br>
<br>
function exampleConst() {<br>
    const PI = 3.14159; // Cannot be reassigned<br>
    console.log(PI); // ✅ 3.14159<br>
<br>
    // PI = 3.14; ❌ Error: Assignment to constant variable<br>
}<br>
<br>
<br>
3. var (Function-scoped)<br>
Old syntax (not recommended for modern code).<br>
Variables are not block-scoped — they are scoped to the entire function.<br>
<br>
function exampleVar() {<br>
    if (true) {<br>
        var message = "Hello";<br>
    }<br>
    console.log(message); // ✅ Accessible (function-scoped)<br>
}<br>
<br>
<br>
4. Which One Should I Use?<br>
let → For variables that may change.<br>
const → For constants or variables that shouldn't be reassigned.<br>
var → Avoid unless working with legacy code.<br>
