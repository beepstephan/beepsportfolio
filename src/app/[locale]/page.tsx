"use client";
import Image from "next/image";
import { NavBar } from "../../../components/NavBar";
import "../globals.css";
import { Typewriter } from "react-simple-typewriter";
import { Accordion } from "../../../components/Accordion";
import { Footer } from "../../../components/Footer";
import DiamondGlowScene from "../../../components/DiamondGlowScene";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="relative min-h-screen overflow-hidden">
        {/* 🎨 Градієнтний фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#290335] to-[#4c0966] z-0" />

        <div className="absolute inset-0 z-0 pointer-events-none sparkle-overlay" />

        {/* 📦 Основний контент поверх */}
        <div className="relative z-10 flex flex-col items-center min-h-screen px-5 pt-20 space-y-10">
          <div className="relative w-full max-w-[1200px] h-[500px] md:h-[500px] rounded-lg overflow-hidden shadow-lg vhs-effect mx-auto">
            <Image
              src="/vhszp.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            
            <div className="absolute inset-0 z-20 flex flex-col items-start md:items-start justify-end p-4 md:p-6 text-white gap-4">
              <h1 className="text-3xl md:text-4xl font-bold">beeps Inc.</h1>
              <p className="text-md md:text-lg italic hidden sm:block">
                IT рішення, в які вкладено душу
              </p>
              
              <div className="grid grid-cols-1 sm:flex gap-3 w-max">
                <button className="relative inline-flex w-full sm:w-auto items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Переглянути проєкти
                  </span>
                </button>
                
                <button className="relative inline-flex w-full sm:w-auto items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Зв'язатися зі мною
                  </span>
                </button>
              </div>
            </div>
          </div>
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
              <Typewriter
                words={["beeps Inc."]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                delaySpeed={200}
              />
            </h1>
            <h2 className="text-3xl text-cyan-100 text-center font-semibold mb-4">
              <Typewriter
                words={["Ласкаво просимо до майстерні програмного забезпечення beeps Inc.!", "Перегляньте задачі, які вирішує компанія нижче..."]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </h2>
          </div>
          <div className="w-full max-w-6xl mx-auto px-6 backdrop-blur-md bg-white/10 rounded-xl shadow-md border border-white/20">
            <Accordion />
          </div>
          <div className="relative w-full max-w-6xl mx-auto px-6 mt-12 py-10 vhs-border text-white">
            <h2 className="text-center text-4xl font-bold mb-8">Технологічний стек</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-white">
              {[
                { name: "C#", icon: "/techstack/csharp.png" },
                { name: ".NET", icon: "/techstack/dotnet.png" },
                { name: "JavaScript", icon: "/techstack/js.png" },
                { name: "TypeScript", icon: "/techstack/ts.png" },
                { name: "Node.js", icon: "/techstack/nodejs.png" },
                { name: "React", icon: "/techstack/react.png" },
                { name: "Next.js", icon: "/techstack/nextjs.png" },
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
          <div className="w-full mt-6">
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
