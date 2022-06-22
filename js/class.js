/*--------------------------------------------
                 class.html
---------------------------------------------*/

/*------------------------------------------------------------------ 
                    BOOLEAN - Methods
               toSource()・toString()・valueOf()
------------------------------------------------------------------*/
document.write ("<u>BOOLEAN - Methods</u><br>");

// toSource ()
function book1(title, publisher, price){
     this.title1 = title;
     this.publisher1 = publisher;
     this.price1 = price;   }
     
var newBook1 = new book1("Perl","Leo Inc",200);
// document.write("newBook.toSource() is : "+ newBook1.toSource() + "<br><br>");

// toString()
var flag1 = new Boolean(false);
document.write( "flag.toString is : " + flag1.toString() + "<br>");

// valueOf()
var flag2 = new Boolean(false);
document.write( "flag.valueOf is : " + flag2.valueOf() + "<br><br>");


/******************************************************************** 
                              STRING
          constructor　・　Length　・　 Prototype
********************************************************************/
document.write ("********************************************************************<br>");
document.write ("　　　　　　　　　　　<u><b>STRING</b></u><br>");
document.write ("********************************************************************<br><br>");

// Constructor
document.write ("<u>constructor　・　Length　・　 Prototype</u><br><br>");
var str = new String( "This is string" );
document.write("Constructor - str.constructor is　:　　" + str.constructor + "<br>");

// Length
var str = new String( "This is string" );
document.write("Length 　-　 str.length is　:　　" + str.length + "<br><br>");

// Prototype
function book2(title, author){
     this.title = title;
     this.author = author;
}
var myBook2 = new book2("Perl", "Mohtashim");
book2.prototype.price = null;
myBook2.price = 100;

document.write("Prototype - Book title is : 　 　　" + myBook2.title + "<br>");
document.write("Prototype - Book author is : 　　" + myBook2.author + "<br>");
document.write("Prototype - Book price is :　　　" + myBook2.price + "<br><br>");


/*------------------------------------------------------------------ 
                         STRING - Methods
------------------------------------------------------------------*/
document.write ("<u>STRING - Methods</u><br>");

// charAt()hod
var str1 = new String( "This is string" );

document.writeln("str.charAt(0) is　:　　" + str1.charAt(0));
document.writeln("<br />str.charAt(1) is　:　　" + str1.charAt(1));
document.writeln("<br />str.charAt(2) is　:　　" + str1.charAt(2));
document.writeln("<br />str.charAt(3) is　:　　" + str1.charAt(3));
document.writeln("<br />str.charAt(4) is　:　　" + str1.charAt(4));
document.writeln("<br />str.charAt(5) is　:　　" + str1.charAt(5) + "<br><br>");

// contact ()
var str2 = new String( "This isstring one" );
var str3 = new String( "This is string two" );
var str4 = str2.concat( str3 );

document.write("Concatenated String 　:　　" + str4 + "<br><br>");

// indexOf()
var str5 = new String( "This is string one" );

var index = str5.indexOf( "string" );
document.write("indexOf found String 　:　　" + index  + "<br>");

var index = str5.indexOf( "one" );
document.write("indexOf found String 　:　　" + index  + "<br><br>");

// lastIndexOf ()
var str6 = new String( "This is string one and again string" );

var index = str6.lastIndexOf( "string" );
document.write("lastIndexOf found String 　:　　" + index + "<br>");

var index = str6.lastIndexOf( "one" );
document.write("lastIndexOf found String 　:　　" + index + "<br><br>");

// localeCompare ()
var str7 = new String( "This is beautiful string" );

var result = str7.localeCompare("This is beautiful string");
document.write("locale Compare  　:　　" + result + "<br><br>");

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



