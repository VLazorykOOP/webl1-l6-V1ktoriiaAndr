
window.onresize = function() {
  console.log("Завдання 1 (onresize): Розмір вікна змінено.");
};
window.onfocus = function() {
  console.log("Завдання 1 (onfocus): Вікно отримало фокус.");
};
window.onblur = function() {
  console.log("Завдання 1 (onblur): Вікно втратило фокус.");
};
window.onerror = function(message) {
  console.error('Завдання 1 (onerror): Сталася помилка JS -> ' + message);
};

window.onscroll = function() {
  console.log("Завдання 1 (onscroll): Сторінку прокручено.");
};
window.ononline = function() {
  console.log("Завдання 1 (ononline): Відновлено з'єднання з мережею.");
  alert("Завдання 1: З'єднання з мережею відновлено!");
};
window.onoffline = function() {
  console.log("Завдання 1 (onoffline): Втрачено з'єднання з мережею.");
  alert("Завдання 1: Втрачено з'єднання з мережею!");
};
window.onhashchange = function() {
  console.log("Завдання 1 (onhashchange): Змінилася URL-адреса (частина після #).");
};
window.onbeforeunload = function(event) {
  console.log("Завдання 1 (onbeforeunload): Спроба закрити сторінку.");
  event.returnValue = "Ви впевнені, що хочете піти? Зміни можуть бути не збережені.";
  return event.returnValue;
};

function changeElementStyle(element) {
  console.log("Завдання 2 (onmouseover): Наведення курсору.");
  element.setAttribute('data-original-bg', element.style.backgroundColor);
  element.setAttribute('data-original-color', element.style.color);
  element.style.backgroundColor = 'yellow';
  element.style.color = 'red';
  element.style.fontWeight = 'bold';
  element.style.transition = 'all 0.3s';
}

function resetElementStyle(element) {
  console.log("Завдання 2 (onmouseout): Відведення курсору.");
  element.style.backgroundColor = element.getAttribute('data-original-bg');
  element.style.color = element.getAttribute('data-original-color');
  element.style.fontWeight = '';
}

function task2_onMouseDown(element) {
  console.log("Завдання 2 (onmousedown): Кнопку миші НАТИСНУТО над елементом.");
  element.style.borderColor = 'red';
  element.style.borderWidth = '2px';
}
function task2_onMouseUp(element) {
  console.log("Завдання 2 (onmouseup): Кнопку миші ВІДПУЩЕНО над елементом.");
  element.style.borderColor = 'blue';
  element.style.borderWidth = '2px';
}
function task2_onMouseMove(element) {
  console.log("Завдання 2 (onmousemove): Курсор рухається над елементом.");
}
function task2_onWheel(element, event) {
  if (event.deltaY > 0) {
    console.log("Завдання 2 (onwheel): Колесо миші прокручено ВНИЗ.");
    element.style.transform = 'scale(0.9)';
  } else {
    console.log("Завдання 2 (onwheel): Колесо миші прокручено ВГОРУ.");
    element.style.transform = 'scale(1.1)';
  }
  event.preventDefault();
}
function task2_onDragStart(element) {
  console.log("Завдання 2 (ondragstart): Почалося перетягування елемента.");
  element.style.opacity = '0.5';
}
function task2_onDragEnd(element) {
  console.log("Завдання 2 (ondragend): Завершено перетягування елемента.");
  element.style.opacity = '1';
}


/**
 * ============================================
 * ЗАВДАННЯ 3.1, 5.1, 6.1 (з попередньої відповіді, без змін)
 * ============================================
 */

/**
 * ЗАВДАННЯ 3.1 (по варіантах): Тип браузера
 */
function task3_1_showBrowserInfo() {
  const resultArea = document.getElementById('task3_1_result');
  if (resultArea) {
    resultArea.value = "Тип вашого браузера (User Agent):\n" + navigator.userAgent;
  } else {
    alert("User Agent: " + navigator.userAgent);
  }
}

/**
 * ЗАВДАННЯ 5.1 (по варіантах): Кількість слів (Регулярні вирази)
 */
function task5_1_countWords() {
  const textInput = document.getElementById('task5_1_textInput');
  const text = textInput ? textInput.value : '';
  if (!text.trim()) {
    alert('Поле вводу порожнє. Введіть текст для аналізу.');
    return;
  }
  const matches = text.match(/\b\w+\b/g);
  const count = matches ? matches.length : 0;
  alert('Знайдено слів у тексті: ' + count);
}

/**
 * ЗАВДАННЯ 6.1 (по варіантах): Масив з додатних елементів
 */
function task6_1_processArray() {
  const A = [15, -5, 0, 8, -2.5, 10, 42, -100, 1];
  const N = A.length;
  const B = A.filter(function(element) {
    return element > 0;
  });
  const resultArea = document.getElementById('task6_1_result');
  if (resultArea) {
    resultArea.value = 'Початковий масив A (розмір N=' + N + '):\n' + A.join(', ') + '\n\n';
    resultArea.value += 'Побудований масив B (лише додатні елементи):\n' + B.join(', ');
  } else {
    alert('Масив B (додатні): ' + B.join(', '));
  }
}
