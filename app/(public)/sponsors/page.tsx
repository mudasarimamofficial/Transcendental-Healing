import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-healing-sage selection:text-surface-cream">
<div>
  {/* TopNavBar */}
  <header className="fixed top-0 w-full z-50 bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 border-b border-secondary-container/30">
    <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
      <a className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim" href="/index.html">
        Transcendental Healing
      </a>
      <nav className="hidden md:flex gap-gutter items-center">
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/index.html">Home</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/about.html">About</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/services/addiction-recovery.html">Services</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/continuing-education.html">Education</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/podcast/index.html">Podcast</a>
        <a className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 hover:text-healing-sage transition-colors duration-300 opacity-80" href="/blog/index.html">Resources</a>
      </nav>
      <a className="hidden md:inline-block px-8 py-3 bg-primary text-surface-cream font-label-lg text-label-lg rounded hover:bg-tertiary transition-colors duration-300" href="/booking/index.html">
        Book a Session
      </a>
    </div>
  </header>
  {/* Main Content */}
  <main className="pt-32 pb-24">
    {/* Hero Section */}
    <section className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-24 pb-20 text-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tertiary-fixed/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6 max-w-4xl mx-auto">
        Curated for the Conscious Soul
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
        Elevating our partner ecosystem into a mindful marketplace. Discover brands and artisans that meticulously align with your journey towards holistic wellbeing, spiritual clarity, and sustainable living.
      </p>
    </section>
    {/* Category Filters */}
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-6 py-2 bg-primary text-surface-cream rounded-full font-label-sm text-label-sm uppercase tracking-widest transition-colors duration-300">All Partners</button>
        <button className="px-6 py-2 bg-transparent text-secondary border border-secondary-container rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-variant transition-colors duration-300">Wellness Essentials</button>
        <button className="px-6 py-2 bg-transparent text-secondary border border-secondary-container rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-variant transition-colors duration-300">Sustainable Living</button>
        <button className="px-6 py-2 bg-transparent text-secondary border border-secondary-container rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-variant transition-colors duration-300">Holistic Nutrition</button>
      </div>
    </section>
    {/* Marketplace Grid */}
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: SATI */}
        <article className="group flex flex-col bg-surface-cream border border-secondary-container rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
          <div className="relative h-72 overflow-hidden bg-surface-variant">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A serene, beautifully lit macro shot of premium meditation cushions and a minimalist incense holder arranged on a smooth, light oak floor. The scene is bathed in soft, diffused morning light creating a calming, ethereal atmosphere. The color palette features neutral sand, muted sage, and warm wood tones, perfectly embodying a modern-luxury wellness aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMKz2akLPyEz6zdjebma3EOFS9AxNsITunVXzU-Xnw-PtpOoUeGYT_X6SZ8GgEgdQ27y4f8ljM8hjkXrtSyckiAwQjrEPeYCBQEdfD04lq0dadj9i2Tg4HpcVmaESi4SR1lsXdqIhdW9wrzj5ylt2U_UjNuO4mokLwMofdVaCdIHF9uKFWgihX3dcJyD5TOBMlUViMhrOg1aG4i8n6avtzLRpNbSdKb2HP0vHloXUylsBagQhoS70POTdhJHrZMYnS6HVdAZBSIUR" />
            <div className="absolute top-4 left-4 bg-surface-cream/90 backdrop-blur-sm px-3 py-1 rounded font-label-sm text-label-sm text-primary uppercase tracking-wider">
              Wellness Essentials
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-3">SATI Mindfulness</h3>
            <p className="font-body-md text-body-md text-secondary mb-8 flex-grow">
              Handcrafted meditation tools and sensory instruments designed to anchor your practice in the present moment. Ethically sourced materials reflecting the purity of intention.
            </p>
            <div className="bg-surface border border-secondary-fixed-dim rounded-lg p-4 mb-6 flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Movement Discount</span>
              <span className="font-label-lg text-label-lg text-primary tracking-widest bg-healing-sage/10 px-3 py-1 rounded">JACKIE</span>
            </div>
            <a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-healing-sage transition-colors duration-300" href="#">
              Explore Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>
        {/* Card 2: Cumin Club */}
        <article className="group flex flex-col bg-surface-cream border border-secondary-container rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
          <div className="relative h-72 overflow-hidden bg-surface-variant">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="An overhead shot of elegantly plated, vibrant plant-based dishes served in matte ceramic bowls. The composition is clean and minimalist, set against a pristine white marble countertop. Soft, natural light highlights the fresh textures of the food. The aesthetic is high-end culinary, focusing on mindful, holistic nutrition with a sophisticated, earthy color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK3GjaLNS78j__Gb1UcPagcGbdRhqjSwieS7109y145ViAzfo2mI7qvQ8a6lbAEkCbjBIZdNTaCZIORVDTbvP_QIEt8YveTX2GnYcQUoL9IE6TX2G_PNII-nyeY7jqQSe8J6Y4zmzPcQemYQcH2urBjcoLDa-Rh3YWY-yzxnY3Fl_nAQPuHoiL9H5t0Q_GHUAq8ege9j00j6eiYxNztjRsbomEaGTUC6nUAsmyAt84D6tkNbqnZfopMJIQ_EFKQFqb_xMBfTYQFs4A" />
            <div className="absolute top-4 left-4 bg-surface-cream/90 backdrop-blur-sm px-3 py-1 rounded font-label-sm text-label-sm text-primary uppercase tracking-wider">
              Holistic Nutrition
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-3">The Cumin Club</h3>
            <p className="font-body-md text-body-md text-secondary mb-8 flex-grow">
              Nourish your physical vessel with chef-curated, ayurvedic-inspired meals. Plant-based nutrition designed to support energetic alignment and systemic balance.
            </p>
            <div className="bg-surface border border-secondary-fixed-dim rounded-lg p-4 mb-6 flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Movement Discount</span>
              <span className="font-label-lg text-label-lg text-primary tracking-widest bg-healing-sage/10 px-3 py-1 rounded">JACKIE</span>
            </div>
            <a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-healing-sage transition-colors duration-300" href="#">
              View Menu <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>
        {/* Card 3: Earth & Ether */}
        <article className="group flex flex-col bg-surface-cream border border-secondary-container rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
          <div className="relative h-72 overflow-hidden bg-surface-variant">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="A close-up view of beautifully packaged organic skincare products in frosted amber glass bottles, resting on a raw, textured stone surface. The background features softly blurred botanical elements like eucalyptus leaves. The lighting is bright yet soft, emphasizing a pure, natural, and premium sustainable lifestyle aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPlbR8qPYbmb-9oViQW5xmIHQf__7jHNL2ZBTLteXnQz3xmG0U0fzjhNh1xNaeIX2LZS_vMaTfV30gvP6kaYIanOj_B9irfwDqnRIasuBYtq5eBZleTaBW5SscF5mZtWgmogoVDrpwrvKelEb2vL-cbqAEtXjfhLe4wj5SWHB0nyGD8Moik9hLvGbW8O1J94D0_04XFzg3NbEqDXvFjWq9ZAhAU3bzFbhp9l5gYYd21extj8WIu9TGwSCYNOnIBB4z2M8kvPIaA4t" />
            <div className="absolute top-4 left-4 bg-surface-cream/90 backdrop-blur-sm px-3 py-1 rounded font-label-sm text-label-sm text-primary uppercase tracking-wider">
              Sustainable Living
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-3">Earth &amp; Ether</h3>
            <p className="font-body-md text-body-md text-secondary mb-8 flex-grow">
              Conscious apothecary and home goods formulated with reverence for the planet. Elevate your daily rituals with zero-waste, botanical-infused essentials.
            </p>
            <div className="bg-surface border border-secondary-fixed-dim rounded-lg p-4 mb-6 flex justify-between items-center">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Movement Discount</span>
              <span className="font-label-lg text-label-lg text-primary tracking-widest bg-healing-sage/10 px-3 py-1 rounded">JACKIE</span>
            </div>
            <a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-healing-sage transition-colors duration-300" href="#">
              Shop Rituals <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>
      </div>
    </section>
    {/* Partnership Inquiry CTA */}
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-32">
      <div className="bg-surface-variant rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-healing-sage/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6 relative z-10">
          Align With Our Mission
        </h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-10 relative z-10">
          We selectively partner with brands that share our unwavering commitment to transformative healing, inclusivity, and sustainable practices. If your mission resonates deeply with ours, let's explore how we can elevate consciousness together.
        </p>
        <a className="inline-block px-10 py-4 bg-primary text-surface-cream font-label-lg text-label-lg rounded hover:bg-tertiary transition-colors duration-300 relative z-10" href="#">
          Submit Partnership Inquiry
        </a>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full pt-20 pb-10 bg-surface dark:bg-primary-container border-t border-secondary-container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
      <div className="md:col-span-1 flex flex-col justify-between">
        <div>
          <div className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim mb-4">
            Transcendental Healing
          </div>
        </div>
        <p className="text-secondary dark:text-on-secondary-container font-body-md text-body-md mt-8 md:mt-0">
          © 2024 Transcendental Healing. All Rights Reserved.
        </p>
      </div>
      <div className="md:col-span-1">
        <h4 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim font-semibold mb-4">Offerings</h4>
        <ul className="space-y-3">
          <li><a className="text-secondary dark:text-on-secondary-container font-body-md text-body-md hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/addiction-recovery.html">Addiction Recovery</a></li>
          <li><a className="text-secondary dark:text-on-secondary-container font-body-md text-body-md hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/ayurveda.html">Ayurvedic Healing</a></li>
          <li><a className="text-secondary dark:text-on-secondary-container font-body-md text-body-md hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/reflexology.html">Reflexology</a></li>
        </ul>
      </div>
      <div className="md:col-span-1">
        <h4 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim font-semibold mb-4">Practices</h4>
        <ul className="space-y-3">
          <li><a className="text-secondary dark:text-on-secondary-container font-body-md text-body-md hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/yoga.html">Yoga &amp; Breathwork</a></li>
          <li><a className="text-secondary dark:text-on-secondary-container font-body-md text-body-md hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/tarot.html">Tarot</a></li>
        </ul>
      </div>
      <div className="md:col-span-1">
        <h4 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim font-semibold mb-4">Connect</h4>
        <ul className="space-y-3">
          <li><a className="text-secondary dark:text-on-secondary-container font-body-md text-body-md hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/continuing-education.html">Professional Training</a></li>
          <li><a className="text-secondary dark:text-on-secondary-container font-body-md text-body-md hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="#">Newsletter Signup</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>

    </div>
  );
}
