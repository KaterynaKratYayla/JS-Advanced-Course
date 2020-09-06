/*

  Задание:

    Написать при помощи async-await скрипт, который:
    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/

async function getUserWithFriends(){
  const getUserResponse = await fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2")
  const companies = await getUserResponse.json();

  // console.log(companies);
  companies.forEach(function(item){
      
      let wrapper = document.querySelector('.wrapper') 
      // wrapper.style.display = 'grid';
      let {company, balance, registered, address} = item;
       let CombinedUser = {company, balance, registered, address};
      //  console.log(CombinedUser);
      let divMain = document.createElement('div');
      let divInner1 = document.createElement('div');
      let divInner2 = document.createElement('div');
      let divInner3 = document.createElement('div');
      let divInner4 = document.createElement('div');
      divInner1.innerHTML = CombinedUser.company;
      divInner2.innerHTML = CombinedUser.balance;
      divInner3.innerHTML = CombinedUser.registered;
      divInner4.innerHTML = CombinedUser.address;
      divMain.appendChild(divInner1);
      divMain.appendChild(divInner2);
      divMain.appendChild(divInner3);
      divMain.appendChild(divInner4);
      divMain.style.display = 'flex';
      divMain.style.flexDirection = 'row';
      divInner1.style.width = '100px';
      divInner1.style.border = '1px solid black';
      divInner2.style.width = '100px';
      divInner2.style.border = '1px solid black';
      divInner3.style.width = '300px';
      divInner3.style.border = '1px solid black';
      divInner3.style.cursor = 'pointer';
      divInner4.style.width = '300px';
      divInner4.style.border = '1px solid black';
      divInner4.style.cursor = 'pointer';
  //  let divSmaller = document.createElement('div');
  //     // divMain.appendChild(divSmaller);
  //     divMain.style.display='flex';
  //     divMain.style.width = '1000px';
  //     divMain.style.flexDirection = 'row';
  //     divMain.style.justifyContent='space-around';
  //     divSmaller.style.textAlign='center';
  //     divMain.innerHTML = `
  //     <div>${CombinedUser.company}</div>
  //      <div>${CombinedUser.balance}</div> 
  //      <div>${CombinedUser.registered}</div> 
  //      <div>${CombinedUser.address}</div>
  //           `         
               return document.body.appendChild(divMain)
        
      })

  }

  let UserWithFriends = getUserWithFriends();
    UserWithFriends.then( data => console.log('Final Person:', data));

    // let innerDivs = document.querySelectorAll('.inner');
    // innerDivs.forEach(function(){

    // })
    // divInner3.addEventListener('click',function(e){
    // var eTarget = e.target
    // eTarget.innerHTML = CombineUser.registered;
    // })
    // divInner4.addEventListener('click',function(e){
    //   var eTarget = e.target
    //   eTarget.innerHTML = CombineUser.address;
    // })