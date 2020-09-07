  /*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */

  let myDiv = document.createElement('div');
  myDiv.style.width = '500px';
  myDiv.style.textAlign = 'justify';
  myDiv.style.marginLeft = 'auto';
  myDiv.style.marginRight = 'auto';
  myDiv.innerHTML ="RegExr.gif was [created] by 2004 text.jpg good@me.com.ua gskinner.com, and +00(000)000-00-00 1990 is proudly hosted by +90(330)647-00-67 Media Temple. Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain test.png describes bad@you.com.ua your [expression] in plain English."
 document.body.appendChild(myDiv);

//  1. Все слова. 

var pattern = /\w+/g;
var string = myDiv.innerHTML;
var result = string.match(pattern);
console.log(string);
console.log(result);

// 2. Все совпадения букв от a до e,
var pattern1 = /[a-e]/;
var result1 = string.match(pattern1);
console.log(result1);

 // 3. Года, например 2004
 var pattern2 = /[0-9].{4}/g;
 var result2 = string.match(pattern2);
 console.log(result2);
    
// 4. Слова обернутые в [квадратныеКавычки]
var pattern3 = /\[\w+\]/g;
 var result3 = string.match(pattern3);
 console.log(result3);

// 5. Все форматы файлов .jpg / .png / .gif
 var pattern3 = /\.jpg|.png|.gif/g;
 var result3 = string.match(pattern3);
 console.log(result3);

// 6. Все email com.ua
var pattern4 = /((\w+)@(\w+.)\bcom\b.\bua\b)/g;
 var result4 = string.match(pattern4);
 console.log(result4);

// 7. Все слова написанные с большой буквы
 var pattern5 = /([A-Z])\w+/g ;
 var result5 = string.match(pattern5);
 console.log(result5);

      // 8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
      //    где вместо 0 может быть любое число

      var pattern6 = /.\d\d.\d{3}.\d{3}.\d{2}.\d{2}/g; 
      var result6 = string.match(pattern6);
      console.log(result6);