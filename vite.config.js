import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, 'shop.html'),
        product: resolve(__dirname, 'product.html'),
        cart: resolve(__dirname, 'cart.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        login: resolve(__dirname, 'login.html'),
        contact: resolve(__dirname, 'contact.html'),
        journal: resolve(__dirname, 'journal.html'),
        about: resolve(__dirname, 'about.html'),
        sustainability: resolve(__dirname, 'sustainability.html'),
        404: resolve(__dirname, '404.html')
      }
    }
  }
});
