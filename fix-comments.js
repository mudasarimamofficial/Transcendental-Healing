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
    
    // Check if there are HTML comments
    if (content.includes('<!--')) {
      content = content.replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed HTML comments in ${filePath}`);
    }
  }
});
