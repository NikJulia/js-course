// НАИБОЛЬШЕЕ ЧИСЛО В МАССИВЕ
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);


// НАИМЕНЬШЕЕ ЧИСЛО В МАССИВЕ
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log('biggestNumber: ', biggestNumber);


/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for (let i = 0; i < friends.length; i += 1) {
//     let lastElementIndex = friends.length - 1; 
//     if (i !== lastElementIndex) {
//         string += friends[i] + ',';
//     } else {
//         string += friends[i];
//     }
// }

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// const string = friends.join(',');
// console.log(string);


// УДАЛИТЬ ИЗ СТРОКИ первое и последнее слово
// const string = 'Welcome to the future';

// Способ №1
// const newString = string.split(" ").slice(1,-1).join(" ");
// console.log(newString);

// Способ №2
// const array = string.split(" ");
// let newArray = [];

// for (let i = 0; i < array.length; i += 1) {
//     if (i === 0 || i === array.length - 1) {
//         continue;
//     }
//     newArray.push(array[i]);
// }

// Способ №3
// for (let i = 1; i < array.length - 1; i += 1) {
//     newArray.push(array[i]);
// }

// console.table(newArray);


// РАЗВОРАЧИВАЕМ СТРОКУ
const string = 'Welcome to the future';
console.log(string);

// Способ №1
// const array = string.split(" ");
// const reversedArray = array.reverse();
// const reversedString = reversedArray.join(" ");

// Способ №2
// const reversedString = string.split(" ").reverse().join(" ");
// console.log(reversedString);

// Способ 3
// const newArray1 = string.split(" ");
// console.table(newArray1);
// let newArray2 = [];

// for (let i = 0; i = newArray1.length; i += 1) {
//   newArray2.push(newArray1.pop());
// }

// console.table(newArray2);

// Способ 4
// перебор массива с конца в начало
const newArray1 = string.split(" ");
const newArray2 = [];
let newString;

for (let i = newArray1.length - 1; i >= 0; i -= 1) {
  newArray2.push(newArray1[i]);
}
console.table(newArray2);

newString = newArray2.join(' ');
console.log("Reversed string: ", newString);


// ПОИСК ЭЛЕМЕНТА
// поиск самого маленького числа в массиве
const numbers = [2, 17, 94, 1, 23, 37];

// Способ №1
// console.log('min number:', Math.min(...numbers)); //spread

// Способ №2
let min = numbers[0];
for (let number of numbers) {
  if (min > number) {
    min = number;
  }
}

console.log('min number:', min);


// СЛОЖЕНИЕ АРГУМЕНТОВ
// const multiply = function() {
//   let totalArg = 0;

//   for (const argument of arguments) {
//     totalArg += argument;
//   }

//   return totalArg;
// }


// УМНОЖЕНИЕ АРГУМЕНТОВ
const multiply = function(...args) {
  let argsResult= args[0];

  for (const argument of arguments) {
    argsResult *= argument;
  }

  return argsResult;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  10
console.log(multiply(1, 2, 3, 4, 5)); //  15


// МЕТОД includes
function includes(array, value) {

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}
console.log('includes:', includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));


// Задача 3 (ранний возврат, не используем else)
// function checkStorage(available, ordered) {

//   if (ordered === available) {
//     return "The order is accepted, our manager will contact you";
//   } 
  
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
  
//   return "Your order is empty!";
// }


// Задача 9
// Крайние элементы массива
function getExtremeElements(array) {
  let newArray = [];
  const firstElement = array[0];
  // console.log(firstElement);
  const lastElement = array[array.length - 1];
  // console.log(lastElement);
  newArray.push(firstElement, lastElement);
  // console.log(newArray);
  return newArray;
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// Задача 16
// Функция создает новый массив со всеми элементами двух исходных firstArray и secondArray. 
// Параметр maxLength содержит максимально допустимую длину нового массива.

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   return newArray.slice(0, maxLength);
// }


// Задача 18
// Функция принимает целое число и возвращает сумму всех целых чисел от единицы и до этого числа
// function calculateTotal(number) {
//    let total = 0;

//    for (let i = 0; i <= number; i += 1) {
//      total += i;  
//    }
   
//    return total;
//  }

//  console.log(calculateTotal(0));
//  console.log(calculateTotal(18));
//  console.log(calculateTotal(24));
//  console.log(calculateTotal(1));


// Задача 21
// Возвращает самое длинное слово в строке
function findLongestWord(string) {
  const arrayOfWords = string.split(" ");
  let longestWord = arrayOfWords[0];

  for (let i = 1; i < arrayOfWords.length; i += 1) {
    if (longestWord.length < arrayOfWords[i].length) {
      longestWord = arrayOfWords[i];
    }
    console.log('longestWord:', longestWord);
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));