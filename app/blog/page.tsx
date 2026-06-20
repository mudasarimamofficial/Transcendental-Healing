import Link from "next/link";

export default function Page() {
  return (
    <>
      
 Hero Section 
<section className="relative min-h-[819px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-24 overflow-hidden">
<!-- Background Image -->
<div className="absolute inset-0 z-0">
<div className="bg-cover bg-center w-full h-full opacity-40 mix-blend-multiply filter grayscale-[30%]" data-alt="A serene, minimalist wellness space bathed in soft, diffused morning light. The room features natural materials like light oak wood, smooth concrete, and subtle touches of brass. A large window lets in ethereal, high-key white light, casting gentle, elongated shadows across a pristine white floor. The aesthetic is modern-luxury, evoking profound calm, professional authority, and deep mental clarity. The color palette focuses on whites, soft creams, and muted sages." style={{ backgroundImage: 'url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFoMDHZg17sli9MZEdtoC1lxoL5Q5bGqzZG343A3U-zMFCZ5_SrxXnK5DQh19iK4_8ewq57878QaO07_Ke3AppwNDp4pAeHiO6uM7YYFRaPNnckYa7asV76tsZNjXPrqmHQQ36zhv0duHfmb7v_eZSN0QCMxPCGmDd026SWee_31EwqG2B961JSd1LaM6dc2Mljcto5D8cCjyHQv22xeKj8WMSZMWWsoDWm-pSZeuVyCdWsPuoykNXkTrkcAxRTg9fcs3DzqL2NtRx')' }}></div>
<!-- Gradient Overlay for readability -->
<div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
</div>
<div className="relative z-10 max-w-[800px] text-center fade-in-up">
<span className="inline-block mb-6 px-4 py-1.5 bg-healing-sage/20 text-on-secondary-fixed font-label-sm text-label-sm rounded-full tracking-wider uppercase border border-healing-sage/30">
                    OASAS-Approved Provider #1158
                </span>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-8 text-balance">
                    Elevate Your Clinical Impact
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-[600px] mx-auto text-balance">
                    Advanced continuing education for addiction professionals. Master the art of engagement, deepen your theoretical foundations, and expand your therapeutic presence.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-primary text-tertiary-fixed font-label-lg text-label-lg rounded hover:bg-ether-indigo-light transition-all shadow-[0_20px_40px_-15px_rgba(3,7,28,0.2)]" href="#catalog">
                        Explore Courses
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-tertiary-fixed-dim text-primary font-label-lg text-label-lg rounded hover:bg-surface-cream transition-colors" href="#accreditation">
                        View Credentials
                    </a>
</div>
</div>
</section>
 Stats / Accreditation Highlight 
<section className="py-16 bg-surface-cream border-y border-secondary-fixed">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-secondary-fixed/50">
<div className="text-center px-4 fade-in-up">
<div className="font-display-lg-mobile text-display-lg-mobile text-healing-sage mb-2">1158</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">OASAS Provider ID</div>
</div>
<div className="text-center px-4 fade-in-up" style={{ 'transition-delay': '100ms' }}>
<div className="font-display-lg-mobile text-display-lg-mobile text-healing-sage mb-2">3.0</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">CEU Hours / Course</div>
</div>
<div className="text-center px-4 fade-in-up" style={{ 'transition-delay': '200ms' }}>
<div className="font-display-lg-mobile text-display-lg-mobile text-healing-sage mb-2">$15</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Accessible Tuition</div>
</div>
<div className="text-center px-4 fade-in-up" style={{ 'transition-delay': '300ms' }}>
<div className="font-display-lg-mobile text-display-lg-mobile text-healing-sage mb-2">100+</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Professionals Trained</div>
</div>
</div>
</div>
</section>
 Course Catalog (Bento Grid) 
<section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-background" id="catalog">
<div className="max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-in-up">
<div className="max-w-[600px]">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Upcoming Seminars</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Intensive, highly-focused workshops designed to immediately translate into enhanced clinical outcomes.</p>
</div>
<div className="mt-6 md:mt-0">
<span className="inline-flex items-center text-healing-sage font-label-lg text-label-lg border-b border-healing-sage/30 pb-1">
                            Filter by Format <span className="material-symbols-outlined ml-2 text-[18px]">filter_list</span>
</span>
</div>
</div>
<!-- Bento Grid -->
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(180px,auto)]">
<!-- Featured Course (Large) -->
<article className="md:col-span-8 md:row-span-2 group relative bg-surface-cream rounded-xl border border-secondary-fixed overflow-hidden flex flex-col justify-end p-8 fade-in-up cursor-pointer transition-transform hover:-translate-y-1 duration-300">
<div className="absolute inset-0 z-0">
<div className="bg-cover bg-center w-full h-full opacity-60 transition-transform duration-700 group-hover:scale-105 filter saturate-50 group-hover:saturate-100" data-alt="A macro photograph of two hands gently holding a small, smooth river stone. The lighting is soft and warm, highlighting the texture of the skin and the stone. The background is a beautifully blurred, muted sage green. The image conveys themes of support, engagement, trust, and profound emotional holding, aligning with a premium, quiet wellness aesthetic." style={{ backgroundImage: 'url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_mARLc8B7A5rCNIMy1dq2ANzv-eqIIx5AxhBsQ58v0BPL65d10iz88d2TOSjJK5j8bIMSTg8yjP0KHL60JvNjxHviRh12esfJtuRtJdCh-5VZLc6mA64gNL4ZQdrjor8AYTtSEKEysZ9hwmeVZmJd4r395eY5gh1_AV3v_zuWI7rYWzyqNFQkji2sj54k-c1_uM1iB5WSGOc_fBI_7by002W9xiWpf63nCJDjgY5LSqb8nTUowD9qQtA6jeZOxd6ucEjJmbimx-Un')' }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex flex-wrap gap-3 mb-4">
<span className="px-3 py-1 bg-surface-cream/20 backdrop-blur-sm text-surface-cream font-label-sm text-label-sm rounded border border-surface-cream/30">Virtual</span>
<span className="px-3 py-1 bg-tertiary-fixed-dim/90 text-tertiary font-label-sm text-label-sm rounded">3 CEU Hours</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-primary mb-3">Engagement: What is it?</h3>
<p className="font-body-md text-body-md text-surface-container-high max-w-[500px] mb-6 line-clamp-2">Move beyond superficial rapport-building. Explore the psychological architecture of profound therapeutic alliances and learn techniques to sustain engagement through resistance.</p>
<div className="flex items-center justify-between border-t border-surface-container-high/20 pt-4">
<div className="font-label-lg text-label-lg text-tertiary-fixed-dim">Oct 15, 2024 • 1:00 PM EST</div>
<div className="font-label-lg text-label-lg text-on-primary group-hover:text-tertiary-fixed-dim transition-colors flex items-center">
                                    Register <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
</div>
</div>
</div>
</article>
<!-- Course 2 (Medium) -->
<article className="md:col-span-4 md:row-span-1 bg-surface-cream rounded-xl border border-secondary-fixed p-8 flex flex-col fade-in-up" style={{ 'transition-delay': '100ms' }}>
<div className="flex justify-between items-start mb-6">
<span className="p-2 bg-healing-sage/10 rounded-lg text-healing-sage">
<span className="material-symbols-outlined">psychology</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">In-Person</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 mt-auto">Psychoeducation: Why we do it</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Reframing information delivery as a vital therapeutic intervention.</p>
<div className="flex items-center justify-between mt-auto border-t border-secondary-fixed pt-4">
<div className="font-label-sm text-label-sm text-surface-tint">3 CEU • $15</div>
<a className="text-primary hover:text-healing-sage transition-colors" href="#"><span className="material-symbols-outlined">arrow_outward</span></a>
</div>
</article>
<!-- Course 3 (Medium) -->
<article className="md:col-span-4 md:row-span-1 bg-surface-container-low rounded-xl border border-secondary-fixed p-8 flex flex-col fade-in-up" style={{ 'transition-delay': '200ms' }}>
<div className="flex justify-between items-start mb-6">
<span className="p-2 bg-tertiary-fixed/30 rounded-lg text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined">group</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">Hybrid</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2 mt-auto">Group Dynamics in Recovery</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Navigating complex interpersonal spaces in group therapy settings.</p>
<div className="flex items-center justify-between mt-auto border-t border-secondary-fixed pt-4">
<div className="font-label-sm text-label-sm text-surface-tint">Nov 12, 2024</div>
<a className="text-primary hover:text-healing-sage transition-colors" href="#"><span className="material-symbols-outlined">arrow_outward</span></a>
</div>
</article>
</div>
</div>
</section>
 Deep Dive / Value Prop Section 
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-cream relative overflow-hidden">
<div className="max-w-container-max mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
                            Accessible Excellence
                        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                            We believe that premium, transformative continuing education shouldn't be cost-prohibitive. Our commitment is to elevate the standard of care across the field by offering top-tier clinical training at highly accessible rates.
                        </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start">
<span className="material-symbols-outlined text-healing-sage mt-1 mr-4">check_circle</span>
<div>
<h4 className="font-label-lg text-label-lg text-primary mb-1">Standardized Pricing</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Every 3-hour seminar is uniformly priced at $15.</p>
</div>
</li>
<li className="flex items-start">
<span className="material-symbols-outlined text-healing-sage mt-1 mr-4">check_circle</span>
<div>
<h4 className="font-label-lg text-label-lg text-primary mb-1">Dual Modality</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Choose between intimate virtual sessions or immersive in-person workshops.</p>
</div>
</li>
<li className="flex items-start">
<span className="material-symbols-outlined text-healing-sage mt-1 mr-4">check_circle</span>
<div>
<h4 className="font-label-lg text-label-lg text-primary mb-1">Immediate Certification</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Certificates of completion are issued digitally within 24 hours.</p>
</div>
</li>
</ul>
</div>
<div className="relative h-[600px] w-full rounded-2xl overflow-hidden fade-in-up" style={{ 'transition-delay': '200ms' }}>
<div className="bg-cover bg-center w-full h-full" data-alt="An abstract, architectural interior shot of a modern wellness retreat. Soft, diffused daylight spills across curved, sand-colored walls and a minimalist wooden bench. The space is vast, quiet, and devoid of clutter. The high-key lighting creates a sense of ethereal lightness, professional calm, and spaciousness. The color palette is restricted to creamy whites, soft beiges, and muted architectural grays." style={{ backgroundImage: 'url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCKdDs_7KkuXDqj9YFR2yyLjuKUxuCowMqj4hzsbdIrB3NpMXmzYTfuC1EAiKM57HRtcZ6gMyBeg8BHZ91wDTY_pJg-cE5JEPxQlup6kJwRYwWBVBr6P_yseQAA16LEWff_fO8f_VRMeMsG14knh0EjyLmjpJE6v9qVN-f2CSzxAL-rSVz74u3TZIRtYJVpYBHQlOqmcRuWnIpKCojOjCQmrSEuGo6AZAqVPY4cmiG5Cg6Dh5LRlSh3Cw2gLDsjg72j2jsg6fgV8mT')' }}></div>
</div>
</div>
</div>
</section>
 Testimonials 
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16 fade-in-up">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Clinical Reflections</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Feedback from participating professionals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Testimonial 1 -->
<div className="bg-surface-cream p-8 border border-secondary-fixed rounded-xl fade-in-up">
<div className="text-healing-sage mb-6">
<span className="material-symbols-outlined fill text-[32px]">format_quote</span>
</div>
<p className="font-body-md text-body-md text-primary mb-8 min-h-[120px]">
                            "The seminar on Engagement shifted my entire clinical approach. It was less about ticking boxes for CEUs and more about profoundly rethinking how I sit with my clients. Incredibly valuable."
                        </p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-secondary-container mr-4"></div>
<div>
<div className="font-label-lg text-label-lg text-primary">Sarah M.</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">CASAC-T</div>
</div>
</div>
</div>
<!-- Testimonial 2 -->
<div className="bg-surface-cream p-8 border border-secondary-fixed rounded-xl fade-in-up" style={{ 'transition-delay': '100ms' }}>
<div className="text-healing-sage mb-6">
<span className="material-symbols-outlined fill text-[32px]">format_quote</span>
</div>
<p className="font-body-md text-body-md text-primary mb-8 min-h-[120px]">
                            "Finally, a continuing education provider that treats us like professionals rather than students. The material was complex, nuanced, and immediately applicable to my high-acuity caseload."
                        </p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-secondary-container mr-4"></div>
<div>
<div className="font-label-lg text-label-lg text-primary">David L.</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">LCSW</div>
</div>
</div>
</div>
<!-- Testimonial 3 -->
<div className="bg-surface-cream p-8 border border-secondary-fixed rounded-xl fade-in-up" style={{ 'transition-delay': '200ms' }}>
<div className="text-healing-sage mb-6">
<span className="material-symbols-outlined fill text-[32px]">format_quote</span>
</div>
<p className="font-body-md text-body-md text-primary mb-8 min-h-[120px]">
                            "The pricing is remarkably accessible for the caliber of instruction provided. The facilitator created a remarkably safe space to discuss our clinical blind spots."
                        </p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-secondary-container mr-4"></div>
<div>
<div className="font-label-lg text-label-lg text-primary">Dr. Elena R.</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Clinical Psychologist</div>
</div>
</div>
</div>
</div>
</div>
</section>
 Final CTA 
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary text-center relative overflow-hidden" id="enroll">
<!-- Subtle background pattern -->
<div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 'background-size': '32px 32px' }}></div>
<div className="max-w-[700px] mx-auto relative z-10 fade-in-up">
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-6">
                    Advance Your Practice
                </h2>
<p className="font-body-lg text-body-lg text-primary-fixed-dim mb-12 text-balance">
                    Join a community of dedicated professionals committed to elevating the standard of addiction treatment. Secure your spot in our upcoming seminars today.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg rounded hover:bg-tertiary-fixed-dim transition-colors shadow-lg" href="#catalog">
                        Enroll in a Course
                    </a>
</div>
<div className="mt-8 font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest">
                    OASAS Approved Education Provider #1158
                </div>
</div>
</section>

    </>
  );
}
