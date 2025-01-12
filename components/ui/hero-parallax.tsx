"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 500, damping: 20, bounce: 0 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 0.6], [0, 500]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 0.6], [0, -500]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.1], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.1], [0.2, 1]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.1], [-200, 200]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[150vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 mb-6">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row space-x-8 mb-6">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-8">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0">
            <h1 className="text-2xl md:text-6xl font-bold dark:text-white">
                The Ultimate <br /> development studio
            </h1>
            <p className="max-w-2xl text-base md:text-lg mt-6 dark:text-neutral-200">
                We build beautiful products with the latest technologies and frameworks.
                We are a team of passionate developers and designers that love to build
                amazing products.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -8,
            }}
            key={product.title}
            className="group/product h-64 w-[20rem] relative flex-shrink-0"
        >
            <Image
                src={product.thumbnail}
                height="400"
                width="400"
                className="object-cover object-left-top absolute h-full w-full inset-0"
                alt={product.title}
            />
            <div className="absolute inset-0 h-full w-full opacity-0 bg-black pointer-events-none"></div>
        </motion.div>
    );
};
