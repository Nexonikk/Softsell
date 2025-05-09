import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $200,000 from unused enterprise licenses that were just sitting on our books. The process was incredibly straightforward and their team handled all the compliance details.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "Nexus Technologies",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=150",
    },
    {
      quote:
        "After downsizing our operations, we had dozens of premium software licenses we no longer needed. SoftSell found qualified buyers within days and we recouped nearly 65% of our original investment.",
      name: "Michael Chen",
      role: "IT Director",
      company: "Pinnacle Solutions",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=150",
    },
    {
      quote:
        "The transparency and security of SoftSell's platform gave us confidence that our software assets were being handled properly. Their valuation was fair and the payment process was seamless.",
      name: "Rebecca Torres",
      role: "CFO",
      company: "Horizon Enterprises",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=150",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how SoftSell has helped companies like yours recover value
            from unused software assets.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8 md:p-10 relative">
                      <Quote className="h-12 w-12 text-primary-200 dark:text-primary-900 absolute top-6 left-6 opacity-40" />
                      <div className="relative">
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 relative z-10">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary-600 dark:bg-primary-400"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
