import Image from "next/image";
import { NavBar } from "../../../components/NavBar";
import "../globals.css";
import TypewriterComponent from "../../../components/TypeWriter";
import { Accordion } from "../../../components/Accordion";
import { Footer } from "../../../components/Footer";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Link from 'next/link';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });
  return {
    title: t('pagetitle'),
    description: t('description'),
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Home');

  return (
    <>
      <NavBar />
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#290335] to-[#4c0966] z-0" />

        <div className="absolute inset-0 z-0 pointer-events-none sparkle-overlay" />

        <div className="relative z-10 flex flex-col items-center min-h-screen px-5 pt-20 space-y-10">
          <div className="m-6">
            <Image
              src="/purplepill.png"
              alt="beeps Logo"
              width={500}
              height={500}
              className="animate-glow"
            />
          </div>
          <div className="m-6">
            <h1 className="m-6 text-center text-6xl font-bold tracking-wide text-cyan-100">
              <TypewriterComponent words={[t('title')]} loop={1} cursorStyle="_" typeSpeed={150} delaySpeed={200} />
            </h1>
            <h2 className="text-3xl text-cyan-100 h-12 text-center font-semibold mb-16 sm:m-0">
              <TypewriterComponent words={[t('welcome'), t('explore')]} loop={true} cursorStyle="" typeSpeed={50} deleteSpeed={40} delaySpeed={2000} />
            </h2>
          </div>
          <div className="relative w-full max-w-6xl h-[500px] md:h-[500px] rounded-lg overflow-hidden shadow-lg vhs-effect mx-auto">
            <Image
              src="/vhszp.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            
            <div className="absolute inset-0 z-20 flex flex-col items-start md:items-start justify-end p-4 md:p-6 text-white gap-4">
              <h1 className="text-3xl md:text-4xl font-bold">{t('title')}</h1>
              <p className="text-md md:text-lg italic hidden sm:block">
                {t('description')}
              </p>
              
              <div className="grid grid-cols-1 sm:flex gap-3 w-max">
                <Link href="/projects" className="relative inline-flex w-full sm:w-auto items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    {t('viewProjects')}
                  </span>
                </Link>

                <Link href="/contacts" className="relative inline-flex w-full sm:w-auto items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    {t('contactMe')}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-6xl mx-auto px-6 backdrop-blur-md bg-white/10 rounded-xl shadow-md border border-white/20">
            <Accordion />
          </div>
          <div className="relative w-full max-w-6xl mx-auto px-6 my-12 py-10 vhs-border text-white">
            <h2 className="text-center text-4xl font-bold mb-8">{t('techStack')}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-white">
              {[
                { name: "JavaScript", icon: "/techstack/js.png" },
                { name: "TypeScript", icon: "/techstack/ts.png" },
                { name: "React", icon: "/techstack/react.png" },
                { name: "Next.js", icon: "/techstack/nextjs.png" },
                { name: "Node.js", icon: "/techstack/nodejs.png" },
                { name: "NestJS", icon: "/techstack/nest.svg" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center space-y-2 h-28 w-24"
                >
                  <div className="flex items-center justify-center h-16">
                    <Image src={tech.icon} alt={tech.name} width={70} height={70} />
                  </div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}