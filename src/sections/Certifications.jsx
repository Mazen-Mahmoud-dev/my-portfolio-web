import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { BiArrowBack,BiRightArrowAlt } from 'react-icons/bi';
import { ExternalLinkIcon } from "lucide-react";
export default function Certifications() {
  const certifications = [
    {
      title: "Ai & Machine Learning Bootcamp",
      platform: "sprintsai",
      date: "2025",
      image: "/src/assets/certs/sprints&microsoft.jpg",
    },
    {
      title: "Reactjs",
      platform: "Mahara Tech",
      date: "2025",
      image: "/src/assets/certs/certificate-react-js-mahara-tech.jpg",
    },
    {
      title: "Mastering CSS",
      platform: "satr",
      date: "2025",
      image: "/src/assets/certs/certificate-satr-css-basics.png",
    },
    {
      title: "HTML & CSS",
      platform: "Mahara Tech",
      date: "2025",
      image: "/src/assets/certs/cerificate-HTML&CSS-MaharaTech-EN.jpg",
    },
    
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h5 className="text-subtitle">Official Certificates & Learning Journey</h5>
          <h2 className="text-title">Certifications 📜</h2>
        </div>

        <div className="relative w-full sm:w-[450px] sm:mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="!overflow-hidden"
          >
            {certifications.map((cert, i) => (
              <SwiperSlide key={i}>
                <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/10 dark:bg-zinc-900/40 backdrop-blur-md shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-48">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {cert.platform}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <p>{cert.date}</p>
                      <span className="text-xs px-2 py-1 rounded-full  text-slate-300 hover:text-slate-100 hover:underline  font-medium">
                        <a href="" className="flex items-center gap-1 text-sm font-bold"><ExternalLinkIcon className="w-[20px]" />View Certificate</a>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button className="swiper-button-prev absolute top-1/2 -left-5 md:-left-10 z-10 transform -translate-y-1/2 bg-white/70 dark:bg-zinc-800/70 dark:!text-gray-100 border border-gray-300 dark:hover:!text-gray-800 dark:border-gray-700 rounded-full p-2 shadow hover:bg-gray-200 hover:text-white transition-all">
            <BiArrowBack size={18} />
          </button>

          <button className="swiper-button-next absolute top-1/2 -right-5 md:-right-10 z-10 transform -translate-y-1/2 bg-white/70 dark:bg-zinc-800/70 dark:!text-gray-100 border dark:hover:!text-gray-800 border-gray-300 dark:border-gray-700 rounded-full p-2 shadow hover:bg-gray-200 transition-all">
            <BiRightArrowAlt size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
