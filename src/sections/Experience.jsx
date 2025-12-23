import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { experiences } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animate cards
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Animate vertical timeline
    gsap.to(".timeline", {
      transformOrigin: "top top",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top center",
        end: "bottom center",
        scrub: 0.3,
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="section-padding mt-20 relative"
    >
      <div className="px-5 md:px-20">
        <TitleHeader
          title="Professional Experience"
          sub="💼 Career Journey"
        />

        <div className="mt-20 flex relative">
          {/* LEFT TIMELINE */}
          <div className="timeline-wrapper relative mr-10">
            <div className="timeline w-[2px] h-full bg-gradient-to-b from-indigo-400 to-purple-500" />
          </div>

          {/* EXPERIENCE CARDS */}
          <div className="flex-1 space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-card rounded-2xl p-8 bg-black/50
                  border border-white/10
                  transition-all duration-300
                  hover:border-indigo-400/50
                  hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]"
              >
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-lg text-[#7EA6D8] mt-1">
                  {exp.company}
                </p>
                <p className="text-sm text-white/50 mt-1">
                  🗓️ {exp.date}
                </p>

                <ul className="mt-6 list-disc ml-5 space-y-3 text-white/70">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
