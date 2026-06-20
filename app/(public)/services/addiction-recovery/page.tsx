import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
<div>
  {/* TopNavBar */}
  <header className="w-full sticky top-0 z-50 bg-surface-bright/80 backdrop-blur-md">
    <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
      <a className="font-display-lg text-headline-md tracking-tighter text-primary" href="#">
        Ethereal Sanctum
      </a>
      <nav className="hidden md:flex items-center space-x-gutter">
        <a className="font-body-md text-body-md tracking-wide text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="/index.html">Home</a>
        <a className="font-body-md text-body-md tracking-wide text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="/about.html">About</a>
        <a className="font-body-md text-body-md tracking-wide text-primary border-b border-tertiary-fixed-dim pb-1 hover:text-tertiary-fixed-dim transition-all duration-300" href="/services/addiction-recovery.html">Services</a>
        <a className="font-body-md text-body-md tracking-wide text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="#">Continuing Education</a>
        <a className="font-body-md text-body-md tracking-wide text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="/podcast/index.html">Podcast</a>
      </nav>
      <a className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-full hover:bg-ether-indigo-light transition-colors duration-300" href="#book">
        Book a Session
      </a>
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>menu</span>
      </button>
    </div>
  </header>
  <main>
    {/* Hero Section */}
    <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-20 object-center" data-alt="A serene, minimalist wellness retreat space bathed in soft, ethereal morning light. The image features smooth, rounded architectural curves, natural stone textures in warm sand tones, and large windows revealing a misty, tranquil garden. The atmosphere is profoundly calm, elevated, and deeply restorative, emphasizing a high-end luxury wellness aesthetic with a focus on spiritual healing and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSUljpsAxnWMguk6-Xxp9PfVE6-kfRK8MXmDcfbKzwJDdJ1jm5rRO9s9SQAEnGUhKXB5Ba0Ht4b5LPkrUPGLzjYSO5VhHrGj9dTcxZAnM9P0c6MEZM2gsh5448F_r37FQNKTTR09M2s8mMXcwBTqbwj9gJPVPjBE2FKjpnVzZkjmuR0G8CUAt2JCRstoh9uC7H3ksv01bUFdn4MB6ltpbXWT8WBkKKlRg9lR--d3TtKCLEDGRRfdJfO6UuNH6kNnfV9C5g2mALVnZr" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-bright/50 via-surface-bright/80 to-surface-cream" />
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <span className="inline-block font-label-lg text-label-lg text-tertiary-container tracking-[0.2em] uppercase mb-6 opacity-80">Addiction Recovery Support</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-4xl mx-auto leading-tight mb-8">
          Compassionate Recovery Rooted in Science and Soul
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          A clinical recovery approach designed for those feeling overwhelmed or stuck. We integrate evidence-based therapies with holistic practices to guide you back to your true self in a sanctuary of emotional safety.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-tertiary-fixed px-8 py-4 rounded-full font-label-lg text-label-lg hover:bg-ether-indigo-light transition-colors duration-300" href="#book">
            Book a Private Consultation
          </a>
        </div>
      </div>
    </section>
    {/* Who it is for Section */}
    <section className="py-24 bg-surface-cream">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">A Sanctuary for Healing</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Tailored support structures honoring the unique complexities of your journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-bright p-8 md:p-10 rounded-xl border border-secondary-container hover:shadow-[0_20px_40px_-15px_rgba(26,31,53,0.05)] transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined">work</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">For Professionals</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Discreet, high-level support for executives and high-performers seeking recovery without compromising their professional trajectory or privacy.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-bright p-8 md:p-10 rounded-xl border border-secondary-container hover:shadow-[0_20px_40px_-15px_rgba(26,31,53,0.05)] transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined">self_improvement</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Early Recovery</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Foundational stabilization and coping strategies for those in the vulnerable first stages of sobriety, building resilience day by day.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-bright p-8 md:p-10 rounded-xl border border-secondary-container hover:shadow-[0_20px_40px_-15px_rgba(26,31,53,0.05)] transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined">family_restroom</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Family Members</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Guidance and boundary-setting frameworks for loved ones navigating the complex emotional landscape of addiction within the family dynamic.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-24 bg-primary text-on-primary relative overflow-hidden" id="book">
      <div className="absolute inset-0 opacity-10">
        <img className="w-full h-full object-cover" data-alt="Abstract, flowing waves of deep indigo and soft gold blending seamlessly. The texture is smooth and silk-like, representing calmness, depth, and the fluid nature of spiritual healing within a premium wellness context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYv02mLAFlU8laYvnEhN0zjzPPW9v39RjUjXj3AbLMoe0YDV6KvGBiwlVVOu9s6QCm_yzRd-kuouv_dOdCy5ergJfoQWdQZg9Plhoe-1x64bWGSULSRL97RdqdHMb-WtlJMt12GLGzlncqWFEvTO7yKIEToHQqmKjr1qeeMZTbekSTYriLhtrUaecS3UP9WUaiVrnQp3vDaaPvpXA7lPNZa1KEuMfvw3_U_1U_Tmbont-zIsP2fJlWHOWZ02QhfqTIWnYhbmZXc1xk" />
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Begin Your True Healing</h2>
        <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mx-auto mb-10">
          Take the first step towards a sustainable, integrated recovery. Schedule a confidential discovery session to explore how our methodology aligns with your needs.
        </p>
        <button className="bg-tertiary-fixed text-tertiary-container px-10 py-4 rounded-full font-label-lg text-label-lg hover:bg-tertiary-fixed-dim transition-colors duration-300">
          Book a Private Consultation
        </button>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full pt-20 pb-10 bg-surface-cream grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    <div className="col-span-1 md:col-span-2">
      <a className="font-display-lg text-headline-md text-primary mb-4 block" href="#">Ethereal Sanctum</a>
      <p className="font-label-lg text-label-lg text-secondary mt-4">
        © 2024 Ethereal Sanctum. All rights reserved.
      </p>
    </div>
    <div className="col-span-1">
      <h4 className="font-label-lg text-label-lg text-primary mb-4 uppercase tracking-wider">Quick Links</h4>
      <ul className="space-y-3">
        <li><a className="font-label-lg text-label-lg text-secondary hover:text-primary underline-offset-4 hover:underline transition-all duration-300 ease-in-out" href="/about.html">About</a></li>
        <li><a className="font-label-lg text-label-lg text-secondary hover:text-primary underline-offset-4 hover:underline transition-all duration-300 ease-in-out" href="/services/addiction-recovery.html">Services</a></li>
        <li><a className="font-label-lg text-label-lg text-secondary hover:text-primary underline-offset-4 hover:underline transition-all duration-300 ease-in-out" href="/podcast/index.html">Podcast</a></li>
      </ul>
    </div>
    <div className="col-span-1">
      <h4 className="font-label-lg text-label-lg text-primary mb-4 uppercase tracking-wider">Legal</h4>
      <ul className="space-y-3">
        <li><a className="font-label-lg text-label-lg text-secondary hover:text-primary underline-offset-4 hover:underline transition-all duration-300 ease-in-out" href="#">Privacy Policy</a></li>
        <li><a className="font-label-lg text-label-lg text-secondary hover:text-primary underline-offset-4 hover:underline transition-all duration-300 ease-in-out" href="#">Terms of Service</a></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  );
}
