import { ShieldCheck, TrendingUp, Clock, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <ShieldCheck className="h-10 w-10 text-primary-600 dark:text-primary-400" />
      ),
      title: "Secure Transactions",
      description:
        "Our platform ensures compliance and security at every step, with end-to-end encryption and verified buyers.",
    },
    {
      icon: (
        <TrendingUp className="h-10 w-10 text-primary-600 dark:text-primary-400" />
      ),
      title: "Maximize Value",
      description:
        "Get up to 70% of the original license value, significantly higher than industry averages.",
    },
    {
      icon: (
        <Clock className="h-10 w-10 text-primary-600 dark:text-primary-400" />
      ),
      title: "Fast Process",
      description:
        "From submission to payment in as little as 48 hours, with transparent updates throughout.",
    },
    {
      icon: (
        <Users className="h-10 w-10 text-primary-600 dark:text-primary-400" />
      ),
      title: "Expert Support",
      description:
        "Our team of licensing specialists helps optimize your returns and handles compliance requirements.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We've helped companies recover over $50 million in unused software
            value with our trusted resale platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6  hover:bg-gradient-to-bl dark:from-gray-900 dark:to-blue-800 hover:shadow-lg hover:text-white hovor:transition-all duration-500"
            >
              <div className="rounded-full bg-primary-50 dark:bg-gray-800 p-4 inline-flex mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
