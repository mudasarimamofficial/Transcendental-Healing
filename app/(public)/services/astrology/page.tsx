import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";

export default function Page() {
  return (
    <div className="bg-surface text-on-background antialiased selection:bg-healing-sage/30 selection:text-primary font-body-md text-body-md overflow-x-hidden">
<div>
  {/* TopNavBar */}
  <nav className="fixed top-0 w-full z-50 bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 bg-surface-cream/90 border-b border-secondary-container/30 transition-all duration-300" id="navbar">
    <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
      <a className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim" href="/">Transcendental Healing</a>
      <div className="hidden md:flex items-center gap-8">
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/">Home</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/about">About</a>
        {/* Active State Applied Here based on Semantic Relevance */}
        <a className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 hover:text-healing-sage transition-colors duration-300 opacity-80 transition-opacity duration-200" href="/services/addiction-recovery">Services</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/continuing-education">Education</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/podcast">Podcast</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/blog">Resources</a>
      </div>
      <div className="hidden md:block">
        <button className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-DEFAULT hover:bg-ether-indigo-light transition-colors duration-300 shadow-sm">
          Book a Session
        </button>
      </div>
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>
    </div>
  </nav>
  {/* Main Content Canvas */}
  <main className="pt-32 pb-20">
    {/* Hero Section */}
    <section className="relative w-full min-h-[716px] flex items-center justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32">
      {/* Background Atmospheric Image */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        <div className="w-full h-full bg-cover bg-center opacity-40" data-alt="A highly abstract, ethereal digital artwork representing spiritual clarity and profound revelation. The composition features soft, diffused waves of pale gold and muted sage green blending seamlessly into a pristine, warm white background. The lighting is delicate and transcendent, evoking a sense of dawn in a minimalist, luxury wellness sanctuary. No discernible figures, just gentle, calming light refractions." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFqQumkmnxbl2pDCEXcJtaKVqytzwvaOQ_UXighfUTNd5eDaVAAAgpyw9ThwfoxzYRJSpTapPrr73rNWTXT8q-SeGj1BrbfIYqF8_kIPVlla5YRcfIBrqAp3_OBxGA9EGo0WgKawVQnvruejs4QXzd-obO5xTkiUdnXvbRpfXKqKbSU4cXf6l6HOAPXS8fnJFex-yX0maqNih5KNosoJrkyEy5odbCFrm3jpP1xM-ZYldTXuOvvjLNz70TD_EA19mS-ni48-Z_E3kd")'}} />
        {/* Gradient Overlay for legibility and softness */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-cream/50 to-surface-cream" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        <span className="font-label-lg text-label-lg text-healing-sage tracking-widest uppercase mb-6 block">Tarot &amp; Spiritual Guidance</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight">Clarity Through <br /><i className="text-tertiary-fixed-dim">Intuitive Wisdom</i></h1>
        <p className="font-body-lg text-body-lg text-secondary mb-12 max-w-2xl text-balance">
          Experience profound revelations in a safe, quiet space. We use the ancient symbolism of tarot as a mirror for your soul, helping you navigate life's complexities with grace and newfound direction.
        </p>
        <a className="inline-flex items-center gap-3 bg-ether-indigo-light text-tertiary-fixed-dim font-label-lg text-label-lg px-10 py-4 rounded-DEFAULT hover:bg-primary transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(42,49,77,0.3)]" href="#options">
          Explore Readings
          <span className="material-symbols-outlined text-lg">arrow_downward</span>
        </a>
      </div>
    </section>
    {/* The Ethics Section (Asymmetric Layout) */}
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-gutter items-center">
        <div className="md:col-span-5 order-2 md:order-1 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-secondary-container p-2 bg-surface-cream">
            <img className="w-full h-full object-cover rounded-lg" data-alt="A close-up, high-end lifestyle photograph of a minimalist tarot reading setup. A beautifully crafted wooden table holds a softly lit, modern deck of cards with abstract, geometric gold foil designs. Beside the cards rests a small, raw clear quartz crystal and a ceramic cup of herbal tea. The lighting is natural, warm, and inviting, suggesting a safe, therapeutic, and deeply non-judgmental environment within a luxury wellness retreat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTB52C8hKw9utF9Ng4MNuxZFNbgJHloN4Jx7Id1rrsHNzkfX9RQlG0kR_WNltH-O01m6LJyfYjPx6rolbgiR8VXZOxCkrLhWXVvVMUGpOC5PVMNy4PLWUHejpHsDcMXvuOymA_sxBDViBp0O0lj9sFEy-BOTOgMwacmeI886XI4FdytAufXtC_IQJwnuDXkoK8O4JgAWwg1nfyBdrtFU_Jq8Peo3rGYqe2INrcdGrX5OZDrwth53WzcEGYfJmZzYb3Zp5MeRgdwZfF" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">A Therapeutic Approach to Mysticism</h2>
          <p className="font-body-lg text-body-lg text-secondary mb-8">
            My practice is rooted in the belief that true healing occurs when we feel entirely seen and profoundly safe. This space is strictly non-judgmental and radically inclusive.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-healing-sage">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <h3 className="font-label-lg text-label-lg text-primary mb-1">Trauma-Informed Insight</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Readings focus on empowerment and emotional safety, never fear-mongering or fatalism.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-healing-sage">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <div>
                <h3 className="font-label-lg text-label-lg text-primary mb-1">Radically Inclusive</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Welcoming to all identities, backgrounds, and spiritual paths. You are honored here.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-healing-sage">
                <span className="material-symbols-outlined">self_improvement</span>
              </div>
              <div>
                <h3 className="font-label-lg text-label-lg text-primary mb-1">Actionable Clarity</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Translating esoteric symbols into practical, grounded steps for your daily life.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* Reading Options (Bento-style Cards) */}
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32" id="options">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Reading Offerings</h2>
        <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">Choose the depth of guidance that serves you best in this moment.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Option 1 */}
        <div className="bg-surface-cream border border-secondary-container rounded-xl p-8 md:p-12 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] transition-shadow duration-300 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <span className="bg-healing-sage/20 text-healing-sage font-label-sm text-label-sm px-3 py-1 rounded-full">Most Popular</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">6-Card Email Reading</h3>
          <p className="font-body-md text-body-md text-secondary mb-8 flex-grow">A comprehensive look at your current situation, obstacles, and potential paths forward. Delivered directly to your inbox as a beautifully formatted PDF for you to keep and reflect upon.</p>
          <div className="flex items-end justify-between mt-auto pt-8 border-t border-secondary-container/50">
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Investment</p>
              <p className="font-headline-md text-headline-md text-primary">$15 <span className="font-body-sm text-sm text-secondary font-normal">/ Base</span> <span className="text-secondary mx-1">|</span> $25 <span className="font-body-sm text-sm text-secondary font-normal">/ Expedited</span></p>
            </div>
            <button className="text-healing-sage font-label-lg text-label-lg hover:text-primary transition-colors flex items-center gap-2">
              Request <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
        {/* Option 2 */}
        <div className="bg-surface-container-low border border-secondary-container rounded-xl p-8 md:p-12 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] transition-shadow duration-300 flex flex-col h-full relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-healing-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-tertiary-container flex items-center justify-center">
              <span className="material-symbols-outlined">videocam</span>
            </div>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary mb-2 relative z-10">Deep Dive Session</h3>
          <p className="font-body-md text-body-md text-secondary mb-8 flex-grow relative z-10">A 60-minute live exploration via Zoom. We'll pull cards collaboratively, allowing for dynamic dialogue, deeper emotional processing, and immediate clarification of your most pressing questions.</p>
          <div className="flex items-end justify-between mt-auto pt-8 border-t border-secondary-container/50 relative z-10">
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Investment</p>
              <p className="font-headline-md text-headline-md text-primary">$120 <span className="font-body-sm text-sm text-secondary font-normal">/ 60 mins</span></p>
            </div>
            <button className="bg-ether-indigo-light text-tertiary-fixed-dim font-label-lg text-label-lg px-6 py-2 rounded-DEFAULT hover:bg-primary transition-colors shadow-sm">
              Book Time
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* Sample Reading Showcase (Cards-as-UI) */}
    <section className="bg-primary text-on-primary py-24 mb-32 relative overflow-hidden">
      {/* Decorative Background Shader placeholder */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-label-lg text-label-lg text-tertiary-fixed-dim tracking-widest uppercase mb-4 block">A Glimpse into the Process</span>
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">The Architecture of Insight</h2>
          <p className="font-body-md text-body-md text-primary-fixed-dim max-w-2xl mx-auto">This sample spread illustrates how distinct archetypes converse with one another to form a cohesive, healing narrative.</p>
        </div>
        {/* Cards Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-12 mt-20">
          {/* Card 1: The Star */}
          <div className="w-64 flex flex-col items-center group card-float" style={{animationDelay: '0s'}}>
            <div className="w-full aspect-[2/3] bg-surface-cream rounded-xl p-3 border border-secondary-fixed/20 shadow-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-cream/90 z-10" />
              <img className="w-full h-full object-cover rounded-lg" data-alt="A minimalist, modern tarot card design representing 'The Star'. The artwork is highly abstract, featuring a single, delicate golden, geometric starburst suspended over tranquil, flowing lines suggesting water. The background is a soft, pristine cream color. The aesthetic is extremely clean, elegant, and ethereal, lacking traditional esoteric clutter, perfect for a high-end wellness brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmN5C4jJpwOjhoPnRBCqEa5N4x1pEXGdZZSmCbESTC97mxGLbS_HkCkuIDBIZOSxVVThQJOUlNMYU7p_ZO5tPf3KRIOwOtG5PbogHl4AEV4Uai-Wy4mv9YqrhlwXqFZsKeBJY1S1Y4Wn1VK0fux5kuGnj0bXeTz5xr_3w6QTNVM5nmlkNEJ7zdWhWDj9JEekXI3NcJh8s8ywtttKBIuyM8Q9TZn63wTy1QD7yh5KQ2EagoBNtYU3vgmwGT33eO-davfLzPMcfnIXGx" />
              <div className="absolute bottom-4 left-0 w-full text-center z-20">
                <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase bg-surface-cream/80 px-3 py-1 rounded-full backdrop-blur-sm">The Star</span>
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md text-tertiary-fixed-dim mb-2 text-center">Hope &amp; Healing</h4>
            <p className="font-body-md text-body-md text-primary-fixed-dim text-center text-sm">Illuminates the presence of profound spiritual renewal and trust in the universe after a period of difficulty.</p>
          </div>
          {/* Card 2: The Sun (Center, slightly elevated) */}
          <div className="w-64 flex flex-col items-center group card-float md:-mt-8" style={{animationDelay: '1s'}}>
            <div className="w-full aspect-[2/3] bg-surface-cream rounded-xl p-3 border border-tertiary-fixed-dim/40 shadow-[0_0_40px_rgba(233,193,118,0.15)] relative overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-cream/90 z-10" />
              <img className="w-full h-full object-cover rounded-lg" data-alt="A minimalist, modern tarot card design representing 'The Sun'. The artwork is abstract and optimistic, featuring a perfect, bright golden circle radiating soft, warm waves of light against a pale, warm white background. The design is clean, sophisticated, and uplifting, embodying a premium, modern-luxury aesthetic devoid of traditional busy occult imagery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpslEC0NjKpzddMrggT-TNc1NGbYRgLR7rnL7VEa_IIBQmY_5FP06GH7HwAfNqzHj6HaT47EFYjsj-8_X4Ns5Q_KPjwpbvnkgsiTokJ4ZNbwpMaiTQnp-i6m3z0FYFO1TShEW03fVM4GZ4xaYQ6LJCDKLgX0VTVkeuKucq2uXEL4g6T1ZlGosrA1ABFjx7HAa8Y_FBJNNXuRNXvNdGGWaDhcT6uroHi5QM63_1i9uxqbSSMNc8AvvBsRbER3S-yN83Cmkbr8eTAugB" />
              <div className="absolute bottom-4 left-0 w-full text-center z-20">
                <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase bg-surface-cream/80 px-3 py-1 rounded-full backdrop-blur-sm">The Sun</span>
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md text-tertiary-fixed-dim mb-2 text-center">Radiant Vitality</h4>
            <p className="font-body-md text-body-md text-primary-fixed-dim text-center text-sm">Signifies pure joy, success, and the clear, warm light of truth illuminating your current situation.</p>
          </div>
          {/* Card 3: Wheel of Fortune */}
          <div className="w-64 flex flex-col items-center group card-float" style={{animationDelay: '2s'}}>
            <div className="w-full aspect-[2/3] bg-surface-cream rounded-xl p-3 border border-secondary-fixed/20 shadow-2xl relative overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-cream/90 z-10" />
              <img className="w-full h-full object-cover rounded-lg" data-alt="A minimalist, modern tarot card design representing 'The Wheel of Fortune'. The artwork features an elegant, abstract geometric rendering of a delicate wheel or mandala in muted sage and pale gold tones against a soft cream background. The lines are fine and precise, suggesting cyclic movement and destiny in a high-end, serene, and sophisticated visual style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVIKcScdkJ-pi6cJSss8xeOFdE8xe9dg6o0O68fPHOYkGt2D6NaKg7LvEO1m7NKk_m5ooudz0XPLx8-s7kdER3GBIC3q0PCPAqvydt1LYXQq09GNKQTIXl-UsMMMFWY75WEsZVoyZ6p7-wIyB_krU5vBD-tixVRVkiIa-PHWNtbKWC5wwblkN_WcSRgFs5IvRrXdKXrTF61wVBekoDgSKb-JOgzlqJ1c9QYxtgvkHrJyLC9pctQxq5FtVJrlRSDFNSDP_Ted0uy2Js" />
              <div className="absolute bottom-4 left-0 w-full text-center z-20">
                <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase bg-surface-cream/80 px-3 py-1 rounded-full backdrop-blur-sm">The Wheel</span>
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md text-tertiary-fixed-dim mb-2 text-center">Cyclic Destiny</h4>
            <p className="font-body-md text-body-md text-primary-fixed-dim text-center text-sm">A reminder that life is in constant motion. What was down will rise, urging you to embrace change.</p>
          </div>
        </div>
      </div>
    </section>
    {/* FAQ Section */}
    <section className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto mb-32">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {/* FAQ Item 1 */}
        <div className="border-b border-secondary-container pb-6">
          <h3 className="font-label-lg text-label-lg text-primary mb-3">What is the turnaround time for an email reading?</h3>
          <p className="font-body-md text-body-md text-secondary">
            Standard email readings are delivered as a comprehensive PDF within 3 business days. If you select the expedited option, your reading will be delivered within 24 hours of your request.
          </p>
        </div>
        {/* FAQ Item 2 */}
        <div className="border-b border-secondary-container pb-6">
          <h3 className="font-label-lg text-label-lg text-primary mb-3">How should I prepare my questions?</h3>
          <p className="font-body-md text-body-md text-secondary">
            The best questions are open-ended and focused on personal growth. Instead of asking "Will I get the job?", try asking "What do I need to know about my current career trajectory?" or "How can I best align myself with opportunities?"
          </p>
        </div>
        {/* FAQ Item 3 */}
        <div className="border-b border-secondary-container pb-6">
          <h3 className="font-label-lg text-label-lg text-primary mb-3">Do I need prior experience with Tarot?</h3>
          <p className="font-body-md text-body-md text-secondary">
            Not at all. My readings are designed to be accessible, clear, and grounded. I explain the symbolism in plain, therapeutic language so you can immediately apply the insights to your life.
          </p>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="bg-surface-cream border border-secondary-container rounded-2xl p-12 md:p-24 text-center relative overflow-hidden">
        {/* Decorative subtle element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]">auto_awesome</span>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Unlock Your Insights</h2>
          <p className="font-body-lg text-body-lg text-secondary mb-10">
            Step into a space of quiet reflection. Let the cards provide the clarity and confirmation your intuition has been seeking.
          </p>
          <button className="bg-ether-indigo-light text-tertiary-fixed-dim font-label-lg text-label-lg px-12 py-4 rounded-DEFAULT hover:bg-primary transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(42,49,77,0.2)]">
            Begin Your Reading
          </button>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full pt-20 pb-10 bg-surface dark:bg-primary-container bg-surface-cream border-t border-secondary-container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Brand Column */}
      <div className="col-span-1 md:col-span-1 mb-8 md:mb-0">
        <a className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim block mb-4" href="/">Transcendental Healing</a>
        <p className="font-body-md text-body-md text-secondary dark:text-on-secondary-container">© 2024 Transcendental Healing. All Rights Reserved.</p>
      </div>
      {/* Links Columns */}
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/addiction-recovery">Addiction Recovery</a>
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/ayurveda">Ayurvedic Healing</a>
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/reflexology">Reflexology</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/yoga">Yoga &amp; Breathwork</a>
          {/* Active/Highlighted link in footer */}
          <a className="font-body-md text-body-md text-primary dark:text-primary-fixed-dim font-semibold hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/tarot">Tarot</a>
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/continuing-education">Professional Training</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Newsletter Signup</a>
        </div>
      </div>
    </div>
  </footer>
  {/* Minimal Script for Navbar Scroll Effect */}
</div>

    </div>
  );
}
