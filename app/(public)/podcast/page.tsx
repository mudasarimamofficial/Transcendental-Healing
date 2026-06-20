import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";

export default function Page() {
  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md">
<div>
  {/* TopNavBar */}
  <nav className="fixed top-0 w-full z-50 bg-surface-cream/80 backdrop-blur-md dark:bg-primary/80 border-b border-secondary-container/30 transition-all duration-300" id="main-nav">
    <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
      <a className="font-headline-md text-headline-md font-medium tracking-tight text-primary dark:text-primary-fixed-dim" href="/">
        Transcendental Healing
      </a>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300 font-label-lg text-label-lg" href="/">Home</a>
        <a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300 font-label-lg text-label-lg" href="/about">About</a>
        <a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300 font-label-lg text-label-lg" href="/services/addiction-recovery">Services</a>
        <a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300 font-label-lg text-label-lg" href="/continuing-education">Education</a>
        <a className="text-primary dark:text-primary-fixed-dim border-b-2 border-healing-sage pb-1 hover:text-healing-sage transition-colors duration-300 font-label-lg text-label-lg opacity-80 transition-opacity duration-200" href="/podcast">Podcast</a>
        <a className="text-on-secondary-container dark:text-on-primary-container hover:text-healing-sage transition-colors duration-300 font-label-lg text-label-lg" href="/blog">Resources</a>
        <a className="inline-flex items-center justify-center px-8 py-3 bg-primary text-on-primary rounded-full hover:bg-ether-indigo-light transition-all duration-300 font-label-lg text-label-lg" href="/booking">
          Book a Session
        </a>
      </div>
      {/* Mobile Menu Toggle */}
      <button aria-label="Toggle menu" className="md:hidden text-primary p-2">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  </nav>
  {/* Main Content */}
  <main className="flex-grow pt-24 md:pt-32">
    {/* Hero Section */}
    <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center opacity-10" data-alt="A dark, moody, and cinematic macro photograph of ink swirling in water, creating abstract, ethereal, and slightly unsettling shapes. The lighting is low and dramatic, focusing on the intricate tendrils of black ink expanding through clear liquid. The overarching UI style is a modern-luxury, provocative digital sanctuary. The mood is mysterious and introspective." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUYL1NmvQMhXpgaTRPNVLvOoz8IMj3WE0d7Ztm-dJFT9-i-7YF0LUGiEnuvlxy9RZabMDZzy_WkXwUMb-kN5iQE6L2k7BEfbzsZZaPGUMqMIJE0XvC97InJERov3Mg2blbZDVXVEy61zCp3ZmnM_Frdq3m-KVMsgOxai6MMY_n9LKEEv2apDk8NC1E-lMmwFmxVoIbfc9UbXVpfOOvqMRYylspuNASr1gN6uvaXSw29uyj3g_Fl27RZimqPGdQbDZaOG115K7Vx6Zf")'}} />
        {/* Gradient overlay for legibility and atmospheric blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-cream via-surface-cream/80 to-surface-cream" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm mb-6 uppercase tracking-wider">
          Original Series
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 tracking-tight leading-tight">
          The Unveiled Mind: <br /> Conversations on the Edge of Consciousness
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Dive into provocative, unfiltered dialogues exploring spirituality, profound healing, and the taboo edges of human experience. We leave no stone unturned in the pursuit of radical truth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-full hover:bg-ether-indigo-light transition-all duration-300 flex items-center justify-center gap-2 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">play_arrow</span>
            <span className="font-label-lg text-label-lg">Listen to Latest Episode</span>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border border-outline text-primary rounded-full hover:bg-surface-variant transition-all duration-300 font-label-lg text-label-lg">
            View All Episodes
          </button>
        </div>
      </div>
    </section>
    {/* Listening Platforms */}
    <section className="py-12 border-y border-secondary-container bg-surface px-margin-mobile md:px-margin-desktop reveal">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="font-headline-md text-headline-md text-primary shrink-0">Listen On</h3>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8 w-full">
          <a className="flex items-center gap-2 px-6 py-3 rounded-full border border-secondary-container hover:border-healing-sage hover:bg-surface-container-low transition-all duration-300 text-on-surface-variant group" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-healing-sage">podcasts</span>
            <span className="font-label-lg text-label-lg">Apple Podcasts</span>
          </a>
          <a className="flex items-center gap-2 px-6 py-3 rounded-full border border-secondary-container hover:border-healing-sage hover:bg-surface-container-low transition-all duration-300 text-on-surface-variant group" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-healing-sage">graphic_eq</span>
            <span className="font-label-lg text-label-lg">Spotify</span>
          </a>
          <a className="flex items-center gap-2 px-6 py-3 rounded-full border border-secondary-container hover:border-healing-sage hover:bg-surface-container-low transition-all duration-300 text-on-surface-variant group" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-healing-sage">headphones</span>
            <span className="font-label-lg text-label-lg">Amazon Music</span>
          </a>
        </div>
      </div>
    </section>
    {/* Latest Episodes (Bento Grid) */}
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-cream max-w-container-max mx-auto reveal">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Latest Episodes</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Recent dispatches from the frontier of thought.</p>
        </div>
        <a className="hidden md:flex items-center gap-2 text-primary hover:text-healing-sage font-label-lg text-label-lg transition-colors group" href="#">
          See all episodes 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,_auto)]">
        {/* Featured Episode (Spans 2 columns on desktop) */}
        <article className="glass-card rounded-xl p-8 flex flex-col justify-between md:col-span-2 group hover:border-healing-sage transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
            <div className="w-full h-full bg-cover bg-center" data-alt="A striking portrait of a nonbinary philosopher in a stark, minimalist studio space. The lighting is soft and ethereal, casting gentle shadows that emphasize a contemplative expression. They are surrounded by subtle, abstract art pieces. The modern-luxury aesthetic highlights premium textures and a serene, thought-provoking mood." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9X88QWm0pXwXC2kLJhXXS01N6zPMYS2U3h6cH8u0RcADF4rZ2bWkjCGP5fykdbfDKZptwBdND_ix7aFtzMrcs2TPGig8TlTb4BlhtEYproowNTPc2oREiPpHBMofbTgRFxbamvuToo0uuUjMOpK-cYsjaJGg7ADYGhiVFFZX9jfpmOTKHmYtHTzQBeUM3fGE1OI-eu0sr_wbWwSL7gnw_8QuzlHLZ-7FPLct5Bsba0jR1hYrv02TqTdy552182T9AHCUm2M6-yYS4")'}} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-healing-sage/20 text-tertiary-container rounded-full font-label-sm text-label-sm">Ep. 42</span>
              <span className="text-on-surface-variant font-label-sm text-label-sm">Oct 12 • 1h 45m</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4 pr-12 group-hover:text-healing-sage transition-colors">
              Deconstructing Identity in a Post-Physical World
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-8">
              A profound conversation with philosopher Alex Thorne exploring how digital avatars and disembodied consciousness challenge our fundamental understanding of self and soul.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-between mt-auto">
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary hover:bg-ether-indigo-light transition-colors shadow-lg">
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
            <span className="font-label-lg text-label-lg text-primary border-b border-transparent group-hover:border-primary transition-colors">Listen Now</span>
          </div>
        </article>
        {/* Standard Episode Card */}
        <article className="glass-card rounded-xl p-6 flex flex-col justify-between group hover:border-healing-sage transition-all duration-500">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">Ep. 41</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-healing-sage transition-colors leading-tight">
              The Alchemy of Grief: Transmuting Pain into Avant-Garde Art
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6">
              Visual artist Elara Vance discuses using visceral, confronting installations as a mechanism for radical trauma processing.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-auto border-t border-secondary-container/50 pt-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-sm">play_arrow</span>
            </button>
            <span className="text-on-surface-variant font-label-sm text-label-sm">Oct 5 • 52m</span>
          </div>
        </article>
        {/* Standard Episode Card */}
        <article className="glass-card rounded-xl p-6 flex flex-col justify-between group hover:border-healing-sage transition-all duration-500">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">Ep. 40</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-healing-sage transition-colors leading-tight">
              Sacred Sexuality: Unlearning Shame and Reclaiming the Body
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6">
              A raw exploration of somatic experiencing and how societal taboos restrict spiritual liberation.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-auto border-t border-secondary-container/50 pt-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-sm">play_arrow</span>
            </button>
            <span className="text-on-surface-variant font-label-sm text-label-sm">Sep 28 • 1h 10m</span>
          </div>
        </article>
      </div>
      <div className="mt-8 text-center md:hidden">
        <button className="w-full px-8 py-4 border border-outline text-primary rounded-full hover:bg-surface-variant transition-all duration-300 font-label-lg text-label-lg">
          View All Episodes
        </button>
      </div>
    </section>
    {/* Newsletter Section */}
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container relative overflow-hidden reveal">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-repeat" data-alt="A delicate, minimalist line-art pattern of abstract waveforms and sound frequencies gently fading into a clean, creamy white background. The aesthetic is extremely subtle, elegant, and modern-luxury, evoking a sense of quiet auditory space." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZTsRH0my-7q2flKPyVmFIbSWpSQCGmP5YdZKUHoj5C6Wr-SoPxlIHpfZko_WRD_8GnIMZXzStpTWgWZ9nvru4aL9yNv5ZnBcplvKb8m3izWQVkSaB11y0krGcCx-GEDoUruOMIUqyU_AYpJZP7hbupFP-IX8uKbtRwOQUNDch2v0R_xNHmJ6FPevzyKi7iL8gx_HG1hxeyH8bpMxusQhJLXnC9PCTGX4bQsJTQNoiOObcgUYESMyv8ghfIUsasCz3fRAI4VoezGVF")'}} />
      </div>
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="material-symbols-outlined text-healing-sage text-4xl mb-6">graphic_eq</span>
        <h2 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-primary mb-4">
          Eavesdrop on the Soul
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          Subscribe to 'The Unveiled Mind' newsletter for exclusive episode notes, further reading on taboo topics, and intimate reflections from the host.
        </p>
        <ClientFormWrapper action={submitNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-grow">
            <label className="sr-only" htmlFor="email">Email address</label>
            <input className="w-full bg-surface-cream border-b border-outline-variant px-4 py-3 focus:outline-none focus:border-primary focus:ring-0 transition-colors font-body-md text-body-md text-primary placeholder:text-on-surface-variant/50 rounded-t-md" id="email" name="email" placeholder="Enter your email" required type="email" />
          </div>
          <button className="px-8 py-3 bg-primary text-on-primary rounded-md hover:bg-ether-indigo-light transition-colors font-label-lg text-label-lg whitespace-nowrap" type="submit">
            Subscribe
          </button>
        </ClientFormWrapper>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full pt-20 pb-10 bg-surface dark:bg-primary-container bg-surface-cream border-t border-secondary-container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
      <div className="md:col-span-1">
        <a className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim block mb-6" href="/">
          Transcendental Healing
        </a>
        <p className="font-body-sm text-body-sm text-secondary dark:text-on-secondary-container mb-6 max-w-xs">
          Sanctuary for profound healing and spiritual transcendence.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-label-lg text-label-lg text-primary font-semibold mb-2">Practices</h4>
        <a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/addiction-recovery">Addiction Recovery</a>
        <a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/ayurveda">Ayurvedic Healing</a>
        <a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/reflexology">Reflexology</a>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-label-lg text-label-lg text-primary font-semibold mb-2">Exploration</h4>
        <a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/yoga">Yoga &amp; Breathwork</a>
        <a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/services/tarot">Tarot</a>
        <a className="text-primary dark:text-primary-fixed-dim font-semibold font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/podcast">Podcast</a>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-label-lg text-label-lg text-primary font-semibold mb-2">Connect</h4>
        <a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="/continuing-education">Professional Training</a>
        <a className="text-secondary dark:text-on-secondary-container hover:text-healing-sage transition-colors duration-300 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-healing-sage rounded" href="#">Newsletter Signup</a>
      </div>
    </div>
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8 border-t border-secondary-container/50 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-body-md text-body-md text-secondary dark:text-on-secondary-container">
        © 2024 Transcendental Healing. All Rights Reserved.
      </p>
      <div className="flex gap-6">
        <a className="text-secondary hover:text-healing-sage transition-colors" href="#"><span className="sr-only">Instagram</span><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd" /></svg></a>
      </div>
    </div>
  </footer>
</div>

    </div>
  );
}
