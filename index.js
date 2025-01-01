document.querySelectorAll('.carrello').forEach(button => {
    button.addEventListener('click', () => {
        let cartCount = document.getElementById('cart-count');
        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
    });
});


document.querySelector('.cart').addEventListener('click', () => {
    let cartCount = document.getElementById('cart-count');
    let currentCount = parseInt(cartCount.textContent);

    const alertModal = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');

  
    if (currentCount === 0) {
        alertMessage.textContent = "ADD SOMETHING TO YOUR CART FIRST.";
    } else {
        cartCount.textContent = '0'; 
        alertMessage.textContent = "PURCHASE SUCCESSFUL.";
    }


    alertModal.style.display = "block";
});


document.getElementById('close-alert').addEventListener('click', () => {
    document.getElementById('custom-alert').style.display = "none";
});


window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('custom-alert')) {
        document.getElementById('custom-alert').style.display = "none";
    }
});

document.getElementById('send').addEventListener('click', function() {
    alert("Email sent successfully");
});

