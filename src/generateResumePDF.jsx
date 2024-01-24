import jsPDF from "jspdf";

const generateAndSavePDF = () => {
  const pdf = new jsPDF();
  
  pdf.text("Eric Keeton's Placeholder Resume", 10, 10);

  pdf.text("Proficient in:", 10, 20);
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node",
    "Express",
    "MySQL",
    "NoSQL",
    "GraphQL",
    "Material UI",
    "HTML",
    "CSS",
    "Git",
    "XML",
    "SVG",
    "jQuery",
    "APIs",
    "AJAX",
    "Agile Workflow",
    "SCRUM Methodology",
    "Agile Methodologies (Scrum, Kanban, SAFe, etc.)",
    "Project Management",
    "Software Development",
    "Team Building",
    "Problem-Solving",
    "Time Management",
    "Quality Assurance",
  ];
  

  skills.forEach((skill, index) => {
    pdf.text(`  "${skill}"`, 10, 30 + index * 10);
  });

  pdf.save("MyResume.pdf");
};

export default generateAndSavePDF;
