
document.write ("********************************************************************<br>");
document.write ("　<u><b>Regular Expressions</b></u><br>");
document.write ("********************************************************************<br><br>");

// variable for all Regular Expression
     let txtV = "nishu!Gamage!@1234.com";
     let strV = "Hello Ben10";

// // ----------------------------------------------------------------------
// document.write("<u> Find any character between the brackets </u><br>");
// // ----------------------------------------------------------------------

//      let characterPtn1 = /[abc]/;
//      let characterPtn2 = /[abc]/g;

//      let characterRes1 = txtV.match(characterPtn1);
//      let characterRes2 = txtV.match(characterPtn2);

//      document.write(txtV + "　　<b class='text-danger'>"+ characterPtn1 +"</b>　　=　　" + characterRes1 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ characterPtn2 +"</b>　 =　　" + characterRes2 + '<br><br>');



// // ----------------------------------------------------------------------
// document.write("<u> Find any character NOT between the brackets </u><br>");
// // ----------------------------------------------------------------------

//      let nonCharacterPtn1 = /[^abc]/;
//      let nonCharacterPtn2 = /[^abc]/g;
//      let nonCharacterPtn3 = /[^abc]+/g;

//      let nonCharacterRes1 = txtV.match(nonCharacterPtn1);
//      let nonCharacterRes2 = txtV.match(nonCharacterPtn2);
//      let nonCharacterRes3 = txtV.match(nonCharacterPtn3);

//      document.write(txtV + "　　<b class='text-danger'>"+ nonCharacterPtn1 +"</b>　　 　 =　　" + nonCharacterRes1 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ nonCharacterPtn2 +"</b>　　　=　　" + nonCharacterRes2 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ nonCharacterPtn3 +"</b>　 　=　　" + nonCharacterRes3 + '<br><br>');



// // ----------------------------------------------------------------------
// document.write("<u> Find any character between the brackets (any digit) </u><br>");
// // ----------------------------------------------------------------------

//      let anyDigitPtn1 = /[0-9]/;
//      let anyDigitPtn2 = /[0-9]/g;
//      let anyDigitPtn3 = /[0-9]+/g;

//      let anyDigitRes1 = txtV.match(anyDigitPtn1);
//      let anyDigitRes2 = txtV.match(anyDigitPtn2);
//      let anyDigitRes3 = txtV.match(anyDigitPtn3);

//      document.write(txtV + "　　<b class='text-danger'>"+ anyDigitPtn1 +"</b>　　　　　=　　" + anyDigitRes1 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ anyDigitPtn2 +"</b>　　　　 =　　" + anyDigitRes2 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ anyDigitPtn3 +"</b>　　 　 =　　" + anyDigitRes3 + '<br><br>');



// // ----------------------------------------------------------------------
// document.write("<u> Find any character NOT between the brackets (any non-digit) </u><br>");
// // ----------------------------------------------------------------------

//      let anyNonDigitptn1 = /[^0-9]/;
//      let anyNonDigitptn2 = /[^0-9]/g;
//      let anyNonDigitptn3 = /[^0-9]+/g;
     
//      let anyNonDigitRes1 = txtV.match(anyNonDigitptn1);
//      let anyNonDigitRes2 = txtV.match(anyNonDigitptn2);
//      let anyNonDigitRes3 = txtV.match(anyNonDigitptn3);

//      document.write(txtV + "　　<b class='text-danger'>"+ anyNonDigitptn1 +"</b>　　　　　=　　" + anyNonDigitRes1 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ anyNonDigitptn2 +"</b>　　　 　=　　" + anyNonDigitRes2 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ anyNonDigitptn3 +"</b>　 　 　=　　" + anyNonDigitRes3 + '<br><br>');



// // ----------------------------------------------------------------------
// document.write("<u> Find any of the alternatives specified </u><br>");
// // ----------------------------------------------------------------------

//      let alternatives1 = /(x|y)/;
//      let alternatives2 = /(a|n)/;
//      let alternatives3 = /(a|n)/g;

//      let alternativesRes1 = txtV.match(alternatives1);
//      let alternativesRes2 = txtV.match(alternatives2);
//      let alternativesRes3 = txtV.match(alternatives3);

//      document.write(txtV + "　　<b class='text-danger'>"+ alternatives1 +"</b>　　　=　　" + alternativesRes1 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ alternatives2 +"</b>　　　=　　" + alternativesRes2 + '<br>');
//      document.write(txtV + "　　<b class='text-danger'>"+ alternatives3 +"</b>　 　=　　" + alternativesRes3 + '<br><br><br>');


     
document.write ("********************************************************************<br>");
document.write ("　<u><b>Regular Expressions - Meta Characters</b></u><br>");
document.write ("********************************************************************<br><br>");



// ----------------------------------------------------------------------
document.write("<u> Dot </u><br>");
// ----------------------------------------------------------------------
document.write("<b class='bg-warning text-dark'>　.　=　Find a single character　</b><br><br>");


document.write(txtV + "　　<b class='text-danger'> /./</b> "+"　　=　"+txtV.match(/./)+"<br>");
document.write(txtV + "　　<b class='text-danger'> /./g</b> "+"　 =　"+txtV.match(/./g)+"<br><br>");



// ----------------------------------------------------------------------
document.write("<u> Backslash </u><br>");
// ----------------------------------------------------------------------
document.write("<b class='bg-warning text-dark'>　d = 0-9 　　　　　 D = not \d　　</b><br>");
document.write("<b class='bg-warning text-dark'>　w = A-Za-z0-9　　 W = not \w 　 </b><br>");
document.write("<b class='bg-warning text-dark'>　s = white space　　S = not \s　　</b><br><br>");


     let backslashPtn1 = /\d/;
     let backslashPtn2 = /\d/g;

     let backslashPtn3 = /\w/;
     let backslashPtn4 = /\w/g;

     let backslashPtn5 = /\W/;
     let backslashPtn6 = /\W/g;

     let backslashPtn7 = /\s/;
     let backslashPtn8 = /\s/g;

     let backslashPtn9 = /\S/;
     let backslashPtn10 = /\S/g;

     let backslashPtnRes1 = txtV.match(backslashPtn1);
     let backslashPtnRes2 = txtV.match(backslashPtn2);
     let backslashPtnRes3 = txtV.match(backslashPtn3);
     let backslashPtnRes4 = txtV.match(backslashPtn4);
     let backslashPtnRes5 = txtV.match(backslashPtn5);
     let backslashPtnRes6 = txtV.match(backslashPtn6);
     let backslashPtnRes7 = txtV.match(backslashPtn7);
     let backslashPtnRes8 = txtV.match(backslashPtn8);
     let backslashPtnRes9 = txtV.match(backslashPtn9);
     let backslashPtnRes10 = txtV.match(backslashPtn10);

     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn1 +"</b>　　=　　" + backslashPtnRes1 + '<br>');
     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn2 +"</b> 　=　　" + backslashPtnRes2 + '<br><br>');

     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn3 +"</b>　　=　　" + backslashPtnRes3 + '<br>');
     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn4 +"</b>　 =　　" + backslashPtnRes4 + '<br><br>');

     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn5 +"</b>　　=　　" + backslashPtnRes5 + '<br>');
     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn6 +"</b>　 =　　" + backslashPtnRes6 + '<br><br>');

     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn7 +"</b>　　=　　" + backslashPtnRes7 + '<br>');
     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn8 +"</b>　 =　　" + backslashPtnRes8 + '<br><br>');

     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn9 +"</b>　　=　　" + backslashPtnRes9 + '<br>');
     document.write(txtV + "　　<b class='text-danger'>"+ backslashPtn10 +"</b>　 =　　" + backslashPtnRes10 + '<br><br>');


// ----------------------------------------------------------------------
document.write("<u> Exercise </u><br>");
// ----------------------------------------------------------------------








let text = "Visit W3Sc8hools";
let pattern = /[0-9]/;
let result = text.match(pattern);

console.log(result);
document.write(result);

let a = "nishu@test!";
let p = a.replace(/\W/g,"");
// let p = a.replace(/[^a-zA-Z ]/g,"");

console.log(p);
document.write(p);

 