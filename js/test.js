/*---------------------------------------------------------------------
   *  Chrome has a V8 engine option to run these javaScript codes.
   *  Variables are case sensitive.
   *  <nonscript> code use to diaplay warning message to user,
          if SEO does not have javascript.
   *  Data types are,
          Numbers , String and Boolean.
   * JavaScript also defines two data types,
          null and undifined.
-----------------------------------------------------------------------*/

/*---------------------------- 
     test1.html - JS Code 
------------------------------*/
function sayHello(){
     document.write ("This is Main JS");
     alert("Hello! This is Main JS");      }

// Variable
var1 = 10
var2 = 20
var3 = 30; var4 = 40;  // best practices ( ; )
var x = null;
var y = 'Display data from  js variable';

// print variable
// document.write(x);


/*---------------------------------------- 
             registration.html
------------------------------------------*/
var age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var gender = ["Male", "Female", "Transgender"];

function displayAge(){
       for (var i=0; i<age.length; i++){
              document.write("<option>" + age[i] + "</option>");    
       }}

function displayGender(){
       for (var i=0; i<gender.length; i++){
              document.write("<option>" + gender[i] + "</option>"); 
       }}

function resetBtn(){
       console.log("rest btn clicked"); 
}

function registration(){
       console.log("registration btn clicked"); 
}