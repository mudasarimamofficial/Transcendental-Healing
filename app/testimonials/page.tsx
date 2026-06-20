import Link from "next/link";

export default function Page() {
  return (
    <>
      
 Hero Section 
<section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 max-w-3xl mx-auto">
                Stories of Restoration &amp; Hope
            </h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-12">
                Witness the profound transformations and journeys of healing experienced by our clients and students. A testament to the power of holistic, integrative wellness.
            </p>
</section>
 Video Testimonials Grid 
<section className="py-16 px-margin-mobile md:px-margin-desktop bg-surface-cream">
<div className="max-w-container-max mx-auto">
<div className="flex items-center gap-4 mb-12">
<span className="material-symbols-outlined text-healing-sage text-[32px]">play_circle</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Patient Stories</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Video Card 1 -->
<div className="group cursor-pointer relative overflow-hidden rounded-xl border border-secondary-fixed">
<div className="aspect-[4/3] relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A serene portrait of a middle-aged woman sitting by a bright window, bathed in soft morning light. The setting is a minimalist, modern living room with neutral cream and beige tones, reflecting a calm, wellness-oriented aesthetic. The woman appears peaceful and grounded, embodying the concept of emotional restoration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUpOwOeCQW_3WsvCBpScT7PnHjUvXejdIGwGcmsahmGo6R_xFh-Z0A-iU8DCMukFQJHs_huyy089kcl1I3RDIJtHrxlwftIcC8c0m4RQSKF07URkbksJhScnm1JdZofFYihP0K7MsJqijAdM1UzU94o2mnZm-GH6HYaFmoBWqO2BRaVyM5u9MK5bW9bWZx0aMFd74lUZ96atn5HQeygLWcq7BySgR1Nlu90r_sGJ98X33TzseAETTFUNcwu3ikIEdyFtXcHNWYA0IA"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-surface-cream/80 blur-overlay flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary fill-icon text-[32px] ml-1">play_arrow</span>
</div>
</div>
</div>
<div className="p-6 bg-surface-cream">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Finding Inner Peace</h3>
<p className="text-secondary font-body-md text-body-md line-clamp-2">"After years of struggling, the somatic therapy sessions finally gave me the tools to reconnect with my body in a safe way."</p>
<div className="mt-4 flex items-center gap-2">
<span className="bg-healing-sage/20 text-healing-sage px-3 py-1 rounded-full text-label-sm font-label-sm">Somatic Therapy</span>
</div>
</div>
</div>
<!-- Video Card 2 -->
<div className="group cursor-pointer relative overflow-hidden rounded-xl border border-secondary-fixed">
<div className="aspect-[4/3] relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A young professional man walking meditatively in a lush, green forest pathway. The lighting is dappled and ethereal, highlighting the natural surroundings. The aesthetic is organic, peaceful, and grounded, representing a journey towards clarity and addiction recovery in a holistic manner." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD68AXTlO2xZc6Wl00CEyC-d5NM7MLd-kiAfe8pzSoYHm_FeEvf5s9w3BGRx-_LP1NeMeaW8I6W_D9i463vUl0PUnWCro8BTjebXn_GbuPPs85euksJpE1m7wIytpQkN6wbcdf2gOlSfZ8lEPT1ri4fTOQ3ZMZWlo7yg9571YDSI14-GscfTLGGSJSI0gwBb08TNt06bkxJ483c7lc9kKD0opSGr5tyYLw4XswcCGN91Ik0MJjfsrzLUlj6cGN2MTBZ-Hpidt_k-Yq6"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-surface-cream/80 blur-overlay flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary fill-icon text-[32px] ml-1">play_arrow</span>
</div>
</div>
</div>
<div className="p-6 bg-surface-cream">
<h3 className="font-headline-md text-headline-md text-primary mb-2">A New Perspective</h3>
<p className="text-secondary font-body-md text-body-md line-clamp-2">"The integration of breathwork with traditional counseling created a breakthrough I never thought possible in my recovery journey."</p>
<div className="mt-4 flex items-center gap-2">
<span className="bg-healing-sage/20 text-healing-sage px-3 py-1 rounded-full text-label-sm font-label-sm">Addiction Recovery</span>
</div>
</div>
</div>
<!-- Video Card 3 -->
<div className="group cursor-pointer relative overflow-hidden rounded-xl border border-secondary-fixed">
<div className="aspect-[4/3] relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up of hands gently holding a small, glowing crystal during a holistic therapy session. The background is softly blurred out, showing warm, muted tones of a healing sanctuary. The mood is intimate, focused, and deeply spiritual, aligning with the premium, minimalist aesthetic of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbNivFyS77ZejHGSanh9kVBXmE8b6M_7Yte1pxJV6Yrpy_o251sIltit4xiQSDOUqyxOFaYFq91AGJH2dqHxIegon3w9oxBSASRY7AB1GkfAB2Bej8a7fVS5ouInHCXqXBqfKgNg1BLCfBiDlNOvgt4wog6FhG8KWcDuddzJHzinKGu46bZOLnLdD-Zd7ufW9Wm1uGG0E0nF86HFJJrmiRI_nGDHMUGMF1hVNwN-ZrkLH0rGSvguUXBRDj3JNHtbkmQjwEhSjyvCPG"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-surface-cream/80 blur-overlay flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary fill-icon text-[32px] ml-1">play_arrow</span>
</div>
</div>
</div>
<div className="p-6 bg-surface-cream">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Empowered Healing</h3>
<p className="text-secondary font-body-md text-body-md line-clamp-2">"Learning to trust my intuition again was the greatest gift. The sanctuary space provided the perfect container for my healing."</p>
<div className="mt-4 flex items-center gap-2">
<span className="bg-healing-sage/20 text-healing-sage px-3 py-1 rounded-full text-label-sm font-label-sm">Holistic Integration</span>
</div>
</div>
</div>
</div>
</div>
</section>
 Statistics Banner 
<section className="py-20 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--tw-colors-tertiary-fixed) 0%, transparent 50%)' }}></div>
<div className="max-w-container-max mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-surface-tint/30">
<div className="py-6 md:py-0 px-4">
<div className="font-display-lg text-display-lg text-tertiary-fixed mb-2">1,000+</div>
<div className="font-label-lg text-label-lg uppercase tracking-wider text-inverse-primary">Professionals Trained</div>
</div>
<div className="py-6 md:py-0 px-4">
<div className="font-display-lg text-display-lg text-tertiary-fixed mb-2">15+</div>
<div className="font-label-lg text-label-lg uppercase tracking-wider text-inverse-primary">Years Clinical Experience</div>
</div>
<div className="py-6 md:py-0 px-4">
<div className="flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[48px] text-tertiary-fixed">favorite</span>
</div>
<div className="font-label-lg text-label-lg uppercase tracking-wider text-inverse-primary">Inclusive Sanctuary for All</div>
</div>
</div>
</div>
</section>
 Written Reviews Masonry 
<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Community Voices</h2>
<p className="text-secondary font-body-lg max-w-2xl">Reflections from clients and professionals who have walked this path before you.</p>
</div>
<div className="masonry-grid">
<!-- Review 1 -->
<div className="masonry-item bg-surface-cream border border-secondary-fixed p-8 rounded-2xl relative">
<span className="material-symbols-outlined absolute top-6 right-6 text-secondary-fixed-dim text-[40px] opacity-30">format_quote</span>
<div className="flex items-center gap-1 mb-6">
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
</div>
<p className="font-body-lg text-body-lg text-primary mb-6 leading-relaxed">
                        "The CEU training on trauma-informed breathwork completely shifted my clinical practice. The depth of knowledge and the ethereal, calm environment made learning deeply immersive."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-headline-md text-primary">S</div>
<div>
<div className="font-label-lg text-label-lg text-primary">Sarah M.</div>
<div className="font-body-md text-body-md text-secondary">LCSW, Student</div>
</div>
</div>
</div>
<!-- Review 2 -->
<div className="masonry-item bg-surface-cream border border-secondary-fixed p-8 rounded-2xl relative">
<span className="material-symbols-outlined absolute top-6 right-6 text-secondary-fixed-dim text-[40px] opacity-30">format_quote</span>
<div className="flex items-center gap-1 mb-6">
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
</div>
<p className="font-body-lg text-body-lg text-primary mb-6 leading-relaxed">
                        "Finding this sanctuary was a turning point. The space itself feels like an exhale. The integration of Ayurveda and psychotherapy is handled with such profound respect and professionalism."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-headline-md text-primary">J</div>
<div>
<div className="font-label-lg text-label-lg text-primary">James T.</div>
<div className="font-body-md text-body-md text-secondary">Client</div>
</div>
</div>
</div>
<!-- Review 3 -->
<div className="masonry-item bg-surface-cream border border-secondary-fixed p-8 rounded-2xl relative">
<span className="material-symbols-outlined absolute top-6 right-6 text-secondary-fixed-dim text-[40px] opacity-30">format_quote</span>
<div className="flex items-center gap-1 mb-6">
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
</div>
<p className="font-body-lg text-body-lg text-primary mb-6 leading-relaxed">
                        "An absolute masterclass in holding space. As a fellow practitioner, I am constantly inspired by the level of care and the seamless blending of clinical rigor with spiritual wisdom."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-headline-md text-primary">E</div>
<div>
<div className="font-label-lg text-label-lg text-primary">Elena R.</div>
<div className="font-body-md text-body-md text-secondary">Therapist</div>
</div>
</div>
</div>
<!-- Review 4 -->
<div className="masonry-item bg-surface-cream border border-secondary-fixed p-8 rounded-2xl relative">
<span className="material-symbols-outlined absolute top-6 right-6 text-secondary-fixed-dim text-[40px] opacity-30">format_quote</span>
<div className="flex items-center gap-1 mb-6">
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim fill-icon">star</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim">star_half</span>
</div>
<p className="font-body-lg text-body-lg text-primary mb-6 leading-relaxed">
                        "The recovery coaching here is unlike any standard program. It's gentle, profound, and treats the whole person. The environment feels incredibly safe and non-judgmental."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-headline-md text-primary">M</div>
<div>
<div className="font-label-lg text-label-lg text-primary">Michael K.</div>
<div className="font-body-md text-body-md text-secondary">Client</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
