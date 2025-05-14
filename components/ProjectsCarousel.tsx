"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/projects/kinobratva.png",
    github: "https://github.com/beepstephan/kinobratva",
    demo: "https://kinobratva.netlify.app/",
  },
  {
    id: 2,
    image: "/projects/beepsblog.png",
    github: "https://github.com/beepstephan/beepsblog",
    demo: "https://beepsblog.netlify.app/",
  },
  {
    id: 3,
    image: "/projects/beepssteamhelper.png",
    github: "https://github.com/beepstephan/beeps-steamhelper",
    demo: "https://github.com/beepstephan/beeps-steamhelper",
  },
];

export const ProjectsCarousel = () => {
  const t = useTranslations("Projects");
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  return (
    <div className="w-full max-w-6xl px-6">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="w-80 sm:w-96 animate-fadeIn"
          >
            <div className="relative h-128 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 group">
              {!loadedImages.includes(project.id) && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse z-10 rounded-xl" />
              )}

              <Image
                src={project.image}
                alt={t(`project${project.id}Title`)}
                fill
                className={`object-cover transition-opacity duration-700 ${
                  loadedImages.includes(project.id)
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                onLoad={() =>
                  setLoadedImages((prev) => [...prev, project.id])
                }
              />

              <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-20 flex flex-col justify-center items-center px-4 space-y-4 transition duration-500 group-hover:bg-black/40">
                <div className="text-center text-white transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow">
                    {t(`project${project.id}Title`)}
                  </h3>
                  <p className="text-md mb-4 drop-shadow">
                    {t(`project${project.id}Tech`)}
                  </p>
                   <p className="text-sm mb-4 drop-shadow">
                    {t(`project${project.id}Desc`)}
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition shadow-lg hover:scale-110"
                    title="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition shadow-lg hover:scale-110"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
