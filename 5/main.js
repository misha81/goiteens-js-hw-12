const calcNewPrice = (price, percent, callback) => {
    const newPrice = price * (1 - percent / 100);
    return callback(newPrice);
};

const price = 100;
const percent = 50;

const applyDiscount = (newPrice) => {
    return `Нова ціна: ${newPrice.toFixed(2)}$`;
};

const result = calcNewPrice(price, percent, applyDiscount);
console.log(result); // "Знижена ціна: $80.00"


