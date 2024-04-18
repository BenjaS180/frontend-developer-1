const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const  cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailContainerAsode = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuShoppingCart.addEventListener('click',toggleShoppingCart)
productDetailContainerAsode.addEventListener('click',closeOpenProductDetailAside)


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inacvite');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inacvite');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeOpenProductDetailAside()
    
    mobileMenu.classList.toggle("inactive")


}

function toggleShoppingCart(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inacvite');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isMenuDesktopOpen = desktopMenu.classList.contains('inactive');
    if(!isMenuDesktopOpen){
        desktopMenu.classList.toggle("inactive")
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle('inactive')
    
    
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove("inactive");

}

function closeOpenProductDetailAside(){
    const isDetailContainerOpen = productDetailContainer.classList.contains('inactive')


    if (!isDetailContainerOpen){
        productDetailContainer.classList.add("inactive")
    }
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name:'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name:'Compu',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImage = document.createElement('img')
        productImage.setAttribute('src' , product.image)
        productImage.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productPrice)
    
        const productInfoFigure = document.createElement('figure');
    
        const productCartIcon = document.createElement('img');
        productCartIcon.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productCartIcon);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
};

renderProducts(productList);
