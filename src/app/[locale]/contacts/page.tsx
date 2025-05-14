import { NavBar } from "../../../../components/NavBar";
import "../../globals.css";
import { Footer } from "../../../../components/Footer";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import TypewriterComponent from "../../../../components/TypeWriter";
import { ContactForm } from "../../../../components/ContactForm";
import { FaDiscord, FaTelegramPlane, FaGithub, FaSteam } from 'react-icons/fa';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: t('pagetitle'),
    description: t('description'),
  };
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Contact');

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
          <div className="w-full max-w-6xl px-6 backdrop-blur-md bg-white/10 rounded-xl shadow-md border border-white/20 p-6 vhs-border">
            <p className="text-gray-400 mb-4">{t('email')}</p>
            <p className="text-gray-400 mb-4">{t('phone')}</p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noopener noreferrer" className="social-icon animate-glow" title={t('discord')}>
                <FaDiscord className="w-8 h-8 text-white hover:text-purple-400" />
              </a>
              <a href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer" className="social-icon animate-glow" title={t('telegram')}>
                <FaTelegramPlane className="w-8 h-8 text-white hover:text-purple-400" />
              </a>
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="social-icon animate-glow" title={t('github')}>
                <FaGithub className="w-8 h-8 text-white hover:text-purple-400" />
              </a>
              <a href="https://steamcommunity.com/id/your-steam-id" target="_blank" rel="noopener noreferrer" className="social-icon animate-glow" title={t('steam')}>
                <FaSteam className="w-8 h-8 text-white hover:text-purple-400" />
              </a>
            </div>
          </div>
          <div className="w-full max-w-2xl px-6 py-8 backdrop-blur-md bg-white/10 rounded-xl shadow-md border border-white/20 vhs-border mb-10">
            <ContactForm
              emailLabel={t('emailLabel')}
              emailPlaceholder={t('emailPlaceholder')}
              messageLabel={t('messageLabel')}
              messagePlaceholder={t('messagePlaceholder')}
              submitText={t('submitText')}
              thankYouText={t('thankYouText')}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}