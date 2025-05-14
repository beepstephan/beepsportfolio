import { NavBar } from "../../../../components/NavBar";
import "../../globals.css";
import { Footer } from "../../../../components/Footer";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import {BioTimeline} from "../../../../components/BioTimeline";
import TypewriterComponent from "../../../../components/TypeWriter";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  return {
    title: t('pagetitle'),
    description: t('description'),
  };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('About');

  return (
    <>
      <NavBar />
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#290335] to-[#4c0966] z-0" />
        <div className="absolute inset-0 z-0 pointer-events-none sparkle-overlay" />
        <div className="relative z-10 flex flex-col items-center min-h-screen px-5 pt-20 space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white neon-text font-['Bebas_Neue'] mb-8 animate-fade-in-vhs">
            <TypewriterComponent words={[t('title')]} loop={1} cursorStyle="_" typeSpeed={150} delaySpeed={200} />
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl text-center mb-8 animate-fade-in-vhs">
            {t('description')}
          </p>
          
          <div className="w-full max-w-6xl px-6 backdrop-blur-md text-center bg-white/10 rounded-xl shadow-md border border-white/20 p-6 vhs-border">
            <h2 className="text-2xl font-bold text-white mb-4">{t('mission')}</h2>
            <p className="text-gray-400 mb-6">{t('mission1')}</p>
            <h2 className="text-2xl font-bold text-white mb-4">{t('team')}</h2>
            <p className="text-gray-400">{t('team1')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white neon-text font-['Bebas_Neue'] mb-8 animate-fade-in-vhs">
            <TypewriterComponent words={[t('bio')]} loop={1} cursorStyle="_" typeSpeed={150} delaySpeed={200} />
          </h1>
          <BioTimeline/>
        </div>
      </div>
      <Footer />
    </>
  );
}