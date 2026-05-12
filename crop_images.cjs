const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputFile = '../screenshot_2026_05_12_at_1.18.52_am.png/screen.png';
const outDir = './public/images';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// 1600x985
const cols = 5;
const rows = 2;
const colW = 1600 / cols; // 320
const rowH = 985 / rows;  // 492.5

async function run() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const idx = r * cols + c + 1;
            // The image seems to have a gap from the top of the cell. Let's crop from top + 10
            // and maybe width 300, height 300 to get a square.
            // Left gap ~ 10px.
            const left = Math.floor(c * colW) + 10;
            const top = Math.floor(r * rowH); 
            const w = 300;
            const h = 280; 

            await sharp(inputFile)
                .extract({ left, top, width: w, height: h })
                .toFile(path.join(outDir, `product_${idx}.png`));
        }
    }
    console.log("Done cropping");
}

run();
