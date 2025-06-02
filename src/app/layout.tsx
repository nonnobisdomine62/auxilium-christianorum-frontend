import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-crimson-text'
});

export const metadata: Metadata = {
  title: "Auxilium Christianorum Prayers",
  description: "Daily prayers for members of the Auxilium Christianorum",
  keywords: "Auxilium Christianorum, Catholic prayers, spiritual warfare, daily prayers",
  openGraph: {
    title: "Auxilium Christianorum Prayers",
    description: "Daily prayers for members of the Auxilium Christianorum",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${crimsonText.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
