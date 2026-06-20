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
    
    // Replace 'url('https...')' with `url('https...')`
    // Using regex to capture url('...') inside single quotes
    const regex = /style=\{\{\s*backgroundImage:\s*'url\('([^']+)'\)'/g;
    if (regex.test(content) || content.includes(`'background-size'`)) {
      content = content.replace(/style=\{\{\s*backgroundImage:\s*'url\('([^']+)'\)'/g, "style={{ backgroundImage: `url('$1')`");
      
      // Also fix 'background-size': '32px 32px'
      content = content.replace(/'background-size'/g, 'backgroundSize');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed style quotes in ${filePath}`);
    }
  }
});
