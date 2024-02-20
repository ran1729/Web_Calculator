let a,b;
function myfun(form){
        a=+document.getElementById("num1").value;
        b=+document.getElementById("num2").value;
        let op=document.getElementById("op").value;
        
        switch(op){
              case "+":document.getElementById("ans").value=a+b;
              break;
              case "-":document.getElementById("ans").value=a-b;
              break;
              case "*":document.getElementById("ans").value=a*b;
              break;
              case "/":document.getElementById("ans").value=a/b;
              break;
              default:document.getElementById("ans").value="";
              break;
        }
        
}
let l1=0,l2=0,l3=0,c;
function fun(form){
       c=document.getElementById("op").value;
       a=document.getElementById("num1").value;

       b=document.getElementById("num2").value;
       
}
function fun1(form){
       if(a!=document.getElementById("num1").value || b!=document.getElementById("num2").value || c!=document.getElementById("op").value)
       document.getElementById("ans").value="";
       
       
}


