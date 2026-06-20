import Link from "next/link";
// PIXEL PERFECT ROLLBACK PAGE
export default function Page() {
  return (
    <>
      {/* START RAW HTML IMPORT */}
      
 TopNavBar Shared Component 
<header className="bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 fixed top-0 w-full z-50 bg-surface-cream/90 border-b border-secondary-container/30 transition-all duration-300" id="top-nav">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim">
<a className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim" href="#">
                Transcendental Healing
            </a>
<!-- Desktop Nav -->
<nav className="hidden md:flex items-center gap-8">
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Home</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">About</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Services</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Education</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Podcast</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Resources</a>
</nav>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-8 py-3 bg-primary text-on-primary rounded-full hover:bg-ether-indigo-light transition-colors duration-300 font-label-lg text-label-lg" href="#">
                    Book a Session
                </a>
</div>
<!-- Mobile Menu Toggle -->
<button className="md:hidden text-primary focus:outline-none focus:ring-1 focus:ring-healing-sage rounded p-1">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</header>
 Main Content 
<main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto relative">
<!-- Subtle Background Blur -->
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
<!-- Hero Section -->
<section className="text-center mb-16 md:mb-24 animate-fade-in" style={{ 'animation-delay': '0.1s' }}>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                We Meet You Where You Are
            </h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
                Whether you seek the sanctuary of our Rochester space or the comfort of your own home, we are committed to holding space for your profound healing journey.
            </p>
</section>
<!-- Two Column Grid -->
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
<!-- Left Column: Contact Form -->
<div className="lg:col-span-7 animate-fade-in" style={{ 'animation-delay': '0.2s' }}>
<div className="bg-surface-container-lowest border border-secondary-fixed p-8 md:p-12 rounded-2xl">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Request a Private Consultation</h2>
<p className="font-body-md text-body-md text-secondary mb-10">Please share a brief note about what brings you here. All communications are strictly confidential.</p>
<form className="space-y-8">
<!-- Name Input -->
<div className="relative">
<input className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none focus:ring-0 transition-colors" id="name" placeholder=" " required="" type="text"/>
<label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="name">Preferred Name</label>
</div>
<!-- Email Input -->
<div className="relative">
<input className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none focus:ring-0 transition-colors" id="email" placeholder=" " required="" type="email"/>
<label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="email">Email Address</label>
</div>
<!-- Service Type Dropdown -->
<div className="relative border-b border-secondary-fixed pb-2">
<label className="block text-label-sm font-label-sm text-secondary mb-1" htmlFor="service_type">Area of Interest</label>
<select className="block w-full appearance-none border-0 bg-transparent px-0 py-2 text-on-surface focus:ring-0 focus:outline-none cursor-pointer" id="service_type">
<option disabled="" selected="" value="">Select an avenue of healing...</option>
<option value="addiction">Addiction Recovery Support</option>
<option value="ayurveda">Ayurvedic Healing</option>
<option value="yoga">Yoga &amp; Breathwork</option>
<option value="general">General Consultation</option>
</select>
<span className="material-symbols-outlined absolute right-0 bottom-3 text-secondary pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
<!-- Message Input -->
<div className="relative pt-4">
<textarea className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none focus:ring-0 transition-colors resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="floating-label absolute top-7 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="message">Your Intention or Inquiry</label>
</div>
<div className="pt-4">
<button className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 bg-primary text-on-primary rounded-full hover:bg-ether-indigo-light transition-colors duration-300 font-label-lg text-label-lg tracking-wide" type="button">
                                Submit Request
                            </button>
</div>
</form>
</div>
</div>
<!-- Right Column: Info & Map -->
<div className="lg:col-span-5 space-y-8 animate-fade-in" style={{ 'animation-delay': '0.3s' }}>
<!-- Service Area Card -->
<div className="bg-surface-container-lowest border border-secondary-fixed rounded-2xl overflow-hidden">
<div className="h-48 w-full bg-surface-variant relative">
<img alt="Service Area Map" className="w-full h-full object-cover opacity-80" data-alt="A highly detailed, elegant, minimalist map illustration focusing on Rochester, New York. The map uses a sophisticated color palette of soft cream, muted sand, and deep ethereal indigo, aligning with a modern-luxury wellness brand. Rivers and major roads are rendered as fine, subtle lines. A gentle, soft glowing marker subtly indicates the city center, emphasizing a serene and professional atmosphere. Soft lighting and expansive negative space." data-location="Rochester, NY" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoeSSeRhX5JSJISO1hKnpl5nLqx8lxUraONgBfc9BXCjNI_bWPZJn6PBcRg9BTZcmSx9wurFwEXrTxZx_Dr9xhe-cJNezIgNbGk7wM012YxsHTbHXWbd4eKNVcNoBCciCPeBzPnR6QoyE0qXg3qArGCgoLuC7TbiArOxj9uEe_BlRt2aWABk7YEnD5212qriGnElFp_Y5iNJasXemleM2ivxbiXIL-U2w90DyoNTx_GEJZCSiFgQH1VB9TeUdQsMhonKKRDKW0Mg5t"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
</div>
<div className="p-8 relative -mt-12 bg-surface-container-lowest rounded-t-3xl">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-healing-sage" data-icon="location_on">location_on</span>
                            Service Areas
                        </h3>
<ul className="space-y-4 font-body-md text-body-md text-secondary">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-outline text-opacity-50 mt-0.5" data-icon="home_pin">home_pin</span>
<div>
<strong className="text-primary font-medium block">In-Person Sanctuary</strong>
                                    Rochester, NY &amp; Surrounding Suburbs
                                </div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-outline text-opacity-50 mt-0.5" data-icon="language">language</span>
<div>
<strong className="text-primary font-medium block">Virtual Space</strong>
                                    Global availability via secure telehealth platforms.
                                </div>
</li>
</ul>
</div>
</div>
<!-- Business Hours -->
<div className="bg-surface-container-lowest border border-secondary-fixed p-8 rounded-2xl">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-healing-sage" data-icon="schedule">schedule</span>
                        Clinical Hours
                    </h3>
<p className="font-body-md text-body-md text-secondary mb-4">
                        To maintain the integrity of our energetic work, we observe structured hours for consultations and sessions.
                    </p>
<div className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<div className="flex justify-between border-b border-secondary-fixed/50 pb-2">
<span>Monday – Thursday</span>
<span>9:00 AM – 6:00 PM EST</span>
</div>
<div className="flex justify-between border-b border-secondary-fixed/50 pb-2">
<span>Friday</span>
<span>10:00 AM – 3:00 PM EST</span>
</div>
<div className="flex justify-between pt-1">
<span>Weekends</span>
<span className="text-secondary italic">Rest &amp; Integration</span>
</div>
</div>
</div>
<!-- Emergency Notice -->
<div className="bg-surface-cream border border-secondary-container p-6 rounded-2xl flex gap-4 items-start">
<span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="support">support</span>
<div>
<h4 className="font-label-lg text-label-lg text-primary mb-1">Crisis Support</h4>
<p className="font-body-md text-body-md text-secondary text-sm">
                            This practice does not provide emergency psychiatric services. If you are experiencing a life-threatening clinical crisis, please dial 988 or proceed to your nearest emergency room immediately.
                        </p>
</div>
</div>
</div>
</div>
</main>
 Footer Shared Component 
<footer className="bg-surface dark:bg-primary-container w-full pt-20 pb-10 bg-surface-cream border-t border-secondary-container">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">
<!-- Brand & Copyright -->
<div className="md:col-span-1 flex flex-col gap-4">
<span className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim">
                    Transcendental Healing
                </span>
<p className="font-body-md text-body-md text-secondary dark:text-on-secondary-container mt-auto">
                    © 2024 Transcendental Healing.<br/>All Rights Reserved.
                </p>
</div>
<!-- Links Column 1 -->
<div className="flex flex-col gap-3 font-body-md text-body-md">
<h4 className="font-label-lg text-label-lg text-primary mb-2">Practice</h4>
<a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Addiction Recovery</a>
<a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Ayurvedic Healing</a>
<a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Reflexology</a>
</div>
<!-- Links Column 2 -->
<div className="flex flex-col gap-3 font-body-md text-body-md">
<h4 className="font-label-lg text-label-lg text-primary mb-2">Offerings</h4>
<a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Yoga &amp; Breathwork</a>
<a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Tarot</a>
<a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Professional Training</a>
</div>
<!-- Community -->
<div className="flex flex-col gap-3 font-body-md text-body-md">
<h4 className="font-label-lg text-label-lg text-primary mb-2">Community</h4>
<a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Newsletter Signup</a>
<!-- Social Links representing "the movement" -->
<div className="flex gap-4 mt-4">
<a aria-label="Instagram" className="text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-healing-sage p-1" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path>
</svg>
</a>
<a aria-label="Spotify" className="text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-healing-sage p-1" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.58 14.52a.63.63 0 01-.86.21c-2.36-1.44-5.33-1.77-8.83-.97a.64.64 0 01-.31-1.24c3.84-.88 7.15-.5 9.79 1.13.3.19.4.59.21.87zm1.22-2.73a.8.8 0 01-1.1.26c-2.71-1.67-6.87-2.15-9.88-1.18a.8.8 0 11-.47-1.53c3.45-1.1 8.08-.56 11.19 1.35.38.23.5.73.26 1.1zm.14-2.86c-3.24-1.92-8.6-2.1-11.72-1.16a1 1 0 11-.56-1.92c3.58-1.04 9.55-.83 13.27 1.38a1 1 0 11-1 1.7z" fillRule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>
<script>
        // Simple scroll effect for TopNavBar blur and border
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('top-nav');
            if (window.scrollY > 10) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });
    </script>

      {/* END RAW HTML IMPORT */}
    </>
  );
}
