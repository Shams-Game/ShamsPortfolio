import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="AI Chat Support Assistant" />
            </div>
            <div className="text-content">
              <h2>
                AI Chat Support Assistant — A conversational support tool helping users quickly resolve queries through real-time chat interactions.
              
              </h2>
              <p className="text-white-50 md:text-xl">
                Built using JavaScript, React, TailwindCSS, and a lightweight NLP API integration for conversational responses.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
        
              <div className="image-wrapper bg-[#FFEFDB] rounded-xl overflow-hidden">
        
                <img
                  src="/images/project2.png"
                  alt="Incident Intelligence Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2>The Incident Intelligence Dashboard</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] flex items-center justify-center">
                <img src="/images/project3.png" alt="Car Configuration Advisor App"
                className="w-full h-full object-cover" />
              </div>
              <h2>Car Configuration Advisor</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
