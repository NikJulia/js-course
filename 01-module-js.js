// ====== ПЕРЕМЕННЫЕ И ТИПЫ ======

// Объявление переменной: 
// ключевое слово + имя переменной + значение

// ====== const ======
// Переменные объявленные как const обязательно должны быть инициализированы
const yearOfBirth = 2006;
console.log(yearOfBirth); // 2006

// ====== let ======
// Переменным объявленным через let не обязательно сразу присваивать значение.
let age;

// Если переменной объявленной как let изначально не присвоено значение,
// она инициализируется специальным значением undefined (не определено).
console.log(age); // undefined

// Если переменная объявлена как let, её значение можно перезаписать.
age = 14;
console.log(age); // 14

// ====== КОНСТАНТЫ ======
// значение КОНСТАНТ не изменяется никогда на протяжении работы всего скрипта
// обычно записываются в формате UPPER_SNAKE_CASE

// Константа хранящая значение цвета
const COLOR_TEAL = "#009688";

// Константа хранящая сообщение о результате логина
const LOGIN_SUCCESS_MESSAGE = "Добро пожаловать!";


// Переменная может хранить значения разных типов данных
// * Number - целые числа и числа с плавающей запятой (точкой).
// * String - строки, последовательность из нуля или более символов.
// * Boolean - логический тип данных, флаги состояния.
// * null - особое значение, которое по сути значит ничто. Используется в тех ситуациях, когда необходимо явно указать пустоту.
// * undefined - ещё одно специальное значение. По умолчанию, когда переменная объявляется, но не инициализируется, ее значение не определено, ей присваивается undefined.
let username;
console.log(username); // undefined


// ====== Оператор typeof ======
// Возвращает на место своего вызова тип значения переменной указанного после него.
let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"



// ====== ОПЕРАТОРЫ ======
// «Нестрогие» операторы равенства == и != выполняют преобразование типов сравниваемых значений к числу
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

// Для проверки равенства или неравенства двух значений используются только операторы 
// === (строгое равенство) и !== (строгое неравенство)
// которые не выполняют приведение типов операндов
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true



// ====== Приведение к числу ======
// используя функцию Number(val)
const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN (Not a Number)
console.log(typeof Number(valueB)); // "number"



// ====== Методы Number.parseInt() и Number.parseFloat() ======
// Преобразуют строку символ за символом, пока это возможно. 
// При возникновении ошибки возвращается число, которое получилось.

// Метод Number.parseInt() парсит из строки целое число.

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

// Метод Number.parseFloat() парсит из строки дробное число.

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN


// ====== Проверка на число ======
// Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN
const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true


// ====== Сложение чисел с плавающей точкой ======
// Метод toFixed()
// сложить, а результат отсечь до определённого знака после запятой
console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41


// ====== Класс Math ======
console.log(Math.floor(1.7)); // 1
console.log(Math.ceil(1.2)); // 2
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.max(20, 10, 50, 40)); // 50
console.log(Math.min(20, 10, 50, 40)); // 10
console.log(Math.pow(2, 4)); // 16
// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10



// ====== СТРОКИ ======
// Строка - это индексированный набор из нуля или более символов
// индексация элементов строки начинается с нуля
// Содержимое строки нельзя изменить
// Можно лишь создать целиком новую строку и присвоить в переменную вместо старой



// ====== Конкатенация строк ======
const message = "Mango " + "is" + " happy";
console.log(message); // Mango is happy
console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"
// В последнем примере произошла сложение двух первых чисел 1 и 2
// после чего число 3 было преобразовано в строку "3" и сшито со строкой "4"



// ====== Свойства и методы строк ======
// !!! Все методы строк чувствительны к регистру !!!

// ====== Свойство length ======
const message = "Welcome to Bahamas!";
console.log(message.length); // 19

// ====== Методы toLowerCase() и toUpperCase() ======
// Возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

// ====== Метод indexOf() ======
// Возвращает позицию (индекс) на которой находится первое совпадение подстроки
// -1, если ничего не найдено
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1


// ====== Метод includes() ======
// Проверяет входит ли подстрока в строку
// чувствителен к регистру
const productName = "Ремонтный дроид";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроид")); // true
console.log(productName.includes("Дроид")); // false
console.log(productName.includes("Ремонтный")); // true
console.log(productName.includes("ремонтный")); // false


// ====== Метод endsWidth() ======
// заканчивается ли строка символами (подстрокой) указанными в скобках
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false


// ====== Методы replace() и replaceAll() ======
// Возвращают новую строку
// первое (replace) или 
// все совпадения (replaceAll) подстроки заменены на указанное значение.

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"



// ====== Шаблонные строки ======
// используются обратные (косые) кавычки и может содержать местозаполнители (интерполяция)
const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;



// ====== ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ======

// !!! Бинарные операторы !!!
// ====== Логическое «И» (&&) ======
// * если все условия true - вернет значение последнего операнда
// * запинается на лжи, то есть если встретит false - вернет значение этого операнда
const age = 20;
console.log(age > 10 && age < 30); // true && true -> true

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false


// ====== Логическое «ИЛИ» (||) ======
// * если все false, вернет значение последнего операнда
// * запинается на правде, то есть если встретит true, вернёт значение этого операнда
const age = 5;
console.log(age < 10 || age > 30); // true || false -> true

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true

// !!! Унарный оператор !!!
// выполняющий операцию над одним операндом справа
// ====== Логическое «НЕ» ======
// true -> false или false -> true



// 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 
// 0, NaN, null, undefined, пустая строка ("") и false. 
// Абсолютно все остальное приводится к true.
// " " - не пустая строка, если есть хотя бы один символ, даже пробел.
