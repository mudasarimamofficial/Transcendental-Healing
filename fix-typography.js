const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(__dirname, 'app');

walkDir(targetDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix fontVariationSettings: ''FILL' 0' -> fontVariationSettings: "'FILL' 0"
    if (content.includes(`fontVariationSettings: ''FILL'`)) {
      content = content.replace(/fontVariationSettings:\s*''FILL'\s*(\d+)'/g, 'fontVariationSettings: `"FILL" $1`');
      changed = true;
    }

    if (content.includes(`'font-size'`)) {
      content = content.replace(/'font-size'/g, 'fontSize');
      changed = true;
    }
    
    // Fix any any types in actions
    if (content.includes(': any')) {
      content = content.replace(/: any/g, ': unknown');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed typography quotes in ${filePath}`);
    }
  }
});
