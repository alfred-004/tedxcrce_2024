import Image from 'next/image';
import BallCanvas from './BallCanvas';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero-section" className="relative w-full py-5 sm:pt-20" >
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
              animate={{ y: 0, scale: 1.5, opacity: 1 }} // Adjust scale for better responsiveness
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute bottom-0 left-0"
            >
              <Image
                src="/bts-text.svg"
                alt="bts-text"
                layout="intrinsic"
                width={490}
                height={590}
                className="object-contain max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[65vw] 2xl:max-w-[60vw]"
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
