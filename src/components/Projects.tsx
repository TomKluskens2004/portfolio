import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const htmlTag = { name: "HTML", colorClass: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" };
  const phpTag = { name: "PHP", colorClass: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" };
  const mysqlTag = { name: "MySQL", colorClass: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" };
  const jsTag = { name: "JavaScript", colorClass: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" };
  const cssTag = { name: "CSS", colorClass: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" };
  const reactTag = { name: "React", colorClass: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" };
  const nodeTag = { name: "Node.js", colorClass: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" };
  const tailwindTag = { name: "Tailwind", colorClass: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" };

  const projects = [
    {
      title: "School Library System",
      description: "A school library system built with HTML, PHP, and MySQL that automatically generates QR codes with unique ISBN numbers of books.",
      tags: [htmlTag, phpTag, cssTag, mysqlTag],
      sourceLink: "https://github.com/TomKluskens2004/SchoolBib",
      imageUrl: "/files/Project_Bib.jpg"
    },
    {
      title: "Turtle SRL Dashboard",
      description: "A dashboard that converts customer data into charts using JavaScript. This was my internship project in Cesenatico, Italy.",
      tags: [htmlTag, jsTag, cssTag],
      sourceLink: "https://github.com/TomKluskens2004/Dashboard-Turtle",
      imageUrl: "/files/Project_Italie.png"
    },
    {
      title: "Recipe Relay",
      description: "A social platform for students to upload, share, like and comment on recipes plus add friends, built with Node.js, React and Tailwind CSS.",
      tags: [reactTag, nodeTag, tailwindTag, mysqlTag],
      sourceLink: "https://github.com/TomKluskens2004/RecipeRelay",
      imageUrl: "/files/Project_Recept.png"
    },
    {
      title: "Delaware Dashboard",
      description: "A dashboard created in my second year at HoGent for Delaware. In a team of 5, we built a dashboard to view machines per site with KPIs. This project was built with React and Node.js.",
      tags: [reactTag, nodeTag, tailwindTag, mysqlTag],
      imageUrl: "/files/Project_Dellaware.png",
      status: "In Progress"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              sourceLink={project.sourceLink}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;