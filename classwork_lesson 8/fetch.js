/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/

fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
.then(function(response){
  console.log(response);
  return response.json();
  })
  .then(function(data) {
  data.forEach(item=> {
  if(item.name == "Wagner Castro"){
  console.log(item)
  data = item;} 
    }) 
    return data;
  })
  .then(response1 =>{  
    return fetch('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
     .then(response2 => {
       console.log(response2, response1)
        let obj = {};
        obj.name = response1.name ;
         obj.friends = response2.json();
         console.log(obj , obj.friends)
        let mainDiv = document.createElement('div');
        mainDiv.innerHTML= obj.name;
          document.body.appendChild(mainDiv)
          return obj.friends
         }
       )
     }
  ).then(function(data1){
      let newObj = data1[0].friends;
    console.log(newObj)
    newObj.forEach(function(friend){
      for(key in friend){
      let listDiv = document.createElement('div');
        listDiv.innerHTML = key + ' : ' + friend[key] + ' , ';
        document.body.appendChild(listDiv);
        }
      })
    })

