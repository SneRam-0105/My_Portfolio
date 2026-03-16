import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
      {
      type: "experience",
      title: "Frontend Developer Intern",
      subtitle: "Project – Ping Point",
      institution: "Startup project",
      location: "Helsinki, Finland",
      period: "Aug 2025 – Present",
      description: [
        "Developing real product features",
        "Working with modern React stack",
        "Collaborating in agile environment",
      ],
    },
    {
      type: "education",
      title: "Vocational Qualification in Information and Communications Technology",
      subtitle: "Full Stack Web Development",
      institution: "Business College Helsinki",
      location: "Helsinki, Finland",
      period: "Aug 2024 – Dec 2025",
      description: [
        "React, TypeScript, Node.js",
        "REST APIs, databases",
        "Cloud basics",
      ],
    },
    {
      type: "education",
      title: "AWS re/Start Graduate Program",
      institution: "Shortcut Oy",
      location: "Helsinki, Finland",
      period: "Sept 2023 – Nov 2023",
      description: ["AWS cloud fundamentals", "Linux administration", "Python scripting"],
    },
    {
      type: "education",
      title: "Bachelor of Engineering",
      subtitle: "Electronics and Communication Engineering",
      institution: "Vel Tech High Tech Engineering College",
      location: "Chennai, India",
      period: "2014 – 2018",
      description: [],
    },
  
  ];

  return (
    <section id="education" className="py-12 bg-gradient-to-br from-purple-50/50 to-fuchsia-50/50" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education & Experience
        </motion.h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative pl-8 pb-6 border-l-2 border-purple-200 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full"></div>

              <div className="bg-white p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === "education" ? (
                        <GraduationCap className="w-5 h-5 text-purple-600" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-purple-600" />
                      )}
                      <h3 className="text-lg text-gray-800">{item.title}</h3>
                    </div>
                    {item.subtitle && (
                      <p className="text-sm text-purple-600 mb-1">{item.subtitle}</p>
                    )}
                    <p className="text-sm text-gray-700">{item.institution}</p>
                  </div>

                  <div className="text-right text-sm text-gray-600">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {item.description.length > 0 && (
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      {item.description.map((desc, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                        >
                          {desc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}