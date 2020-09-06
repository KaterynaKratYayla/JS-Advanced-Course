/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их 
    в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", 
    если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/

let myForm = document.createElement('form');
let login = document.createElement('input');
let password = document.createElement('input');
let submit = document.createElement('button');
login.setAttribute('placeholder','login');
login.setAttribute('required','');
password.setAttribute('placeholder','password');
password.setAttribute('required','');
submit.innerHTML = 'Submit';
myForm.appendChild(login);
myForm.appendChild(password);
myForm.appendChild(submit);
document.body.appendChild(myForm);

submit.addEventListener('click',function(){
    event.preventDefault();
 let newObj = {login, password};
 newObj.login = login.value;
 newObj.password = password.value;
 localStorage.setItem('user', JSON.stringify(newObj));
 console.log( JSON.parse( localStorage.getItem("user") ) );

})

window.onload = function(){
    myForm.style.display = 'none';
    let user = localStorage.getItem('user');
    if(user !== null){
        // myForm.style.display = 'none';
        var newDiv=document.createElement('div');
        let newObj = JSON.parse( localStorage.getItem("user") )  
        newDiv.innerHTML = 'Hello , ' + newObj.login + ' ' + newObj.password + ' ';
        document.body.appendChild(newDiv);
        var logout = document.createElement('button');
        logout.innerHTML = 'Log Out';
        newDiv.appendChild(logout);

        logout.addEventListener('click',function(){
            localStorage.removeItem('user');
            document.body.removeChild(newDiv);
            myForm.style.display = 'block';
        })

       }
 else myForm.style.display = 'block';
}

