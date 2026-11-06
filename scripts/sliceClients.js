import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImagePath = 'public/assets/aistudio/image_e50b7ce9.png';
const outputDir = 'public/assets/clients';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 658 x 246 image.
// Top ~50px has "TRUSTED CLIENTS" title and gray line.
// 3 rows x 7 columns
// Row 1: y ~55 to ~115
// Row 2: y ~115 to ~175
// Row 3: y ~175 to ~240

const clientsGrid = [
  // Row 1
  { id: 'belhasa', name: 'Belhasa', col: 0, row: 0 },
  { id: 'al-ghurair', name: 'Al Ghurair', col: 1, row: 0 },
  { id: 'agis', name: 'AGIS', col: 2, row: 0 },
  { id: 'rhs-group', name: 'RHS Group', col: 3, row: 0 },
  { id: 'jumeirah-golf', name: 'Jumeirah Golf Estates', col: 4, row: 0 },
  { id: 'emirates-golf', name: 'Emirates Golf Club', col: 5, row: 0 },
  { id: 'abu-dhabi-golf', name: 'Abu Dhabi Golf Club', col: 6, row: 0 },
  
  // Row 2
  { id: 'dbb', name: 'DBB', col: 0, row: 1 },
  { id: 'petrasco', name: 'Petrasco', col: 1, row: 1 },
  { id: 'sothebys', name: "Sotheby's", col: 2, row: 1 },
  { id: 'hermes', name: 'Hermes', col: 3, row: 1 },
  { id: 'cdc', name: 'CDC', col: 4, row: 1 },
  { id: 'national-cement', name: 'National Cement', col: 5, row: 1 },
  { id: 'hmm', name: 'HMM', col: 6, row: 1 },

  // Row 3
  { id: 'the-luxury-property', name: 'The Luxury', col: 0, row: 2 },
  { id: 'rai', name: 'RAI', col: 1, row: 2 },
  { id: 'kamat', name: 'Kamat', col: 2, row: 2 },
  { id: 'gazebo', name: 'Gazebo', col: 3, row: 2 },
  { id: 'lavazza', name: 'Lavazza', col: 4, row: 2 },
  { id: 'lw', name: 'LW', col: 5, row: 2 },
  { id: 'cosco', name: 'COSCO Shipping', col: 6, row: 2 },
];

async function sliceLogos() {
  const metadata = await sharp(inputImagePath).metadata();
  console.log('Image dimensions:', metadata.width, metadata.height);

  const colWidth = Math.floor(metadata.width / 7); // ~94px
  const startY = 52;
  const rowHeight = Math.floor((metadata.height - startY) / 3); // ~64px

  for (const client of clientsGrid) {
    const left = client.col * colWidth;
    const top = startY + (client.row * rowHeight);
    const width = colWidth;
    const height = rowHeight;

    const outPath = path.join(outputDir, `${client.id}.png`);
    
    // Crop with tight padding, then trim white borders
    await sharp(inputImagePath)
      .extract({ left, top, width, height })
      .toFile(outPath);

    console.log(`Saved ${outPath}`);
  }

  console.log('Finished slicing all 21 client logos!');
}

sliceLogos().catch(console.error);
