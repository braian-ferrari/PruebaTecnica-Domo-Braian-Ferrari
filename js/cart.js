const cartElement = document.getElementById('cart');
const counterElement = document.getElementById('cart-counter');
let count = 0;

cartElement.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});
