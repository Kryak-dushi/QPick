import { makeAutoObservable } from "mobx";

const headphones = [
    {
        sku: 1,
        img: "./assets/Apple BYZ S8521.png",
        title: "Apple BYZ S8521",
        price: 2927,
        priceBeforeDiscount: 3527,
        rate: 4.7,
    },
    {
        sku: 2,
        img: "./assets/Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        sku: 3,
        img: "./assets/Apple EarPods Case.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        sku: 4,
        img: "./assets/Apple BYZ S8521.png",
        title: "Apple BYZ S8521",
        price: 2927,
        rate: 4.7,
    },
    {
        sku: 5,
        img: "./assets/Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        sku: 6,
        img: "./assets/Apple EarPods Case.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        sku: 7,
        img: "./assets/Apple AirPods.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        wireless: true,
    },
    {
        sku: 8,
        img: "./assets/GERLAX GH-04.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        wireless: true,
    },
    {
        sku: 9,
        img: "./assets/BOROFONE BO4.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        wireless: true,
    },
];

class Store {
    cart = {};

    constructor() {
        makeAutoObservable(this);
    }

    getCart() {
        return Object.values(this.cart).map((item) => (item.item));
    }

    getWireless() {
        return headphones.filter((item) => item.wireless);
    }

    getWired() {
        return headphones.filter((item) => !item.wireless);
    }

    getCounter() {
        return Object.values(this.cart).reduce((res, item) => { return res + item.count; }, 0);
    }

    getTotalPriceBySKU(sku) {
        return this.getCountBySKU(sku) * this.cart[sku].item.price;
    }

    getCountBySKU(sku) {
        return this.cart[sku].count;
    }

    getTotalPrice() {
        return Object.values(this.cart).reduce((res, item) => { return res + this.getTotalPriceBySKU(item.item.sku); }, 0);
    }
}

export const store = new Store();

