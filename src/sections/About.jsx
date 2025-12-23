const About = () => {
  return (
    <section
      id="about"
      className="section-padding flex-center md:mt-40 mt-20"
    >
      <div className="w-full max-w-4xl px-5">
        {/* Glowing Card */}
        <div className="relative group">
          {/* Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Card */}
          <div className="relative bg-black/80 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              About Me
            </h2>

            <p className="text-white-50 text-lg leading-relaxed mb-4">
              I’m a product-focused technologist with 13+ years of experience
              working at the intersection of enterprise systems, business
              operations, and engineering teams.
            </p>

            <p className="text-white-50 text-lg leading-relaxed mb-4">
              My strength lies in translating complex production issues,
              customer needs, and operational constraints into clear product
              direction and actionable execution.
            </p>

            <p className="text-white-50 text-lg leading-relaxed">
              Having worked across global enterprises like Volvo, Adobe,
              HCLTech, Atos, and Xerox, I bring a pragmatic mindset shaped by
              real systems, real users, and real consequences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
