
// <!------------------------- nishu test 2022/6/6 ------------------------->
     function SetCookie(){
          document.cookie = 'name= Nishu';
          cookieDisplay.textContent = "Display set cookie hear : " + document.cookie ;   
          console.log(document.cookie) 
          
          var x = document. cookie; window. alert(x); 
     }
     
     function GetCookie(){
          var allcookies = document.cookie;
          console.log(allcookies);
          console.log ("All Cookies : " + allcookies );

          // Get all the cookies pairs in an array
          cookiearray = allcookies.split(';');

          // Now take key value pair out of this array
          for(var i=0; i<cookiearray.length; i++){
               name = cookiearray[i].split('=')[0];
               value = cookiearray[i].split('=')[1];
               console.log ("Key is : " + name );
               console.log ("Value is : " + value);
          }
          cookieDisplay.textContent = "Display cookie : " + allcookies ;
     }
     
// ---------------------------------------------------------------------------------
     // Class -  study 
// ---------------------------------------------------------------------------------

document.cookie ="name=Nishu"
document.cookie = "username=John Doe";
// let x;

console.log(document.cookie);

function setCookie() {
     document.cookie = "username=John Doe"; 
     // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
     // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"; 
     let x = document.cookie;
     console.log(document.cookie);

}

function getCookie(name) {
     var nameEQ = name + "=";
     var ca = document.cookie.split(';');
     for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
     }
     return null;
}

function eraseCookie(name) {   
     document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


//------------------------- test - 1 -------------------------
function WriteCookie(){
     if( document.myform.customer.value == "" ){
          alert ("Enter some value!");
          return;
     }
     const d = new Date();
     d.setTime(d.getTime() + (2*24*60*60*1000));
     let expires = "expires="+ d.toUTCString();

     console.log(document.myform.customer.value);
     document.cookie ="name=" + document.myform.customer.value + ";" +  expires + ";path=/";     
}
function setcookie(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); // ) removedvar expires = "; expires=" + date.toGMTString(); // + added
  }
  else var expires = "";
  document.cookie = name+"=" + value+expires + ";"; // + and " added
}

function checkCookie() {
     let username = getCookie("username");
     if (username != "") {
      alert("Welcome again " + username);
     } else {
       username = prompt("Please enter your name:", "");
       if (username != "" && username != null) {
          setcookie("username", "nishu", 365);
       }
     }
}

function setCookie(cname, cvalue, exdays) {
     const d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
     let expires = "expires="+ d.toUTCString();
     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
   }

function getCookie(cname) {
     let name = cname + "=";
     let decodedCookie = decodeURIComponent(document.cookie);
     console.log(decodedCookie);
     let ca = decodedCookie.split(';');
     for(let i = 0; i <ca.length; i++) {
       let c = ca[i];
       while (c.charAt(0) == ' ') {
         c = c.substring(1);
       }
       if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
       }
     }
     return "";
   }

function ReadCookie(){
     var name = getCookie("username");
     console.log(name);

     // var allcookies = document.cookie;
     // document.write ("All Cookies : " + allcookies );
     // // Get all the cookies pairs in an array
     // cookiearray = allcookies.split(';');
     // // Now take key value pair out of this array
     // for(var i=0; i<cookiearray.length; i++){
     //      name = cookiearray[i].split('=')[0];
     //      value = cookiearray[i].split('=')[1];
     //      // console.log()
     //      document.write ("Key is : " + name + " and Value is : " + value);
     // }
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
