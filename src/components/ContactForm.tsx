import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    "Enterprise Software",
    "CAD/Design Tools",
    "Database Licenses",
    "Development IDEs",
    "Cloud Services",
    "Security Software",
    "Other",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType)
      newErrors.licenseType = "Please select a license type";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and our team will provide a valuation for
              your unused software licenses within 24 hours.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                  <Send className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Your message has been received. Our team will get back to you
                  within 24 hours with a valuation for your software licenses.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                        errors.name
                          ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900"
                          : "border-gray-300 dark:border-gray-700 focus:ring-primary-200 dark:focus:ring-primary-900 dark:bg-gray-800"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                        errors.email
                          ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900"
                          : "border-gray-300 dark:border-gray-700 focus:ring-primary-200 dark:focus:ring-primary-900 dark:bg-gray-800"
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                        errors.company
                          ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900"
                          : "border-gray-300 dark:border-gray-700 focus:ring-primary-200 dark:focus:ring-primary-900 dark:bg-gray-800"
                      }`}
                      placeholder="Your Company"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="licenseType"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      License Type *
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                        errors.licenseType
                          ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900"
                          : "border-gray-300 dark:border-gray-700 focus:ring-primary-200 dark:focus:ring-primary-900 dark:bg-gray-800"
                      }`}
                    >
                      <option value="">Select License Type</option>
                      {licenseTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.licenseType}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-900"
                        : "border-gray-300 dark:border-gray-700 focus:ring-primary-200 dark:focus:ring-primary-900 dark:bg-gray-800"
                    }`}
                    placeholder="Tell us about your software licenses (quantity, type, expiration, etc.)"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Get Free Quote
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
