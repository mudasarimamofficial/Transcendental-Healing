import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-primary-container w-full pt-20 pb-10 bg-surface-cream border-t border-secondary-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim">
            Transcendental Healing
          </div>
          <p className="font-body-md text-body-md text-secondary dark:text-on-secondary-container text-sm">
            A sanctuary for profound self-discovery and holistic recovery.
          </p>
        </div>
        {/* Links Column 1 */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-lg text-label-lg text-primary mb-4">
            Services
          </h4>
          <ul className="space-y-3 font-body-md text-body-md text-secondary dark:text-on-secondary-container">
            <li>
              <Link
                className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm"
                href="/services/addiction-recovery.html"
              >
                Addiction Recovery
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm"
                href="/services/ayurveda.html"
              >
                Ayurvedic Healing
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm"
                href="/services/reflexology.html"
              >
                Reflexology
              </Link>
            </li>
          </ul>
        </div>
        {/* Links Column 2 */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-lg text-label-lg text-primary mb-4">
            Practice
          </h4>
          <ul className="space-y-3 font-body-md text-body-md text-secondary dark:text-on-secondary-container">
            <li>
              <Link
                className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm"
                href="/services/yoga.html"
              >
                Yoga & Breathwork
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm"
                href="/services/tarot.html"
              >
                Tarot
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm"
                href="/continuing-education.html"
              >
                Professional Training
              </Link>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-label-lg text-label-lg text-primary mb-4">
            Stay Connected
          </h4>
          <form className="space-y-3">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              className="w-full bg-background border border-secondary-container rounded-md px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-healing-sage focus:ring-1 focus:ring-healing-sage placeholder-outline transition-colors"
              id="footer-email"
              placeholder="Email address"
              type="email"
            />
            <button
              className="w-full bg-primary text-surface-cream font-label-lg text-label-lg py-2 rounded-md hover:bg-ether-indigo-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              type="submit"
            >
              Newsletter Signup
            </button>
          </form>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-secondary-container/50 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center font-body-md text-body-md text-secondary dark:text-on-secondary-container text-sm">
        © 2024 Transcendental Healing. All Rights Reserved.
      </div>
    </footer>
  );
}
