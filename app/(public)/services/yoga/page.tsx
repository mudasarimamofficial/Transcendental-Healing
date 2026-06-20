import Link from "next/link";

export default function Page() {
  return (
    <>
      
 Hero Section 
<section className="relative min-h-[819px] flex items-center px-margin-mobile md:px-margin-desktop">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center" data-alt="A serene, high-quality, bright photograph showing an inclusive, plus-size yoga instructor in a peaceful, minimalist studio. Warm morning sunlight streams through large windows, illuminating natural wood floors and subtle sage green accents. The aesthetic is modern-luxury, evoking calm, safety, and empowerment." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKGH0BrNs7dYRw_bB7cxJGsAx75fvfj40Gi0wt-pZtzBKGtCYHKU9oGhQdkjUwTVQQOpQUa9Cbo0hXrZ0RNk1cmhl4g7M3acRt2pAR78XSJBQcLaX4ejWFQYbooD8pKPHzPzA1XNInS-_AABn_Kws4dLo58c4lvUIFZHgdf-GymYzxcH3Opqj0SLK750h9SgpBxU5KO3fjtQ5U8wAe4JNchjPwK2A-qgeU5saWdFppgWQhvLfDQFXyr-0rPxeIuWSaT0ScVOqFwTtV')` }}></div>
<div className="absolute inset-0 bg-surface-cream/70 backdrop-blur-sm md:bg-gradient-to-r md:from-surface-cream/95 md:via-surface-cream/80 md:to-transparent"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="flex flex-col justify-center py-20 md:py-32">
<span className="font-label-lg text-label-lg text-healing-sage tracking-widest uppercase mb-4 block">Yoga &amp; Breathwork</span>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">Empowerment in Every Breath</h1>
<p className="font-body-lg text-body-lg text-secondary mb-10 max-w-md">Discover a movement practice where every body is celebrated. Cultivate resilience, nervous system regulation, and profound self-acceptance through trauma-informed yoga and pranayama.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-DEFAULT hover:bg-ether-indigo-light transition-all duration-300 w-fit">
                            Reserve Your Mat
                        </button>
<button className="border border-tertiary-fixed-dim text-primary font-label-lg text-label-lg px-8 py-4 rounded-DEFAULT hover:bg-surface-dim transition-all duration-300 w-fit">
                            Explore The Method
                        </button>
</div>
</div>
</div>
</section>
 The Method / Philosophy Section (Bento Grid) 
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Method</h2>
<p className="font-body-md text-body-md text-secondary">A sanctuary for all bodies, prioritizing accessibility, emotional safety, and somatic healing over aesthetic perfection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
{/* Bento Item 1: Large Feature */}
<div className="md:col-span-2 md:row-span-2 bg-surface-cream border border-secondary-container rounded-lg p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Close up, high quality macro photography of a person's hands resting gently in a mudra on their knees during meditation. Soft natural light, muted tones of sage and cream. Focus on texture of the fabric and the skin, conveying a sense of profound stillness and mindful presence in a minimalist setting." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9oYc4hidlmMNXPH4uO82EvVHSoOxpp_vO7M4WuhbPMuVhmPD0oCMhZDHhZx5OicPIIp2T7zTpAE9SwZM5UpIk28snbksvTNJOI_l9exIV7irWOXYwSXk5FMATxtBnlCWhrQr0mKKfYXgCb3WYT4VFl8x-njIqTyEhjSi5do6UvS0eev89HPouKdx2kzcpHYak77WKG2Kz6_Ktbfx_wen1zQPnEQUzOzjURHNuYMp-WYgePbtKfAgKvN3aR0i6TgaApk-rhUdphuop')` }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
<div className="relative z-10">
<span className="inline-flex items-center gap-2 bg-healing-sage/20 text-surface-cream font-label-sm text-label-sm px-3 py-1 rounded-full mb-4 backdrop-blur-md">
<span className="material-symbols-outlined text-[16px]">psychology</span>
                                Radical Acceptance
                            </span>
<h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-3">Bridging the Gap</h3>
<p className="font-body-md text-body-md text-surface-container-low max-w-md">Drawing from Jacquelyn's personal journey as a plus-size yogi, our practice dismantles traditional barriers. We focus on how the pose feels, not how it looks, creating a safe container for profound somatic exploration.</p>
</div>
</div>
{/* Bento Item 2 */}
<div className="bg-surface-cream border border-secondary-container rounded-lg p-8 flex flex-col items-start hover:shadow-[0_20px_40px_-15px_rgba(3,7,28,0.05)] transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined">accessible_forward</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary mb-2">Accessibility First</h4>
<p className="font-body-md text-body-md text-secondary">Props aren't crutches; they are tools for deeper exploration. Every session integrates modifications tailored to your unique anatomical needs.</p>
</div>
{/* Bento Item 3 */}
<div className="bg-primary text-surface-cream rounded-lg p-8 flex flex-col items-start relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[120px] filled-icon">air</span>
</div>
<div className="w-12 h-12 rounded-full bg-ether-indigo-light flex items-center justify-center mb-6 text-surface-cream">
<span className="material-symbols-outlined">favorite</span>
</div>
<h4 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">Trauma-Informed</h4>
<p className="font-body-md text-body-md text-surface-container-low relative z-10">Pacing, language, and environment are carefully curated to support nervous system regulation and establish a profound sense of safety.</p>
</div>
</div>
</div>
</section>
 Pillars of Practice 
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-cream">
<div className="max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Offerings</h2>
<p className="font-body-md text-body-md text-secondary">Structured pathways designed to meet you exactly where you are today.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Offering 1 */}
<div className="group border border-secondary-container bg-surface p-8 rounded-lg hover:border-healing-sage transition-colors duration-300">
<div className="h-48 mb-6 rounded bg-cover bg-center overflow-hidden" data-alt="A serene, high-quality photograph of an elegant, minimalist living room set up for a private yoga session. A premium yoga mat is laid out near a large window. Soft, warm lighting, muted natural tones, conveying a sense of exclusivity and personalized care in an in-home setting." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9bIAJU9On56jYHA-J567XF-0GFMnf_2ChkAmpisY5A-L3F4uiYsgBaOaI2dJ693iIEESlY0l0AOB9Hwsov5ydm5DSEfoUHSnmNS_RtMwEae80t8CX2K_7bZ9-xt9GuCIQcN9vDpej-dKK24gaMVqz5quQ9kjaLxeSgF40RDKxGEUQ6SBiUADOeiGdD131VcEzWOKRE3ZPlUG7EYVBLuQvwlNPDeE-3gBrFvqbBNBy9onIagWo00BkMYN3SHgI_Q5C1KO7it4mfuoN')` }}></div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Private 1:1 Sessions</h3>
<p className="font-body-md text-body-md text-secondary mb-6">In-home, highly personalized guidance. Ideal for beginners, injury recovery, or deepening a specific aspect of your practice.</p>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary group-hover:text-healing-sage transition-colors" href="#">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/* Offering 2 */}
<div className="group border border-secondary-container bg-surface p-8 rounded-lg hover:border-healing-sage transition-colors duration-300">
<div className="h-48 mb-6 rounded bg-cover bg-center overflow-hidden" data-alt="A clean, bright image of a modern laptop screen displaying a high-quality video call of a yoga class. The setting around the laptop is a calm, minimal workspace with a small potted plant and a cup of tea. Emphasizes connection and community in a virtual setting." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqhBIBFVXx1CfOVFN0GApKs9D9ECoJQoJYegLOZ0cndC4RxyOWMLcm6GSP5M6oJbBllQSxngYHl33Gc_GuYutosEGHig7kpE20cZDIK8aLNZQdY7nQWe_JovatHfjDFNjfItJ4KxUFNAvUm_8K24vJh6rZJIXSiSDudKHpQ2fReZHkbWsRbuQ68ucSifABBuVFV9xfmsRXCtAvXMutIvSh366eWOQkt4jla3EBnrlWKgyaegPh8xxPpwWt4kjB4v0hddQg90vDEsej')` }}></div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Virtual Group Classes</h3>
<p className="font-body-md text-body-md text-secondary mb-6">Community-driven sessions accessible from anywhere. Focus on foundational alignment and synchronized breathwork.</p>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary group-hover:text-healing-sage transition-colors" href="#">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/* Offering 3 */}
<div className="group border border-secondary-container bg-surface p-8 rounded-lg hover:border-healing-sage transition-colors duration-300">
<div className="h-48 mb-6 rounded bg-cover bg-center overflow-hidden" data-alt="A tranquil, high-quality photograph of a comfortable, sturdy chair set up in a serene room with yoga props like blocks and a bolster nearby. Soft, diffused lighting, muted earth tones. The image conveys gentle support, accessibility, and restorative healing." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAn82nRNXIL7NkgaaRB5C74lohRQZWhjM9nTKVLyIkBHIa3871SnxlSa8nuapcFzvcZy5DTlNfFOqvujXqfsVfYifEjc8w8AmftZp3Vr4EmfL-m55ga2MGd0Jncmc_GWuAHMmTb6wzT9xzw18iHxQ_1tExMXQNDSTWHeVxv7GGgTSm8lovu8HtYLyTpxSEG3ks0i2cJWkatQbDkH5c1u-bhTRrZct9juD-fI2yrAs-CHktxTz23FpVYEy9uLCZ-HIJ0oxzJwasHJb56')` }}></div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Chair &amp; Restorative</h3>
<p className="font-body-md text-body-md text-secondary mb-6">Ultra-gentle practices utilizing props and chairs to eliminate strain, focusing entirely on deep relaxation and joint mobility.</p>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary group-hover:text-healing-sage transition-colors" href="#">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
 Breathwork Section (Asymmetric Layout) 
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-surface-cream overflow-hidden">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative">
{/* Subtle decorative background element */}
<div className="absolute -inset-10 bg-gradient-to-tr from-healing-sage/10 to-transparent rounded-full blur-3xl"></div>
<div className="relative rounded-lg overflow-hidden border border-surface-tint/30 aspect-[4/5]">
<div className="w-full h-full bg-cover bg-center" data-alt="A moody, high-end photograph of a person's torso and face in profile, silhouetted against a soft, ethereal light source. They are deeply engaged in breathwork, eyes closed, expression calm. The aesthetic is minimalist luxury, using deep indigo blacks and muted silver tones to convey introspective stillness." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDy0AggsC9dWx29OLQ47VcE0b7kaklmkhRlrBpzmhy8HzhnkYO4cIpKxnjuUmt3ncFE4gZyPhOqLojVsvQ1jhEcIFFrgn5sgP4z4WUQ-dyAaVNAhOrNCftzaZEpoXNevR7N-HUZZU5MgjBBpalML6qiG6GMxw7iV6F67N6EiYduveXR9Mkj7P7hRWq0SJkv8zyhRR9iWT2C-DODT64fCy9OusmLcxqMEPMIQ_YP669Fst4ziyei0ZoW7NZJitZtK0tMaWRVEd4OVQNK')` }}></div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="inline-flex items-center gap-2 bg-surface-tint/20 text-inverse-primary font-label-sm text-label-sm px-3 py-1 rounded-full mb-6">
<span className="material-symbols-outlined text-[16px]">air</span>
                        Pranayama
                    </span>
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-surface-container-lowest mb-6">The Science of Stillness</h2>
<p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">Breathwork is the physiological bridge to the parasympathetic nervous system. By consciously altering our breathing patterns, we directly command the body to shift from 'fight or flight' into 'rest and digest.'</p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-surface-tint/20 flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">waves</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-surface-container-lowest mb-1">Nervous System Regulation</h4>
<p className="font-body-md text-body-md text-primary-fixed-dim">Techniques specifically designed to down-regulate hyperarousal and anxiety.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-surface-tint/20 flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">ad_center</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-surface-container-lowest mb-1">Enhanced Interoception</h4>
<p className="font-body-md text-body-md text-primary-fixed-dim">Developing the ability to perceive internal bodily sensations with clarity and without judgment.</p>
</div>
</li>
</ul>
<button className="bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-4 rounded-DEFAULT hover:bg-surface-container-low transition-colors duration-300">
                        Learn Breathwork
                    </button>
</div>
</div>
</section>
 Pricing / Schedule Table 
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Investment &amp; Schedule</h2>
<p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">Transparent pricing for profound transformation. Sliding scale available upon request for marginalized communities.</p>
</div>
<div className="bg-surface-cream border border-secondary-container rounded-lg overflow-hidden max-w-4xl mx-auto shadow-[0_10px_30px_-15px_rgba(3,7,28,0.05)]">
<div className="grid grid-cols-1 md:grid-cols-4 border-b border-secondary-container bg-surface-container-low/50">
<div className="p-6 md:col-span-2 font-label-lg text-label-lg text-primary">Service</div>
<div className="p-6 font-label-lg text-label-lg text-primary">Duration</div>
<div className="p-6 font-label-lg text-label-lg text-primary">Investment</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 border-b border-secondary-container hover:bg-surface-container-lowest transition-colors">
<div className="p-6 md:col-span-2 flex items-center gap-4">
<span className="material-symbols-outlined text-healing-sage">home</span>
<div>
<div className="font-body-lg text-body-lg text-primary">Private In-Home Session</div>
<div className="font-body-md text-body-md text-secondary">Personalized assessment and practice</div>
</div>
</div>
<div className="p-6 flex items-center font-body-md text-body-md text-secondary">75 mins</div>
<div className="p-6 flex items-center font-body-lg text-body-lg text-primary">$120</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 border-b border-secondary-container hover:bg-surface-container-lowest transition-colors">
<div className="p-6 md:col-span-2 flex items-center gap-4">
<span className="material-symbols-outlined text-healing-sage">computer</span>
<div>
<div className="font-body-lg text-body-lg text-primary">Virtual Group Class Drop-In</div>
<div className="font-body-md text-body-md text-secondary">Tuesdays &amp; Thursdays, 7AM EST</div>
</div>
</div>
<div className="p-6 flex items-center font-body-md text-body-md text-secondary">60 mins</div>
<div className="p-6 flex items-center font-body-lg text-body-lg text-primary">$20</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 border-b border-secondary-container hover:bg-surface-container-lowest transition-colors">
<div className="p-6 md:col-span-2 flex items-center gap-4">
<span className="material-symbols-outlined text-healing-sage">chair_alt</span>
<div>
<div className="font-body-lg text-body-lg text-primary">Chair/Restorative Package</div>
<div className="font-body-md text-body-md text-secondary">Bundle of 4 focused gentle sessions</div>
</div>
</div>
<div className="p-6 flex items-center font-body-md text-body-md text-secondary">4 x 60 mins</div>
<div className="p-6 flex items-center font-body-lg text-body-lg text-primary">$350</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="bg-primary text-on-primary font-label-lg text-label-lg px-10 py-4 rounded-DEFAULT hover:bg-ether-indigo-light transition-colors duration-300 shadow-[0_10px_30px_-15px_rgba(3,7,28,0.2)]">
                        View Full Schedule &amp; Book
                    </button>
</div>
</div>
</section>

    </>
  );
}
