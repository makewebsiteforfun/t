document.getElementById('preOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const preorderText = document.getElementById('preorder').value.trim(); // Get preorder text
    const quantity = document.getElementById('quantity').value;
    if (email) {
        fetch('https://formspree.io/f/xpwqrnwq', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, preorder: preorderText, quantity: quantity})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Email submitted:", email, preorderText, "Quantity:", quantity);
            document.getElementById('message').classList.remove('hidden');
            document.getElementById('email').value = '';
            document.getElementById('preorder').value = ''; // Clear preorder field
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your email. Please try again.');
        });
    }
    
        document.addEventListener("scroll", function () {
            const form = document.getElementById("floatingForm");
            const scrollY = window.scrollY;
            const newY = 50 + Math.sin(scrollY * 0.02) * 10; // Adjust float range
            form.style.transform = `translate(-50%, ${newY}%)`;
        });
    
});
function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity < 10) {
      quantityInput.value = currentQuantity + 1;
    }
  }

  function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 0) { // Minimum 0
      quantityInput.value = currentQuantity - 1;
    }
  }
  
