import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export default function Page() {
  return (
    <>
      
 Subtle Background Blur 
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
 Hero Section 
<section className="text-center mb-16 md:mb-24 animate-fade-in" style={{ 'animation-delay': '0.1s' }}>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                We Meet You Where You Are
            </h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
                Whether you seek the sanctuary of our Rochester space or the comfort of your own home, we are committed to holding space for your profound healing journey.
            </p>
</section>
 Two Column Grid 
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
{/* Left Column: Contact Form */}
<div className="lg:col-span-7 animate-fade-in" style={{ 'animation-delay': '0.2s' }}>
<div className="bg-surface-container-lowest border border-secondary-fixed p-8 md:p-12 rounded-2xl">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Request a Private Consultation</h2>
<p className="font-body-md text-body-md text-secondary mb-10">Please share a brief note about what brings you here. All communications are strictly confidential.</p>
            <ContactForm />
</div>
</div>
{/* Right Column: Info & Map */}
<div className="lg:col-span-5 space-y-8 animate-fade-in" style={{ 'animation-delay': '0.3s' }}>
{/* Service Area Card */}
<div className="bg-surface-container-lowest border border-secondary-fixed rounded-2xl overflow-hidden">
<div className="h-48 w-full bg-surface-variant relative">
<Image fill alt="Service Area Map" className="w-full h-full object-cover opacity-80" data-alt="A highly detailed, elegant, minimalist map illustration focusing on Rochester, New York. The map uses a sophisticated color palette of soft cream, muted sand, and deep ethereal indigo, aligning with a modern-luxury wellness brand. Rivers and major roads are rendered as fine, subtle lines. A gentle, soft glowing marker subtly indicates the city center, emphasizing a serene and professional atmosphere. Soft lighting and expansive negative space." data-location="Rochester, NY" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoeSSeRhX5JSJISO1hKnpl5nLqx8lxUraONgBfc9BXCjNI_bWPZJn6PBcRg9BTZcmSx9wurFwEXrTxZx_Dr9xhe-cJNezIgNbGk7wM012YxsHTbHXWbd4eKNVcNoBCciCPeBzPnR6QoyE0qXg3qArGCgoLuC7TbiArOxj9uEe_BlRt2aWABk7YEnD5212qriGnElFp_Y5iNJasXemleM2ivxbiXIL-U2w90DyoNTx_GEJZCSiFgQH1VB9TeUdQsMhonKKRDKW0Mg5t"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
</div>
<div className="p-8 relative -mt-12 bg-surface-container-lowest rounded-t-3xl">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-healing-sage" data-icon="location_on">location_on</span>
                            Service Areas
                        </h3>
<ul className="space-y-4 font-body-md text-body-md text-secondary">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-outline text-opacity-50 mt-0.5" data-icon="home_pin">home_pin</span>
<div>
<strong className="text-primary font-medium block">In-Person Sanctuary</strong>
                                    Rochester, NY &amp; Surrounding Suburbs
                                </div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-outline text-opacity-50 mt-0.5" data-icon="language">language</span>
<div>
<strong className="text-primary font-medium block">Virtual Space</strong>
                                    Global availability via secure telehealth platforms.
                                </div>
</li>
</ul>
</div>
</div>
{/* Business Hours */}
<div className="bg-surface-container-lowest border border-secondary-fixed p-8 rounded-2xl">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-healing-sage" data-icon="schedule">schedule</span>
                        Clinical Hours
                    </h3>
<p className="font-body-md text-body-md text-secondary mb-4">
                        To maintain the integrity of our energetic work, we observe structured hours for consultations and sessions.
                    </p>
<div className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<div className="flex justify-between border-b border-secondary-fixed/50 pb-2">
<span>Monday – Thursday</span>
<span>9:00 AM – 6:00 PM EST</span>
</div>
<div className="flex justify-between border-b border-secondary-fixed/50 pb-2">
<span>Friday</span>
<span>10:00 AM – 3:00 PM EST</span>
</div>
<div className="flex justify-between pt-1">
<span>Weekends</span>
<span className="text-secondary italic">Rest &amp; Integration</span>
</div>
</div>
</div>
{/* Emergency Notice */}
<div className="bg-surface-cream border border-secondary-container p-6 rounded-2xl flex gap-4 items-start">
<span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="support">support</span>
<div>
<h4 className="font-label-lg text-label-lg text-primary mb-1">Crisis Support</h4>
<p className="font-body-md text-body-md text-secondary text-sm">
                            This practice does not provide emergency psychiatric services. If you are experiencing a life-threatening clinical crisis, please dial 988 or proceed to your nearest emergency room immediately.
                        </p>
</div>
</div>
</div>
</div>

    </>
  );
}
