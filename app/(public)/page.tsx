import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      
 Hero Section 
<section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 space-y-8">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
                    Bridging Clinical Science &amp; Ancestral Soul
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                    Discover the journey of Jacquelyn, where profound lived experience meets rigorous professional expertise to create a sanctuary for true healing.
                </p>
<div className="h-px w-24 bg-tertiary-fixed-dim"></div>
</div>
<div className="md:w-1/2 relative w-full aspect-[3/4] md:aspect-square overflow-hidden rounded-xl">
<Image fill className="object-cover w-full h-full" data-alt="A highly professional and serene portrait of a distinguished transgender woman therapist, Jacquelyn, standing in a brightly lit, modern luxury wellness sanctuary. She exudes warmth and profound wisdom, wearing elegant, understated clothing in muted earth tones. The lighting is soft and high-key, illuminating the minimalist space featuring subtle natural elements like sage green accents and smooth pale stone textures, aligning with a light-mode ethereal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYmDEoqHR1wAw6YwfbNhuU6TerkLJSfa3DTxwRpgByfogdh5on5L4VY0FtuOcGayuziCibfPj78YA7ixI8-hwzJihdalOYff2IgbigIJ_9C1kk8iBWZKVlQy4TGRoy1kNo7Dqo7J_mPB9U1ndc5oQf0jJCmqm76U8yl5RSu8gckJY6TPpCAgQ2l7hBBqDHxYTbkj_MS4ErJ8UzgzLdB6zqu6Ij5wYKjd1b6LvhYJLiAc1mrciLXxvDLgNrZ4tpMMbWlq-Ovf6Fraia"/>
<div className="absolute inset-0 bg-primary/5"></div>
</div>
</section>
 Founder Story 
<section className="bg-surface-cream py-24 md:py-32 px-margin-mobile md:px-margin-desktop">
<div className="max-w-container-max mx-auto grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary sticky top-32">
                        The Founder's Journey
                    </h2>
</div>
<div className="md:col-span-8 space-y-8 font-body-lg text-body-lg text-on-surface-variant">
<p>
                        My path to healing was forged through the fires of personal transformation. As a transgender woman navigating the complex intersections of identity, societal expectations, and the profound need for authentic embodiment, I learned early that true healing requires more than treating symptoms—it requires a safe harbor for the soul.
                    </p>
<p>
                        For years, I sought solace in places that often felt sterile and disconnected from the deeper spiritual and emotional realities of lived experience. This propelled me to become an addiction therapist, determined to offer the compassionate, deeply resonant care I once searched for.
                    </p>
<p>
                        Through my journey as an author and practitioner, I realized that clinical science provides the framework, but ancestral wisdom provides the breath. By integrating these modalities, I aim to create spaces where every individual, regardless of their path, feels seen, honored, and fundamentally safe.
                    </p>
</div>
</div>
</section>
 Pillars Section (Bento Grid Style) 
<section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-16">
<span className="font-label-lg text-label-lg text-healing-sage uppercase tracking-widest">Our Foundation</span>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-4">The Pillars of Practice</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Pillar 1 */}
<div className="bg-surface-cream rounded-xl p-10 border border-secondary-container hover:shadow-2xl transition-shadow duration-500 flex flex-col items-start group">
<div className="w-16 h-16 rounded-full bg-surface-bright flex items-center justify-center mb-8 border border-secondary-container group-hover:border-tertiary-fixed-dim transition-colors">
<span className="material-symbols-outlined text-primary" style={{ 'font-size': '32px', fontVariationSettings: ''FILL' 0' }}>psychology</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Clinical Expertise</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                        Grounded in rigorous evidence-based practices as an OASAS Provider, delivering structured, safe, and professional therapeutic interventions for sustainable recovery.
                    </p>
</div>
{/* Pillar 2 */}
<div className="bg-primary text-on-primary rounded-xl p-10 shadow-lg flex flex-col items-start relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-ether-indigo-light rounded-full blur-3xl opacity-50"></div>
<div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-8 border border-ether-indigo-light relative z-10">
<span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ 'font-size': '32px', fontVariationSettings: ''FILL' 1' }}>spa</span>
</div>
<h3 className="font-headline-md text-headline-md text-surface-bright mb-4 relative z-10">Spiritual Wisdom</h3>
<p className="font-body-md text-body-md text-primary-fixed-dim flex-grow relative z-10">
                        Integrating ancient traditions like Ayurveda and Tarot to address the energetic and spiritual imbalances, fostering holistic alignment of mind, body, and spirit.
                    </p>
</div>
{/* Pillar 3 */}
<div className="bg-surface-cream rounded-xl p-10 border border-secondary-container hover:shadow-2xl transition-shadow duration-500 flex flex-col items-start group">
<div className="w-16 h-16 rounded-full bg-surface-bright flex items-center justify-center mb-8 border border-secondary-container group-hover:border-tertiary-fixed-dim transition-colors">
<span className="material-symbols-outlined text-primary" style={{ 'font-size': '32px', fontVariationSettings: ''FILL' 0' }}>diversity_1</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Inclusive Advocacy</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                        A fierce commitment to creating affirming spaces focusing on Body Positivity and LGBTQ+ advocacy, ensuring every lived experience is validated and celebrated.
                    </p>
</div>
</div>
</section>
 Credentials & Publications 
<section className="py-24 md:py-32 bg-surface border-y border-surface-container-high">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">Professional Standing</h2>
<ul className="space-y-6">
<li className="flex items-start">
<span className="material-symbols-outlined text-tertiary-fixed-dim mr-4 mt-1" style={{ fontVariationSettings: ''FILL' 1' }}>verified</span>
<div>
<span className="block font-label-lg text-label-lg text-primary">OASAS-Approved Education Provider</span>
<span className="block font-body-md text-body-md text-on-surface-variant mt-1">Provider ID: #1158</span>
</div>
</li>
<li className="flex items-start">
<span className="material-symbols-outlined text-tertiary-fixed-dim mr-4 mt-1" style={{ fontVariationSettings: ''FILL' 1' }}>handshake</span>
<div>
<span className="block font-label-lg text-label-lg text-primary">NCADD Partnerships</span>
<span className="block font-body-md text-body-md text-on-surface-variant mt-1">Collaborating for excellence in addiction treatment.</span>
</div>
</li>
<li className="flex items-start">
<span className="material-symbols-outlined text-tertiary-fixed-dim mr-4 mt-1" style={{ fontVariationSettings: ''FILL' 1' }}>menu_book</span>
<div>
<span className="block font-label-lg text-label-lg text-primary">Published Author</span>
<span className="block font-body-md text-body-md text-on-surface-variant mt-1">Author of 5 acclaimed books bridging therapy and spirituality.</span>
</div>
</li>
</ul>
</div>
<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(3,7,28,0.1)]">
<Image fill className="object-cover w-full h-full" data-alt="A beautifully styled flat lay on a warm, pale sandstone surface. The composition includes several elegantly bound books authored by Jacquelyn, interspersed with subtle clinical and spiritual items: a minimalist stethoscope, a small bundle of dried sage, and a muted gold tarot card. Soft, diffused daylight filters across the arrangement, highlighting the premium, serene luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDER5J4D97JXoDLhv6dqO_g0u8Jsj6eTEhjuG4SdU5zIVJDO7FvbG9HyDop1e8os2Jb5g55_HXjvlFONf9y_MHEJI9YdJt-g3oL241s7c2yxgoiqKGatOPxRICNZJP9znkeHrul_JXhVNyYrTZjo-ZmG8p5aejChIFX8KEGkh8oB_7DPMg0uxvnNYnPyRwhXxM-ad_sTrq-JVCdKVcHMg3HzO1jXGaDlhB6ygExF5mJ5lSuDScKkQx7_crQyxVuEmZud6Kk3vdgAljj"/>
</div>
</div>
</section>
 Mission/Vision 
<section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
<div className="max-w-3xl mx-auto space-y-12">
<span className="material-symbols-outlined text-tertiary-fixed-dim opacity-50" style={{ 'font-size': '48px' }}>flare</span>
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Our Purpose &amp; The Sanctuary</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                        Our purpose is to illuminate the path to profound healing by recognizing the wholeness of every individual. The Sanctuary is not merely a clinical setting; it is a meticulously curated space of emotional safety and quiet luxury, where the noise of the world falls away, allowing the truest self to emerge and thrive.
                    </p>
</div>
</div>
</section>
 CTA 
<section className="py-32 bg-primary text-on-primary text-center px-margin-mobile relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-surface-bright mb-8">Begin Your Journey</h2>
<p className="font-body-lg text-body-lg text-primary-fixed-dim mb-12">Take the first step towards integration and profound healing in a space designed for your emotional safety.</p>
<button className="bg-surface-bright text-primary px-10 py-4 rounded-DEFAULT font-label-lg text-label-lg hover:bg-surface-dim transition-colors tracking-widest shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]">
                    SCHEDULE A CONSULTATION
                </button>
</div>
</section>

    </>
  );
}
