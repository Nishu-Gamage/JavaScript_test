document.write ("********************************************************************<br>");
document.write ("　　　　　　　　　　　<u><b>　Array　</b></u><br>");
document.write ("********************************************************************<br><br>");

var arr = new Array( 10, 20, 30 );
document.write("<b>var arr = new Array( 10, 20, 30 );</b><br><br>");

// Array Constructor
document.write("arr.constructor is　:　" + arr.constructor + "<br>");

// Array length
document.write("arr.length is 　　　:　" + arr.length + "<br><br>");

// Array Prototype
function book(title, author){
     this.title = title;
     this.author = author;
}

var myBook = new book("Perl", "Mohtashim");  
book.prototype.price = null;
myBook.price = 100;

// document.write("<u>Array Prototype</u><br>");
// document.write("Book title is : " + myBook.title + "<br>");
// document.write("Book author is : " + myBook.author + "<br>");
// document.write("Book price is : " + myBook.price + "<br><br>");


// Array Methods
document.write("<br><b> ___________　 Array Methods　___________ </b><br><br>");

// concat ()
document.write("<br><u>　concat ()　</u><br><br>");
document.write("<b>　var array1 = ['a', 'b', 'c'];</b><br>");
document.write("<b>　var array2 = ['d', 'e', 'f'];</b><br>");

     var array1 = ['a', 'b', 'c'];
     var array2 = ['d', 'e', 'f'];

     document.write("<b class='text-danger'>　array1 . concat ( array2 )　:　"+ array1.concat(array2) +"</b><br><br>");


// every ()
document.write("<u>　every ()　</u><br><br>");
document.write("<b>　var array3 = [1, 30, 39, 29, 10, 13];</b><br>");
document.write("<b>　var array4 = [1, 30, 39, 29, 10, 13, 50];</b><br>");
document.write("<b class='text-primary'>　var isBelowThreshold = (currentValue) => currentValue < 40;</b><br>");

     var array3 = [1, 30, 39, 29, 10, 13];
     var array4 = [1, 30, 39, 29, 10, 13, 50];
     var isBelowThreshold = (currentValue) => currentValue < 40;

     document.write("<b class='text-danger'>　array3 . every ( isBelowThreshold )　:　"+ array3.every(isBelowThreshold) +"</b><br>");
     document.write("<b class='text-danger'>　array4 . every ( isBelowThreshold )　:　"+ array4.every(isBelowThreshold) +"</b><br><br>");


// filter ()
document.write("<u>　filter ()　</u><br><br>");
document.write("<b>　var words = [' spray', ' limit', ' elite', ' exuberant', ' destruction', ' present'];</b><br>");
document.write("<b class='text-primary'>　var result = words.filter(word => word.length > 6);</b><br>");

     var words = [' spray', ' limit', ' elite', ' exuberant', ' destruction', ' present'];
     var result = words.filter(word => word.length > 6);

     document.write("<b class='text-danger'>　result　:　" + result + "</b><br><br>");


// forEach ()
document.write("<u>　forEach ()　</u><br><br>");
document.write("<b>　var array5 = ['a', 'b', 'c'];</b><br>");
document.write("<b>　var array5 = ['a', 'b', 'c'];</b><br>");

     var array5 = ['a', 'b', 'c'];

     array5.forEach(element => document.write("<b class='text-danger'>　array5.forEach(element => console.log(element));　：　" 
                               + element+"</b><br>"));


// indexOf ()
document.write("<br><u>　indexOf ()　</u><br><br>");
document.write("<b>　var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];</b><br>");

     var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

     document.write("<b class='text-danger'>　beasts.indexOf('bison')　：　" + beasts.indexOf('bison')+"</b><br>");
     document.write("<b class='text-danger'>　beasts.indexOf('bison', 2　：　" + beasts.indexOf('bison', 2)+"</b><br>");
     document.write("<b class='text-danger'>　beasts.indexOf('giraffe')　：　" + beasts.indexOf('giraffe')+"</b><br>");


// join ()
document.write("<br><u>　join ()　</u><br><br>");
document.write("<b>　var elements = ['Fire', 'Air', 'Water'];</b><br>");

     var elements = ['Fire', 'Air', 'Water'];

     document.write("<b class='text-danger'>　elements.join()　　：　" + elements.join() +"</b><br>");
     document.write("<b class='text-danger'>　elements.join('')　  ：　" + elements.join('') +"</b><br>");
     document.write("<b class='text-danger'>　elements.join('-')　：　" + elements.join('-') +"</b><br>");


// lastIndexOf ()
document.write("<br><u>　lastIndexOf ()　</u><br><br>");
document.write("<b>　var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];</b><br>");

     var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

     document.write("<b class='text-danger'>　animals.lastIndexOf('Dodo')　　：　" + animals.lastIndexOf('Dodo') +"</b><br>");
     document.write("<b class='text-danger'>　animals.lastIndexOf('Tiger')　　：　" + animals.lastIndexOf('Tiger') +"</b><br>");


// map ()
document.write("<br><u>　map ()　</u><br><br>");
document.write("<b>　var array6 = [1, 4, 9, 16];</b><br>");
document.write("<b class='text-primary'>　var map1 = array6.map(x => x * 2);</b><br>");


     var array6 = [1, 4, 9, 16];
     // pass a function to map
     var map1 = array6.map(x => x * 2);

     document.write("<b class='text-danger'>　map1　　：　" + map1 +"</b><br>"); 


// pop ()
document.write("<br><u>　pop ()　</u><br><br>");
document.write("<b>　var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];</b><br>");

     var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

     document.write("<b class='text-danger'>　plants.pop()　　：　" + plants.pop() +"</b><br>");
     document.write("<b class='text-danger'>　plants　　：　" + plants +"</b><br>");  

     document.write("<b class='text-primary'>　plants.pop();</b><br>");
     plants.pop();
     document.write("<b class='text-danger'>　plants　　：　" + plants +"</b><br>");  


// push ()
document.write("<br><u>　push ()　</u><br><br>");
document.write("<b>　var animals2 = ['pigs', 'goats', 'sheep'];</b><br>");
document.write("<b class='text-primary'>　var count = animals2.push('cows');</b><br>");

     var animals2 = ['pigs', 'goats', 'sheep'];
     var count = animals2.push('cows');

     document.write("<b class='text-danger'>　count　　：　" + count + "</b><br>");
     document.write("<b class='text-danger'>　animals2　　：　" + animals2 + "</b><br>");

     document.write("<b class='text-primary'>　animals2.push('chickens', 'cats', 'dogs');</b><br>");
     animals2.push('chickens', 'cats', 'dogs');

     document.write("<b class='text-danger'>　animals2　　：　" + animals2 + "</b><br>");


// reduce ()
document.write("<br><u>　reduce ()　</u><br><br>");
document.write("<b>　var array7 = [1, 2, 3, 4];</b><br>");

     var array7 = [1, 2, 3, 4];

     document.write("<b>　const initialValue = 0;</b><br>");
     var initialValue = 0;

     document.write("<b class='text-primary'>　var sumWithInitial = array7.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue     );</b><br>");
     var sumWithInitial = array7.reduce(
          (previousValue, currentValue) => previousValue + currentValue, initialValue
     );

     document.write("<b class='text-danger'>　sumWithInitial　　：　" + sumWithInitial + "</b><br>");


// reduceRight ()
document.write("<br><u>　reduceRight ()　</u><br><br>");
document.write("<b>　var array8 = [[0, 1], [2, 3], [4, 5]];</b><br>");

     var array8 = [[0, 1], [2, 3], [4, 5]];
     
     document.write("<b class='text-primary'>　var result2 = array8.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));</b><br>");

     var result2 = array8.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

     document.write("<b class='text-danger'>　result2　　：　" + result2 + "</b><br>");


// reverse()
document.write("<br><u>　reverse ()　</u><br><br>");
document.write("<b>　var array9 = ['one', 'two', 'three'];</b><br>");

     var array9 = ['one', 'two', 'three'];

     document.write("<b class='text-danger'>　array9　　：　" + array9 + "</b><br>");

     var reversed = array9.reverse();
     document.write("<b class='text-primary'>　var reversed = array9.reverse();</b><br>");
     
     document.write("<b class='text-danger'>　reversed　　：　" + reversed + "</b><br>");
     // Careful: reverse is destructive -- it changes the original array.
     document.write("<b class='text-danger'>　array9　　：　" + array9 + "</b><br>");


// shift ()
document.write("<br><u>　shift ()　</u><br><br>");
document.write("<b>　var array10 = [1, 2, 3];</b><br>");
document.write("<b class='text-primary'>　var firstElement = array10.shift();</b><br>");

     var array10 = [1, 2, 3];
     var firstElement = array10.shift();
          
     document.write("<b class='text-danger'>　array10　　：　" + array10 + "</b><br>");
     document.write("<b class='text-danger'>　firstElement　　：　" + firstElement + "</b><br>");   


// some()
document.write("<br><u>　some ()　</u><br><br>");
document.write("<b>　var array11 = [1, 2, 3, 4, 5];</b><br>");
document.write("<b class='text-primary'>　var even = (element) => element % 2 === 0;</b><br>");

     var array11 = [1, 2, 3, 4, 5];

     // checks whether an element is even
     var even = (element) => element % 2 === 0;

     document.write("<b class='text-danger'>　array11.some(even)　　：　" + array11.some(even) + "</b><br>");


// sort ()
document.write("<br><u>　sort ()　</u><br><br>");
document.write("<b>　var months = ['March', 'Jan', 'Feb', 'Dec'];</b><br>");
document.write("<b class='text-primary'>　months.sort();</b><br>");

     var months = ['March', 'Jan', 'Feb', 'Dec'];
     months.sort();

     document.write("<b class='text-danger'>　months　　：　" + months + "</b><br><br>");


     document.write("<b>　var array12 = [1, 30, 4, 21, 100000];</b><br>");
     document.write("<b class='text-primary'>　array12.sort();</b><br>");

     var array12 = [1, 30, 4, 21, 100000];
     array12.sort();

     document.write("<b class='text-danger'>　array12　　：　" + array12 + "</b><br>");


// splice ()
document.write("<br><u>　splice ()　</u><br><br>");
document.write("<b>　var months2 = ['Jan', 'March', 'April', 'June'];</b><br>");
document.write("<b class='text-primary'>　months2.splice(1, 0, 'Feb');</b><br>");

     var months2 = ['Jan', 'March', 'April', 'June'];
     months2.splice(1, 0, 'Feb');

     document.write("<b class='text-danger'>　months2　　：　" + months2 + "</b><br><br>");

     months2.splice(4, 1, 'May');
     document.write("<b class='text-primary'>　months2.splice(4, 1, 'May');</b><br>");
     document.write("<b class='text-danger'>　months2　　：　" + months2 + "</b><br>");


// toString ()
document.write("<br><u>　toString ()　</u><br><br>");
document.write("<b>　var array13 = [1, 2, 'a', '1a'];</b><br>");

     var array13 = [1, 2, 'a', '1a'];

     document.write("<b class='text-danger'>　array13.toString()　　：　" + array13.toString() + "</b><br>");


// unshift ()
document.write("<br><u>　unshift ()　</u><br><br>");
document.write("<b>　var array14 = [1, 2, 3];</b><br>");

     var array14 = [1, 2, 3];

     document.write("<b class='text-danger'>　array14.unshift(4, 5)　　：　" + array14.unshift(4, 5) + "</b><br>");
     document.write("<b class='text-danger'>　array14　　：　" + array14 + "</b><br><br>");



