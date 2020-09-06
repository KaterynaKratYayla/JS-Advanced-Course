/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было прездагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/

let myPost = [];
class Posts {
  constructor(about,id,created_at,isActive,title,likes){
    this.about = about;
    this._id = id;
    this.created_at = created_at;
    this.isActive = true;
    this.title = title;
    this.likes = likes;
    myPost.push(this);
  }
  render(){
    let node = document.createElement('div');
        node.innerHTML = `
          <div>${this.about}</div>
          <div>${this._id}</div>
          <div>${this.created_at}</div>
          <div>${this.isActive}</div>
          <div>${this.title}</div>
          <div>${this.likes}</div>
        `;

    document.body.appendChild(node);
  }
}

// window.onload = function(){
    // let myForm = document.createElement('form');
    let newPost = new Posts('About Work',345435345,'2020-09-06',true,'Tourism','24')
// console.log(post.addLike())
// console.log(newPost, myPost)
newPost.render();
localStorage.setItem('upost', JSON.stringify(newPost));

const myButton = document.createElement('button');
myButton.innerHTML = 'Submit to server';
document.body.appendChild(myButton);

myButton.addEventListener('click',function(){
    var objectDataString = JSON.stringify(newPost)
    let xhr = new XMLHttpRequest();
    xhr.open('POST',"http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2",false);

    xhr.send(objectDataString);
    let body=JSON.parse(xhr.response);
    console.log(body);

})


