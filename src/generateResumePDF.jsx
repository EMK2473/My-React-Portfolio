import jsPDF from "jspdf";

const generateAndSavePDF = () => {
  const pdf = new jsPDF();
  
  // Add title
  pdf.text("Eric Keeton's Placeholder Resume", 10, 10);

  // Add proficiency section
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
  

  // Add skills list
  skills.forEach((skill, index) => {
    pdf.text(`  "${skill}"`, 10, 30 + index * 10);
  });

  // Save the PDF
  pdf.save("MyResume.pdf");
};

export default generateAndSavePDF;
