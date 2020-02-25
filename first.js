
'use strict';


let money = prompt( 'Ваш бюджет на месяц?','');
let time = prompt("Введите дату в формате YYYY-MM-DD",'YYYY-MM-DD');

let appData = {
    бюджет : money,
    timeData : time,
    expenses :{}
};
    


console.log(money);
console.log(time);
console.log(appData.бюджет,appData.timeData);