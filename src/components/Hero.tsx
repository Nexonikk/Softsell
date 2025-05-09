import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-black dark:opacity-90 dark:via-blue-950 dark:to-black">
        <motion.div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(15, 82, 186, 0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Centered glow effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />

        <div className="flex flex-col items-center justify-center text-center z-10 relative">
          <motion.div className="relative max-w-3xl mx-auto" style={{ y: y1 }}>
            <motion.span
              className="inline-block text-primary-600 dark:text-primary-400 font-semibold mb-4 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transform Your Software Assets
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              transition={{ delay: 1 }}
              variants={itemVariants}
            >
              Unlock the Value of Your{" "}
              <span className="relative">
                <span className="relative z-10 text-primary-600 dark:text-primary-400">
                  Unused Software
                </span>
                <motion.span
                  className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 -rotate-2 rounded"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              transition={{ delay: 3, duration: 0.5 }}
              variants={itemVariants}
            >
              Turn your surplus software licenses into cash. Our secure platform
              connects sellers with verified buyers for maximum returns.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              transition={{ delay: 5, duration: 0.5 }}
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-medium transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Sell My Licenses</span>
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.a>

              <motion.a
                href="#how-it-works"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>How It Works</span>
                <motion.span className="ml-2 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
