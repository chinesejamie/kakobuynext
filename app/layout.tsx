import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { generateMainMetadata } from './metadata';
import Header from '@/components/Header';
import TopBanner from '@/components/TopBanner';
import PromoPopup from '@/components/PromoPopup';
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = generateMainMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* TikTok Pixel Code Start */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;
                var ttq=w[t]=w[t]||[];
                ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
                ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
                for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
                ttq.instance=function(t){
                  for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
                  return e;
                };
                ttq.load=function(e,n){
                  var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
                  ttq._i=ttq._i||{};
                  ttq._i[e]=[];
                  ttq._i[e]._u=r;
                  ttq._t=ttq._t||{};
                  ttq._t[e]=+new Date;
                  ttq._o=ttq._o||{};
                  ttq._o[e]=n||{};
                  n=document.createElement("script");
                  n.type="text/javascript";
                  n.async=!0;
                  n.src=r+"?sdkid="+e+"&lib="+t;
                  e=document.getElementsByTagName("script")[0];
                  e.parentNode.insertBefore(n,e);
                };
                ttq.load('D04GPGJC77UD5RFHFTTG');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
        {/* TikTok Pixel Code End */}
      </head>
      <body className={inter.className}>
        <PromoPopup />
        <TopBanner />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
