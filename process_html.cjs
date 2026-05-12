const fs = require('fs');
const path = require('path');

const files = [
    'index.html', 'shop.html', 'product.html', 'cart.html', 
    'checkout.html', 'login.html', 'contact.html', 'journal.html', 
    'about.html', 'sustainability.html', '404.html'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Remove Tailwind CDN scripts
    content = content.replace(/<script src="https:\/\/cdn\.tailwindcss\.com[^>]*><\/script>/gi, '');
    content = content.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/gi, '');

    // 2. Remove inline <style> related to material symbols (now in style.css)
    content = content.replace(/<style>[\s\S]*?\.material-symbols-outlined[\s\S]*?<\/style>/gi, '');

    // 3. Inject <script type="module" src="/src/main.js"></script> just before </head> or </body>
    if (!content.includes('src="/src/main.js"')) {
        content = content.replace('</body>', '    <script type="module" src="/src/main.js"></script>\n</body>');
    }

    // 4. Update Navigation Links
    // We'll do simple string replacements based on expected text or href="#"
    // Top Nav links
    content = content.replace(/<a[^>]*>Shop<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/shop.html"'));
    content = content.replace(/<a[^>]*>Bestsellers<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/shop.html"'));
    content = content.replace(/<a[^>]*>Gallery<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/journal.html"'));
    content = content.replace(/<a[^>]*>About<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/about.html"'));

    // Footer links
    content = content.replace(/<a[^>]*>All Products<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/shop.html"'));
    content = content.replace(/<a[^>]*>New Arrivals<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/shop.html"'));
    content = content.replace(/<a[^>]*>Our Story<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/about.html"'));
    content = content.replace(/<a[^>]*>Sustainability<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/sustainability.html"'));
    content = content.replace(/<a[^>]*>Journal<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/journal.html"'));
    content = content.replace(/<a[^>]*>Contact Us<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/contact.html"'));

    // Logo / Brand
    content = content.replace(/<div class="[^"]*Homedine[^"]*">[\s\S]*?Homedine[\s\S]*?<\/div>/i, match => {
        // Change div to a link if it's the logo
        if(match.includes('text-headline-lg')) {
           return match.replace('<div', '<a href="/index.html"').replace('</div', '</a');
        }
        return match;
    });

    // For any <a> tags that just wrap "Homedine", ensure href is /index.html
    content = content.replace(/<a[^>]*>[\s]*Homedine[\s]*<\/a>/gi, match => match.replace(/href="[^"]*"/, 'href="/index.html"'));

    // Icons: Shopping bag and Person (Login)
    // Replace <button ... > <span ...>shopping_bag</span> </button> with <a> ...
    content = content.replace(/<button[^>]*>[\s]*<span[^>]*>shopping_bag<\/span>[\s]*<\/button>/gi, match => {
        return match.replace('<button', '<a href="/cart.html"').replace('</button>', '</a>');
    });
    content = content.replace(/<button[^>]*>[\s]*<span[^>]*>person<\/span>[\s]*<\/button>/gi, match => {
        return match.replace('<button', '<a href="/login.html"').replace('</button>', '</a>');
    });

    // Just in case any other "#" links remain that we know what to do with
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('HTML files processed successfully!');
