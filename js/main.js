/*--------------------------------------------
          Use for more than one html
---------------------------------------------*/
// registration & index
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
                         "<input type='checkbox' class='btn-check' id= age"+[i] + ">" +
                              "<label class='btn btn-outline-primary m-1' for= age"+[i] + ">" + display_age[i] +
                         "</label></input>");                    
               }
          }
     }
}
// registration & index
function displayGender(formname){
     for (var i=0; i<display_gender.length; i++){
          if(formname == "regisreation"){
               document.write("<option>" + display_gender[i] + "</option>"); 
          }
          else if(formname == "index"){
               for (var i=0; i<display_gender.length; i++){
                    document.write(
                         "<input type='checkbox' class='btn-check' id=gen"+[i] + ">" +
                              "<label class='btn btn-outline-success m-1' for=gen"+[i] + ">" + display_gender[i] +
                         "</label></input>");                    
               }
          }
     }
}


/*--------------------------------------------
          registration.html only
---------------------------------------------*/
var regisData = [];

function resetBtn(){
     document.getElementById("regisForm").reset();
     error.textContent = "　";
}

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
          error.textContent = "Please insert all requested data"
     } else if(pass1 != pass2){
          error.textContent = "Please check your passwords and try again"
     } else {
          error.textContent = "　"
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


/*--------------------------------------------
              index.html only
----------------------------------------------*/
var display_civilstatus = ["Married", "Single", "Divorced", "A lover"];
var employment_status = ["Full-Time", "Part-Time", "Temporary", "Unemployed"]
var educational_qualifications = ["certificate", "diploma", "degree"]
var asset = ["Vehicles", "Land", "Building", "Cash"]

function displayCivilstatu(){
     for (var i=0; i<display_civilstatus.length; i++){
          document.write(
               "<input type='checkbox' class='btn-check' id=cv"+[i] + ">" +
                    "<label class='btn btn-outline-primary m-1' for=cv"+[i] + ">" + display_civilstatus[i] +
               "</label></input>");                    
     }
}
function employmentStatus(){
     for (var i=0; i<employment_status.length; i++){
          document.write(
               "<input type='checkbox' class='btn-check' id=em"+[i] + ">" +
                    "<label class='btn btn-outline-success m-1' for=em"+[i] + ">" + employment_status[i] +
               "</label></input>");                    
     }
}
function educationalQualifications(){
     for (var i=0; i<educational_qualifications.length; i++){
          document.write(
               "<input type='checkbox' class='btn-check' id=eq"+[i] + ">" +
                    "<label class='btn btn-outline-primary m-1' for=eq"+[i] + ">" + educational_qualifications[i] +
               "</label></input>");                    
     }
}
function assets(){
     for (var i=0; i<asset.length; i++){
          document.write(
               "<input type='checkbox' class='btn-check' id=as"+[i] + ">" +
                    "<label class='btn btn-outline-success m-1' for=as"+[i] + ">" + asset[i] +
               "</label></input>");                    
     }
}