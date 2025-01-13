import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Speakers = () => {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Abhash Jha",
            designation: "Product Manager at TechFlow",
            src: "/abhash-jha.png",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Kanupriya Gupta",
            designation: "CTO at InnovateSphere",
            src: "/Kanupriya.jpg",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Allok Sharma",
            designation: "Operations Director at CloudScale",
            src: "/Allok.jpg",
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
