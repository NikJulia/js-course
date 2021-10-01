// Задача 29
// Инструкция ветвления switch
function getShippingCost(country) {
    let message;
    let price;
      switch (country) {
        case "China":
        price = 100;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
        
        case "Chile":
        price = 250;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
    
          case "Australia":
        price = 170;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
    
        case "Jamaica":
        price = 120;
        message = `Shipping to ${country} will cost ${price} credits`;
        break;
        
        default:
        message = 'Sorry, there is no delivery to your country';
      }
    return message;
}
  

// Задача 31
// Индексация элементов строки
const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];

// Задача 33
// если длина строки:
// 1. не превышает maxLength, функция возвращает её в исходном виде.
// 2. больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", возвращает укороченную версию.
function formatMessage(message, maxLength) {
    let result;
    if (message.length === maxLength) {
      return message;
    } else {
      result = message.slice(0, maxLength) + "...";
    }
    return result;
  }

// Задача 36
function checkForSpam(message) {
    let result;
//     const messageToLowerCase = message.toLowerCase();
//     if (messageToLowerCase.includes("spam") || messageToLowerCase.includes("sale")) {
//         return result = true;
//     } else 
//     return result = false;
//   }
message = message.toLowerCase();
result = message.includes("spam") || message.includes("sale");
return result;
}

  console.log(checkForSpam("Latest technology news"));
  console.log(checkForSpam("JavaScript weekly newsletter"));
  console.log(checkForSpam("Get best sale offers now!"));
  console.log(checkForSpam("Amazing SalE, only tonight!"));
  console.log(checkForSpam("Trust me, this is not a spam message"));
  console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));