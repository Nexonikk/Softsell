import { Upload, DollarSign, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <Upload className="h-12 w-12 text-primary-600 dark:text-primary-400 mb-6" />
      ),
      title: "Upload License",
      description:
        "Submit your software license details through our secure portal for quick verification.",
    },
    {
      icon: (
        <DollarSign className="h-12 w-12 text-primary-600 dark:text-primary-400 mb-6" />
      ),
      title: "Get Valuation",
      description:
        "Receive a competitive market valuation based on current demand and license specifications.",
    },
    {
      icon: (
        <Check className="h-12 w-12 text-primary-600 dark:text-primary-400 mb-6" />
      ),
      title: "Get Paid",
      description:
        "Accept the offer and get paid securely. We handle the transfer and compliance requirements.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses
            simple, secure, and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-0">
            <div className="absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
            <div className="absolute left-2/3 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
            <div className="absolute right-0 -translate-x-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 hover:border-[#0f52ba] hover:border-2 rounded-xl shadow-md p-8 text-center relative z-10 transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
