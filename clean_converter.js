const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { JSDOM } = require('jsdom');
const HTMLtoJSX = require('htmltojsx');

const sourceDir = path.join(__dirname, '../ethereal_sanctum');
const outDir = path.join(__dirname, 'app/(public)');

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Ensure the converter is robust
const converter = new HTMLtoJSX({
    createClass: false
});

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

// Mapping of specific form actions
function insertFormActions(jsx) {
    // We will do a robust replace on the JSX. 
    // Since htmltojsx uses standard spacing, we can match specific attributes or tags.
    // Instead of regex, maybe we can inject custom components?
    // Wait, let's inject ClientFormWrapper directly.
    
    // For Newsletter (Footer and Podcast)
    jsx = jsx.replace(/<form\s+className="space-y-3"\s*>/g, '<ClientFormWrapper action={submitNewsletter} className="space-y-3">');
    jsx = jsx.replace(/<form\s+className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"\s*>/g, '<ClientFormWrapper action={submitNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">');
    jsx = jsx.replace(/<form\s+className="w-full max-w-md flex flex-col sm:flex-row gap-4"\s*>/g, '<ClientFormWrapper action={submitNewsletter} className="w-full max-w-md flex flex-col sm:flex-row gap-4">');
    
    // For Contact
    jsx = jsx.replace(/<form\s+className="space-y-8"\s*>/g, '<ClientFormWrapper action={submitContactForm} className="space-y-8">');
    
    // For Booking
    // Booking doesn't have a form tag in index.html, it's just a UI.
    
    // Convert generic </form> to </ClientFormWrapper> for those that got wrapped
    // To be safe, let's just replace all </form> and <form since we know all 4 forms need it.
    // Wait, the safest way is to replace ONLY forms we know!
    jsx = jsx.replace(/<form\s/g, '<ClientFormWrapper ');
    jsx = jsx.replace(/<\/form>/g, '</ClientFormWrapper>');
    
    return jsx;
}

function processHtmlFile(filePath) {
    const relPath = path.relative(sourceDir, filePath);
    
    // Determine route structure
    let routeDir = relPath.replace('.html', '').replace(/\\/g, '/');
    if (routeDir === 'index') {
        routeDir = '';
    } else if (routeDir.endsWith('/index')) {
        routeDir = routeDir.replace('/index', '');
    }

    const targetDir = path.join(outDir, routeDir);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    const targetFile = path.join(targetDir, 'page.tsx');

    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parse using JSDOM to ensure valid HTML parsing and extract body elements safely
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    const body = document.body;
    
    // Remove scripts if any
    const scripts = body.querySelectorAll('script');
    scripts.forEach(s => s.remove());
    
    // Remove localized navs, headers, footers
    const navs = body.querySelectorAll('nav');
    navs.forEach(n => n.remove());
    
    const headers = body.querySelectorAll('header');
    headers.forEach(h => h.remove());
    
    const footers = body.querySelectorAll('footer');
    footers.forEach(f => f.remove());
    
    // htmltojsx doesn't convert comments, it completely removes them! 
    // This is perfect, because we don't need <!-- Hero --> in production!
    
    const bodyInnerHtml = body.innerHTML;
    
    // Convert to JSX
    let jsxContent = converter.convert(bodyInnerHtml);
    
    // Add ClientFormWrapper and imports
    let imports = [
        'import Link from "next/link";',
        'import { submitNewsletter } from "@/app/actions/forms";',
        'import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";',
        'import PublicHeader from "@/app/components/PublicHeader";',
        'import PublicFooter from "@/app/components/PublicFooter";'
    ];
    
    if (routeDir === 'contact') {
        imports.push('import { submitContactForm } from "@/app/actions/forms";');
    }
    
    // Fix email/name inputs to have name= attributes for FormData
    jsxContent = jsxContent.replace(/id="footer-email"/g, 'id="footer-email" name="email"');
    jsxContent = jsxContent.replace(/id="email"/g, 'id="email" name="email"');
    jsxContent = jsxContent.replace(/id="name"/g, 'id="name" name="name"');
    jsxContent = jsxContent.replace(/id="message"/g, 'id="message" name="message"');
    jsxContent = jsxContent.replace(/id="service_type"/g, 'id="service_type" name="service_type"');
    
    // Fix boolean value attribute on option
    jsxContent = jsxContent.replace(/<option disabled selected value>/g, '<option disabled selected value="">');
    
    jsxContent = insertFormActions(jsxContent);
    
    // Fix internal navigation links
    // 1. Remove .html from any absolute path
    jsxContent = jsxContent.replace(/href="\/([^"]+)\.html"/g, 'href="/$1"');
    // 2. Fix nested index pages e.g. /podcast/index -> /podcast
    jsxContent = jsxContent.replace(/href="\/([^"]+)\/index"/g, 'href="/$1"');
    // 3. Fix root index e.g. /index -> /
    jsxContent = jsxContent.replace(/href="\/index"/g, 'href="/"');
    
    // Turn <a> to <Link> for internal links safely?
    // Let's stick to standard <a> tags as the user wants PIXEL PERFECT. Next.js handles <a> fine, just slower routing.
    
    // Create the page file
    const fileContent = `${imports.join('\n')}

export default function Page() {
  return (
    <div className="${body.className}">
      <PublicHeader />
${jsxContent}
      <PublicFooter />
    </div>
  );
}
`;
    fs.writeFileSync(targetFile, fileContent);
    console.log(`Successfully generated: ${targetFile}`);
}

glob.glob(path.join(sourceDir, '**/*.html').replace(/\\/g, '/')).then((files) => {
    files.forEach(processHtmlFile);
    console.log("All files converted successfully.");
}).catch((err) => {
    console.error(err);
});
