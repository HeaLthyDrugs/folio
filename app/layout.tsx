import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";
import { themeScript } from './lib/theme-script';
import { BottomNav } from "./components/navigation/BottomNav";
import { PageTransitionWrapper } from "./components/PageTransitionWrapper";
import { MusicPlayer } from "./components/music/MusicPlayer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MNSH",
  description: "A portfolio for 🥑",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <PageTransitionWrapper>
            <main className="pb-16">
              {children}
            </main>
            <BottomNav />
            <MusicPlayer />
          </PageTransitionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
