const fs = require('fs');

const products = [
    { name: "Cello Dazzle Series Tropical Lagoon Opalware Dinner Set", price: "₹965" },
    { name: "Crimson Glaze Premium Dinner Set (Set of 7)", price: "₹2,775" },
    { name: "Borosil Larah Red Bud Dinner Set", price: "₹1,999" },
    { name: "Nestasia Mandala Ceramic Long Dish", price: "₹472" },
    { name: "Home Centre Lucas Printed Dinner Plate", price: "₹359" },
    { name: "Halo Collection Ceramic Dinner Set", price: "₹11,499" },
    { name: "Mystic Lotus Handcrafted Premium Dinner Set (Set of 7)", price: "₹2,775" },
    { name: "Thali Hammered Designer 7 Pcs Dinner Set", price: "₹3,599" },
    { name: "Bodhi House Handcrafted Stoneware Reactive Glaze Cerami...", price: "₹2,449.60" },
    { name: "IKEA GLADELIG Plate", price: "₹599" },
];

let gridHtml = '<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">\n';

products.forEach((p, index) => {
    const idx = index + 1;
    gridHtml += `<!-- Product Card ${idx} -->
<div class="group flex flex-col h-full card-hover-shadow rounded-xl p-2 transition-all">
<div class="relative w-full aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden mb-4">
<img alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/product_${idx}.png"/>
<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%]">
<button class="w-full bg-surface/90 backdrop-blur-sm text-primary font-button text-button py-3 rounded-full shadow-sm hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-sm">shopping_cart</span> Quick Add
</button>
</div>
</div>
<div class="flex flex-col flex-grow">
<h3 class="font-headline-md text-lg text-primary mb-3">${p.name}</h3>
<div class="flex items-center justify-between mt-auto">
<span class="font-medium text-primary">${p.price}</span>
<button aria-label="Add to cart" class="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
<span class="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
</div>\n`;
});

gridHtml += '</div>';

const shopHtmlPath = './shop.html';
let content = fs.readFileSync(shopHtmlPath, 'utf8');

// Regex to replace the entire grid
const gridRegex = /<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">[\s\S]*?<\/div>\s*<!-- Pagination -->/m;

content = content.replace(gridRegex, gridHtml + '\n<!-- Pagination -->');

// Also update "Showing 1-8 of 24 products" to "Showing 1-10 of 10 products"
content = content.replace('Showing 1-8 of 24 products', 'Showing 1-10 of 10 products');

fs.writeFileSync(shopHtmlPath, content, 'utf8');
console.log("Updated shop.html successfully.");
