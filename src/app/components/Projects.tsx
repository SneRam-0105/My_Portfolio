import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mock GitHub projects data
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      stars: 24,
      forks: 8,
      githubUrl: "https://github.com/SneRam-0105/ecommerce-platform",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzczNjMxMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, and drag-and-drop functionality for project organization.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      stars: 18,
      forks: 5,
      githubUrl: "https://github.com/SneRam-0105/task-manager",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1770368787779-8472da646193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzM2NjgwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Weather Dashboard",
      description:
        "Interactive weather application displaying current conditions, forecasts, and historical data with beautiful visualizations and charts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS"],
      stars: 32,
      forks: 12,
      githubUrl: "https://github.com/SneRam-0105/weather-dashboard",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBhcHB8ZW58MXx8fHwxNzczNjY4MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Portfolio CMS",
      description:
        "Headless CMS for managing portfolio content with a custom admin panel, image optimization, and markdown support for blog posts.",
      technologies: ["Next.js", "MongoDB", "AWS S3", "GraphQL"],
      stars: 15,
      forks: 4,
      githubUrl: "https://github.com/SneRam-0105/portfolio-cms",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1627719172038-611c725920bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NzM2MzIwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gradient-to-br from-purple-50/50 to-fuchsia-50/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-3"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Some of my recent work from GitHub
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-100 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-fuchsia-100">
                <motion.div
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay with links on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-fuchsia-900/90 flex items-center justify-center gap-4"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-lg text-gray-800 mb-2">{project.name}</h3>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://github.com/SneRam-0105?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}