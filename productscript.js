const products = [
    { name: 'iPhone 16 Pro', price: 999 },
    { name: 'iPhone 16 Pro Max', price: 1199 },
    { name: 'iPhone 15', price: 699 },
    { name: 'iPhone 14', price: 599 },
    { name: 'iPhone SE', price: 429 },
    { name: 'iPad Air 11 In.', price: 1299 },
    { name: 'iPad', price: 349 },
    { name: 'MacBook Air 13 In.', price: 1099 },
    { name: 'Airpod Max', price: 549 }
];

const selectedProducts = [];

function addProduct(name, price) {
    selectedProducts.push({ name, price });
}

function calculateTotal() {
    let subtotal = 0;
    selectedProducts.forEach(product => {
        subtotal += product.price;
    });
    const tax = subtotal * 0.15; // 15% tax
    const discount = subtotal > 500 ? subtotal * 0.1 : 0; // 10% discount for orders over $500
    const total = subtotal + tax - discount;
    return { subtotal, tax, discount, total };
}

document.querySelector('.checkout').addEventListener('click', function() {
    selectedProducts.length = 0; // Clear the array before adding selected products
    const checkboxes = document.querySelectorAll('.product-checkbox:checked');
    checkboxes.forEach(checkbox => {
        const name = checkbox.parentElement.querySelector('h3 > b > i').textContent;
        const price = parseInt(checkbox.getAttribute('data-price'));
        addProduct(name, price);
    });
    const { subtotal, tax, discount, total } = calculateTotal();
    console.log('Selected Products:', selectedProducts);
    sessionStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    sessionStorage.setItem('subtotal', subtotal);
    sessionStorage.setItem('tax', tax);
    sessionStorage.setItem('discount', discount);
    sessionStorage.setItem('total', total);
    window.location.href = 'invoice.html';
});

document.querySelector('.cancel').addEventListener('click', function() {
    alert('Order cancelled. Thanks for choosing JB Electronics');
    window.location.href = 'products.html';
});

document.querySelector('.exit').addEventListener('click', function() {
	alert('Exiting Website \nThanks for shopping with us!');
    window.location.href = 'loginform.html';
});
