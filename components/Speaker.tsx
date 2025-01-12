import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Speakers = () => {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "/tedx.png",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "/tedx.png",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "/tedx.png",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "/tedx.png",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "/tedx.png",
        },
    ];

    return (
        <div className="py-10 mt-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="font-bold text-4xl md:text-5xl text-center sm:text-start mb-8">
            <span className="text-teal-200">Our Speakers</span>
            </h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
};

export default Speakers;
