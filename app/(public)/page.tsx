import Link from "next/link";
// PIXEL PERFECT ROLLBACK PAGE
export default function Page() {
  return (
    <>
      {/* START RAW HTML IMPORT */}
      
 Top Navigation Bar 
<nav className="fixed top-0 w-full z-50 bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 bg-surface-cream/90 border-b border-secondary-container/30">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<!-- Brand -->
<a className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="#">
                Transcendental Healing
            </a>
<!-- Desktop Navigation -->
<div className="hidden md:flex items-center space-x-8">
<a aria-current="page" className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 opacity-80 transition-opacity duration-200" href="#">Home</a>
<a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">About</a>
<a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Services</a>
<a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Education</a>
<a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Podcast</a>
<a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="#">Resources</a>
</div>
<!-- CTA -->
<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-8 py-3 bg-primary text-surface-cream font-label-lg text-label-lg rounded-full hover:bg-ether-indigo-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" href="#">
                    Book a Session
                </a>
</div>
<!-- Mobile Menu Toggle -->
<button aria-label="Open Menu" className="md:hidden text-primary focus:outline-none p-2">
<span className="material-symbols-outlined" style={{ fontVariationSettings: ''FILL' 0' }}>menu</span>
</button>
</div>
</nav>
<main className="pt-[88px]">
<!-- Hero Section -->
<section className="relative min-h-[921px] flex items-center bg-surface-cream overflow-hidden">
<div className="absolute inset-0 w-full h-full z-0">
<div className="bg-cover bg-center w-full h-full opacity-30 mix-blend-multiply" data-alt="A serene, high-end wellness sanctuary space. Natural light streams through large windows, illuminating a minimalist interior with soft beige tones, natural wood textures, and touches of sage green foliage. The atmosphere is profoundly calm, inviting, and clinically pristine yet deeply human. The lighting is soft and ethereal, emphasizing healing and tranquility." style={{ backgroundImage: 'url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuJXa-xIRp0sY3p2YoHPqEkVU7Vcb418Yy3B2gB9vWbh8hOjPHuBcsgYX3AOQU3kAX0Bx0PDt6PTx54D0--pL4H1hJdEXUZvtou8PN4aARa69gnu-Sq_uugSVeqeGacOvndQQKPhSTeSjleRQa65TTNMrniWojvPVwZQBaZJULuuSgdoPKTiqrbQAL5P4763Mi3AdgIRLhsoNlOmMpAok6gWQy7nuktfsmS-Gi84I72G2_Lzzi7W4boksYkM0ZG_GVfslVt0XDShFF')' }}></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface-cream via-surface-cream/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-32">
<div className="max-w-3xl space-y-8">
<div className="inline-flex items-center space-x-2 bg-secondary-container/50 px-4 py-2 rounded-full backdrop-blur-sm">
<span className="material-symbols-outlined text-healing-sage text-sm" style={{ fontVariationSettings: ''FILL' 1' }}>verified</span>
<span className="font-label-sm text-label-sm text-on-secondary-container">OASAS Approved Provider · Decades of Clinical Expertise</span>
</div>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary text-balance">
                        The Intersection of Clinical Science and Ancestral Soul.
                    </h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl text-balance">
                        A sanctuary for profound self-discovery and holistic addiction recovery, designed for every body and every journey.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-primary text-surface-cream font-label-lg text-label-lg rounded-full hover:bg-ether-indigo-light transition-all duration-300 w-full sm:w-auto text-center shadow-sm hover:shadow-md" href="#">
                            Book Your Discovery Session
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-secondary text-primary font-label-lg text-label-lg rounded-full hover:bg-secondary-container/30 transition-all duration-300 w-full sm:w-auto text-center" href="#">
                            Explore Services
                        </a>
</div>
</div>
</div>
</section>
<!-- The Path (Transformation Section) -->
<section className="py-24 md:py-32 bg-background">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center mb-16 space-y-4">
<h2 className="font-headline-lg text-headline-lg text-primary">Your Journey: From Overwhelmed to Empowered</h2>
<p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">We honor your unique path. Our framework is designed to move you steadily toward clarity and deep healing.</p>
</div>
<div className="relative">
<!-- Connecting Line -->
<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-secondary-container -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
<!-- Step 1 -->
<div className="flex flex-col items-center text-center space-y-6">
<div className="w-20 h-20 rounded-full bg-surface-cream border border-secondary-container flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-healing-sage text-3xl" style={{ fontVariationSettings: ''FILL' 0' }}>self_improvement</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-xl mb-2">Grounding</h3>
<p className="font-body-md text-body-md text-secondary text-sm">Establishing a safe, stable foundation for the work ahead.</p>
</div>
</div>
<!-- Step 2 -->
<div className="flex flex-col items-center text-center space-y-6">
<div className="w-20 h-20 rounded-full bg-surface-cream border border-secondary-container flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-healing-sage text-3xl" style={{ fontVariationSettings: ''FILL' 0' }}>spa</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-xl mb-2">Exploration</h3>
<p className="font-body-md text-body-md text-secondary text-sm">Compassionately investigating the roots of unease.</p>
</div>
</div>
<!-- Step 3 -->
<div className="flex flex-col items-center text-center space-y-6">
<div className="w-20 h-20 rounded-full bg-surface-cream border border-secondary-container flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-healing-sage text-3xl" style={{ fontVariationSettings: ''FILL' 0' }}>psychiatry</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-xl mb-2">Integration</h3>
<p className="font-body-md text-body-md text-secondary text-sm">Weaving clinical insight with holistic practices.</p>
</div>
</div>
<!-- Step 4 -->
<div className="flex flex-col items-center text-center space-y-6">
<div className="w-20 h-20 rounded-full bg-surface-cream border border-secondary-container flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-healing-sage text-3xl" style={{ fontVariationSettings: ''FILL' 0' }}>brightness_5</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary text-xl mb-2">Empowerment</h3>
<p className="font-body-md text-body-md text-secondary text-sm">Stepping into profound, sustained self-mastery.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Service Pillars (Bento Grid) -->
<section className="py-24 md:py-32 bg-surface-cream">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Service Pillars</h2>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl">A comprehensive approach addressing the mind, the body, and the spirit.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
<!-- Clinical Recovery -->
<a className="group relative bg-background border border-secondary-container rounded-2xl overflow-hidden flex flex-col p-8 transition-transform duration-300 hover:-translate-y-1" href="#">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: ''FILL' 0' }}>health_metrics</span>
</div>
<div className="relative z-10 flex-grow">
<span className="inline-block px-3 py-1 bg-primary/5 text-primary font-label-sm text-label-sm rounded-full mb-6">Clinical</span>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Addiction Support &amp; Therapy</h3>
<p className="font-body-md text-body-md text-secondary">Evidence-based clinical recovery modalities, trauma-informed care, and sustained support systems.</p>
</div>
<div className="relative z-10 flex items-center text-primary font-label-lg text-label-lg group-hover:text-healing-sage transition-colors">
                            Explore Clinical Care
                            <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: ''FILL' 0' }}>arrow_forward</span>
</div>
</a>
<!-- Sacred Healing -->
<a className="group relative bg-background border border-secondary-container rounded-2xl overflow-hidden flex flex-col p-8 transition-transform duration-300 hover:-translate-y-1" href="#">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: ''FILL' 0' }}>vital_signs</span>
</div>
<div className="relative z-10 flex-grow">
<span className="inline-block px-3 py-1 bg-healing-sage/10 text-healing-sage font-label-sm text-label-sm rounded-full mb-6">Holistic</span>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Ayurveda &amp; Reflexology</h3>
<p className="font-body-md text-body-md text-secondary">Ancient bodily practices to restore physical balance, clear energy blockages, and promote cellular healing.</p>
</div>
<div className="relative z-10 flex items-center text-primary font-label-lg text-label-lg group-hover:text-healing-sage transition-colors">
                            Explore Healing Arts
                            <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: ''FILL' 0' }}>arrow_forward</span>
</div>
</a>
<!-- Spiritual Insights -->
<a className="group relative bg-background border border-secondary-container rounded-2xl overflow-hidden flex flex-col p-8 transition-transform duration-300 hover:-translate-y-1" href="#">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: ''FILL' 0' }}>auto_awesome</span>
</div>
<div className="relative z-10 flex-grow">
<span className="inline-block px-3 py-1 bg-on-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm rounded-full mb-6">Spiritual</span>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Tarot &amp; Deep Insights</h3>
<p className="font-body-md text-body-md text-secondary">Intuitive guidance sessions to help you navigate life's crossroads with clarity and profound inner wisdom.</p>
</div>
<div className="relative z-10 flex items-center text-primary font-label-lg text-label-lg group-hover:text-healing-sage transition-colors">
                            Explore Spiritual Guidance
                            <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: ''FILL' 0' }}>arrow_forward</span>
</div>
</a>
</div>
</div>
</section>
</main>
 Footer 
<footer className="bg-surface dark:bg-primary-container w-full pt-20 pb-10 bg-surface-cream border-t border-secondary-container">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<!-- Brand Column -->
<div className="col-span-1 md:col-span-1 space-y-6">
<div className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim">
                    Transcendental Healing
                </div>
<p className="font-body-md text-body-md text-secondary dark:text-on-secondary-container text-sm">
                    A sanctuary for profound self-discovery and holistic recovery.
                </p>
</div>
<!-- Links Column 1 -->
<div className="col-span-1 md:col-span-1">
<h4 className="font-label-lg text-label-lg text-primary mb-4">Services</h4>
<ul className="space-y-3 font-body-md text-body-md text-secondary dark:text-on-secondary-container">
<li><a className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="#">Addiction Recovery</a></li>
<li><a className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="#">Ayurvedic Healing</a></li>
<li><a className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="#">Reflexology</a></li>
</ul>
</div>
<!-- Links Column 2 -->
<div className="col-span-1 md:col-span-1">
<h4 className="font-label-lg text-label-lg text-primary mb-4">Practice</h4>
<ul className="space-y-3 font-body-md text-body-md text-secondary dark:text-on-secondary-container">
<li><a className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="#">Yoga &amp; Breathwork</a></li>
<li><a className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="#">Tarot</a></li>
<li><a className="hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded-sm" href="#">Professional Training</a></li>
</ul>
</div>
<!-- Newsletter -->
<div className="col-span-1 md:col-span-1">
<h4 className="font-label-lg text-label-lg text-primary mb-4">Stay Connected</h4>
<form className="space-y-3">
<label className="sr-only" htmlFor="footer-email">Email address</label>
<input className="w-full bg-background border border-secondary-container rounded-md px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-healing-sage focus:ring-1 focus:ring-healing-sage placeholder-outline transition-colors" id="footer-email" placeholder="Email address" type="email"/>
<button className="w-full bg-primary text-surface-cream font-label-lg text-label-lg py-2 rounded-md hover:bg-ether-indigo-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="submit">
                        Newsletter Signup
                    </button>
</form>
</div>
</div>
<div className="mt-16 pt-8 border-t border-secondary-container/50 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center font-body-md text-body-md text-secondary dark:text-on-secondary-container text-sm">
            © 2024 Transcendental Healing. All Rights Reserved.
        </div>
</footer>

      {/* END RAW HTML IMPORT */}
    </>
  );
}
