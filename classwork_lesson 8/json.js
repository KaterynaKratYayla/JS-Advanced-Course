
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/

var formMain = document.forms.test;
var formData = new FormData(formMain); //- нашла такой вид объекта . Как лучше делать? Зачем используют этот вид конструктора?
    // var formData = {};
    console.log(formMain)

        let inputName = document.querySelector("form input[name=name]");
        let inputAge = document.querySelector("form input[name=age]");
        let inputPassword = document.querySelector("form input[name=password]");

        const submitBtn = document.getElementById('submit');
        console.log(submitBtn);

    submitBtn.addEventListener('click',function(event){
        event.preventDefault();
          formData.Name = inputName.value;
          formData.Age = inputAge.value;
          formData.Password = inputPassword.value;
        let data = JSON.stringify(formData);
        console.log(data);
    });

    let inputParse = document.createElement('input');
    let buttonParse = document.createElement('button');
    inputParse.setAttribute('value','');
    buttonParse.innerHTML = 'Parse';
    console.log(buttonParse)
    formMain.appendChild(inputParse);
    formMain.appendChild(buttonParse);
   
    buttonParse.addEventListener('click', function(){
      event.preventDefault();
      var newParse = JSON.parse('inputParse.value');
      console.log(newParse);
    });
    