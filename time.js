// Файл time.js
import _ from "lodash";
function displayTime() {
    let element = document.getElementById("clock"); // Найти элемент с id="clock" 
    let now = new Date();    // Получить текущее время
    element.innerHTML = _.sum([5,6,7]);//now.toLocaleTimeString(); // Отобразить время
    //setTimeout(displayTime, 1000);    // Вызывать функцию каждую секунду
}
window.onload = displayTime; // Начать отображение времени после загрузки документа
