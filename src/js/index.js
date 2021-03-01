import "../css/index.css";
import "../scss/index.scss";

import "../charts/chartjs.js";

//callBack

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   }

// Promise

let promise = new Promise(function (resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 2000);
  setTimeout(() => reject(new Error("Ошибка!")), 1500);
});

// promise.then(
//   (result) => console.log(result), // выведет "done!" через одну секунду
//   (error) => console.log(error) // не будет запущена
// );
//
// promise.then(null, (error) => console.log(error));
//Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f)
// promise.catch((error) => console.log(error));
//
// выполнится, когда промис завершится, независимо от того, успешно или нет
promise.finally(() => console.log("Выполнилась finaly"));
