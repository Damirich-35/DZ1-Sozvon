export function renderProducts(products) {
  const container = document.querySelector('.products-container');
  const template = document.getElementById('product-card-template');
  
  container.innerHTML = ''; // чистка

  products.forEach(product => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.product-card').dataset.id = product.id;
    clone.querySelector('.product-card__image').src = product.image;
    clone.querySelector('.product-card__category').textContent = product.category;
    clone.querySelector('.product-card__title').textContent = product.title;
    clone.querySelector('.product-card__description').textContent = product.description;
    clone.querySelector('.product-card__price-value').textContent = product.price;
    
    container.appendChild(clone);
  });
}