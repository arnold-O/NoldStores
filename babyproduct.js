

    const productBabyProduct = document.querySelector('.tester1')
    const productFashion = document.querySelector('.fashionDiv')
   

  const storePproduct = [

    {
      name:"Best denim Dress, fit All",
      price:305000,
      discount: 50,
      reviews:[],
      image:"assets/bbp1.webp"
    },
    {
      name:"Best denim Dress, fit All",
      price:305000,
      discount: 50,
      reviews:[],
      image:"assets/bbp2.webp"
    },
    {
      name:"Best denim Dress, fit All",
      price:2000,
      discount: 50,
      reviews:[],
      image:"assets/bbp3.webp"
    },
    {
      name:"Best denim Dress, fit All",
      price:2000,
      discount: 30,
      reviews:[],
      image:"assets/bbp1.webp",
      fash:"bbp"
    },
    {
      name:"Best denim Dress, fit All",
      price:2000,
      discount: 77,
      reviews:[],
      image:"assets/bbp2.webp",
      fash:"bbp"
    },
    {
      name:"Best denim Dress, fit All",
      price:600,
      discount: 22,
      reviews:[],
      image:"assets/bbp3.webp",
      fash:"bbp"
    },
    {
      name:"Best denim Dress, fit All",
      price:400,
      discount: 90,
      reviews:[],
      image:"assets/bbp4.webp",
      fash:"bbp"
    },
    {
      name:"Best denim Dress, fit All",
      price:2000,
      discount: 50,
      reviews:[],
      image:"assets/bbp5.webp",
      fash:"bbp"
    },
    {
      name:"Best denim Dress, fit All",
      price:850,
      discount: 65,
      reviews:[],
      image:"assets/bbp6.webp",
      fash:"bbp"
    },
    {
      name:"Best denim Dress, fit All",
      price:2100,
      discount: 20,
      reviews:[],
      image:"assets/bbp7.webp",
      fash:"bbp"
    },
    {
      name:"Best denim Dress, fit All",
      price:100,
      discount: 10,
      reviews:[],
      image:"assets/bbp8.webp",
      fash:"bbp"
    },
  ]


  const insertProduct = ()=>{
    productBabyProduct.innerHTML = '';


    storePproduct.map(function(item){

      if(item.fash){

       
   const html = `<div class="electronicProduct-cont">
  <div class="priceTopDiscount">
    <p class="paragWriteUp">${item.discount}% off</p>
    <span class="favouriteCont-electronic"><i class="fa-regular fa-heart"></i></span>
  </div>

  <div class="detailsPart-electronics">
    <div class="imageElectronicPRoduct">
      <img src=${item.image} alt="" class="imageElectronicPArt">
    </div>

    <p class="productTitle-electronic">${item.name}</p>
   
      <hr class="hrClass-electronic">
   <div class="priceCont-electronic">
 
    <p class="newPRice-electronic">#${item.price}</p>
    <p class="oldPRice-electronic">#355,000</p>

   </div>
   <hr class="hrClass-electronic">
    <p class="soldBy-electronic">SOLD BY <span class="kongaArnold">ARNOLD</span></p>
 <div class="reviewsCont-electronics">
  <span><i class="fa-regular fa-star"></i></span>
  <span><i class="fa-regular fa-star"></i></span>
  <span><i class="fa-regular fa-star"></i></span>
  <span><i class="fa-regular fa-star"></i></span>
  <span class="reviewStyle-electronic"><i class="fa-regular fa-star"></i></span>
 </div>
 <div class="buttoncont-electronics">
  <button class="btnCont-electronic">ADD TO CART</button>
 </div>
  </div>



 </div>`
//  let htmlObject = document.createElement('div');
//  htmlObject.innerHTML=html;
productBabyProduct.insertAdjacentHTML('afterbegin', html)
}
     

})
   
}
insertProduct()

