//------------------------- test - 1 -------------------------
function WriteCookie(){
     if( document.myform.customer.value == "" ){
          alert ("Enter some value!");
          return;
     }
     console.log(document.myform.customer.value);
     cookievalue= escape(document.myform.customer.value) + ";";
     document.cookie="name=" + cookievalue;
     document.write ("Setting Cookies : " + "name=" + cookievalue );  
}

//------------------------- test - 2 -------------------------
function CheckboxCookie(){
     if(document.formTest2.one.value == 1){          
          console.log(document.formTest2.one.value);
          console.log(document.formTest2.two.value);
          console.log(document.formTest2.three.value);
     }
}

//------------------------- test - 3 -------------------------
var age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function displayAge(){
     for (var i=0; i<age.length; i++){
          document.write("<option>" + age[i] + "</option>");    
     }
}

function SelectboxCookie(){
     console.log(document.formTest3);
}
