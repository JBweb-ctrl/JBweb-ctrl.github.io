function updateInvoiceTable() {
    const invoiceBody = document.getElementById('invoice-body');

    if (sessionStorage.getItem('selectedProducts')) {
        const selectedProducts = JSON.parse(sessionStorage.getItem('selectedProducts'));
        const subtotal = parseFloat(sessionStorage.getItem('subtotal'));
        const tax = parseFloat(sessionStorage.getItem('tax'));
        const discount = parseFloat(sessionStorage.getItem('discount'));
        const total = parseFloat(sessionStorage.getItem('total'));

        console.log('Selected Products on Invoice:', selectedProducts);

        selectedProducts.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>1</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>$${product.price.toFixed(2)}</td>
            `;
            invoiceBody.appendChild(row);
        });

        document.getElementById('grand-total').innerText = `$${total.toFixed(2)}`;
    } else {
        console.error('No products found in sessionStorage');
    }
}

document.addEventListener('DOMContentLoaded', updateInvoiceTable);
document.querySelector('.cancel').addEventListener('click', function() {
    alert('Order cancelled. Thanks for choosing JB Electronics');
    window.location.href = 'products.html';
});

document.querySelector('.exit').addEventListener('click', function() {
	alert('Exiting Website \nThanks for shopping with us!');
    window.location.href = 'index.html';
});
