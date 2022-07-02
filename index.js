//   faq section----------------------------//////
const btnOpen = document.querySelectorAll(".first");

const secondAgleDown = document.querySelectorAll(".secondAgle");

const selector = document.querySelectorAll(".takeItDown");
console.log(selector);
console.log(secondAgleDown);
console.log(btnOpen);

for (let i = 0; i < selector.length; i++)
  selector[i].addEventListener("click", () => {
    btnOpen[i].classList.remove("hidden");
    document.querySelectorAll(".takeItDown")[i].classList.add("hidden");
    document.querySelectorAll(".the-other-angle")[i].classList.remove("hidden");
    document.querySelectorAll(".adder")[i].style.color = "green";
    document.querySelectorAll(".adder")[i].style.fontSize = "20px";
    document.querySelectorAll(".main-box-border-above")[i].style.borderTop =
      " 2px solid green";
  });

for (let i = 0; i < secondAgleDown.length; i++)
  secondAgleDown[i].addEventListener("click", () => {
    btnOpen[i].classList.add("hidden");
    document.querySelectorAll(".takeItDown")[i].classList.remove("hidden");
    document.querySelectorAll(".the-other-angle")[i].classList.add("hidden");
    document.querySelectorAll(".adder")[i].style.color = "";
    document.querySelectorAll(".adder")[i].style.fontSize = "14px";
    document.querySelectorAll(".main-box-border-above")[i].style.borderTop = "";
  });

//   faq section----------------------------//////

// flash section js logic

const timerDown = document.querySelector(".time-fixing-javascript");
function countdownTimeStart() {
  const ReferenceDownTime = new Date("May 24, 2022 08:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get the noe time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const timerDown = ReferenceDownTime - now;

    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor(
      (timerDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timerDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timerDown % (1000 * 60)) / 1000);

    document.querySelector(
      ".time-fixing-javascript"
    ).textContent = `  ${hours}h ${minutes}m ${seconds}s  `;

    if (timerDown < 0) {
      clearInterval(x);
      document.querySelector(".time-fixing-javascript").textContent = "EXPIRED";
    }
  }, 1000);
}
//  REMEMBER YOU HAVNT CALLED IN THE FUNCTION
// countdownTimeStart();

// let time = 1600

// setInterval(()=>{
//     // const hour = String(Math.trunc(time/3600)).padStart(2,0)
//     const min = String(Math.trunc(time /60)).padStart(2,0)
//     const sec =String( time % 60).padStart(2, 0)
//     timerDown.textContent =`${min}:${sec}`
//     time--
// },1000)
// flash section js logic



const scrollT = document.querySelector('.goToTop-Btn')
const sectionTo = document.querySelector('.scrollClass')



scrollT.addEventListener('click', function(){
  
  sectionTo.scrollIntoView({
    behavior:'smooth'
  })

}
  )



//     const productBabyProduct = document.querySelector('.tester1')
//     const productFashion = document.querySelector('.fashionDiv')
   

//   const storePproduct = [

//     {
//       name:"Best denim Dress, fit All",
//       price:305000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp1.webp"
//     },
//     {
//       name:"Best denim Dress, fit All",
//       price:305000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp2.webp"
//     },
//     {
//       name:"Best denim Dress, fit All",
//       price:2000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp3.webp"
//     },
//     {
//       name:"Best denim Dress, fit All",
//       price:2000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp4.webp"
//     },
//     {
//       name:"Best denim Dress, fit All",
//       price:2000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp5.webp"
//     },
//     {
//       name:"Best denim Dress, fit All",
//       price:2000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp6.webp",
//       fash:"fashion"
//     },
//     {
//       name:"Best denim Dress, fit All",
//       price:2000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp7.webp",
//       fash:"fashion"
//     },
//     {
//       name:"Best denim Dress, fit All",
//       price:2000,
//       discount: 50,
//       reviews:[],
//       image:"assets/bbp8.webp",
//       fash:"fashion"
//     }
//   ]


//   const insertProduct = ()=>{
//     productBabyProduct.innerHTML = '';


//     storePproduct.map(function(item){

//       if(item.fash){

       
//    const html = `<div class="electronicProduct-cont">
//   <div class="priceTopDiscount">
//     <p class="paragWriteUp">${item.discount}% off</p>
//     <span class="favouriteCont-electronic"><i class="fa-regular fa-heart"></i></span>
//   </div>

//   <div class="detailsPart-electronics">
//     <div class="imageElectronicPRoduct">
//       <img src=${item.image} alt="" class="imageElectronicPArt">
//     </div>

//     <p class="productTitle-electronic">${item.name}</p>
   
//       <hr class="hrClass-electronic">
//    <div class="priceCont-electronic">
 
//     <p class="newPRice-electronic">#${item.price}</p>
//     <p class="oldPRice-electronic">#355,000</p>

//    </div>
//    <hr class="hrClass-electronic">
//     <p class="soldBy-electronic">SOLD BY <span class="kongaArnold">ARNOLD</span></p>
//  <div class="reviewsCont-electronics">
//   <span><i class="fa-regular fa-star"></i></span>
//   <span><i class="fa-regular fa-star"></i></span>
//   <span><i class="fa-regular fa-star"></i></span>
//   <span><i class="fa-regular fa-star"></i></span>
//   <span class="reviewStyle-electronic"><i class="fa-regular fa-star"></i></span>
//  </div>
//  <div class="buttoncont-electronics">
//   <button class="btnCont-electronic">ADD TO CART</button>
//  </div>
//   </div>



//  </div>`
// //  let htmlObject = document.createElement('div');
// //  htmlObject.innerHTML=html;
// productBabyProduct.insertAdjacentHTML('afterbegin', html)
// }
     

// })
   
// }
// insertProduct()



  


  





