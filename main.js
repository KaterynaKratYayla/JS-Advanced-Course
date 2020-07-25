/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore
*/

  var div = document.querySelector('div');
  var input = document.createElement('input');
        input.setAttribute('type','button');
        input.setAttribute('id','reload');
        input.setAttribute('value','Refresh Button');
        input.setAttribute('onClick','window.location.reload()')   
  
    div.appendChild(input);

    console.log(input)

    window.onload = function() {
    var button = document.getElementById('reload');
    var body = document.getElementsByTagName('body')[0];
    var colors = ['rgb(205, 92, 92)','rgb(233, 150, 122)','rgb(220, 20, 60)','rgb(255, 0, 0)','rgb(255, 192, 203)','rgb(255, 20, 147)','rgb(255, 215, 0)','rgb(138, 43, 226)','rgb(72, 61, 139)','rgb(128, 128, 128)','rgb(0, 255, 0)','0, 0, 128','rgb(0, 128, 0)','rgb(0, 255, 255)','rgb(176, 224, 230)'];
    
    button.onclick = function() {
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
       };
   };
  

  /* Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb */
