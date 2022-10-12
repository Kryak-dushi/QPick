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
]

function renderCard(elem) {
    return `<div class="card">
                <div class="card_img_container">
                    <img class="card_img" src="${elem.img}" />
                </div>
                <div class="card_info">
                    <div class="card_info_row">
                        <span class="card_name">${elem.title}</span>
                        <span class="card_price">${elem.price}</span>
                    </div>
                    <div class="card_info_row">
                        <div class="card_rate_row">
                            <img class="icon" src="./assets/Rate.svg">
                            <span class="card_rate">${elem.rate}</span>
                        </div>
                        <button data-sku="${elem.sku}" class="card_action">Купить</button>
                    </div>
                </div>
            </div>`;
}

function renderDiscountCard(elem) {
    return `<div class="card">
                <div class="card_img_container">
                    <img class="card_img" src="${elem.img}" />
                </div>
                <div class="card_info">
                    <div class="card_info_row">
                        <span class="card_name">${elem.title}</span>
                        <span class="card_price">${elem.price}</span>
                    </div>
                    <div class="card_info_row">
                        <span class="card_price_before_discount">${elem.priceBeforeDiscount}</span>
                    </div>
                    <div class="card_info_row">
                        <div class="card_rate_row">
                            <img class="icon" src="./assets/Rate.svg">
                            <span class="card_rate">${elem.rate}</span>
                        </div>
                        <button data-sku="${elem.sku}" class="card_action">Купить</button>
                    </div>
                </div>
            </div>`;
}


window.onload = () => {
    createCards();

    const actions = Array.from(document.querySelectorAll('.card_action'));
    actions.forEach(button => {
        button.addEventListener('click', function (event) {
            console.log(Number(event.target.dataset.sku));
            // функиця добавления в локал сторадж
            // обновить номер в корзине
        });
    })
}

function createCards() {
    let wirelessContainer = document.getElementById('container_wireless_headphones');
    let wireContainer = document.getElementById('container_wire_headphones');

    headphones.forEach(elem => {

        let div = document.createElement('div');

        if (elem.priceBeforeDiscount) {
            div.innerHTML = renderDiscountCard(elem);
        } else {
            div.innerHTML = renderCard(elem);
        }

        if (elem.wireless) {

            console.log(elem);
            console.log(div);
            wirelessContainer.append(div);
        } else {
            wireContainer.append(div);
        }
    })
}