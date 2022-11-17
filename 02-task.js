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
const form = document.createElement("form");
let url = "https://jsonplaceholder.typicode.com/posts/1";

const inputTitle = document.createElement("input");
inputTitle.classList.add("title");
inputTitle.style.display = "block";

const inputBody = document.createElement("input");
inputBody.classList.add("body");
inputBody.style.display = "block";

const inputButton = document.createElement("input");
inputButton.setAttribute("type", "submit");

form.appendChild(inputTitle);
form.appendChild(inputBody);
form.appendChild(inputButton);
document.body.append(form);

inputButton.addEventListener("click", function () {
    
      let form = {
            id: 1,
            title: inputTitle.value,
            body: inputBody.value,
            userId: 1
      };

      fetch(url, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8',
            }

      })
            .then(response => response.text())
            .then(text => {
                  inputTitle.value = text.title;
                  inputBody.value = text.body;
            })
            .catch(error => alert(error.message));
            
});

