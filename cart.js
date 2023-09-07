let cartItems = [];

const btns = itemsContainer.querySelectorAll('.btn-menu');
const cartContainer = document.querySelector(".cart-items-container2");
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.querySelector(".checkout-btn");





// begining generating item to push to cart
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = btn.dataset.id;
        const productName = btn.parentElement.querySelector('h3').textContent;
        const productImg = btn.parentElement.querySelector('img').src;
       

//extracting the price out of the div connecting both price and sliced price from html page
       const priceElement = btn.previousElementSibling;
       const priceValue = priceElement.cloneNode(true);
       priceValue.querySelector('span').remove();
       const price = Number(priceValue.textContent.trim().slice(1));
    

       
//looping over the cartItems to check for existing product and save inside matchItem(reference object)
        let matchItem;

       cartItems.forEach((item)=>{
        if(productId === item.productId){
            matchItem = item;
        }
       })

       if (matchItem){
        matchItem.quantity+=1;
        matchItem.price+=price;
       
       }else{
        cartItems.push({
            productImg:productImg,
            productName:productName,
            productId: productId,
            price: price,
            quantity:1
        })
       }

      
//--------------generating cart items----------------

renderItem();

//----------Quantity Counter increase of the cart---------------
    let countQuantity = 0;
    cartItems.forEach((item)=>{
        countQuantity+=item.quantity;
    })
    cartCount.innerHTML = countQuantity;



//-----------calling total product price function--------
    totalProductPrice();


    })


})

//end of the btn generating item to push to cart





//----------this function generate html code of the cart and display it in the cart container---------------

function renderItem(){
    let cartHTML='';
    cartItems.forEach((item,index)=>{
        cartHTML+= `<div class="cart-item">
        <span class="fas fa-times" onclick="
        cartItems.splice(${index}, 1);
        renderItem();
        CartDecrease();
        if( cartCount.innerHTML === '0'){
            cartCount.innerHTML = '';
        }
        totalProductPrice();
        "></span>
        <img src=${item.productImg} alt="">
        <div class="content">
            <h3>${item.productName}</h3>
            <div class="price">$${(item.price).toFixed(2)}</div>
            <span class="quantity">Quantity:${item.quantity}</span>
        </div>
    </div>`
    })
    cartContainer.innerHTML = cartHTML;
}



//----------Quantity Counter decrease function of the cart---------------

function CartDecrease(){
    let existingCount=0;
    cartItems.forEach((item)=>{
        existingCount+= item.quantity
    })
    cartCount.innerHTML = existingCount;
}


//----------function to display total price as product being added to cart---------------

function totalProductPrice(){
    let existingTotal=0;
    cartItems.forEach((item)=>{
        existingTotal+= item.price
    })
    if(existingTotal===0){
        checkoutBtn.innerHTML = `cart is empty`;
    }
    else{
        checkoutBtn.innerHTML = `checkout now: $${(existingTotal).toFixed(2)}`;
    }
    
}




