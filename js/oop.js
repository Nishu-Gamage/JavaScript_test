/********************************************************************* 
                          OBJECTS
**********************************************************************/
document.write ("********************************************************************<br>");
document.write ("　　　　　　　　　　　<u><b>OBJECTS</b></u><br>");
document.write ("********************************************************************<br>");

// Create an Object
var book = new Object();

// Assign properties to the object
book.subject = "English";
book.author  = "Martin";

// Print Object Attributes
document.write("OBJECTS - Book name is : " + book.subject + "<br>");
document.write("OBJECTS - Book author is : " + book.author + "<br><br>");

/* ★★　Array VS Object　★★*/
var regisData = new Object();       //  Create an Object
var regisData = [];                 //  Create an Array

regisData.firstName   =  "name1";       // Assign properties to the object
regisData["firstName"]   =  "name1";    // Assign properties to the Array


/*------------------------------------------------------------------ 
                    The ‘with’ Keyword
------------------------------------------------------------------*/
document.write ("<u>The ‘with’ Keyword</u><br>");

// Without 'with' keyword
function withTest(name, gender){
     this.name = name;
     this.gender = gender;
}
var mySelf = new withTest("Nishu", "Female");

document.write("Without 'with' name is : " + mySelf.name + "<br>");
document.write("Without 'with' gender is : " + mySelf.gender + "<br><br>");


// With 'with' keyword
function addPrice(amount){
     with(this){
          price = amount;
     }
}
function books(title, author){
     this.title = title;
     this.author = author;
     this.price = 0;
     this.addIncom = addPrice; // Assign that method as property.
}
var myBooks = new books("English", "Tom");

// myBooks.addPrice(100);     // this is Wrong
myBooks.addIncom(100);

document.write("With 'with' title is : " + myBooks.title + "<br>");
document.write("With 'with' author is : " + myBooks.author + "<br>");
document.write("With 'with' price is : " + myBooks.price + "<br>");
document.write("With 'with' addIncom is : " + myBooks.addIncom + "<br><br>");



/******************************************************************** 
                              NUMBER
********************************************************************/
document.write ("********************************************************************<br>");
document.write ("　　　　　　　　　　　<u><b>NUMBER</b></u><br>");
document.write ("********************************************************************<br><br>");

// MAX_VALUE
var valmax = Number.MAX_VALUE;
document.write ("Value of Number . MAX_VALUE : 　　" + valmax + "<br>");

// MIN_VALUE
var valmin = Number.MIN_VALUE;
document.write ("Value of Number . MIN_VALUE :  　　" + valmin + "<br>");

// NaN
var dayOfMonth = 50;

if (dayOfMonth < 1 || dayOfMonth > 31){
     dayOfMonth = Number.NaN
     document.write("(NaN) Day of Month must be between 1 and 31.") }

document.write("Value of dayOfMonth : " + dayOfMonth + "<br><br>");

// Prototype
document.write ("<u>NUMBER - Prototype</u><br>");
function jsClass(title, teacher){
     this.title = title;
     this.teacher = teacher;
}

var myJsClass = new jsClass("JS Class", "Chamod");

jsClass.prototype.student = "";
myJsClass.student = "Nishu";

document.write("(PROTOTYPE) Class title is :　　　　" + myJsClass .title + "<br>");
document.write("(PROTOTYPE) Class teacher is : 　　" + myJsClass .teacher + "<br>");
document.write("(PROTOTYPE) Class student is : 　　" + myJsClass .student + "<br><br>");


/*------------------------------------------------------------------ 
                    NUMBER - Constructor
------------------------------------------------------------------*/
document.write ("<u>NUMBER - Constructor</u><br>");

// toExponential ()
var num1 = 77.1234;
var val = num1.toExponential();
document.write("Exponential - num.toExponential() is : 　 　" + val + "<br>");

val = num1.toExponential(4);
document.write("Exponential - num.toExponential(4) is :　　" + val + "<br><br>");

// toFixed ()
var num2=177.1234;
document.write("Fixed - num.toFixed() is : 　　　" + num2.toFixed() + "<br>");
document.write("Fixed - num.toFixed(6) is :  　　" + num2.toFixed(6) + "<br><br>");

// toLocaleString ()
var num3 = new Number(177.1234);
document.write("LocaleString - num.toLocaleString() is　 " + num3.toLocaleString() + "<br><br>");

// toPrecision ()
var num4 = new Number(7.123456);
document.write("Precision - num.toPrecision() is 　　　" + num4.toPrecision() + "<br>");
document.write("Precision - num.toPrecision(4) is 　 　" + num4.toPrecision(4)+ "<br><br>");

// toString ()
var num5 = new Number(15);
document.write("String - num.toString() is　　　" + num5.toString() + "<br>");
document.write("String - num.toString(2) is 　　" + num5.toString(2) + "<br>");
document.write("String - num.toString(4) is 　　" + num5.toString(4) + "<br><br>");

// valueOf ()
// number constructor already exists. here we access to the constructor.
var num6 = new Number( 177.1234 );

document.write("Constructor Name - num.constructor() is :　　" + num6.constructor + "<br>");
document.write("Constructor value - num.constructor() is : 　　" + num6.valueOf()　+ "<br><br>");


/******************************************************************** 
                              BOOLEAN
********************************************************************/
document.write ("********************************************************************<br>");
document.write ("　　　　　　　　　　　<u><b>BOOLEAN</b></u><br>");
document.write ("********************************************************************<br><br>");

/*------------------------------------------------------------------
                    BOOLEAN - Constructor
------------------------------------------------------------------*/
document.write ("<u>BOOLEAN - Constructor</u><br>");

// Constructor
var bool = new Boolean( );

document.write("Constructor - bool.constructor() is : " + bool.constructor+ "<br><br>");


/*------------------------------------------------------------------ 
                    BOOLEAN - Prototype
------------------------------------------------------------------*/
document.write ("<u>BOOLEAN - Prototype</u><br>");
function bBook(title, author){
     this.title = title;
     this.author = author;
}

var myBbook = new bBook("Perl", "Mohtashim");
bBook.prototype.price = null;
myBbook.price = 100;

document.write("Prototype - Book title is : " + myBbook.title + "<br>");
document.write("Prototype - Book author is : " + myBbook.author + "<br>");
document.write("Prototype - Book price is : " + myBbook.price + "<br><br>");


/*------------------------------------------------------------------ 
                    BOOLEAN - Methods
                  toString()・valueOf()
------------------------------------------------------------------*/
document.write ("<u>BOOLEAN - Methods</u><br>");

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

var result1 = str7.localeCompare("Nishu");
var result2 = str7.localeCompare("This is beautiful string");

document.write("locale Compare  　:　　" + result1 + "<br>");
document.write("locale Compare  　:　　" + result2 + "<br><br>");



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
