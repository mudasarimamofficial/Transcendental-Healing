const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const HtmlToJsx = require('htmltojsx');

const converter = new HtmlToJsx({ createClass: false });

const indexHtml = fs.readFileSync('c:/Users/mudas/OneDrive/Desktop/Transcendental Healing Science & Soul/ethereal_sanctum/index.html', 'utf8');
const dom = new JSDOM(indexHtml);
const doc = dom.window.document;

// EXTRACT NAV
const navNode = doc.querySelector('nav');
const navHtml = navNode ? navNode.outerHTML : '';
let navJsx = converter.convert(navHtml);

// Make Nav Dynamic
navJsx = navJsx.replace(/class=/g, 'className='); // htmltojsx does className but just in case
navJsx = navJsx.replace(/for=/g, 'htmlFor=');

// Fix internal navigation links inside the extracted header
navJsx = navJsx.replace(/href="\/([^"]+)\.html"/g, 'href="/$1"');
navJsx = navJsx.replace(/href="\/([^"]+)\/index"/g, 'href="/$1"');
navJsx = navJsx.replace(/href="\/index"/g, 'href="/"');

// Add the dynamic active link logic based on pathname
// The active link class from the homepage is:
// font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 opacity-80 transition-opacity duration-200
// Inactive:
// font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300

const headerComponent = `"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicHeader() {
  const pathname = usePathname();

  const activeClass = "font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 opacity-80 transition-opacity duration-200";
  const inactiveClass = "font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300";

  return (
    ${navJsx.trim()
       .replace(/className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 opacity-80 transition-opacity duration-200"/g, 'className={pathname === "/" ? activeClass : inactiveClass}')
       .replace(/className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300"/g, 'className={(pathname === "HREF_PLACEHOLDER") ? activeClass : inactiveClass}')}
  );
}
`;

// EXTRACT FOOTER
const footerNode = doc.querySelector('footer');
const footerHtml = footerNode ? footerNode.outerHTML : '';
let footerJsx = converter.convert(footerHtml);

// Fix links in footer too
footerJsx = footerJsx.replace(/href="\/([^"]+)\.html"/g, 'href="/$1"');
footerJsx = footerJsx.replace(/href="\/([^"]+)\/index"/g, 'href="/$1"');
footerJsx = footerJsx.replace(/href="\/index"/g, 'href="/"');

// Apply forms mapping inside Footer (newsletter)
footerJsx = footerJsx.replace(/<form\s/g, '<ClientFormWrapper action={submitNewsletter} ');
footerJsx = footerJsx.replace(/<\/form>/g, '</ClientFormWrapper>');
footerJsx = footerJsx.replace(/id="footer-email"/g, 'id="footer-email" name="email"');

const footerComponent = `"use client";

import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";

export default function PublicFooter() {
  return (
    ${footerJsx.trim()}
  );
}
`;

fs.writeFileSync('c:/Users/mudas/OneDrive/Desktop/Transcendental Healing Science & Soul/Transcendental-Healing/app/components/PublicHeader.tsx', headerComponent);
fs.writeFileSync('c:/Users/mudas/OneDrive/Desktop/Transcendental Healing Science & Soul/Transcendental-Healing/app/components/PublicFooter.tsx', footerComponent);

console.log("Extracted PublicHeader and PublicFooter");
