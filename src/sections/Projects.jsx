import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "AI Agents with LangChain & LangGraph",
    description:
      "Designed and built AI agents from scratch using Python and LLMs, then reimplemented them using LangGraph’s flow-based architecture for better control and modularity. Implemented agentic search, state persistence, multi-threading, and human-in-the-loop mechanisms. Developed an essay-writing agent that simulates a researcher’s workflow with live agent outputs.",
    image: "/projects/langgraph-agent.png",
    tags: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Generative AI",
      "AI Agents",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "ResNet-18 Image Classification System",
    description:
      "Developed and trained multiple ResNet-18 models using PyTorch and FastAI for automated image classification. Improved accuracy from 56% to 88%, reduced manual review time by 70%, and increased throughput to 100 images per day. Deployed the system into a Linux-based web application with SQL logging for auditing and reporting.",
    image: "/projects/resnet18.png",
    tags: [
      "Python",
      "PyTorch",
      "FastAI",
      "Computer Vision",
      "Deep Learning",
      "SQL",
      "Linux",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Injection Moulding Process Prediction (ML)",
    description:
      "Built a comprehensive machine learning framework to predict injection moulding quality using classical ML models and neural networks. Achieved 93.63% accuracy with Random Forest and 93.5% cross-validation accuracy using optimized MLPs and Recursive Feature Elimination (RFE).",
    image: "/projects/injection-ml.png",
    tags: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Neural Networks",
      "RFE",
      "scikit-learn",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Injection Moulding Process Monitoring (Data Analytics)",
    description:
      "Performed data analytics and statistical modeling to identify key parameters affecting manufacturing conditions. Applied data cleaning, regression models, PCA, and visualization techniques to support predictive monitoring and decision-making.",
    image: "/projects/injection-analytics.png",
    tags: [
      "Python",
      "Pandas",
      "Statistical Analysis",
      "PCA",
      "Matplotlib",
      "Seaborn",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Auto-CA Compiler (Automation Project)",
    description:
      "Built an OCR-based automation system to extract numerical data from technical documents and automatically compute analysis results. Generated PowerPoint reports using python-pptx, saving over 80 hours through workflow automation.",
    image: "/projects/autoca.png",
    tags: [
      "Python",
      "OCR",
      "Automation",
      "Data Extraction",
      "python-pptx",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Pizza Boy – Database-Driven Ordering System",
    description:
      "Developed a full-stack pizza ordering system with role-based access for customers and staff. Implemented secure backend logic with prepared SQL statements and a relational MariaDB schema to support CRUD operations and order tracking.",
    image: "/projects/pizzaboy.png",
    tags: [
      "Python",
      "Flask",
      "MariaDB",
      "SQL",
      "HTML",
      "CSS",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Smart Campus IoT System",
    description:
      "Designed an IoT-based smart campus system to reduce energy consumption through occupancy-based automation. Integrated multiple sensors with Arduino and ESP32, featuring cloud dashboards and security enhancements including RFID and camera-based alerts.",
    image: "/projects/iot-campus.png",
    tags: [
      "IoT",
      "Arduino",
      "ESP32",
      "Sensors",
      "Automation",
      "Cloud Dashboard",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Asset Management System (C++ OOP)",
    description:
      "Built a full-featured C++ asset management system using core OOP principles. Implemented secure login, GUI and console interfaces, file-based persistence, exception handling, and UML-driven system design in a team environment.",
    image: "/projects/asset-management.png",
    tags: [
      "C++",
      "OOP",
      "GUI",
      "File I/O",
      "System Design",
    ],
    link: "#",
    github: "#",
  },
];


export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
