import { motion } from "motion/react";
import { ChevronDown, MapPin, Coffee, Mountain, Music } from "lucide-react";
import profileImage from "@/assets/ec4a04fed92557d2af4334e4e56bfc146239cc16.png";

export function Hero() {
  const hobbies = [
    { icon: Music, label: "Dancing" },
    { icon: Mountain, label: "Hiking" },
    { icon: Coffee, label: "Café Culture" },
    { icon: MapPin, label: "Exploring" },
  ];

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-end"
          >
            <motion.h1
              className="text-4xl md:text-5xl mb-6 text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Sneha
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={profileImage}
                  alt="Sneha"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full-Stack Web Developer
            </motion.p>
          </motion.div>

          {/* Right Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl mb-4 text-gray-800">About Me</h2>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span>Helsinki, Finland</span>
            </div>

            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              Full-stack developer with hands-on experience building modern
              web applications using React, TypeScript, and cloud
              technologies. Recently graduated from Business College Helsinki
              with practical project and internship experience developing real
              product features.
            </p>

            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              Previously worked for four years at Capgemini supporting
              enterprise retail systems, where I developed strong analytical,
              problem-solving, and collaboration skills in international
              teams.
            </p>

            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              I enjoy working in collaborative environments, learning new
              technologies, and building digital solutions that create real
              business impact.
            </p>

            <div className="mb-6">
              <h3 className="text-lg mb-3 text-gray-800">When I'm not coding:</h3>
              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2 p-2.5 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm"
                  >
                    <hobby.icon className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-700">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-md hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#education">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}