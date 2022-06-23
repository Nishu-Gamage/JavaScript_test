
// Regular Expression


// match ()
var str8 = "For more information, see Chapter 3.4.5.1";

var re = /(chapter \d+(\.\d)*)/i;
var found = str8.match( re );
document.write("match - " + found  + "<br><br>");

// replace ()
var re = /apples/gi;
var str9 = "Apples are round, and apples are juicy.";
var newstr = str9.replace(re, "oranges");

document.write("replace - " + newstr + "<br><br>");

// Search ()
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";

if ( str.search(re) == -1 ){
     document.write("Does not contain Apples" + "<br><br>");
} else {
     document.write("Contains Apples" + "<br><br>");
}

// slice ()
var str10 = "Apples are round, and apples are juicy.";
var sliced = str10.slice(3, -2);

document.write( sliced + "<br><br>");

// split ()
var str11 = "Apples are round, and apples are juicy.";
var splitted = str11.split(" ", 3);

document.write( splitted + "<br><br>");

// substr ()
var str12 = "Apples are round, and apples are juicy.";

document.write("(1,2)　: 　 　　" + str12.substr(1,2));
document.write("<br />(-2,2)　:　　　 " + str12.substr(-2,2));
document.write("<br />(1)　:　　　　 " + str12.substr(1));
document.write("<br />(-20, 2)　: 　　" + str12.substr(-20,2));
document.write("<br />(20, 2)　:　 　 " + str12.substr(20,2) + "<br><br>");

// substring ()
var str13 = "Apples are round, and apples are juicy.";

document.write("(1,2)　: 　　　" + str13.substring(1,2));
document.write("<br />(0,10)　:　　" + str13.substring(0, 10));
document.write("<br />(5)　:　　　 " + str13.substring(5)+ "<br><br>");

// toLocaleLowerCase()
var str14 = "Apples are round, and Apples are Juicy.";
document.write(str14.toLocaleLowerCase( )+ "<br><br>");



