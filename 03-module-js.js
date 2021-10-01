/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта (справа от равно - литерал)
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// ключ свойства - это всегда строка

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
  };
  
  // playlist.qwe = 5;
  
  // playlist.rating = 10;
  
  // console.log(playlist);
  
  // console.log(playlist);
  // console.log(playlist.tracks);
  // console.log(playlist.name);
  // console.log(playlist.trackCount);
  
  const propertyName = 'tracks';
  
  // console.log(playlist.rating);
  // console.log(playlist['rating']);
  
  // console.log(playlist.propertyName);
  // console.log(playlist[propertyName]);
  
  /*
   * Короткая запись свойств
   */
//   если имя ключа совпадает с именем переменной, в которой хранится значение
  const username = 'Mango';
  const email = 'mango@mail.com';
  
  const signupData = {
    username,
    email,
  };
  
  // console.log(signupData);
  
  /*
   * Вычисляемые свойства
   */
  
  //  <input name="color" value="tomato" >
  
  const inputName = 'color';
  const inputValue = 'tomato';

// [inputName] - чтобы значение переменной стало именем ключа
  
  const colorPickerData = {
    [inputName]: inputValue,
  };
  
  // console.log(colorPickerData);
  
  /*
   * Ссылочный тип {} === {}
   */
  
  // console.log({ a: 1 } === { a: 1 }); ---> false
  // console.log([] === []); ---> false
  
  // const a = { x: 1, y: 2 };
  // const b = a;
  
  // console.log(b === a); ---> true
  
  // a.hello = 100;
  // b.hello = 150;
  
  // console.log(a);
  // console.log(b);
  
  /*
   * Массивы и функции это объекты
   */

//   Массив - это частный случай объекта
  
  // const a = [1, 2, 3];
  
  // a.hello = ':)';
  
  // console.log(a);
  
  // const fn = function () {
  //   console.log('hello');
  // };
  
  // fn.hello = ';)';
  
  // console.dir(fn.hello);


  /*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    changeName(newName) {
      console.log('this внутри changeName: ', this);
  
      this.name = newName;
    },
    addTrack(track) {
      this.tracks.push(track);
    },
    updateRating(newRating) {
      this.rating = newRating;
    },
    getTrackCount() {
      return this.tracks.length;
    },
  };
  
  console.log(playlist.getTrackCount());
  
  playlist.changeName('Новое имя');
  
  playlist.addTrack('новый трек 1');
  console.log(playlist.getTrackCount());
  
  playlist.addTrack('новый трек 2');
  console.log(playlist.getTrackCount());
  
  playlist.updateRating(4);
  
  console.log(playlist);


  /*
 * Перебор через for...in и Object.keys|values|entries
 */

// !!! лучше не использовать!!!

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  };
  
  let totalFeedback = 0;

//  #1 Способ перебрать объект
  
//   1. Получаем массив ключей
  const keys = Object.keys(feedback); //массив ключей
// 2. Используем циклы для массивов
// for...
// for...of

  console.log(keys);
  
  for (const key of keys) {
    console.log(key);
    console.log(feedback[key]);
  
    totalFeedback += feedback[key];
  }
  
  console.log('totalFeedback: ', totalFeedback);
  

// #2 Способ перебрать объект
  const values = Object.values(feedback);
  
  console.log(values);
  
  for (const value of values) {
    console.log(value);
  
    totalFeedback += value;
  }
  
  console.log('totalFeedback: ', totalFeedback);



  /*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
  
//   При переборе массива с объектами, мы получаем на каждой итерации ссылку на объект
// в итоге мы можем его изменять

for (const friend of friends) {
    friend.newprop = 555; // новое свойство добавится в каждый объект массива
}

console.table(friends);
  
  /*
   * Ищем друга по имени
   */
  
  const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
      // console.log(friend);
      // console.log(friend.name);
  
      if (friend.name === friendName) {
        return 'НАШЛИ!!!';
      }
    }
  
    return 'НЕ НАШЛИ :(';
  };
  
  // console.log(findFriendByName(friends, 'Poly'));
  // console.log(findFriendByName(friends, 'Chelsy'));
  
  /*
   * Получаем имена всех друзей
   */
  
  const getAllNames = function (allFriends) {
    const names = [];
  
    for (const friend of allFriends) {
      console.log(friend.name);
  
      names.push(friend.name);
    }
  
    return names;
  };
  
  // console.log(getAllNames(friends));
  
  /*
   * Получаем имена только друзей которые онлайн
   */
  const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend);
      console.log(friend.online);
  
      if (friend.online) {
        onlineFriends.push(friend);
      }
    }
  
    return onlineFriends;
  };
  
  // console.log(getOnlineFriends(friends));
  
  const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend.online);
  
      if (!friend.online) {
        offlineFriends.push(friend);
      }
    }
  
    return offlineFriends;
  };
  
  // console.log(getOfflineFriends(friends));
  
  // создать 2 массива онлайн и офлайн?
  // если тру - в первый, если нет - во второй
  
  const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
      online: [],
      offline: [],
    };
  
    for (const friend of allFriends) {
      if (friend.online) {
        friendsByStatus.online.push(friend);
        continue;
      }
  
      friendsByStatus.offline.push(friend);
  
      // const key = friend.online ? 'online' : 'offline';
      // friendsByStatus[key].push(friend);
    }
  
    return friendsByStatus;
  };
  
  console.log(getFriendsByStatus(friends));



  /*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };
  
  // console.table(cart.getItems());
  
  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍓', price: 110 });
  
  // console.table(cart.getItems());
  
  cart.remove('🍎');
  // console.table(cart.getItems());
  
  // cart.clear();
  // console.table(cart.getItems());
  
  // cart.increaseQuantity('🍎');
  // console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());
  
  // console.log('Total: ', cart.countTotalPrice());





// ЗАНЯТИЕ 13.09.21

  // 1)  Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

delete user.hobby; // удалить свойство объекта
console.log(user);

const keys = Object.keys(user);

for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}

console.log(keys);

// 2) У нас есть объект, в котором хранятся зарплаты нашей команды.Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

function countTotalSalaries(object) {
  const values = Object.values(object);
  let total = 0;
  for (let number of values) {
    total += number;
  }
  return total;
}

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salaries2 = {};

const result = countTotalSalaries(salaries2);
const result2 = countTotalSalaries(salaries);
console.log(`result`, result);

// 3) Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

const stones = [
  { name: "Изумруд", cost: 1300, quantity: 4 },
  { name: "Бриллиант", cost: 2700, quantity: 3 },
  { name: "Сапфир", cost: 400, quantity: 7 },
  { name: "Щебень", cost: 200, quantity: 2 },
];

function calcTotalPrice(stoneName, stones) {
  for (let stone of stones) {
    if (stone.name === stoneName) {
      return stone.cost * stone.quantity;
    }
  }
  return "Stone not exist";
}

function calcTotalPrice(stoneName, stones) {
  let result;
  for (let stone of stones) {
    if (stone.name === stoneName) {
      result = stone.price * stone.quantity;
    }
  }
  return result;
}

console.log(calcTotalPrice("Кварц", stones)); // 400
calcTotalPrice(stones, "Сапфир"); // 2800

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined



// Задача

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const wallet = {
    // Текущий баланс счета
    balance: 100,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        // this.transactions.push({
        //     id: this.transactions.length,
        //     amount,
        //     type,
        // });
      return {
        id: this.transactions.length,
        amount,
        type,
      };
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
      this.balance += amount;
    //   this.createTransaction(amount, Transaction.DEPOSIT);
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
      for (let transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction;
        }
      }
      return "Transaction not exist";
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    //   getTransactionTotal(type) {
    //     const searchResult = [];
    //     let total = 0;
    //     for (let transaction of this.transactions) {
    //       if (transaction.type === type) {
    //         searchResult.push(transaction);
    //       }
    //     }
  
    //     for (let transaction of searchResult) {
    //       total += transaction.amount;
    //     }
    //     return total;
    //   },
  
    getTransactionTotal(type) {
      let total = 0;
      for (let transaction of this.transactions) {
        if (transaction.type === type) {
          total += transaction.amount;
        }
      }
      return total;
    },
  };
  
  wallet.deposit(50);
  wallet.withdraw(30);
  wallet.deposit(150);
  wallet.deposit(20);
  wallet.withdraw(10);
  
  console.log(wallet.getBalance());
  console.log(wallet.transactions);
  console.log(wallet.getTransactionDetails(3));
  console.log(wallet.getTransactionTotal(Transaction.DEPOSIT));
  console.log(wallet.getTransactionTotal(Transaction.WITHDRAW));




  /*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */
const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// rest - только в конце
// spread - в любом месте (элементы одной коллекции вставляем в другую коллекцию)
// операция spread не деструктивная
// если примитивы (передача по значению) - делается копия элементов 
// если сложный тип (передача по ссылке) - вставляется ссылка (на объект, функцию и т.д.), не копия

const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];

const numbers = [
    1000,
    ...[1, 2, 3],
    5000,
    ...[4, 5, 6],
    7000,
    ...[7, 8, 9],
    9000,
  ];
  
  // console.log(numbers);
  
  /*
   * Поиск самой маленькой или большой температуры (числа)
   */
  const temps = [18, 14, 12, 21, 17, 29, 24];
  
  console.log(Math.max(1, 4, 17, 5, 6));
  console.log(Math.min(...temps));
  console.log(temps);
  
  

  const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
  const b = [...a];
  
  console.log('a: ', a);
  console.log('b: ', b);
  
  console.log(a[0] === b[0]); //true, т.к. ссылка на объекты одна и та же
  console.log(a === b); //false, т.к. при распылении сами массивы не равны
  
  a[0].x = 1000; //значение х поменяется в обеих массивах
  
  console.log('a: ', a);
  console.log('b: ', b);
  
  /*
   * Сшиваем несколько массивов в один через concat() и spread
   */
  const lastWeekTemps = [1, 2, 3];
  const currentTemps = [4, 5, 6];
  const nextWeekTemps = [7, 8, 9];
  
  const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
  // console.log(allTemps);
  
  /*
   * Распыление объектов
   * - Object.prototype.assign() и spread
   */
  const a = { x: 1, y: 2 };
  const b = { x: 0, z: 3 };
  
  const c = Object.assign({name: 'Mango' }, a, b); //старый способ
  
  const c = {
    ...a,
    x: 10,
    ...b,
    y: 20,
  };
  
  // console.log(c);
  
  const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
  };
  
  const userSettings = {
    showNotifications: false,
    hideSidebar: true,
  };
  
  const finalSettings = {
    ...defaultSettings,
    ...userSettings,
  };
  
  console.log(finalSettings);


  /*
 * Деструктуризация объекта (распаковка)
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

  const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
  };

// const { } = playlist;
// если слева от равно видим { } - это не литерал, это распаковка (деструктуризация) объекта
// внутри будут локальные переменные, которые имеют такое же название, как и свойства объекта
// т.е. создаются локальные переменные, куда сохраняются свойства объекта
//  const { rating, tracks, name, trackCount } = playlist;

// деструктуризация делается для того, чтобы не было повторений в коде
// Например:
    console.log (
    playlist.name,
    playlist.rating,
    playlist.tracks,
    playlist.trackCount
);
  
  // const {
  //   rating,
  //   tracks,
  //   name,
  //   trackCount: numberOfTracks,  ---> так можно переименовать переменную
  //   author = 'user',
  // } = playlist;
  
  // console.log(numberOfTracks);
  
  /*
   * Глубокая деструктуризация
   */

// !!! Никогда не деструктуризируем объекты, в которых есть методы (функции)

//   Если в объекте лежит еще один объект

  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

// Деструктуризируем оба объекта
  const { avatar, name, tag, location, followers, views, likes } = profile;
  const { followers, views, likes } = stats;

// Либо делаем глубокую деструктуризацию
  const {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = profile;

  console.log(name, tag, location, avatar, followers, views, likes);
  

  /*
   * Деструктуризация массивов
   */

// !!! Порядок переменных важен

  const rgb = [255, 100, 80];
  
  const [red, green, blue] = rgb;

  const [red, , blue] = rgb; //если нужно один элемент пропустить
  
  // console.log(red, green, blue);
  
  const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
  };
  
  const entries = Object.entries(authors); //возвращает массив массивов
// [[kiwi, 4], [poly, 7], [ajax, 9], [mango, 6]]

  for (const entry of entries) {
    //   console.log(entry);
    // Уровень 1
    const name = entry[0];
    const rating = entry[1];

    // Уровень 2
    // либо деструктуризируем массив
    const [name, rating] = entry;
  }

    // Уровень 3
    // либо деструктуризируем значение на итерации
for (const [name, rating] of entries) {
      console.log(name, rating);
  }
  
  
  
  /*
   * Операция rest (сбор)
   */

  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  const { name, tag, location, ...restProps } = profile;
  
  // console.log(name, tag, location); ---> часть свойств забираем в переменные
  // console.log(restProps); ---> объект с остальными свойствами
  // console.log(profile);
  


  /*
   * Паттерн «Обьект настроек»
   * - деструктуризация параметра-обьекта в подписи функции
   * - rest при деструктуризации в подписи
   */
  
//   деструктуризировать можно либо в теле функции
  const showProfileInfo = function (userProfile) {
    const { name, tag, location, ...restProps } = userProfile;
  
    // console.log(name, tag, location, avatar, followers, views, likes);
    console.log(restProps);
  };

// либо в подписи самой функции
const showProfileInfo = function ({ name, tag, location, ...restProps }) {  
    // console.log(name, tag, location, avatar, followers, views, likes);
    console.log(restProps);
  };


  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  showProfileInfo(profile);


  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  const makeProfileMarkup = function (userProfile) {
    const {
      avatar = 'https://i.pravatar.cc/400?img=6',
      name,
      tag,
      location = 'Planet Earth',
      stats: { followers, views, likes },
    } = userProfile;
  
    return `<div>
      <img src="${avatar}" alt="user avatar">
      <p>${name}<span>@${tag}</span></p>
      <p>Location: ${location}</p>
      <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
      </ul>
    </div>`;
  };
  
  const markup = makeProfileMarkup(profile);
  
  console.log(markup);
  
  document.body.insertAdjacentHTML('afterbegin', markup);


  /*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {
      return this.items;
    },
    add(product) {
      for (const item of this.items) {
        if (item.name === product.name) {
          item.quantity += 1;
          return;
        }
      }
  
      const newProduct = {
        ...product, //распыляем свойства продукта, который добавили в корзину
        quantity: 1, //добавляем новое свойство - количество
      };
  
      this.items.push(newProduct);
    },
    remove(productName) {
      const { items } = this;
  
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
  
        if (productName === item.name) {
          console.log('нашли такой продукт ', productName);
          console.log('индекс: ', i);
  
          items.splice(i, 1);
        }
      }
    },
    clear() {
      this.items = [];
    },
    countTotalPrice() {
      const { items } = this;
      let total = 0;
  
      for (const { price, quantity } of items) {
        total += price * quantity;
      }
  
      return total;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };
  
  console.log(cart.getItems());
  
  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍇', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍓', price: 110 });
  cart.add({ name: '🍓', price: 110 });
  cart.add({ name: '🍓', price: 110 });
  
  console.table(cart.getItems());
  
  console.log('Total: ', cart.countTotalPrice());
  
  cart.remove('🍇');
  console.table(cart.getItems());
  
  // cart.clear();
  // console.log(cart.getItems());
  
  console.log('Total: ', cart.countTotalPrice());
  
  // cart.increaseQuantity('🍎');
  // console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());



  /**
 * Деструктуризация
 *
 * Перепиши функцию так, чтобы она принимала один объект параметров,
 * вместо набора независимых аргументов.
 */

function calcBMI({ weight, height }) {
    const numericWeight = Number(weight.replace(',', '.'));
    const numericHeight = Number(height.replace(',', '.'));
    return Number((numericWeight / numericHeight ** 2).toFixed(1));
  }
  
  // Было
  // console.log(calcBMI('88,3', '1.75'));
  // console.log(calcBMI('68,3', '1.65'));
  // console.log(calcBMI('118,3', '1.95'));
  
  // Ожидается
  console.log(
    calcBMI({
      weight: '88,3',
      height: '1.75',
    })
  );
  console.log(
    calcBMI({
      weight: '68,3',
      height: '1.65',
    })
  );
  console.log(
    calcBMI({
      weight: '118,3',
      height: '1.95',
    })
  );



/**
 * Деструктуризация
 *
 * Перепиши функцию так, чтобы она принимала один объект параметров,
 * вместо набора независимых аргументов.
 */

 function printContactsInfo({ names, phones }) {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    for (let i = 0; i < nameList.length; i += 1) {
      console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
  }
  
  // Было
  // printContactsInfo(
  //   'Jacob,William,Solomon,Artemis',
  //   '89001234567,89001112233,890055566377,890055566300'
  // );
  
  // Ожидается
  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });



  /**
 * Глубокая деструктуризация
 *
 * Перепиши функцию так, чтобы она принимала один объект параметров,
 * вместо набора независимых аргументов.
 */
   function getStockReport({ companyName, stock: { repair, defence} }) {
    return `${companyName} has ${repair + defence} items in stock`;
  }

function getStockReport({ companyName, stock }) {
    let total = 0;
    const values = Object.values(stock);
    for (const value of values) {  //либо for (const value of Object.values(stock))
      total += value;
    }
    return `${companyName} has ${total} items in stock`;
  }
  
  // Было
  // console.log(getStockReport('Cyberdyne Systems', 150, 50));
  
  // Ожидается
  console.log(
    getStockReport({
      companyName: 'Cyberdyne Systems',
      stock: {
        repair: 150,
        defence: 50,
      },
    })
  ); // "Cyberdyne Systems has 200 bots in stock"
  
  console.log(
    getStockReport({
      companyName: 'Babushka',
      stock: {
        apples: 50,
        potato: 100,
        eggs: 150,
      },
    })
  ); // "Cyberdyne Systems has 200 bots in stock"



  /**
 * Операция spread
 *
 * Дополни функцию `createContact(partialContact)` так, чтобы она
 * возвращала новый объект контакта с добавленными свойствами `id`
 * и `createdAt`, а также `list` со значением "default" если
 * в `partialContact` нет такого свойства.
 */

function createContact(partialContact) {
    return {
      list: 'default', //значение по умолчанию. Если значение будет в объекте - перезапишется
      ...partialContact, //распыляем объект
      id: generateId(),
      createdAt: Date.now(),
    };
  }
  
  console.log(
    createContact({
      name: 'Mango',
      email: 'mango@mail.com',
      list: 'friends',
    })
  );
  console.log(
    createContact({
      name: 'Poly',
      email: 'poly@hotmail.com',
    })
  );
  
  function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }


  /**
 * Операция rest
 *
 * Напиши функцию `transformUsername(user)` так, чтобы она возвращала
 * новый обьект со свойством `fullName`, вместо `firstName` и `lastName`.
 */

function transformUsername({ firstName, lastName, ...otherProps }) {
    return {
      ...otherProps,
      fullName: `${firstName} ${lastName}`,
    };
  }
  
  console.log(
    transformUsername({
      id: 1,
      firstName: 'Jacob',
      lastName: 'Mercer',
      email: 'j.mercer@mail.com',
      friendCount: 40,
    })
  );
  
  console.log(
    transformUsername({
      id: 2,
      firstName: 'Adrian',
      lastName: 'Cross',
      email: 'a.cross@hotmail.com',
      friendCount: 20,
    })
  );
