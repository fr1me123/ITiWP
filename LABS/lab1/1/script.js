// Функция для вычисления гипотенузы по теореме Пифагора
function calculate(catet1, catet2) {
    return Math.sqrt(catet1 * catet1 + catet2 * catet2);
}

// Функция для запроса данных и вычисления гипотенузы
function calculateHypotenuse() {
    // Запрашиваем катеты через диалоговые окна
    let catet1 = parseFloat(prompt("Введите длину первого катета:"));
    let catet2 = parseFloat(prompt("Введите длину второго катета:"));
    
    // Проверка на корректность введенных данных
    if (isNaN(catet1) || isNaN(catet2)) {
        alert("Ошибка: Некорректные данные.");
        return;
    }

    // Вызываем функцию для вычисления гипотенузы
    let hypotenuse = calculate(catet1, catet2);

    // Выводим результат
    alert(`Гипотенуза равна: ${hypotenuse}`);
}
