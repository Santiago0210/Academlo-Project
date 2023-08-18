import cart from "./components/cart.js";
import loader from "./components/loader.js";
import products from "./components/products.js";
import showCart from "./components/showCart.js";
import showMenu from "./components/showMenu.js";
import getProducts from "./helpers/getProducts.js";

/*******  Importa modalsDetails  ******/
import modalsDetails from "./components/modalsDetails.js";

/* UI Elements */

// hidden loader 
loader()

// show menu 
showMenu()

// show cart 
showCart()

/* End UI Elements */

// Products 
const { db, printProducts } = products(await getProducts())


/*******  Importa modalsDetails  antes de cart(db, printProducts) ******/

//modals
modalsDetails() 

// Cart 
cart(db, printProducts);

let mainLocation = window.pageYOffset
let $nav = document.querySelector('header') 
window.addEventListener("scroll", function(){
   let currentLocation = window.pageYOffset
   console.log(currentLocation)

   if(mainLocation >= currentLocation){
    $nav.style.top = "0px"
   } else {
      $nav.style.top = "-80px"
   }
   mainLocation = currentLocation
})


const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
  
 
        /* Darkmode */
const darkModeToggle = document.getElementById('dark');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

