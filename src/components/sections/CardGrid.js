import React, { useState, useEffect } from "react";
import domImg from "../../assets/headshots/Dom.png";
import shriImg from "../../assets/headshots/Shridhar.JPEG";
import jennaImg from "../../assets/headshots/JennaLee.jpg";
import jayantImg from "../../assets/headshots/Jayant.jpeg";
import tanishq from "../../assets/headshots/TanishqHeadshot.jpg";
import tim from "../../assets/headshots/Timheadshot.jpg";
import yash from "../../assets/headshots/yashyardi.jpg";

function Card({ img, name, role, email }) {
  return (
    <div className="group text-left bg-white p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden h-full flex flex-col justify-between hover:-translate-y-2">
      <div>
        <div className="aspect-square bg-gray-100 mb-6 flex items-center justify-center overflow-hidden rounded-xl shadow-inner">
          {img ? (
            <img src={img} alt={`${name} headshot`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300 font-light">No Image</div>
          )}
        </div>
        <h3 className="font-bold text-primary text-2xl mb-2 font-heading tracking-wide">{name}</h3>
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">{role}</p>
      </div>
      {email && (
        <a href={`mailto:${email}`} className="text-sm text-primaryLight font-light mt-4 flex items-start gap-2 hover:text-accent transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5">
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
          <span className="break-all">{email}</span>
        </a>
      )}
    </div>
  );
}

export default function CardGrid() {
  const members = [
    {
      name: "Dominic Larry",
      role: "Finance @ IU Kelley",
      email: "dlarry@dekalbcapitalmanagement.com",
      img: domImg,
    },
    {
      name: "Shridhar Mehendale",
      role: "Computer Science & Business Honors @ UT Austin",
      email: "smehendale@utexas.edu",
      img: shriImg,
    },
    {
      name: "Jenna Lee",
      role: "Computer Science @ UT Austin",
      email: "jenna.snow.lee@gmail.com",
      img: jennaImg,
    },
    {
      name: "Jayant Katragadda",
      role: "Finance & Computer Science @ IU Kelley",
      email: "Jaskatra@iu.edu",
      img: jayantImg,
    },
    {
      name: "Tanishq Nerkar",
      role: "IU Kelley",
      img: tanishq,
    },
    {
      name: "Tim Schramek",
      role: "Finance @ Northern Illinois University",
      email: "timothyschramek@dekalbcapitalmanagement.com",
      img: tim,
    },
     {
      name: "Yash Yardi",
      role: "Computer Science & Physics @ UIUC",
      email: "yyard@illinois.edu",
      img: yash,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4); // Desktop
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(1); // Mobile
      }
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % members.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  // Get the visible members via cyclic slicing
  const visibleMembers = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleMembers.push(members[(currentIndex + i) % members.length]);
  }

  return (
    <div className="relative px-8 sm:px-12">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-lg border border-gray-200 transition-all hover:scale-110 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Carousel Container with Overflow Hidden */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
          }}
        >
          {members.map((m, index) => (
            <div 
              key={m.name} 
              className="flex-shrink-0"
              style={{ width: `calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 24 / cardsToShow}px)` }}
            >
              <Card img={m.img} name={m.name} role={m.role} email={m.email} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-lg border border-gray-200 transition-all hover:scale-110 focus:outline-none"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots Indicator (Optional but nice) */}
      <div className="flex justify-center gap-2 mt-8">
        {members.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsTransitioning(false), 700);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
