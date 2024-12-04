document.addEventListener('DOMContentLoaded', () => {
    const codRadio = document.getElementById('cod');
    const onlineRadio = document.getElementById('online');
    const onlineOptions = document.getElementById('onlineOptions');
    const cardPayment = document.getElementById('cardPayment');
    const upiPayment = document.getElementById('upiPayment');
    const cardForm = document.getElementById('cardForm');
    const upiForm = document.getElementById('upiForm');
    const submitButton = document.getElementById('submitPayment');

    // Toggle Online Payment Options
    onlineRadio.addEventListener('change', () => {
        onlineOptions.classList.remove('d-none');
    });

    codRadio.addEventListener('change', () => {
        onlineOptions.classList.add('d-none');
        cardForm.classList.add('d-none');
        upiForm.classList.add('d-none');
    });

    // Show/Hide Card Form
    cardPayment.addEventListener('change', () => {
        cardForm.classList.remove('d-none');
        upiForm.classList.add('d-none');
    });

    // Show/Hide UPI Form
    upiPayment.addEventListener('change', () => {
        upiForm.classList.remove('d-none');
        cardForm.classList.add('d-none');
    });

    // Submit Payment Handler
    submitButton.addEventListener('click', () => {
        if (codRadio.checked) {
            alert('Order placed with Cash on Delivery (COD).');
        } else if (onlineRadio.checked) {
            if (cardPayment.checked) {
                alert('Order placed with Card Payment.');
            } else if (upiPayment.checked) {
                alert('Order placed with UPI Payment.');
            } else {
                alert('Please select a payment method.');
            }
        } else {
            alert('Please select COD or Online Payment.');
        }
    });
});
