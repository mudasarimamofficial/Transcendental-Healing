import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";

export default function Page() {
  return (
    <div className="bg-surface text-primary antialiased">
<div>
  <nav className="fixed top-0 w-full z-50 bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 border-b border-secondary-container/30">
    <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
      <div className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim">
        Transcendental Healing
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/">Home</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/about">About</a>
        <a className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 opacity-80 transition-opacity duration-200" href="/services/addiction-recovery">Services</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/continuing-education">Education</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/podcast">Podcast</a>
        <a className="font-label-lg text-label-lg text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300" href="/blog">Resources</a>
      </div>
      <button className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded hover:bg-primary/90 transition-colors hidden md:block">
        Book a Session
      </button>
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  </nav>
  <main className="pt-32 pb-24">
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-5 z-10 pr-8">
          <span className="text-tertiary-fixed-dim font-label-lg text-label-lg uppercase tracking-widest block mb-6">Bridging Science and Soul</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight">
            Ancient Rhythms for Modern Restoration
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-md">
            A synthesized approach to healing. We unite the precision of physiological reflexology with the profound wisdom of Ayurvedic botanical science to reset your nervous system.
          </p>
          <button className="bg-primary text-tertiary-fixed-dim font-label-lg text-label-lg px-8 py-4 rounded hover:bg-ether-indigo-light transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(3,7,28,0.2)]">
            Explore The Session
          </button>
        </div>
        <div className="lg:col-span-7 mt-16 lg:mt-0 relative">
          <div className="aspect-[4/5] md:aspect-[3/2] w-full rounded-lg overflow-hidden bg-surface-cream border border-secondary-container relative">
            <img className="w-full h-full object-cover" data-alt="A highly detailed, macro photograph of warm hands pouring aromatic, golden-hued massage oil onto a smooth surface. Soft, ethereal lighting creating a glowing 'light-mode' aesthetic. The color palette features warm sands, muted golds, and a hint of deep indigo in the shadows. The mood is deeply calming, luxurious, and rooted in ancient holistic healing practices." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3rC-bR8AoNWE8bHVA1gDu0xalTqNDyEGQ180UjRsmXeWvKZp8P-NDmQIDXU9tee5zCCvIu3On9kAF4iUcPWfvKcZdfwOT0mFnLH8Xc3ItCyHbjSncGitVQMI-sNSBgsnYWIuPeh-a41Ho0L4MGmF0Hwg_q8odkL-iwdNxeIYg8izFoaCmE8YJsSW0JN07usVJxT_XYz_86QDZsPlWvricmth9c4iLKOKYw8nirk5DnC5yH-w3J7qPNS6ON-4aOo_ZZvQuBjxRzYfL" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-surface-cream border-y border-secondary-container/50 py-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Philosophy</h2>
            <div className="w-12 h-px bg-tertiary-fixed-dim mb-6" />
          </div>
          <div className="md:w-2/3 space-y-16">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">The Science of Prana</h3>
              <p className="font-body-md text-body-md text-secondary max-w-2xl leading-relaxed">
                Vital energy, or Prana, is not merely a spiritual concept, but a physiological reality mirrored in the subtle electrical currents of our nervous system. By stimulating specific neural pathways through reflexology, we actively direct this flow, releasing stagnant tension and initiating profound cellular repair.
              </p>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Body-Mind Equilibrium</h3>
              <p className="font-body-md text-body-md text-secondary max-w-2xl leading-relaxed">
                True healing requires the body to feel safe. Our Ayurvedic integrations—using temperature, specific herbal infusions, and rhythmic pressure—signal to the parasympathetic nervous system that it is time to rest, digest, and restore. We do not force healing; we create the precise environment where your body remembers how to heal itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32">
      <div className="text-center mb-20">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Session Experience</h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-xl mx-auto">An intentional, in-home sanctuary designed to isolate you from daily stressors and facilitate deep restorative work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="col-span-1 md:col-span-2 bg-surface-cream rounded border border-secondary-container p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" data-alt="A minimalist, artistic top-down view of smooth, pale river stones arranged symmetrically on a pristine, textured linen cloth in soft sand tones. Gentle, diffused sunlight filtering from the top left, casting soft shadows. The visual style is modern-luxury, evoking a premium wellness resort atmosphere. The color scheme is dominated by cream, soft beige, and subtle sage greens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDlN8jkv3WdcDLpEdgzBGGNIfyusGxc3ncjNa3JIolYeeiZazoNgL0ter4NeRx_mAeW00aeAvdJ7kZutJb4BzLr_XEaky5GJt6MPFNoCzY50USFvIhjboxtc3kuhKnYtBhh8E65IzPIB9UsYCEkJDdrBYPqQ_WqAoLdVmlrGqCCENXx17XAteJ0zTeDipzT2lmZKjnBcNwq5egQiJ5vSwOofFK__yM0WzbY9fStxgm33pSfkKY-cDjD9enMFTeknNRdnnJlDlPfRAa" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-cream via-surface-cream/50 to-transparent" />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-healing-sage/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-healing-sage">touch_app</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">Reflexology Maps</h3>
            <p className="font-body-md text-body-md text-secondary max-w-md">Precision pressure applied to specific micro-maps on the feet and hands, directly correlating to major organ systems and neural clusters to release systemic tension.</p>
          </div>
        </div>
        <div className="col-span-1 bg-surface-cream rounded border border-secondary-container p-8 flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">local_florist</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">Ayurvedic Infusions</h3>
            <p className="font-body-md text-body-md text-secondary">Custom-blended warm herbal oils, selected based on your current doshic imbalance, are absorbed transdermally to nourish tissues and calm the mind.</p>
          </div>
          <div className="mt-8">
            <img className="w-full h-40 object-cover rounded" data-alt="A close-up, high-end editorial shot of dried Ayurvedic herbs, including vibrant turmeric root, pale cardamom pods, and deep green tulsi leaves, resting in a shallow, matte ceramic bowl. The bowl sits on a polished dark wood surface reflecting deep indigo hues. The lighting is crisp yet soft, highlighting the natural textures and creating an atmosphere of organic purity and professional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO-NaCnKhEy6pxzd3z6Gqsmq2ViuXEAhbMiY-RCLQwt4hlgJnXEvvRJOcIfuqZaddEDgxqCdQ_9LAqcUNTmT_zubn1epksQGn3IfJh2DZsFaEm0fjpJqNHuYHxdl2AqkUHHP30SF_y4zk-LLNjVv1vsy3twaKXOfJaQNMR3XwPr-3u1wbzAFwkDAIFvIqq1SC8dQn0oY1EQo66MtvkjJeFsl08UpBP3cwIKufmjcOaH1umyhdHua098dD0VxbO9kS7e-cuVyD6wRF2" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-primary text-on-primary py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height={40} id="grid" patternUnits="userSpaceOnUse" width={40}>
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%" />
        </svg>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-12">Begin Your Restoration</h2>
        <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mx-auto mb-16">
          Space is limited as we prioritize profound attention for each client. Reserve your dedicated time for deep healing and recalibration.
        </p>
        <button className="bg-transparent border border-tertiary-fixed-dim text-tertiary-fixed-dim hover:bg-tertiary-fixed-dim hover:text-primary font-label-lg text-label-lg px-12 py-4 rounded transition-all duration-300">
          Book Your Restoration Session
        </button>
      </div>
    </section>
  </main>
  <footer className="w-full pt-20 pb-10 bg-surface dark:bg-primary-container border-t border-secondary-container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
      <div className="col-span-1 md:col-span-1 mb-10 md:mb-0">
        <div className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim mb-4">
          Transcendental Healing
        </div>
        <p className="font-body-md text-body-md text-secondary dark:text-on-secondary-container mt-4">
          © 2024 Transcendental Healing. All Rights Reserved.
        </p>
      </div>
      <div className="col-span-1">
        <h4 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim mb-6 uppercase tracking-wider">Services</h4>
        <ul className="space-y-4">
          <li><a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/addiction-recovery">Addiction Recovery</a></li>
          <li><a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/ayurveda">Ayurvedic Healing</a></li>
          <li><a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/reflexology">Reflexology</a></li>
        </ul>
      </div>
      <div className="col-span-1">
        <h4 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim mb-6 uppercase tracking-wider">Practice</h4>
        <ul className="space-y-4">
          <li><a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/yoga">Yoga &amp; Breathwork</a></li>
          <li><a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/tarot">Tarot</a></li>
          <li><a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/continuing-education">Professional Training</a></li>
        </ul>
      </div>
      <div className="col-span-1">
        <h4 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim mb-6 uppercase tracking-wider">Connect</h4>
        <ul className="space-y-4">
          <li><a className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="#">Newsletter Signup</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>

    </div>
  );
}
