import type { Metadata } from "next";

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

const tailwindConfig = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "primary-fixed-dim": "#c1c5e2",
              "surface-cream": "#FAF8F5",
              "primary-container": "#1a1f35",
              "secondary-container": "#e5e2dd",
              "healing-sage": "#8EA391",
              "on-background": "#191b24",
              "tertiary-container": "#2d1e00",
              "on-surface": "#191b24",
              "tertiary": "#0f0800",
              "inverse-primary": "#c1c5e2",
              "on-secondary-container": "#656461",
              "on-secondary-fixed-variant": "#474743",
              "inverse-surface": "#2e3039",
              "on-tertiary-fixed-variant": "#5d4201",
              "on-primary-container": "#8286a1",
              "on-error": "#ffffff",
              "secondary": "#5f5e5b",
              "on-tertiary-fixed": "#261900",
              "outline-variant": "#c7c5cd",
              "outline": "#77767e",
              "ether-indigo-light": "#2A314D",
              "tertiary-fixed": "#ffdea5",
              "surface-bright": "#faf8ff",
              "surface-container-high": "#e7e7f3",
              "on-secondary": "#ffffff",
              "on-tertiary-container": "#a5833f",
              "surface-container-low": "#f3f2ff",
              "tertiary-fixed-dim": "#e9c176",
              "on-secondary-fixed": "#1c1c19",
              "secondary-fixed": "#e5e2dd",
              "on-tertiary": "#ffffff",
              "surface-dim": "#d9d9e5",
              "on-surface-variant": "#46464d",
              "on-primary-fixed-variant": "#41465e",
              "secondary-fixed-dim": "#c9c6c2",
              "inverse-on-surface": "#f0f0fc",
              "on-error-container": "#93000a",
              "surface-container-highest": "#e2e1ee",
              "on-primary": "#ffffff",
              "error": "#ba1a1a",
              "surface-container": "#ededf9",
              "surface": "#faf8ff",
              "background": "#faf8ff",
              "surface-tint": "#585d76",
              "on-primary-fixed": "#151a30",
              "primary-fixed": "#dde1ff",
              "surface-variant": "#e2e1ee",
              "primary": "#03071c",
              "error-container": "#ffdad6",
              "surface-container-lowest": "#ffffff"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "container-max": "1200px",
              "margin-mobile": "20px",
              "margin-desktop": "64px",
              "unit": "8px",
              "gutter": "24px"
      },
      "fontFamily": {
              "display-lg-mobile": [
                      "EB Garamond"
              ],
              "headline-md": [
                      "EB Garamond"
              ],
              "body-lg": [
                      "Inter"
              ],
              "label-lg": [
                      "Inter"
              ],
              "body-md": [
                      "Inter"
              ],
              "label-sm": [
                      "Inter"
              ],
              "display-lg": [
                      "EB Garamond"
              ],
              "headline-lg": [
                      "EB Garamond"
              ]
      },
      "fontSize": {
              "display-lg-mobile": [
                      "40px",
                      {
                              "lineHeight": "48px",
                              "letterSpacing": "-0.01em",
                              "fontWeight": "400"
                      }
              ],
              "headline-md": [
                      "24px",
                      {
                              "lineHeight": "32px",
                              "fontWeight": "500"
                      }
              ],
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "28px",
                              "fontWeight": "400"
                      }
              ],
              "label-lg": [
                      "14px",
                      {
                              "lineHeight": "20px",
                              "letterSpacing": "0.05em",
                              "fontWeight": "600"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "24px",
                              "fontWeight": "400"
                      }
              ],
              "label-sm": [
                      "12px",
                      {
                              "lineHeight": "16px",
                              "fontWeight": "500"
                      }
              ],
              "display-lg": [
                      "64px",
                      {
                              "lineHeight": "72px",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "400"
                      }
              ],
              "headline-lg": [
                      "32px",
                      {
                              "lineHeight": "40px",
                              "fontWeight": "500"
                      }
              ]
      }
    },
  },
}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
