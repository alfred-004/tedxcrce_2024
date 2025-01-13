import Speakers from "./Speaker";
import { HeroParallax } from "./ui/hero-parallax";


const AboutTed = () => {
  return (
    <section id="about-ted" className="relative w-full py-5 sm:pt-10">
      {/* Background grid */}
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Event Date and Location */}
        <h1 className="heading lg:max-w-[45vw] text-center">
          <span className="text-teal-200">January 31, 2025</span>
        </h1>

        <h2 className="lg:max-w-[45vw] text-lg font-extrabold text-center">
          FR.CRCE, Bandra
        </h2>

        {/* Register Now Button */}
        <div className="mt-8">
          <a
            href="#register"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Register Now
          </a>
        </div>

        {/* "What is Beyond the Spectrum?" */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-teal-200">What is Beyond the Spectrum?</span>
          </h3>
          <p className="text-gray-200 max-w-3xl mx-auto">
            &quot;Beyond the Spectrum&quot; explores the realms of the unknown, inspiring us to step beyond the ordinary
            and embrace unique perspectives. It encourages challenging conventional boundaries and celebrating innovation, diversity, and curiosity.
          </p>
        </div>

        {/* Speaker Details */}
        <div className="mt-20 w-full">
          <Speakers />
        </div>

        {/* Additional Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
          <div className="p-4 bg-black-300 rounded-lg shadow bg-opacity-25">
            <h3 className="text-xl font-bold mb-2"><span className="text-teal-200">What is TED?</span></h3>
            <p className="text-gray-200">
              TED is a global community dedicated to spreading ideas through short, powerful talks
              on a wide range of topics, from technology and science to creativity and culture.
            </p>
          </div>

          <div className="p-4 bg-black-300 rounded-lg shadow bg-opacity-25">
            <h3 className="text-xl font-bold mb-2"><span className="text-teal-200">What is TEDx?</span></h3>
            <p className="text-gray-200">
              TEDx events are independently organized programs that bring people together to share
              a TED-like experience, fostering discussion and connection within local communities.
            </p>
          </div>

          <div className="p-4 bg-black-300 rounded-lg shadow bg-opacity-25">
            <h3 className="text-xl font-bold mb-2"><span className="text-teal-200">What is TEDxCRCE?</span></h3>
            <p className="text-gray-200">
              TEDxCRCE is an independently organized TEDx event hosted at FR.CRCE, Bandra. It aims to
              inspire innovation, spark conversations, and showcase impactful ideas from our community.
            </p>
          </div>
        </div>

        <HeroParallax products={products} />
      </div>
    </section>
  );
};

export default AboutTed;

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/photo1.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/photo2.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/photo3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/photo4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/photo5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/photo6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/photo7.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/photo8.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/photo1.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/photo6.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/photo5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/photo6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/photo7.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/photo8.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/photo2.jpg",
  },
];