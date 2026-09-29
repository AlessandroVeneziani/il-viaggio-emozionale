import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const GA_MEASUREMENT_ID = "G-1EJWRJVDPH";
const TIKTOK_PIXEL_ID = "DATOHO3C77U88MSOBK00";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      description: siteConfig.schemaDescription,
      url: siteConfig.url,
      founder: {
        "@type": "Person",
        name: siteConfig.founder,
      },
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      description: siteConfig.schemaDescription,
      url: siteConfig.url,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  publisher: siteConfig.name,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {"siteId":4696124,"cookiePolicyId":62464150};
              _iub.csLangConfiguration = {"it":{"cookiePolicyId":62464150}};
            `,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/4696124.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        />
        <script
          type="text/plain"
          className="_iub_cs_activate"
          data-iub-purposes="5"
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;
                var ttq=w[t]=w[t]||[];
                ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
                ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
                for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
                ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
                ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
                  ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
                  n=document.createElement("script"),n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
                  e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load("${TIKTOK_PIXEL_ID}");
                ttq.page();
              }(window, document, "ttq");
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        <div className="relative min-h-screen pt-24 sm:pt-28">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
