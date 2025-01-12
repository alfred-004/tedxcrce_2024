import Speakers from "./Speaker";

const AboutTed = () => {
    return (
      <section id="about-ted" className="relative w-full py-5 sm:pt-10 ">
        {/* background grid */}
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            <span className="text-teal-200">January 31, 2025</span>
          </h1>

          <h2 className="lg:max-w-[45vw] text-lg font-extrabold">
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
          
          {/*Speaker Details */}
            <Speakers />
          {/* Additional Content */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-black-300 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">What is TED?</h3>
              <p className="text-gray-200">
                TED is a global community dedicated to spreading ideas through short, powerful talks
                on a wide range of topics, from technology and science to creativity and culture.
              </p>
            </div>

            <div className="p-4 bg-black-300 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">What is TEDx?</h3>
              <p className="text-gray-200">
                TEDx events are independently organized programs that bring people together to share
                a TED-like experience, fostering discussion and connection within local communities.
              </p>
            </div>

            <div className="p-4 bg-black-300 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">What is TEDxCRCE?</h3>
              <p className="text-gray-200">
                TEDxCRCE is an independently organized TEDx event hosted at FR.CRCE, Bandra. It aims to
                inspire innovation, spark conversations, and showcase impactful ideas from our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default AboutTed;
