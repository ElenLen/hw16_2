"use strict";

// получаем форму
const form = document.forms.myForm;

// вывод вводимого значенмя в поле
// имя
const nameInput = form.elements.namee;
const nameError = document.getElementById("nameErr");
// почта
const emailInput = form.elements.email;
const emailError = document.getElementById("emailErr");
// возраст
const ageInput = form.elements.age;
const ageError = document.getElementById("ageErr");
// пароль
const passInput = form.elements.pass;
const passError = document.getElementById("passErr");
// согласие
const consCheck = form.elements.consent;
const consError = document.getElementById("consErr");

// Обработчик события input для поля email
form.addEventListener("input", function () {
  let hasError = false;

  // Очистка предыдущих сообщений об ошибках
  nameError.style.display = "none";
  emailError.style.display = "none";
  ageError.style.display = "none";
  passError.style.display = "none";
  consError.style.display = "none";

  if (validateName(nameInput.value) === false) {
    nameError.textContent = "Введите имя пользователя.";
    nameError.style.display = "block";
    hasError = true;
  }

  if (validateEmail(emailInput.value) === false) {
    emailError.textContent = "Введите корректный email.";
    emailError.style.display = "block";
    hasError = true;
  }

  if (validateAge(ageInput.value) === false) {
    ageError.textContent = "Введите корректный возраст.";
    ageError.style.display = "block";
    hasError = true;
  }

  if (validatePass(passInput.value) === false) {
    passError.textContent = "Введите корректный пароль.";
    passError.style.display = "block";
    hasError = true;
  }

  if (consCheck.checked === false) {
    consError.textContent = "Необходимо согласие с условиями.";
    consError.style.display = "block";
    hasError = true;
  }

  if (hasError === false) {
    form.elements.button.disabled = false;
    form.elements.button.style = "background-color: rgb(147, 198, 201)";
  } else {
    form.elements.button.disabled = true;
    form.elements.button.style =
      "background-color: whitesmoke; color: lightgray;";
  }
});

function validateName(name) {
  let regex = /^[a-zA-Zа-яА-Я ]{2,20}$/;
  return regex.test(name);
}

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i;
  return regex.test(email);
}

function validateAge(age) {
  let regex = /^[0-9]{1,3}$/;
  return regex.test(age);
}

function validatePass(pass) {
  let regex = /^[a-zA-Z0-9\d!@#$%^&*]{8,20}$/;
  return regex.test(pass);
}

// Добавляем на неё обработчик события submit
form.addEventListener("submit", function (evt) {
  //предотвращает перезагрузку страницы и автоматическую отправку данных.
  evt.preventDefault();

  //Проверяем введенные данные пользователя, выводим в консоль
  console.log(`Имя: ${nameInput.value}`);
  console.log(`email: ${emailInput.value}`);
  console.log(`Возраст: ${ageInput.value}`);
  console.log(`Пол: ${form.elements.gender.value}`);
  console.log(`Профессия: ${form.elements.ProfSelect.value}`);
  console.log(`Пароль: ${passInput.value}`);
  console.log(`Соглачие на обработку: ${consCheck.value}`);
  form.reset();
  form.elements.button.disabled = true;
  form.elements.button.style =
    "background-color: whitesmoke; color: lightgray;";
});

//  изменить цвет границы поля ввода, когда пользователь начинает в него что-то вводить:
const inputFields = document.querySelectorAll(".input-field");

inputFields.forEach(function (input) {
  input.addEventListener("focus", function () {
    //Изменение границы при фокусе
    input.style.border = "5px solid blue";
  });

  input.addEventListener("blur", function () {
    //Восстановление стандартной границы после потери фокуса
    input.style.border = "";
  });
});

console.dir(window);
