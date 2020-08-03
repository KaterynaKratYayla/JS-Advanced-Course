var buttons = document.querySelectorAll('.showButton')

var divCollection = document.querySelectorAll('div[data-tab]')

      buttons.forEach(function(button){
        button.onclick = function(event){
          var eTarget = event.target;
          divCollection.forEach(function(div){
          if(div.dataset.tab==eTarget.dataset.tab)
            div.classList.toggle('active')
          })
          console.log(buttons)
         }
        })

var buttonContainer = document.getElementById('buttonContainer')
var hideAllButton = document.createElement('button')
hideAllButton.setAttribute('id','hideAll');
hideAllButton.innerHTML = 'Спрятать все вкладки'
buttonContainer.appendChild(hideAllButton)
console.log(buttonContainer)

hideAllButton.onclick = function(){
  buttons.forEach(function(button){
    button.classList.remove('active')
    button.style.display = 'none' ;
  })
}
          
//Написать функцию hideAllTabs которая прячет все вкладки.
//Удаляя класс active со всех вкладок


// zButton = document.getElementById('button');
//   zButton.onclick = function() {
//     var Popup = document.getElementById('window');
//     console.log( Popup );
//     Popup.classList.toggle('hide');
//   }

  /*
    Задание 1.
    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.
    Главное условие - изменять файл HTML нельзя.
    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором
      2. Повесить кнопку онклик
          button1.onclick = function(event) {
          }
          + бонус: один обработчик на все три кнопки
      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active
      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок
    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
