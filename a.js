document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://fakestoreapi.com';

    // Function to display products on the page
    function displayProducts(products) {
        // Get the reference to the container where products will be displayed
        const productsContainer = document.getElementById('products-container');

        // Loop through the products and create HTML elements for each
        products.forEach(product => {
            // Create a new div element to represent a product card
            const productCard = document.createElement('div');
            // Set the class name for styling purposes
            productCard.className = 'product-card';

            // Customize the HTML structure based on your needs
            productCard.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <img class='size'src="${product.image}" alt="${product.title}"><br>
            <button class="buy-button" onclick="buyProduct('${product.title}', ${product.price})">Buy Now</button>
        `;

            // Append the product card to the container
            productsContainer.appendChild(productCard);
        });
    }

    // Fetch products from the API
    fetch(`${apiUrl}/products`)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Display the products on the page using the displayProducts function
            displayProducts(data);
        })
        .catch(error => console.error('Error:', error));
});
