// ЗАДАЧА 10
// Цикл for...in
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  for (const key in apartment) {
      keys.push(key);
  }
  
  for (const value in apartment) {
      values.push(apartment[value]);
  }



//   ЗАДАЧА 11
// Метод hasOwnProperty()
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
// Метод Object.create(advert) создаёт и возвращает новый объект, связывая его с объектом advert
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
	if(apartment.hasOwnProperty(key)) {
  		keys.push(key);
  		values.push(apartment[key]);
    }
}


// ЗАДАЧА 12
function countProps(object) {
    let propCount = 0;

      for (const prop in object) {
          if (object.hasOwnProperty(prop)) {
            propCount += 1;
          }
      }

    return propCount;
  }

// ЗАДАЧА 14 - рефакторинг задачи 12
function countProps(object) {
    let propCount = 0;
    const ownProps = Object.keys(object);
    
    for (const key of ownProps) {
        propCount += 1;
    }
  
    return propCount;
  }


// ЗАДАЧА 13
// Метод Object.keys()
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
  
  for (const key of keys) {
    // Ключ
    console.log(key);
    // Значение свойства
    values.push(apartment[key]);
  }



// ЗАДАЧА 16
function countTotalSalary(salaries) {
    let totalSalary = 0;
    const salaryArray = Object.values(salaries);
    // console.log(salaryArray);
    
    for (const value in salaryArray) {
        // console.log(salaryArray[value]);
        totalSalary += salaryArray[value];
    }

    return totalSalary;
  }

  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));



// ЗАДАЧА 18
// Массив объектов
// ЗАДАЧА 18
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
  
    for (const product of products) {
        // console.log(product.name);
        if (product.name === productName) {
          return product.price;
      }
    }

    return null;
  }

  console.log(getProductPrice("Radar"));
  console.log(getProductPrice("Grip"));
  console.log(getProductPrice("Scanner"));


  // ЗАДАЧА 20
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;
  for (const product of products) {
    if(product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));


// ЗАДАЧА 25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const { 
  today: { high: highToday, low: lowToday, icon: todayIcon }, 
  tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, 
} = forecast;

console.log(highToday);
console.log(highTomorrow);
console.log(todayIcon);
console.log(tomorrowIcon);



// ЗАДАЧА 28
// Операция spread при создании нового массива
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);



// ЗАДАЧА 30
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  const newObject = {completed, category, priority, ...data};
  
  return newObject;
}

console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));

// ЗАДАЧА 31
function add(...args) {
  let total = 0;

  for (const item of args) {
    total += item;
  }

  return total;
}

console.log(add(12, 4, 11, 48));


// ЗАДАЧА 32
// Операция rest для сбора части аргументов функции
function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
      if(arg > number) {
          total += arg;
      }
  }

  return total;
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


// ЗАДАЧА 33
function findMatches(numbersArray, ...restNumbers) {
  const matches = []; 

      for (const number of restNumbers) {
          console.log(number);
          if (numbersArray.includes(number)) {
              matches.push(number);
          }
      }

  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));



// ЗАДАЧА 35
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const oldNameIndex = this.books.indexOf(oldName);
    this.books.splice(oldNameIndex, 1, newName);

    return this.books;
  },
};

console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune"));


// ЗАДАЧА 37-40
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
      return atTheOldToad.potions;
  },
  addPotion(potionName) {
      this.potions.push(potionName);
      return this.potions;
  },
  removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
          if (this.potions[i] === potionName) {
              this.potions.splice(i, 1);
          }
      }
      return this.potions;
  },
  updatePotionName(oldName, newName) {
      const oldNameIndex = this.potions.indexOf(oldName);
      // console.log(oldNameIndex);
      this.potions.splice(oldNameIndex, 1, newName);
      return this.potions;
  },
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion('Invisibility'));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));



// ЗАДАЧА 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],


  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = this;

    for (const { name } of potions) {
        if (name === newPotion.name) {
          return `Error! Potion "${newPotion.name}" is already in your inventory!`;
        }
    }
    potions.push(newPotion);

    return potions;
  },
  removePotion(potionName) {
      const { potions } = this;

      for (let i = 0; i < potions.length; i += 1) {
          // console.log(this.potions[i].name);
          if (potions[i].name === potionName) {
              // console.log(this.potions.indexOf(this.potions[i]));
              // console.log('Нашли!!!', this.potions[i].name);
              potions.splice(potions.indexOf(potions[i]), 1);
              return potions;
          }
      }
      
      return `Potion "${potionName}" is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
      const { potions } = this;
      for (let i = 0; i < potions.length; i += 1) {
          // console.log(this.potions[i].name);
          if (potions[i].name === oldName) {
              potions[i].name = newName;
              return potions;
          }
      }

      return `Potion "${oldName}" is not in inventory!`;
  },
};

console.log(atTheOldToad.addPotion({ name: "New potion", price: 560 }));
console.log(atTheOldToad.removePotion("New potion"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Updated potion"));





// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (book.hasOwnProperty(key)) {
//       console.log(key); //вернет все ключи
//       console.log(book[key]); //вернет все значения ключей
//     }
  
//     // Если это не собственное свойство - ничего не делаем
//   }


//   const x = {
//       a: 1,
//       b: 2,
//       c: 50,
//       d: 100,
//       e: 200,
//   }

//   const propLength = Object.keys(x).length;
//   console.log(propLength);


// // Задача
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
//   };
  
//   /*
//    * Каждая транзакция это объект со свойствами: id, type и amount
//    */
  
//   const wallet = {
//     // Текущий баланс счета
//     balance: 100,
//     // История транзакций
//     transactions: [],
  
//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: this.transactions.length,
//             amount,
//             type,
//         }
//     },
  
//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(transaction);
//     },
  
//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//     withdraw(amount) {
//         if (amount > this.balance) {
//             return 'Cнятие такой суммы не возможно, недостаточно средств';
//         }
//         this.balance -= amount;
//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(transaction);
//     },
  
//     /*
//      * Метод возвращает текущий баланс
//      */
//     getBalance() {
//         return this.balance;
//     },
  
//     /*
//      * Метод ищет и возвращает объект транзации по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
//        return 'Такой транзакции нет'; 
//     },
  
//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//       getTransactionTotal(type) {
//           let total = 0;
//           for (const transaction of this.transactions) {
//              if (transaction.type === type) {
//                  total += transaction.amount;
//              }
//           }
//           return total;
//       },
//   }
  
//   wallet.deposit(150);
//   wallet.deposit(10);
//   wallet.withdraw(250);
// //   wallet.deposit(20);
// //   wallet.withdraw(10);
  
//   console.log('current balance:', wallet.getBalance());
//   console.log(wallet.transactions);
//   console.log('Транзакция:', wallet.getTransactionDetails(2));
//   console.log(wallet.getTransactionTotal(Transaction.DEPOSIT));
//   console.log(wallet.getTransactionTotal(Transaction.WITHDRAW));



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
        console.log('Total: ', this.countTotalPrice());
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;               
            }
        }

        const newProduct = {...product, quantity: 1};

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            // console.log(this.items[i].name);
            if (items[i].name === productName) {
                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;
        const { items } = this;
        for (const { price, quantity } of items) {
            total += price * quantity;
        }

        return total;
    },
    increaseQuantity(productName) {
        const { items } = this;
        for (const item of items) {
            if (item.name === productName) {
                item.quantity += 1;
            }
        }
    },
    // decreaseQuantity(productName) {
    //     for (const item of this.items) {
    //         if (item.name === productName && item.quantity > 0) {
    //             item.quantity -= 1;
    //         }
    //     }
    // },

    decreaseQuantity(productName) {
        const { items } = this;
        for (const item of items) {
            if (item.name === productName && item.quantity > 0) {
                item.quantity -= 1;
            }
        }
    },
  };
  
//   console.log(cart.getItems());
  
//   cart.add({ name: '🍎', price: 50 });
//   cart.add({ name: '🍎', price: 50 });
//   cart.add({ name: '🍇', price: 60 });
//   cart.add({ name: '🍇', price: 60 });
//   cart.add({ name: '🍋', price: 60 });
//   cart.add({ name: '🍋', price: 60 });
//   cart.add({ name: '🍓', price: 110 });
//   cart.add({ name: '🍓', price: 110 });
//   cart.add({ name: '🍓', price: 110 });
  
//   console.table(cart.getItems());
  
  // cart.remove('🍇');
  
  // cart.clear();
  
//   cart.increaseQuantity('🍎');
//   cart.increaseQuantity('🍎');
  
//   cart.decreaseQuantity('🍎');
//   cart.decreaseQuantity('🍋');

// console.log(cart.getItems());