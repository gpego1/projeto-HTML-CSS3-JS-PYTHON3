const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__header, .section__title`,{delay: 600});
sr.reveal(`.home__footer`,{delay: 700});
sr.reveal(`.home__img`,{delay: 900, origin: 'top'});
sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100});
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100});
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'});
sr.reveal(`.case__img`,{origin: 'top'});
sr.reveal(`.case__data`);

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} foi adicionado ao carrinho!`);
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        cart.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productInfo = document.createElement('div');

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;

            productInfo.appendChild(productName);
            productInfo.appendChild(productPrice);

            productElement.appendChild(productImage);
            productElement.appendChild(productInfo);

            cartContainer.appendChild(productElement);
        });
    }
}
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
    alert('O carrinho foi limpo!');
}
function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, product) => {
        const price = parseFloat(product.price.replace('R$', '').replace(',', '.'));
        return sum + price;
    }, 0);
    alert(`O total da compra é: R$ ${total.toFixed(2)}`);
}

