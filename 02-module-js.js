// ------ МАССИВЫ ------

/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// Массив - сложный тип, список однотипных элементов (элементы индексируются)

// const friends = []; //пустой массив

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends); //выводит массив в виде таблицы + ссылка на массив

// friends[1] = 'qwerqrwr'; это не перезаписывает переменную const friends - там по прежнему лежит массив, это изменение элемента в массиве
// friends[3] = 123123;

// console.table(friends);


// ПОСЛЕДНИЙ ИНДЕКС
const lastIndex = friends.length - 1;
console.log(lastIndex);


/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b); --> true (т.к. ссылка памяти одинаковая)

// console.log([1, 2, 3] === [1, 2, 3]); --> false (т.к. имеют разные ссылки в памяти)

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// for
// если нужен индекс, или если нужно изменить элемент массива
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

for (let i = 0; i <= lastIndex; i += 1) {
    console.log(i); //вывести индексы элементов
    console.log(friends[i]); //вывести элементы массива
}

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}


// for ... of 
// используем если не нужен индекс, или если не нужно изменять элемент массива
for (const friend of friends) {
// const friend - это локальная переменная, в которой лежит уже строка - элемент массива
// friend = friends[i]
  console.log(friend);
}

console.table(friends);




/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2 сделать переменную total до цикла
let total = 0;

// 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   // 3 каждый элемент приплюслвать к total
//   total += cart[i];
//   // total = total + cart[i];
// }

for (const value of cart) {
  total += value;
}

console.log('Total: ', total);

// Добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);


/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

// 1 переменная тотал

// 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   // 3 на каждой итерации проверить элемент на чётность
// if (number % 2 === 0) {
//   console.log('Четное!!!!');

//   // 4 если четный плюсуем к тотал
//   total += number;
// }
// }

// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - четное!!!!`);
//     total += number;
//   }
// }

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('Эту итерацию нужно пропустить', number);
    continue;
  }

  console.log(`${number} - четное!!!!`);
  total += number;
}

console.log('Total: ', total);


/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break; полностью прерывает выполнение цикла, а не одной итерации
//   }
// }

// console.log(message);

for (const login of logins) {
  console.log('Login: ', login);
  console.log(`${login} === ${loginToFind}: `, login === loginToFind);

  if (login === loginToFind) {
    console.log('Ура, равны!!!');
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
}

// console.log(message);


// Метод includes() с тернарным оператором
const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

console.log(message);


/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log('smallestNumber: ', smallestNumber);



/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

const string = friends.join(',');
console.log(friends);
console.log(string);

// Должно получиться 'Mango,Poly,Kiwi,Ajax'



/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);

  // if (letter === letter.toLowerCase()) {
  //   console.log('Эта буква в нижнем регистре!!! - ', letter);

  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Эта буква в верхнем регистре!!! - ', letter);
  //   invertedString += letter.toLowerCase();
  // }

  invertedString += 
  letter === letter.toLowerCase() 
    ? letter.toUpperCase() 
    : letter.toLowerCase();

//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log('invertedString: ', invertedString);


/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
// console.log(words);

const slug = words.join('-');
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);


/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
  total += number;
}

console.log(total);


/*
 * Работем с коллекцией карточек в trello
 * - Метод splice() - ДЕСТРУКТИВНЫЙ
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);
  
  /*
   * Удаление (по индексу), метод indexOf()
   */
  
  // const cardToRemove = 'Карточка-3';
  // const index = cards.indexOf(cardToRemove);
  // console.log(index);
  
  // cards.splice(index, 1);
  
  // console.table(cards);
  
  /*
   * Добавление (по индексу)
   */
  // const cardToInsert = 'Карточка-6';
  // const index = 3;
  
  // cards.splice(index, 0, cardToInsert);
  // console.table(cards);
  
  /*
   * Обновление (по индексу)
   */
  const cardToUpdate = 'Карточка-4';
  const index = cards.indexOf(cardToUpdate);
  
  console.log(index);
  
  cards.splice(index, 1, 'Обновленная карточка-4');
  
  console.table(cards);



  // ------ ФУНКЦИИ ------

  /*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

  // const add = function () {  --> функциональное выражение
  //   --> тело функции
  // }
  // add(); --> вызов функции


// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Выполянется функция add');

//   return x + y;
// };

// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);

const fn = function () {
    console.log(1);
    console.log(2);
}

console.log(fn()); //вернет undefined, если явно не задан return (возврат)
// если не указан return - будет неявный возврат
// return полностью прекращает выполнение функции

// const fn = function (value) {
//   console.log(1);
//   console.log(2);

//   if (value < 50) {
//     return 'Меньше чем 50';
//   }

//   return 'Больше чем 50';
// };

// console.log('Результат функции: ', fn(10));

// console.log('Результат функции: ', fn(1000));


/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
const fnA = function () {
  console.log('Выполняется функция A');
};

const fnB = function () {
  console.log('Выполняется функция B');
};

const fnC = function () {
  console.log('Выполняется функция C');
};

// console.log('Лог перед вызовом функции A');

fnA();

// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
fnC();
// console.log('Лог после вызова функции C');



/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

const calculateTotalPrice = function (items) {
  console.log('items внутри функции: ', items);

  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

const r1 = calculateTotalPrice([1, 2, 3]);

console.log(`Общая сумма покупок ${r1}`); // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600


/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);


/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }

//   return `Пользователь ${loginToFind} не найден.`;
// };

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));


/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4


/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX


/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

const slugify = function (string) {
  // const normalizedString = string.toLowerCase();
  // const words = normalizedString.split(' ');
  // const slug = words.join('-');
  // return slug;

  return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));


/*
 * Псевдомассив arguments и Array.from и ...
 */

// в функциях (кроме стрелочных) есть встроенная локальная переменная arguments
// arguments - это псевдомассив, нет всех методов массива

const fn = function () {
  console.log(arguments);

// Способ 1
// делаем из псевдомассива arguments массив args
  const args = Array.from(arguments);

  console.log(args);
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

// Способ 2
const fn = function (...args) { // --> rest (остаток) - собирает параметры в массив - в одну переменную
  console.log(args); //получаем массив
}

// если нужны отдельно первых несколько аргументов, а остальные в рест
const fn = function (a, b, c, ...args) { //rest всегда в конце (все остальные)
  console.log(`${a} ${b} ${c}`);
  console.log(args);
};

fn('hello', 1, 2, 3); //если в rest ничего не попадает, то в рест будет [] - пустой массив
fn('aloha', 1, 2, 3, 4, 5);
fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

const filterNumbers = function (array, ...args) {
  console.log('array: ', array);
  console.log('args: ', args);
  const uniqueElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueElements.push(element);

      console.log(`${element} есть везде!`);
    }
  }

  return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]



/**
 * Индекс массы тела
 *
 * Напиши функцию calcBMI(weight, height) которая рассчитывает
 * и возвращает индекс массы тела человека. Для этого необходимо
 * разделить вес в киллограммах на квадрат высоты человека в метрах.
 *
 * Вес и высота будут специально переданы как строки.
 * Нецелые числа могут быть заданы в виде "24.7" или "24,7",
 * то есть в качестве разделителя дробной части может быть запятая.
 *
 * Индекс массы тела необходимо округлить до одной цифры после запятой.
 */

 function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  let bmi = numericWeight / numericHeight ** 2; //** 2 - возведение в степень
  bmi = bmi.toFixed(1);
  bmi = Number(bmi);
  // const bmi = Number((numericWeight / numericHeight ** 2).toFixed(1));
  return bmi;
}

console.log(calcBMI('88,3', '1.75'));
console.log(calcBMI('68,3', '1.65'));
console.log(calcBMI('118,3', '1.95'));


/**
 * Меньшее из чисел
 *
 * Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.
 */

 function min(a, b) {
  // return a < b ? a : b;
  return Math.min(a, b);
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1


/**
 * Площадь прямоугольника
 *
 * Напиши функцию `getRectArea(dimensions)` для вычисления
 * площади прямоугольника со сторонами, значения которых
 * будут переданы в параметр `dimensions` в виде строки.
 * Значения гарантированно разделены пробелом.
 */

 function getRectArea(dimensions) {
  const values = dimensions.split(' ');
  const area = values[0] * values[1]; // -, *, / преобразовывает операнды в число
  return area;
}

console.log(getRectArea('8 11'));
console.log(getRectArea('15 5'));
console.log(getRectArea('12 3'));


/**
 * Логирование элементов
 *
 * Напиши функцию `logItems(items)`, которая получает массив
 * и использует цикл `for`, который для каждого элемента массива  будет
 * выводить в консоль сообщение в формате `<номер элемента> - <значение элемента>`.
 * Нумерация элементов должна начинаться с `1`.
 *
 * Например для первого элемента массива `['Mango', 'Poly', 'Ajax']`
 * с индексом `0` будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.
 */

 function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


/**
 * Логирование контактов
 *
 * Напиши функцию `printContactsInfo(names, phones)` которая
 * выводит в консоль имя и телефонный номер пользователя.
 * В параметры `names` и `phones` будут переданы строки имен
 * и телефонных номеров, разделенные запятыми. Порядковый номер
 * имен и телефонов в строках указывают на соответствие.
 *
 * Количество имен и телефонов гарантированно одинаковое.
 */

 function printContactsInfo(names, phones) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);


/**
 * Поиск наибольшего элемента
 *
 * Напиши функцию `findLargestNumber(numbers)`которая ищет
 * самое большое число в массиве.
 */

 function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
console.log(findLargestNumber([49, 4, 7, 83, 12]));
console.log(findLargestNumber([-2, -3, -17, -1]));


/**
 * Среднее значение
 *
 * Напишите функцию `calAverage()` которая принимает произвольное
 * кол-во аргументов и возвращает их среднее значение.
 *
 * Все аругменты будут только числами.
 */

 function calAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


/**
 * Форматирование времени
 *
 * Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
 * (количество минут) в строку в формате часов и минут `HH:MM`.
 */

// padStart(2, 0) - используется для таймера

 function addLeadingZero(value) {
  return String(value).padStart(2, 0); //если строка меньше чем 2 символа, то добавляем 0 в начало
}

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"