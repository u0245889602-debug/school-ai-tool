// Simpele Cart Logica
let cartCount = 0;
const cartBtn = document.getElementById('cart-btn');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBtn.innerText = `Cart (${cartCount})`;
        
        // Animatie feedback
        button.innerText = "Added!";
        button.style.background = "#34c759"; // Apple Success Green
        
        setTimeout(() => {
            button.innerText = "Add to Bag";
            button.style.background = "";
        }, 2000);
    });
});

// Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottom = "1px solid #e5e5e5";
    } else {
        navbar.style.borderBottom = "none";
    }
});
