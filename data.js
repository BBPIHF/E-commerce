const search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active')
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

const cart = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = function () {
    cart.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}

const navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = function () {
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    // cart.classList.remove('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}


//----------------cart----------------

const items = [
    {
        id: 1,
        img: "images/1.webp",
        title: "2020 casual shoe business",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 2,
        img: "images/2.webp",
        title: "2021 sneaker round shoe",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 3,
        img: "images/3.webp",
        title: "2022 darling men sneakers",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 4,
        img: "images/4.jpg",
        title: "2023 darling men sneakers",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 5,
        img: "images/5.webp",
        title: "2023 darling men sneakers",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 6,
        img: "images/6.jpg",
        title: "2023 shoe running sneakers",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 7,
        img: "images/7.webp",
        title: "lady  running shoe",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 8,
        img: "images/8.jpg",
        title: "men casual round shoe",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 9,
        img: "images/9.jpg",
        title: "men casual shoe business",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 10,
        img: "images/10.jpeg",
        title: "men causual high-top shoe",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 11,
        img: "images/11.webp",
        title: "men safety shoe 2021",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 12,
        img: "images/12.jpg",
        title: "2023 darling men sneakers",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 13,
        img: "images/13.webp",
        title: "unisex sneaker round shoe",
        price: 15.99,
        prevPrice: 20.99

    },

];

let itemsContainer = document.querySelector('.items-container');

let html = '';

items.forEach((item) => {
     html += `<div class="box">
            <img src=${item.img} alt="">
            <h3>${item.title}</h3>
            <div class="price">$${item.price} <span>${item.prevPrice}</span></div>
            <a href="" class="btn btn-menu" data-id="${item.id}">add to cart</a>
            <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        </div>`;
})

itemsContainer.innerHTML = html;

