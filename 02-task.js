'use strict';
 /*
       Задание:
       Напишите сценарий, который будет обновлять сущность post со свойствами
       id: 1,
       title: 'foo',
       body: 'bar',
       userId: 1,

       Создайте форму с полем ввода для значения свойства title и полем ввода для значения свойства body

       Значения для свойств title и body получите от пользователя
       Значения id и userId должны остаться равными 1 и выводить их в форме не нужно.
       При загрузке сценария заполните форму данными получеными при обработке GET запроса на https://jsonplaceholder.typicode.com/posts/1

       адрес для отправки запроса
       https://jsonplaceholder.typicode.com/posts/1

       для обновления сущности воспользуйтесь PUT запросом https://jsonplaceholder.typicode.com/posts/1. Обработайте ответ
       и выведите информацию о ошибке или об успешно завершенной операции.
       */
const form = document.forms[0];
const inputTitle = form.elements[0];
const inputBody = form.elements[1];
const button = form.elements[2];




button.addEventListener("click", function () {
      let url = "https://jsonplaceholder.typicode.com/posts/1";
      
      let data = {
            title: inputTitle.value,
            body: inputBody.value,
            
      };

      fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8',
            }

      })
            .then(response => response.json())
            .then(json => {
                  inputTitle.value = json.title;
                  inputBody.value = json.body;
            })
            .catch(error => alert(error.message));
            
});

