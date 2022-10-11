const headphones = [
    {
        sku: 1,
        img: "./assets/Apple BYZ S8521.png",
        title: "Apple BYZ S8521",
        price: 2927,
        rate: 4.7,
    },
    {
        img: "./assets/Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img: "./assets/Apple EarPods Case.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img: "./assets/Apple BYZ S8521.png",
        title: "Apple BYZ S8521",
        price: 2927,
        rate: 4.7,
    },
    {
        img: "./assets/Apple EarPods.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img: "./assets/Apple EarPods Case.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img: "./assets/Apple AirPods.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        wireless: true,
    },
    {
        img: ".assets/GERLAX GH-04.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        wireless: true,
    },
    {
        img: ".assets/BOROFONE BO4.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        wireless: true,
    },
]

function createCards(data, container) {
    data.forEach(element => {
        let card = document.createElement('div');

        let img = document.createElement('img');
        img.className = "card_image";
        img.src = element.img;
        img.alt = element.name + " image";

        let name = document.createElement('p');
        name.className = "card_name";
        name.innerHTML = element.name;

        let rateImg = document.createElement('img');
        rateImg.className = "icon";
        rateImg.src = './assets/Rate.svg';

        let rate = document.createElement('p');
        rate.className = "card_rate";
        rate.innerHTML = element.rate;

        let price = document.createElement('p');
        price.className = "card_price";
        price.innerHTML = element.price;

        let priceBeforeSale = document.createElement('p');

        let button = document.createElement('button');
        button.addEventListener('click', function () {

        });

        card.append(img, name, price, priceBeforeSale, rateImg, rate, button);

        container.append(card);
    });
}

function renderCard(elem) {
    return `
    <div class="card">
                <img class="card_img" src="./assets/Apple AirPods.png" />
                <div class="card_row">
                    <div class="card_column">
                        <span>Name</span>
                        <div class="card_rate_row">
                            <img src="./assets/Rate.svg">
                            <span>4.8</span>
                        </div>
                    </div>
                    <div class="card_column">
                        <span class="card_price">9237</span>
                        <button class="card_action">Купить</button>
                    </div>
                </div>
            </div>
    `;
}



window.onload = () => {
    const actions = Array.from(document.querySelectorAll('.card_action'));
    actions.forEach(button => {
        button.addEventListener('click', function (event) {
            console.log(Number(event.target.dataset.sku));
            // функиця добавления в локал сторадж
            // обновить номер в корзине
        });
    })


    //createCards1(wireless_headphones, document.getElementById('container_wireless_headphones'));
    //createCards1(headphones, document.getElementById('container_headphones'));
}

function createCards1(data, container) {
    data.forEach(elem => {
        let div = document.createElement('div');
        div.innerHTML = renderCard(elem);
        container.append(div);
    })
}