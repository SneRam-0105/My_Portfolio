import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SneRam-0105",
      href: "https://github.com/SneRam-0105",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Helsinki, Finland",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "Location" && contact.label !== "Email" ? "_blank" : undefined}
              rel={contact.label !== "Location" && contact.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="p-2.5 bg-purple-100 rounded-lg">
                <contact.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">{contact.label}</div>
                <div className="text-sm text-gray-800">{contact.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-md hover:shadow-lg"
          >
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}