'use strict';

// Сеть фастфудов предлагает несколько видов гамбургеров:

// * маленький (50 тугриков, 20 калорий)
// * большой (100 тугриков, 40 калорий)

//  Гамбургер может быть с одним из нескольких видов начинок:
// * сыром (+ 10 тугриков, + 20 калорий)
// * салатом (+ 20 тугриков, + 5 калорий)
// * картофелем (+ 15 тугриков, + 10 калорий)

// Можно добавить добавки:
// * посыпать приправой (+ 15 тугриков, 0 калорий)
// * полить майонезом (+ 20 тугриков, + 5 калорий).

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход
// (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

class Humburger {
    constructor(size, staffing) {
        this.size = size;
        this.staffing = staffing;
        this.toppings = [];
    }

    get Hamburger() {
        this.order = new Set();
    };

    addToppings(toping){
        if(!this.toppings.includes(toping)){
            return this.toppings.push(toping);
        } else {
            console.log('THIS TOPPING HAS ALREDY BEEN ADDED!');
        }
    }

    removeToppings(toping){
        return this.toppings = this.toppings.filter( el => el !== toping );
    }

    getSizing(){
        return this.size;
    }

    getStaffing(){
        return this.staffing;
    }

    getToppings (){
        return this.toppings;
    }

    get calculateCalories(){
        const caloriesArray = this.toppings.map( el => Humburger.TOPPING[el].price );
        caloriesArray.push( Humburger.SIZE[this.size].calories, Humburger.STAFFING[this.staffing].calories );
        let calories = caloriesArray.reduce((accum, calories) => accum + calories, 0);
        return calories;
    }
    get calculatePrice(){
        const priceArray = this.toppings.map( el => Humburger.TOPPING[el].price );
        priceArray.push( Humburger.SIZE[this.size].price, Humburger.STAFFING[this.staffing].price );
        let price = priceArray.reduce((accum, price) => accum + price, 0);
        return price;
    }

    static SIZE = {
        SMALL_SIZE : 'SMALL_SIZE',
        LARGE_SIZE : 'LARGE SIZE',
    };

    static STAFFINGS = {
        STAFFING_CHEES : 'STAFFING CHEES',
        STAFFING_SALAD : 'STAFFING SALAD',
        STAFFING_POTATO : 'STAFFING POTATO'
    };

    static TOPPINGS = {
        TOPPING_SPICE : 'TOPPING SPICE',
        TOPPING_SAUCE : 'TOPPING SAUCE',
    };

    static HUMBURGER_VALUE = [
        Humburger.SIZE = {
            [Humburger.SMALL_SIZE] : {
                price : 50,
                calories : 20,
            },
            [Humburger.LARGE_SIZE] : {
                price : 100,
                calories: 40,
            }
        },
        Humburger.STAFFING = {
            [Humburger.STAFFING_CHEES] : {
                price : 10,
                calories : 20,
            },
            [Humburger.STAFFING_SALAD] : {
                price : 20,
                calories: 5,
            },
            [Humburger.STAFFING_POTATO] : {
                price : 15,
                calories : 10,
            }
        },
        Humburger.TOPPING = {
            [Humburger.TOPPING_SPICE] : {
                price : 15,
                calories : 0,
            },
            [Humburger.TOPPING_SAUCE] : {
                price : 20,
                calories: 5,
            }
        },
    ];
}

// let humburger = new Humburger(Humburger.LARGE_SIZE, Humburger.STAFFING_POTATO);
let humburger = new Humburger();
humburger.addToppings(Humburger.TOPPING_SPICE);
humburger.addToppings(Humburger.TOPPING_SPICE); // THIS TOPPING HAS ALREDY BEEN ADDED!

console.log('Calories: ' + humburger.calculateCalories);
console.log('Price: ' + humburger.calculatePrice);

humburger.addToppings(Humburger.TOPPING_SAUCE);
humburger.removeToppings(Humburger.TOPPING_SPICE);

console.log('Calories: ' + humburger.calculateCalories);
console.log('Total price: ' + humburger.calculatePrice);
