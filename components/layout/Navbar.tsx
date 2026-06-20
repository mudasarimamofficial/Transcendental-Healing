import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 border-b border-secondary-container/30">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand */}
        <Link
          className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm"
          href="/index.html"
        >
          Transcendental Healing
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            aria-current="page"
            className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 opacity-80 transition-opacity duration-200"
            href="/index.html"
          >
            Home
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300"
            href="/about.html"
          >
            About
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300"
            href="/services/addiction-recovery.html"
          >
            Services
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300"
            href="/continuing-education.html"
          >
            Education
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300"
            href="/podcast/index.html"
          >
            Podcast
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300"
            href="/blog/index.html"
          >
            Resources
          </Link>
        </div>
        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-surface-cream font-label-lg text-label-lg rounded-full hover:bg-ether-indigo-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            href="/booking/index.html"
          >
            Book a Session
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          aria-label="Open Menu"
          className="md:hidden text-primary focus:outline-none p-2"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}
