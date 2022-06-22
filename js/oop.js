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
                    OBJECTS - The ‘with’ Keyword
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
// myBooks.addPrice(100);

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
------------------------------------------------------------------*/
document.write ("<u>BOOLEAN - Methods</u><br>");