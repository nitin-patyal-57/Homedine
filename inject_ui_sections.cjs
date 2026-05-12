const fs = require('fs');

const htmlToInsert = `
<!-- Explore Categories Section -->
<section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    <div class="mb-12">
        <h2 class="font-body-lg text-body-lg text-on-surface-variant">Explore our thoughtfully crafted, planet-first ✧ <span class="font-headline-md text-primary italic">Categories</span></h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 h-[500px]">
        <!-- Card 1 -->
        <div class="relative rounded-2xl overflow-hidden group cursor-pointer h-full">
            <img src="/images/category_cupeco.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="CupEco">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-8 flex flex-col items-center">
                <h3 class="text-surface-container-lowest font-headline-md text-2xl mb-1 text-center">Explore<br><span class="italic font-light">CupEco</span></h3>
                <button class="mt-4 bg-surface-container-lowest text-primary font-button text-xs px-5 py-2 rounded-full hover:bg-primary hover:text-surface-container-lowest transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">Shop <span class="material-symbols-outlined text-[14px]">arrow_forward</span></button>
            </div>
            <!-- Decorative circle button left -->
            <div class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container-lowest/20 backdrop-blur-sm flex items-center justify-center text-surface-container-lowest">
                 <span class="material-symbols-outlined text-sm">arrow_back</span>
            </div>
        </div>
        <!-- Card 2 -->
        <div class="relative rounded-2xl overflow-hidden group cursor-pointer h-full">
            <img src="/images/category_ecospoonery.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="EcoSpoonery">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-8 flex flex-col items-center">
                <h3 class="text-surface-container-lowest font-headline-md text-2xl mb-1 text-center">Explore<br><span class="italic font-light">EcoSpoonery</span></h3>
                <button class="mt-4 bg-surface-container-lowest text-primary font-button text-xs px-5 py-2 rounded-full hover:bg-primary hover:text-surface-container-lowest transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">Shop <span class="material-symbols-outlined text-[14px]">arrow_forward</span></button>
            </div>
        </div>
        <!-- Card 3 -->
        <div class="relative rounded-2xl overflow-hidden group cursor-pointer h-full">
            <img src="/images/category_naturesip.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="NatureSip">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-8 flex flex-col items-center">
                <h3 class="text-surface-container-lowest font-headline-md text-2xl mb-1 text-center">Explore<br><span class="italic font-light">NatureSip</span></h3>
                <button class="mt-4 bg-surface-container-lowest text-primary font-button text-xs px-5 py-2 rounded-full hover:bg-primary hover:text-surface-container-lowest transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">Shop <span class="material-symbols-outlined text-[14px]">arrow_forward</span></button>
            </div>
        </div>
        <!-- Card 4 -->
        <div class="relative rounded-2xl overflow-hidden group cursor-pointer h-full">
            <img src="/images/category_freshpitcher.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="FreshPitcher">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-8 flex flex-col items-center">
                <h3 class="text-surface-container-lowest font-headline-md text-2xl mb-1 text-center">Explore<br><span class="italic font-light">FreshPitcher</span></h3>
                <button class="mt-4 bg-surface-container-lowest text-primary font-button text-xs px-5 py-2 rounded-full hover:bg-primary hover:text-surface-container-lowest transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">Shop <span class="material-symbols-outlined text-[14px]">arrow_forward</span></button>
            </div>
            <!-- Decorative circle button right -->
            <div class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container-lowest/20 backdrop-blur-sm flex items-center justify-center text-surface-container-lowest">
                 <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
        </div>
    </div>
</section>

<!-- Best Sellers Banner -->
<section class="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    <div class="bg-surface-container-lowest flex flex-col md:flex-row items-center justify-between rounded-[32px] overflow-hidden border border-outline-variant/30">
        <div class="w-full md:w-5/12 p-12 lg:p-16 flex flex-col items-start bg-[#F8F9FA] h-[400px] justify-center">
            <h2 class="font-display-lg text-[48px] text-primary mb-4 leading-tight">Best <span class="italic font-light">sellers</span></h2>
            <p class="font-body-md text-on-surface-variant mb-8 max-w-sm">
                A polished cooking rice pot rests on a rustic wooden surface, encircled by fresh herbs — a perfect blend of durability and nature for mindful cooking.
            </p>
            <button class="bg-primary text-surface-container-lowest font-button text-button px-6 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2">
                Shop now <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
        </div>
        <div class="w-full md:w-7/12 h-[400px]">
            <img src="/images/bestseller_banner.png" class="w-full h-full object-cover object-center" alt="Best sellers">
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
            <h3 class="font-body-lg text-on-surface-variant">Thoughtful, Planet-Prioritizing Ideas<br>and Inspiration ✧ <span class="font-headline-md text-primary italic">Gallery</span></h3>
        </div>
        <div class="flex gap-2">
            <button class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container text-on-surface"><span class="material-symbols-outlined text-sm">arrow_back</span></button>
            <button class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container text-on-surface"><span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
    </div>
    <div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar" style="scrollbar-width: none;">
        <!-- Card 1 -->
        <div class="min-w-[240px] md:min-w-[280px] aspect-square rounded-2xl overflow-hidden relative group snap-start cursor-pointer flex-shrink-0">
            <img src="/images/gallery_sizzlepro.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="SizzlePro">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <p class="absolute bottom-6 left-6 right-6 text-surface-container-lowest font-headline-md text-lg italic">SizzlePro Non-<br>Stick Pan</p>
        </div>
        <!-- Card 2 -->
        <div class="min-w-[240px] md:min-w-[280px] aspect-square rounded-2xl overflow-hidden relative group snap-start cursor-pointer flex-shrink-0">
            <img src="/images/gallery_grainslice.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Grain Slice">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <p class="absolute bottom-6 left-6 right-6 text-surface-container-lowest font-headline-md text-lg italic">Grain Slice<br>Board Duo</p>
        </div>
        <!-- Card 3 -->
        <div class="min-w-[240px] md:min-w-[280px] aspect-square rounded-2xl overflow-hidden relative group snap-start cursor-pointer flex-shrink-0">
            <img src="/images/gallery_bambooutensil.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bamboo Utensil Set">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <p class="absolute bottom-6 left-6 right-6 text-surface-container-lowest font-headline-md text-lg italic">Bamboo<br>Utensil Set</p>
        </div>
        <!-- Card 4 -->
        <div class="min-w-[240px] md:min-w-[280px] aspect-square rounded-2xl overflow-hidden relative group snap-start cursor-pointer flex-shrink-0">
            <img src="/images/gallery_glowpot.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Glow Pot Ceramic">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <p class="absolute bottom-6 left-6 right-6 text-surface-container-lowest font-headline-md text-lg italic">Glow Pot<br>Ceramic</p>
        </div>
        <!-- Card 5 -->
        <div class="min-w-[240px] md:min-w-[280px] aspect-square rounded-2xl overflow-hidden relative group snap-start cursor-pointer flex-shrink-0">
            <img src="/images/gallery_stonesip.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="StoneSip Ceramic Cup">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <p class="absolute bottom-6 left-6 right-6 text-surface-container-lowest font-headline-md text-lg italic">StoneSip<br>Ceramic Cup</p>
        </div>
    </div>
</section>
`;

const indexHtmlPath = './index.html';
let content = fs.readFileSync(indexHtmlPath, 'utf8');

// Insert right before <!-- New Arrival Showcase -->
content = content.replace('<!-- New Arrival Showcase -->', htmlToInsert + '\n<!-- New Arrival Showcase -->');

fs.writeFileSync(indexHtmlPath, content, 'utf8');
console.log("Updated index.html successfully.");
