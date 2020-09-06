/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

function getRandomIntInclusive(){
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    console.log(color);
    localStorage.setItem('backgroundColor',color);
    }

    let button = document.createElement('button');
    button.innerText = 'Click';
    document.body.appendChild(button);

    button.addEventListener('click', function(){
        getRandomIntInclusive();
        document.body.style.background = color;
    });

    let testColor = localStorage.getItem('backgroundColor');
    console.log(testColor);

    if(testColor != null){
        document.body.style.background = testColor;
    }
    else{
        console.log('error');
    }