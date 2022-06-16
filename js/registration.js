/*--------------------------------------------
             registration.html
---------------------------------------------*/

var display_age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var display_gender = ["Male", "Female", "Transgender"];
var regisData = [];

function displayAge(){
     for (var i=0; i<display_age.length; i++){
          document.write("<option>" + display_age[i] + "</option>");    
     }
}

function displayGender(){
     for (var i=0; i<display_gender.length; i++){
          document.write("<option>" + display_gender[i] + "</option>"); 
     }
}

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
     // get data from drop -----down lists-----
     var age_select =  document.getElementById('age');
     var age   =  age_select.options[age_select.selectedIndex].value;
     var gen_select =  document.getElementById('gender');
     var gender = gen_select.options[gen_select.selectedIndex].value;
     // check conditions
     if(!name1 | !name2 | !pass1 | !pass2 | !email | age=='Age' | gender=='Gender'){
          error.textContent = "Please insert all requested data"
     } else if(pass1 != pass2){
          error.textContent = "Please check your password and try again"
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
                 login.html
---------------------------------------------*/
