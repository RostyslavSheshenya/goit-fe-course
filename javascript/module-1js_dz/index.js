"use strict";
const sharm = 15;
const hurgada = 25;
const taba = 6;
const mistake = "Ошибка ввода!";
const numberOfPlaces = Number(prompt("Введите число необходимых мест"));
let userAnswer;

console.log(numberOfPlaces);
if (!Number.isNaN(numberOfPlaces)) {
  if (numberOfPlaces <= sharm) {
    userAnswer = confirm(
      "Есть места в группе SHARM, согласны ли вы быть в этой групе"
    );
    if (userAnswer) {
      alert("Приятго путешествия в группе SHARM");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (numberOfPlaces <= hurgada) {
    userAnswer = confirm(
      "Есть места в группе HURGADA, согласны ли вы быть в этой групе"
    );
    if (userAnswer) {
      alert("Приятго путешествия в группе HURGADA");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (numberOfPlaces <= taba) {
    userAnswer = confirm(
      "Есть места в группе TABA, согласны ли вы быть в этой групе"
    );
    if (userAnswer) {
      alert("Приятго путешествия в группе TABA");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if ((numberOfPlaces > [sharm], [hurgada], [taba])) {
    alert("Извините, столько мест нет ни в одной группе!");
  }
} else {
  alert(mistake);
}
