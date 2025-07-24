fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width:100%; border-radius:10px;">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <span style="font-weight:bold;">${product.price}</span><br>
        <a href="${product.link}" target="_blank">View Product</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading products:', error));
