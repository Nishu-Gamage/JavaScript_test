/*--------------------------------------------
          Use for more than one html
---------------------------------------------*/
// Display Age registration & index
var display_age = [10, 20, 30, 40, 50, 60, 70, 80];
var display_gender = ["Male", "Female", "Transgender"];

function displayAge(formname){
     for (var i=0; i<display_age.length; i++){
          if(formname == "regisreation"){
               document.write("<option>" + display_age[i] + "</option>");
          }
          else if(formname == "index"){
               for (var i=0; i<display_age.length; i++){
                    document.write(
                         "<input type='checkbox' value='1'  class='agebox btn-check' id= age"+[i] + ">" +
                         "<label class='btn btn-outline-primary m-1' for= age"+[i] + ">" + display_age[i] +
                         "</label></input>");                    
               }
          }
     }
}
// Display Gender registration & index
function displayGender(formname){
     for (var i=0; i<display_gender.length; i++){
          if(formname == "regisreation"){
               document.write("<option>" + display_gender[i] + "</option>"); 
          }
          else if(formname == "index"){
               for (var i=0; i<display_gender.length; i++){
                    document.write(
                         "<input type='checkbox' class='genderbox btn-check' id=gen"+[i] + ">" +
                         "<label class='btn btn-outline-success m-1' for=gen"+[i] + ">" + display_gender[i] +
                         "</label></input>");
               }
          }
     }
}
// Reset Btn registration & index
function resetBtn(formname){
     if(formname == "regisreation"){
          document.getElementById("regisForm").reset();
          error.textContent = "　";
     } else if(formname == "index"){
          document.getElementById("indexform").reset();
          error.textContent = "　";
          age_checkedItems = [];
          gender_checkedItems = [];
          civS_checkedItems = [];
          empS_checkedItems = [];
          eduQ_checkedItems = [];
          assets_checkedItems = [];
     } else if(formname == "login"){
          document.getElementById("loginForm").reset();
          error.textContent = "　";
     }
}


/*--------------------------------------------
          registration.html only
---------------------------------------------*/
var regisData = [];

function registration(){
     // get data from -----inputs-----
     var name1 =  document.regisForm.firstName.value;
     var name2 =  document.regisForm.lastName.value;
     var pass1 =  document.regisForm.pass1.value;
     var pass2 =  document.regisForm.pass2.value;
     var email =  document.regisForm.mail.value;
     // get data from -----drop down lists-----
     var age_select =  document.getElementById('age');
     var age   =  age_select.options[age_select.selectedIndex].value;
     var gen_select =  document.getElementById('gender');
     var gender = gen_select.options[gen_select.selectedIndex].value;
     
     // check conditions
     if(!name1 | !name2 | !pass1 | !pass2 | !email | age=='Age' | gender=='Gender'){
          error.textContent = "Please insert all requested data";
     } else if(pass1 != pass2){
          error.textContent = "Please check your passwords and try again";
     } else {
          error.textContent = "　";
          regisData["firstName"]   =  name1;
          regisData["lastName"]    =  name2;
          regisData["password"]    =  pass2;
          regisData["email"]       =  email;
          regisData["age"]         =  age;
          regisData["gender"]      =  gender;
          console.log(regisData);
          // window.location.href = "/JavaScript_test/login.html";
          // href="<?php echo home_url('/r-registration-mail/'); ?>"
     }
}


/*--------------------------------------------
              login.html only
---------------------------------------------*/
var loginID = "nishu";
var loginPass = "pass123";

function userLogin(){
     // get data from -----inputs-----
     var inputValue1 = document.loginForm.loginid.value;
     var inputValue2 = document.loginForm.LoginPassword.value;

     // check conditions
     if(inputValue1 != loginID || inputValue2 != loginPass || inputValue1 == "" || inputValue2 == ""){
          error.textContent = "Check your inputs";
     } else if(loginID==inputValue1 && loginPass==inputValue2){
          console.log(inputValue1 , inputValue2); 
          error.textContent = "　";
     }
}


/*--------------------------------------------
              index.html only
----------------------------------------------*/
var display_civilstatus = ["Married", "Single", "Divorced", "A lover"];
var employment_status = ["Full-Time", "Part-Time", "Temporary", "Unemployed"];
var educational_qualifications = ["Degree", "Diploma", "Certificate"];
var asset = ["Vehicles", "Land", "Building", "Cash"];

function displayCivilstatu(){
     for (var i=0; i<display_civilstatus.length; i++){
          document.write(
               "<input type='checkbox' value='"+[i] + "' class='civSbox btn-check' id=cv"+[i] + ">" +
                    "<label class='btn btn-outline-primary m-1' for=cv"+[i] + ">" + display_civilstatus[i] +
               "</label></input>");                
     }
}
function employmentStatus(){
     for (var i=0; i<employment_status.length; i++){
          document.write(
               "<input type='checkbox' class='empSbox btn-check' id=em"+[i] + ">" +
                    "<label class='btn btn-outline-success m-1' for=em"+[i] + ">" + employment_status[i] +
               "</label></input>");
     }
}
function educationalQualifications(){
     for (var i=0; i<educational_qualifications.length; i++){
          document.write(
               "<input type='checkbox' class='eduQbox btn-check' id=eq"+[i] + ">" +
                    "<label class='btn btn-outline-primary m-1' for=eq"+[i] + ">" + educational_qualifications[i] +
               "</label></input>");
     }
}
function assets(){
     for (var i=0; i<asset.length; i++){
          document.write(
               "<input type='checkbox' class='assetsbox btn-check' id=as"+[i] + ">" +
                    "<label class='btn btn-outline-success m-1' for=as"+[i] + ">" + asset[i] +
               "</label></input>");
     }
}

// Start check horoscope result 
var age_checkedItems = [];
var gender_checkedItems = [];
var civS_checkedItems = [];
var empS_checkedItems = [];
var eduQ_checkedItems = [];
var assets_checkedItems = [];

var age_inputElements = document.getElementsByClassName('agebox');
var gender_inputElements = document.getElementsByClassName('genderbox');
var civS_inputElements = document.getElementsByClassName('civSbox');
var empS_inputElements = document.getElementsByClassName('empSbox');
var eduQ_inputElements = document.getElementsByClassName('eduQbox');
var assets_inputElements = document.getElementsByClassName('assetsbox');

function ageInputElements(){
     for(var i=0; age_inputElements[i]; ++i){
          if(age_inputElements[i].checked){
               age_checkedItems[i] = display_age[i];
               if(age_checkedItems[i] == 10) { return "10";} 
               else if (age_checkedItems[i] == 20) { return "20"; }
               else if (age_checkedItems[i] == 30) { return "30"; }
               else if (age_checkedItems[i] == 40) { return "40"; }
               else if (age_checkedItems[i] == 50) { return "50"; }
               else if (age_checkedItems[i] == 60) { return "60"; }
               else if (age_checkedItems[i] == 70) { return "70"; }
               else if (age_checkedItems[i] == 80) { return "80"; }
          }else if(age_inputElements[i].unchecked) {
               return error.textContent = "Select Age";
          }
     }
}
function genderInputElements(){
     for(var i=0; gender_inputElements[i]; ++i){
          if(gender_inputElements[i].checked){
               gender_checkedItems[i] = display_gender[i];
               if(gender_checkedItems[i] == "Male") { return "Male";} 
               else if (gender_checkedItems[i] == 'Female') { return "Female"; }
               else if (gender_checkedItems[i] == 'Transgender') { return "Transgender"; }
          }else if(gender_inputElements[i].unchecked) {
               return error.textContent = "Select Gender";
          }
     }
}
function civilStatusInputElements(){
     
     civS_checkedItems = [];
     var y = 0;

     for (var i = 0; i < civS_inputElements.length; i++) {
          if (civS_inputElements[i].checked) {
               civS_checkedItems[y] = display_civilstatus[i];
               y++;  
          }
     }
     //  Return to display the selected CheckBox values.
     return civS_checkedItems.join();

}
function employmentInputElements(){
     for(var i=0; empS_inputElements[i]; ++i){
          if(empS_inputElements[i].checked){
               empS_checkedItems[i] = employment_status[i];
               if(empS_checkedItems[i] == "Full-Time" ) { return "Full-Time" }
               else if(empS_checkedItems[i] == "Part-Time") { return "Part-Time" }
               else if(empS_checkedItems[i] == "Temporary") { return "Temporary" }
               else if(empS_checkedItems[i] == "Unemployed") { return "Unemployed" }
          }else if(empS_inputElements[i].unchecked) {
               return error.textContent = "Select Employment Status";
          }
     }
}
function educationalInputElements(){
     for(var i=0; eduQ_inputElements[i]; ++i){
          if(eduQ_inputElements[i].checked){
               eduQ_checkedItems[i] = educational_qualifications[i];
               if(eduQ_checkedItems[i] == "Degree") { return "Degree" }
               else if(eduQ_checkedItems[i] == "Diploma") { return "Diploma" }
               else if(eduQ_checkedItems[i] == "Certificate") { return "Certificate" }
          }else if(eduQ_inputElements[i].unchecked) {
               return error.textContent = "Select Educational Qualifications";
          }
     }
}
function assetsInputElements(){

     assets_checkedItems = [];
     var y = 0;

     for(var i=0; i<assets_inputElements.length; i++){
          if(assets_inputElements[i].checked){
               assets_checkedItems[y] = asset[i];
               y++;
          }
     }
     return assets_checkedItems.join();
}
// Collect CheckedBox Result
function collectCheckedBoxResult(){

     var collectCheckedBox = [];

     if(!ageInputElements()){ return error.textContent = "Select Age"; }
     else if(!genderInputElements()){ return error.textContent = "Select Gender";}
     else if(!civilStatusInputElements()){ return error.textContent = "Select Civil Status";}
     else if(!employmentInputElements()){ return error.textContent = "Select Employment Status";}
     else if(!educationalInputElements()){ return error.textContent = "Select Educational Qualifications";}
     else if(!assetsInputElements()){ return error.textContent = "Select Assets";}
     else {
          error.textContent = "　";
          collectCheckedBox["ageIn"]   =  ageInputElements();
          collectCheckedBox["genIn"]   =  genderInputElements();
          collectCheckedBox["civIn"]   =  civilStatusInputElements();
          collectCheckedBox["empIn"]   =  employmentInputElements();
          collectCheckedBox["eduIn"]   =  educationalInputElements();
          collectCheckedBox["astIn"]   =  assetsInputElements();
     }

     return collectCheckedBox;

}

function horoscopeResult(){

     console.log(collectCheckedBoxResult());

}

function getConfirmation(){
     var retVaasasl = confirm("Do you want to continue ?");
     // if( retVal == true ){
     // document.write ("User wants to continue!");
     // return true;
     // }else{
     // document.write ("Nishu User does not want to continue!");
     // return false;
     // }
}

function getValue(){
     var retVal = prompt("Enter your name : ", "your name here");
     document.write("You have entered : " + retVal);
     }
     