const review = [
    {
        img: "images/review.jpg",
        name: "Inaolaji Tope Michael",
        desc: "I'm a runner and these shoes have been a game-changer for me. The cushioning and support are excellent, and my performance has improved. They also have good traction on different surfaces. I highly recommend these shoes to fellow athletes."

    },

    {
        img: "images/review2.png",
        name: "Bogunmbe Ayomide Tope",
        desc: "These shoes are a steal for the price! They're comfortable and stylish, and I've received multiple compliments. The only downside is that they scuff quite easily, so you need to be a bit careful. Overall, I'm happy with my purchase."

    },

   {
        img: "images/review3.jfif",
        name: "Olawuyi Ifeoluwa",
        desc: "Disappointed with these shoes. The sole started to come off after just a few weeks of wear. They're not as durable as I expected. I reached out to customer service, but haven't received a response yet. Not the quality I was hoping for."

    },

    {
        img: "images/review4.jfif",
        name: "Aiyegbokiti Sheu",
        desc: "I'm in love with these shoes! The color is even better in person and they're so lightweight. I was worried about ordering online, but the sizing chart was accurate and they fit perfectly. I've already received compliments from friends"

    },

    {
        img: "images/review5.jpg",
        name: "Katayeyanjue Samson",
        desc: "The shoes look great and the quality seems good. However, they were a bit tight when I first put them on. After wearing them a few times, they started to feel more comfortable. I recommend going up half a size for a better fit"

    }

];

const chevronRigth = document.querySelector('.fa-chevron-right');
const chevronLeft = document.querySelector('.fa-chevron-left');
const boxWrapper = document.querySelector('.box-wrapper');



let count = 0;
let increasing = true; 

setInterval(function(){
    if (increasing) {
        count++;
        boxWrapper.style.transform = `translateX(-${count * 20}%)`

        if (count === 4) {
            increasing = false;
        }
    } else {
        count--;
        boxWrapper.style.transform = `translateX(-${count * 20}%)`

        if (count === 0) {
            increasing = true;
        }
    }
}, 4000)

    



// let count = 0;
// let maxNum = 4;

// chevronRigth.addEventListener('click', ()=>{

// })


// chevronLeft.addEventListener('click', ()=>{
    
// })



    let accumulator = '';

    review.forEach(function(item){
       accumulator+= `<div class="box jsreview">
       <span class="fas fa-quote-right"></span>
       <p>${item.desc}.</p>
       <img src=${item.img} class="user" alt="">
       <h3>${item.name}</h3>
       <div class="stars">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star-half-alt"></i>
       </div>
   </div>`
    })

     boxWrapper.innerHTML = accumulator;
    








   