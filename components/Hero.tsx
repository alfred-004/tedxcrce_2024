import Image from 'next/image';
import BallCanvas from './BallCanvas';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { motion } from 'framer-motion';

const Hero = () => {
  const words = `Beyond the ${'\n'} Spectrum`;

  return (
    <section id="about" className="relative w-full py-5">
      {/* Parent container with fixed height */}
      <div className="relative h-[600px] w-full overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <ShootingStars />
          <StarsBackground />
        </div>

        {/* Main content */}
        <div className="flex justify-center relative z-10 h-full">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center h-full relative">
            {/* Main BTS Image */}
            <Image
              src="/bts.png"
              width={300}
              height={500}
              alt="BTS"
              className="object-contain"
            />
            {/* BTS Text Image with animation */}
            <motion.div
              initial={{ y: -200, scale: 0.5, opacity: 0 }} // Start above with smaller size
              animate={{ y: 0, scale: 2, opacity: 1 }} // Move down, grow beyond, and fade in
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute bottom-0 left-0"
            >
              <Image
                src="/bts-text.svg"
                width={500}
                height={600}
                alt="bts-text"
                className="object-contain"
              />
            </motion.div>
          </div>
          <BallCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
