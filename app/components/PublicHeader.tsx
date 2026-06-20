"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicHeader() {
  const pathname = usePathname();

  const activeClass = "font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 opacity-80 transition-opacity duration-200";
  const inactiveClass = "font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300";

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 bg-surface-cream/90 border-b border-secondary-container/30">
  <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
    {/* Brand */}
    <a className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="/">
      Transcendental Healing
    </a>
    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-8">
      <a aria-current="page" className={pathname === "/" ? activeClass : inactiveClass} href="/">Home</a>
      <a className={pathname === "/about" ? activeClass : inactiveClass} href="/about">About</a>
      <a className={pathname.startsWith("/services") ? activeClass : inactiveClass} href="/services/addiction-recovery">Services</a>
      <a className={pathname === "/continuing-education" ? activeClass : inactiveClass} href="/continuing-education">Education</a>
      <a className={pathname.startsWith("/podcast") ? activeClass : inactiveClass} href="/podcast">Podcast</a>
      <a className={pathname.startsWith("/blog") ? activeClass : inactiveClass} href="/blog">Resources</a>
    </div>
    {/* CTA */}
    <div className="hidden md:flex">
      <a className="inline-flex items-center justify-center px-8 py-3 bg-primary text-surface-cream font-label-lg text-label-lg rounded-full hover:bg-ether-indigo-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" href="/booking">
        Book a Session
      </a>
    </div>
    {/* Mobile Menu Toggle */}
    <button aria-label="Open Menu" className="md:hidden text-primary focus:outline-none p-2">
      <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>menu</span>
    </button>
  </div>
</nav>
  );
}
