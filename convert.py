import os
import glob
from bs4 import BeautifulSoup
import re

def html_to_jsx(html_string):
    # Convert standard HTML attributes to JSX React attributes
    jsx = html_string
    jsx = jsx.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('autocomplete=', 'autoComplete=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('readonly', 'readOnly')
    # Handle style attribute manually later if needed, but in this tailwind project, styles are mostly `style="font-variation-settings: 'FILL' 0;"`
    jsx = re.sub(r'style="([^"]+)"', lambda m: 'style={{ ' + ', '.join([f"'{k.strip()}': '{v.strip()}'" for k, v in [pair.split(':', 1) for pair in m.group(1).split(';') if pair.strip()]]) + ' }}', jsx)
    # Convert specific style prop cases that may be messy
    jsx = jsx.replace("'font-variation-settings'", "fontVariationSettings")
    jsx = jsx.replace("'background-image'", "backgroundImage")
    # Fix self-closing tags
    jsx = re.sub(r'<(img|input|hr|br|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', jsx)
    return jsx

src_dir = r"c:\Users\mudas\OneDrive\Desktop\Transcendental Healing Science & Soul\ethereal_sanctum"
dest_dir = r"c:\Users\mudas\OneDrive\Desktop\Transcendental Healing Science & Soul\Transcendental-Healing\app"

# Mapping HTML files to Next.js app routes
routes_mapping = {
    "index.html": "page.tsx",
    "about.html": "about/page.tsx",
    "contact.html": "contact/page.tsx",
    "sponsors.html": "sponsors/page.tsx",
    "continuing-education.html": "continuing-education/page.tsx",
    "testimonials.html": "testimonials/page.tsx",
    "services/addiction-recovery.html": "services/addiction-recovery/page.tsx",
    "services/ayurveda.html": "services/ayurveda/page.tsx",
    "services/reflexology.html": "services/reflexology/page.tsx",
    "services/yoga.html": "services/yoga/page.tsx",
    "services/breathwork.html": "services/breathwork/page.tsx",
    "services/tarot.html": "services/tarot/page.tsx",
    "services/astrology.html": "services/astrology/page.tsx",
    "podcast/index.html": "podcast/page.tsx",
    "podcast/episode-template.html": "podcast/episode-template/page.tsx",
    "booking/index.html": "booking/page.tsx",
    "blog/index.html": "blog/page.tsx",
    "legal/index.html": "legal/page.tsx"
}

for html_file, route_file in routes_mapping.items():
    full_html_path = os.path.join(src_dir, html_file)
    if not os.path.exists(full_html_path):
        continue
        
    with open(full_html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    main_tag = soup.find('main')
    if main_tag:
        # Extract the inner HTML of the <main> tag to avoid duplicating the padding if it's already in layout
        inner_html = "".join([str(child) for child in main_tag.contents])
    else:
        # If no main tag, maybe just take the body minus nav and footer
        nav = soup.find('nav')
        if nav: nav.decompose()
        footer = soup.find('footer')
        if footer: footer.decompose()
        body = soup.find('body')
        inner_html = "".join([str(child) for child in body.contents]) if body else str(soup)

    jsx_content = html_to_jsx(inner_html)
    
    # Check for specific unclosed tags not caught by regex
    
    component_name = "Page"
    
    file_content = f"""import Link from "next/link";

export default function {component_name}() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
    
    full_dest_path = os.path.join(dest_dir, route_file.replace('/', os.sep))
    os.makedirs(os.path.dirname(full_dest_path), exist_ok=True)
    
    with open(full_dest_path, 'w', encoding='utf-8') as f:
        f.write(file_content)

print("Conversion completed successfully!")
