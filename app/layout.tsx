import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethereal Sanctum | Transcendental Healing Science & Soul",
  description: "A profound journey of healing blending ancient wisdom with modern neuroscience. Ethereal Sanctum offers therapy, yoga, breathwork, tarot, and holistic restoration.",
  metadataBase: new URL('https://transcendentalhealing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ethereal Sanctum | Transcendental Healing",
    description: "A profound journey of healing blending ancient wisdom with modern neuroscience.",
    url: "https://transcendentalhealing.com",
    siteName: "Transcendental Healing",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYmDEoqHR1wAw6YwfbNhuU6TerkLJSfa3DTxwRpgByfogdh5on5L4VY0FtuOcGayuziCibfPj78YA7ixI8-hwzJihdalOYff2IgbigIJ_9C1kk8iBWZKVlQy4TGRoy1kNo7Dqo7J_mPB9U1ndc5oQf0jJCmqm76U8yl5RSu8gckJY6TPpCAgQ2l7hBBqDHxYTbkj_MS4ErJ8UzgzLdB6zqu6Ij5wYKjd1b6LvhYJLiAc1mrciLXxvDLgNrZ4tpMMbWlq-Ovf6Fraia",
        width: 1200,
        height: 630,
        alt: "Ethereal Sanctum Transcendental Healing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereal Sanctum | Transcendental Healing",
    description: "A profound journey of healing blending ancient wisdom with modern neuroscience.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCYmDEoqHR1wAw6YwfbNhuU6TerkLJSfa3DTxwRpgByfogdh5on5L4VY0FtuOcGayuziCibfPj78YA7ixI8-hwzJihdalOYff2IgbigIJ_9C1kk8iBWZKVlQy4TGRoy1kNo7Dqo7J_mPB9U1ndc5oQf0jJCmqm76U8yl5RSu8gckJY6TPpCAgQ2l7hBBqDHxYTbkj_MS4ErJ8UzgzLdB6zqu6Ij5wYKjd1b6LvhYJLiAc1mrciLXxvDLgNrZ4tpMMbWlq-Ovf6Fraia"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Transcendental Healing",
              "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCYmDEoqHR1wAw6YwfbNhuU6TerkLJSfa3DTxwRpgByfogdh5on5L4VY0FtuOcGayuziCibfPj78YA7ixI8-hwzJihdalOYff2IgbigIJ_9C1kk8iBWZKVlQy4TGRoy1kNo7Dqo7J_mPB9U1ndc5oQf0jJCmqm76U8yl5RSu8gckJY6TPpCAgQ2l7hBBqDHxYTbkj_MS4ErJ8UzgzLdB6zqu6Ij5wYKjd1b6LvhYJLiAc1mrciLXxvDLgNrZ4tpMMbWlq-Ovf6Fraia",
              "@id": "",
              "url": "https://transcendentalhealing.com",
              "telephone": "+15550198",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Sanctuary Blvd",
                "addressLocality": "Rochester",
                "addressRegion": "NY",
                "postalCode": "14604",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.156578,
                "longitude": -77.608849
              },
              "sameAs": [
                "https://instagram.com/transcendentalhealing"
              ]
            })
          }}
        />
      </head>
      <body className="bg-background text-on-background selection:bg-healing-sage/30 selection:text-primary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
