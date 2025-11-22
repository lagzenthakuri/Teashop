fetch('/data/data.json')
  .then(res => res.json())
  .then(data => {

    // Categories
    const categoryList = document.getElementById('categoryList');
    data.categories.forEach(cat => {
      categoryList.innerHTML += `
        <div class="p-4 border rounded-lg text-center hover:bg-red-50 cursor-pointer">
          ${cat}
        </div>`;
    });

    // Filters
    const filterBox = document.getElementById('filters');
    Object.keys(data.filters).forEach(key => {
      data.filters[key].forEach(f => {
        filterBox.innerHTML += `
          <span class="px-3 py-1 bg-gray-200 rounded-full cursor-pointer hover:bg-red-300">
            ${f}
          </span>`;
      });
    });

    // Products
    const productList = document.getElementById('productList');
    data.products.forEach(p => {
      productList.innerHTML += `
        <div class="shadow rounded-lg p-4">
          <img src="${p.image}" class="w-full h-48 object-cover rounded-md">
          <h3 class="text-lg font-bold mt-3">${p.title}</h3>
          <p class="text-gray-600 text-sm">${p.description}</p>
          <p class="text-red-600 font-bold mt-2">$${p.price}</p>
          <button class="mt-3 w-full bg-red-600 text-white py-2 rounded-lg">Order Now</button>
        </div>`;
    });

    // Testimonials
    const testBox = document.getElementById('testimonials');
    data.testimonials.forEach(t => {
      testBox.innerHTML += `
        <div class="bg-white text-gray-700 p-6 rounded-xl">
          <p class="italic">"${t.text}"</p>
          <p class="font-bold mt-3">- ${t.name}</p>
        </div>`;
    });

  });
