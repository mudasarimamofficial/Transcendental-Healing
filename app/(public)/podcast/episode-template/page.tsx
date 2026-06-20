import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";
import PublicHeader from "@/app/components/PublicHeader";
import PublicFooter from "@/app/components/PublicFooter";

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <PublicHeader />
{/* TopNavBar Component */}
{/* Main Content Canvas */}
<main className="flex-grow pt-[120px] pb-20">
  {/* Hero Section */}
  <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-32">
    <div className="flex flex-col md:flex-row gap-12 items-start">
      {/* Episode Art */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(26,31,53,0.1)] relative">
          <img className="w-full h-full object-cover" data-alt="Abstract, ethereal digital art suitable for a podcast cover. Soft, organic shapes blending deep indigo and muted gold tones. High-end, gallery-quality composition evoking themes of introspection, healing, and profound transformation. The lighting is soft and diffuse, creating a serene, meditative atmosphere. The overall style is minimalist and modern-luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWbKKNA8rwDcagCIJYgEZpeCdNXK7mgAGWC7QJfk0wvz69G5I5Ed3iaKiWexj5RLiUgAdPz9aeKKJH5P1lnUheDp7ovNGGoBsLPBxA2aRUjF7mQKj2BIWVZlQAOBsZsPkZsomxdhEvUIiifNKec_DRePrsDvHnrMUM2eTm_AF0brNhXDnTuVdnw1bGCL6YrrACj_FBKXO7lgeF7llatfvWVGvxt0n-6fFXSddsgg2WtEFidc5BCRFVezshnBFivu-grYHqu7OwgWpD" />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>
      {/* Episode Details */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-healing-sage/20 text-healing-sage px-4 py-1.5 rounded-full font-label-sm text-label-sm tracking-widest uppercase">Episode 42</span>
          <span className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            October 24, 2024
          </span>
          <span className="text-on-surface-variant font-body-md text-body-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            45 min
          </span>
        </div>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6 leading-tight">
          The Theology of Pain
        </h1>
        <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-2xl leading-relaxed">
          An exploration of suffering as a catalyst for profound spiritual awakening. We sit down with Dr. Aris Thorne to deconstruct the intersection of chronic pain, ancient wisdom, and modern resilience.
        </p>
        {/* Audio Player Component */}
        <div className="bg-surface-cream rounded-2xl p-6 md:p-8 border border-secondary-fixed shadow-[0_30px_60px_-15px_rgba(26,31,53,0.05)] w-full max-w-3xl">
          <div className="flex items-center gap-6">
            {/* Play Button */}
            <button className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 hover:bg-ether-indigo-light transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>play_arrow</span>
            </button>
            {/* Progress Bar & Timers */}
            <div className="flex-grow flex flex-col gap-2">
              <div className="flex justify-between items-end mb-1">
                <span className="font-label-sm text-label-sm text-primary">00:00</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">45:12</span>
              </div>
              <div className="w-full h-1.5 bg-surface-dim rounded-full overflow-hidden relative cursor-pointer">
                <div className="absolute top-0 left-0 h-full bg-tertiary-fixed-dim w-1/3 rounded-full" />
              </div>
            </div>
            {/* Controls */}
            <div className="hidden md:flex items-center gap-4 text-on-surface-variant">
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">replay_10</span></button>
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">forward_30</span></button>
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">volume_up</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Divider */}
  <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    <hr className="border-t border-secondary-container mb-20 md:mb-32" />
  </div>
  {/* Content Structure: Bento Grid / Asymmetric Layout */}
  <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-32">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Main Content Column (Left, 8 cols) */}
      <div className="lg:col-span-8 flex flex-col gap-12">
        {/* Show Notes */}
        <article className="prose prose-lg max-w-none prose-headings:font-headline-md prose-headings:text-primary prose-p:font-body-md prose-p:text-secondary prose-a:text-healing-sage">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Episode Overview</h2>
          <p className="font-body-lg text-body-lg text-secondary mb-6 leading-relaxed">
            In this deeply moving episode, we traverse the often-misunderstood landscape of physical and emotional suffering. Dr. Aris Thorne introduces the concept of "Theological Pain"—not merely as a symptom to be eradicated, but as a potential doorway to heightened spiritual consciousness.
          </p>
          <h3 className="font-headline-md text-headline-md text-primary mt-10 mb-4">Key Insights</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-healing-sage mt-1">lens</span>
              <div>
                <strong className="font-medium text-primary">The Myth of Endless Comfort:</strong>
                <span className="font-body-md text-body-md text-secondary block mt-1">Why modern wellness culture's obsession with constant comfort may be hindering profound spiritual growth.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-healing-sage mt-1">lens</span>
              <div>
                <strong className="font-medium text-primary">Somatic Resonance:</strong>
                <span className="font-body-md text-body-md text-secondary block mt-1">Techniques for listening to the body's distress signals without immediate judgment or the rush to 'fix' them.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-healing-sage mt-1">lens</span>
              <div>
                <strong className="font-medium text-primary">Alchemical Healing:</strong>
                <span className="font-body-md text-body-md text-secondary block mt-1">Transforming the base metal of trauma into the gold of empathetic wisdom and presence.</span>
              </div>
            </li>
          </ul>
        </article>
        {/* Transcript Accordion */}
        <div className="bg-surface-cream rounded-2xl border border-secondary-fixed p-6 md:p-8">
          <button className="w-full flex justify-between items-center text-left focus:outline-none" id="transcript-toggle">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">description</span>
              <h3 className="font-headline-md text-headline-md text-primary m-0">Full Transcript</h3>
            </div>
            <span className="material-symbols-outlined text-primary accordion-icon" id="transcript-icon">expand_more</span>
          </button>
          <div className="accordion-content mt-6" id="transcript-content">
            <div className="font-body-md text-body-md text-secondary space-y-4 max-h-[400px] overflow-y-auto pr-4 hide-scrollbar">
              <p><strong className="text-primary">Host [00:00:05]:</strong> Welcome back to Transcendental Healing. Today we are wading into waters that many try to avoid: the nature of pain.</p>
              <p><strong className="text-primary">Dr. Thorne [00:00:22]:</strong> Thank you for having me. Yes, it's the elephant in the sanctuary, isn't it? We want the healing, but we often reject the very mechanism that points us toward what needs to heal.</p>
              <p><strong className="text-primary">Host [00:01:05]:</strong> You call this the 'Theology of Pain' in your recent book. Can you unpack that phrase for our listeners?</p>
              <p><strong className="text-primary">Dr. Thorne [00:01:18]:</strong> Certainly. When I say 'theology', I don't necessarily mean organized religion. I mean a system of meaning-making regarding the divine or the ultimate reality...</p>
              {/* Truncated for template */}
              <p className="italic opacity-50 mt-4 text-center">Transcript continues...</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar (Right, 4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-8">
        {/* Guest Bio Card */}
        <div className="bg-surface rounded-2xl p-6 border border-secondary-fixed shadow-[0_10px_30px_-15px_rgba(26,31,53,0.03)] relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-healing-sage/10 rounded-bl-[100px] -mr-8 -mt-8" />
          <h4 className="font-label-sm text-label-sm tracking-widest uppercase text-healing-sage mb-4 relative z-10">Featured Guest</h4>
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface-cream flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="A refined, professional portrait of a distinguished author and wellness expert. Warm, inviting expression. High-end, soft studio lighting highlighting thoughtful features. The background is a muted, abstract sanctuary setting, blurred to keep focus on the subject. Minimalist and luxurious aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhO5LTEz11rK0IKWUUWEFlE9v84KEPn6u8FVi06HvrXtMaZa-XbmDw1l-mbo6vRZpJjKWeMGKPIHy-xWWgFeAOw05SB-jdA554pK47o-eg-VsoCkkgKd4M0fZT32WE1JnuTIO4zh3XQX-sXzMgDYrc6v4nAkIeifZEjX4vjslxK9wYtBGUofla7bgdhydh7cN-rufEUY_nR1K_6wyGX103st8d_5taw89jmSUZHJXJ4KEPPPVZFkjnd-pmSSYEeoprT63xtecOblIy" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">Dr. Aris Thorne</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Author &amp; Somatic Healer</p>
            </div>
          </div>
          <p className="font-body-md text-body-md text-secondary mb-6 relative z-10">
            Dr. Thorne holds a Ph.D. in Comparative Religion and has spent two decades integrating Eastern contemplative practices with Western somatic therapy.
          </p>
          <a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-healing-sage transition-colors relative z-10" href="#">
            Visit Website
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
        {/* Resources Card */}
        <div className="bg-surface rounded-2xl p-6 border border-secondary-fixed">
          <h4 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim">menu_book</span>
            Mentioned Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <a className="group block p-3 -mx-3 rounded-xl hover:bg-surface-cream transition-colors duration-200" href="#">
                <div className="font-medium text-primary group-hover:text-healing-sage transition-colors">The Anatomy of Sorrow</div>
                <div className="font-body-md text-body-md text-secondary mt-1">Book by Dr. Aris Thorne</div>
              </a>
            </li>
            <li>
              <a className="group block p-3 -mx-3 rounded-xl hover:bg-surface-cream transition-colors duration-200" href="#">
                <div className="font-medium text-primary group-hover:text-healing-sage transition-colors">Vipassana Retreat Centers</div>
                <div className="font-body-md text-body-md text-secondary mt-1">Global Directory</div>
              </a>
            </li>
            <li>
              <a className="group block p-3 -mx-3 rounded-xl hover:bg-surface-cream transition-colors duration-200" href="#">
                <div className="font-medium text-primary group-hover:text-healing-sage transition-colors">Breathwork for Chronic Pain</div>
                <div className="font-body-md text-body-md text-secondary mt-1">Guided Audio Series</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Related Episodes Carousel */}
  <section className="bg-surface-container-low py-20 border-y border-secondary-container/50">
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Continue the Journey</h2>
          <p className="font-body-lg text-body-lg text-secondary mt-2">More episodes exploring similar themes.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="w-12 h-12 rounded-full border border-secondary-fixed flex items-center justify-center text-primary hover:bg-surface-cream transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-secondary-fixed flex items-center justify-center text-primary hover:bg-surface-cream transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">
        {/* Card 1 */}
        <div className="min-w-[300px] md:min-w-[350px] bg-surface-cream rounded-2xl overflow-hidden border border-secondary-fixed snap-start group cursor-pointer hover:shadow-[0_20px_40px_-15px_rgba(26,31,53,0.08)] transition-all duration-300">
          <div className="h-48 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist abstract photography representing clarity and breath. Soft, hazy sky blues blending into warm sand tones. A feeling of expansive whitespace and quiet sanctuary. High-quality macro aesthetic, extremely refined and peaceful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm3GdsZj1ZDDHo0jC1X6P2mN2avkWA1249eEPy8Ax7zOcmnKDvj18jZ_l9WFS1rV0tEAO7WpE-96CRf9vJmzP3CWhRnUHzoSK08B1nQgdcF8IKdY_i58REOAfGfNdyEMTLdppkt_HZoZXUCNkhg3HCgzuzfb_VrWNH2798ZSzXlzVBgvDGg--An9m7mA5m0rS1rSfHIJp60Chy3drfCuCIab2lddFohLNZJLWBsA8vuh4sAMZ8fQ9XoVz98sXFmNA_F0byQS6jWyA4" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 bg-surface-cream/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">play_circle</span>
              38 min
            </div>
          </div>
          <div className="p-6">
            <span className="font-label-sm text-label-sm text-healing-sage uppercase tracking-widest mb-2 block">Episode 39</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 line-clamp-2 group-hover:text-healing-sage transition-colors">The Architecture of Silence</h3>
            <p className="font-body-md text-body-md text-secondary line-clamp-2">Finding structure and safety within profound quietness with architect Maya Lin.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="min-w-[300px] md:min-w-[350px] bg-surface-cream rounded-2xl overflow-hidden border border-secondary-fixed snap-start group cursor-pointer hover:shadow-[0_20px_40px_-15px_rgba(26,31,53,0.08)] transition-all duration-300">
          <div className="h-48 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Macro photography of a single drop of water resting on a smooth, dark stone. Ethereal lighting catching the reflection. Symbolizing purity, focus, and natural healing. Deep indigo shadows contrasting with bright, pristine highlights. Modern luxury wellness aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC0zi2bGKCLsC5xZEZ__IO34TbKcUhi0OJvezllnJw-ucN4sSkXb_CNEyJ6dCyvQnn4TcsyrBvt_tn6vCjze7IyFrNf2b7VIH2D_iglzFkWORhAnt2OKd00hXp6lInbhZnSYim0kDMg7s9-RPNPaqn3mN6ZoZnBMPhEc1WQPNHdsCKsexz_zfjIJbtRjD2PC__ugC4E74opzelDEbKQDQqLPDnqOcwKSAeflGU-6EUOJJT1USgSeDIXGbEmirsapgUK7X3LRN8bemS" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 bg-surface-cream/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">play_circle</span>
              52 min
            </div>
          </div>
          <div className="p-6">
            <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-widest mb-2 block">Episode 41</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 line-clamp-2 group-hover:text-healing-sage transition-colors">Fluid Resilience</h3>
            <p className="font-body-md text-body-md text-secondary line-clamp-2">Adapting to life's currents without losing your foundational core.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="min-w-[300px] md:min-w-[350px] bg-surface-cream rounded-2xl overflow-hidden border border-secondary-fixed snap-start group cursor-pointer hover:shadow-[0_20px_40px_-15px_rgba(26,31,53,0.08)] transition-all duration-300">
          <div className="h-48 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A soft, out-of-focus background of dense forest bathed in warm, golden hour light. The image feels grounding, safe, and deeply rooted in nature. Rich greens of healing sage mixing with deep browns. Expensive, sanctuary-like atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC720lr63xRbpWyCcMXCNV8fbDHCaDD5ALTLWpPC10Ep1hAHxLNQnZxPJOsEv_j20pabg_V-z4IT6BPNelGhqO3iQBFuq-8lJzNNxTDUj_70JMeRekr2-9WnNaf-38D5K4JD4Q2xdi03ifN4kOrH-H1OtYKGXYUPqdI3oi8SvkQIcFHGIZUjilZzOaXV2gNNSk5KWFVBQlndLelwjDnBlThB1hjOAtAQ6utoR8TuIA34c2KUue7lpAOL6DXpV11InM1qtiO43G8pL6i" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 bg-surface-cream/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">play_circle</span>
              41 min
            </div>
          </div>
          <div className="p-6">
            <span className="font-label-sm text-label-sm text-healing-sage uppercase tracking-widest mb-2 block">Episode 35</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 line-clamp-2 group-hover:text-healing-sage transition-colors">Rooted Consciousness</h3>
            <p className="font-body-md text-body-md text-secondary line-clamp-2">Grounding techniques for highly sensitive individuals navigating dense urban environments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Newsletter CTA */}
  <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    <div className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
      {/* Abstract Shader Background Placeholder */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
      </div>
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <span className="material-symbols-outlined text-tertiary-fixed-dim text-5xl mb-6" style={{fontVariationSettings: '"FILL" 1'}}>spa</span>
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-6">Deepen Your Practice</h2>
        <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-10">
          Subscribe to our newsletter for exclusive show notes, somatic exercises, and early access to live workshops. A quiet transmission to your inbox, once a month.
        </p>
        <ClientFormWrapper action={submitNewsletter} className="w-full max-w-md flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input className="w-full bg-surface-cream/10 border border-primary-fixed-dim/30 rounded-full px-6 py-4 text-on-primary placeholder:text-primary-fixed-dim/50 focus:outline-none focus:border-tertiary-fixed-dim focus:ring-1 focus:ring-tertiary-fixed-dim transition-all font-body-md text-body-md" placeholder="Your email address" type="email" />
          </div>
          <button className="bg-tertiary-fixed-dim text-on-tertiary-container px-8 py-4 rounded-full font-label-lg text-label-lg hover:bg-tertiary-fixed transition-colors duration-300 whitespace-nowrap" type="button">
            Subscribe
          </button>
        </ClientFormWrapper>
      </div>
    </div>
  </section>
</main>
{/* Footer Component */}
{/* Interactive Scripts */}

      <PublicFooter />
    </div>
  );
}
