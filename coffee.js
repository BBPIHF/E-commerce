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
    cart.classList.remove('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}


//----------------cart----------------

const items = [
    {
        id: 1,
        img: "images/6.jpg",
        title: "tasty and healthy",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 2,
        img: "images/7.jpg",
        title: "yummy and sweet",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 3,
        img: "images/14.jpg",
        title: "fresh and ice",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 4,
        img: "images/10.jpg",
        title: "sweet and fresh",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 5,
        img: "images/11.jpg",
        title: "fresh and unique",
        price: 15.99,
        prevPrice: 20.99

    },

    {
        id: 6,
        img: "images/8.jpg",
        title: "sweet and fresh",
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
            <a href="" class="btn btn-menu">add to cart</a>
        </div>`;
})

itemsContainer.innerHTML = html;

const btns = itemsContainer.querySelectorAll('.btn-menu');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.currentTarget.parentElement)
    })
})
