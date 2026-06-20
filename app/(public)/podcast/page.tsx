import Link from "next/link";

export default function Page() {
  return (
    <>
      
 Hero Section 
<section className="relative min-h-[819px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop py-20">
{/* Background Image */}
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-10" data-alt="A dark, moody, and cinematic macro photograph of ink swirling in water, creating abstract, ethereal, and slightly unsettling shapes. The lighting is low and dramatic, focusing on the intricate tendrils of black ink expanding through clear liquid. The overarching UI style is a modern-luxury, provocative digital sanctuary. The mood is mysterious and introspective." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUYL1NmvQMhXpgaTRPNVLvOoz8IMj3WE0d7Ztm-dJFT9-i-7YF0LUGiEnuvlxy9RZabMDZzy_WkXwUMb-kN5iQE6L2k7BEfbzsZZaPGUMqMIJE0XvC97InJERov3Mg2blbZDVXVEy61zCp3ZmnM_Frdq3m-KVMsgOxai6MMY_n9LKEEv2apDk8NC1E-lMmwFmxVoIbfc9UbXVpfOOvqMRYylspuNASr1gN6uvaXSw29uyj3g_Fl27RZimqPGdQbDZaOG115K7Vx6Zf')` }}></div>
{/* Gradient overlay for legibility and atmospheric blending */}
<div className="absolute inset-0 bg-gradient-to-b from-surface-cream via-surface-cream/80 to-surface-cream"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center reveal">
<span className="inline-block px-4 py-1.5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm mb-6 uppercase tracking-wider">
                    Original Series
                </span>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 tracking-tight leading-tight">
                    The Unveiled Mind: <br/> Conversations on the Edge of Consciousness
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
 Listening Platforms 
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
 Latest Episodes (Bento Grid) 
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
<div className="w-full h-full bg-cover bg-center" data-alt="A striking portrait of a nonbinary philosopher in a stark, minimalist studio space. The lighting is soft and ethereal, casting gentle shadows that emphasize a contemplative expression. They are surrounded by subtle, abstract art pieces. The modern-luxury aesthetic highlights premium textures and a serene, thought-provoking mood." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9X88QWm0pXwXC2kLJhXXS01N6zPMYS2U3h6cH8u0RcADF4rZ2bWkjCGP5fykdbfDKZptwBdND_ix7aFtzMrcs2TPGig8TlTb4BlhtEYproowNTPc2oREiPpHBMofbTgRFxbamvuToo0uuUjMOpK-cYsjaJGg7ADYGhiVFFZX9jfpmOTKHmYtHTzQBeUM3fGE1OI-eu0sr_wbWwSL7gnw_8QuzlHLZ-7FPLct5Bsba0jR1hYrv02TqTdy552182T9AHCUm2M6-yYS4')` }}></div>
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
 Newsletter Section 
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container relative overflow-hidden reveal">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none">
<div className="w-full h-full bg-repeat" data-alt="A delicate, minimalist line-art pattern of abstract waveforms and sound frequencies gently fading into a clean, creamy white background. The aesthetic is extremely subtle, elegant, and modern-luxury, evoking a sense of quiet auditory space." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZTsRH0my-7q2flKPyVmFIbSWpSQCGmP5YdZKUHoj5C6Wr-SoPxlIHpfZko_WRD_8GnIMZXzStpTWgWZ9nvru4aL9yNv5ZnBcplvKb8m3izWQVkSaB11y0krGcCx-GEDoUruOMIUqyU_AYpJZP7hbupFP-IX8uKbtRwOQUNDch2v0R_xNHmJ6FPevzyKi7iL8gx_HG1hxeyH8bpMxusQhJLXnC9PCTGX4bQsJTQNoiOObcgUYESMyv8ghfIUsasCz3fRAI4VoezGVF')` }}></div>
</div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<span className="material-symbols-outlined text-healing-sage text-4xl mb-6">graphic_eq</span>
<h2 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-primary mb-4">
                    Eavesdrop on the Soul
                </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                    Subscribe to 'The Unveiled Mind' newsletter for exclusive episode notes, further reading on taboo topics, and intimate reflections from the host.
                </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<div className="flex-grow">
<label className="sr-only" htmlFor="email">Email address</label>
<input className="w-full bg-surface-cream border-b border-outline-variant px-4 py-3 focus:outline-none focus:border-primary focus:ring-0 transition-colors font-body-md text-body-md text-primary placeholder:text-on-surface-variant/50 rounded-t-md" id="email" placeholder="Enter your email" required="" type="email"/>
</div>
<button className="px-8 py-3 bg-primary text-on-primary rounded-md hover:bg-ether-indigo-light transition-colors font-label-lg text-label-lg whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</section>

    </>
  );
}
