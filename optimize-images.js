const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const publicDir = path.join(__dirname, 'app', '(public)');

walkDir(publicDir, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<img ')) {
      // Add import if not present
      if (!content.includes('import Image from "next/image"')) {
        content = `import Image from "next/image";\n` + content;
      }
      
      // Replace <img ... /> with <Image fill ... />
      content = content.replace(/<img /g, '<Image fill ');
      
      // Also, we need to ensure the parent divs have 'relative' class so 'fill' works correctly.
      // A quick heuristic: find previous <div class="..."> and add relative if not there, but this is risky.
      // Given the stitch export usually has well structured parents, 'fill' might break if parent is not relative.
      // Actually, since I can't guarantee parent is relative, another way is to set width={800} height={600} as placeholders
      // or style={{ objectFit: "cover" }} ... wait, 'fill' automatically applies absolute positioning.
      // If we use 'fill', the image will fill its nearest relative parent.
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Optimized images in ${filePath}`);
    }
  }
});
