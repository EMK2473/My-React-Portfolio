// pdfUtils.js
import jsPDF from "jspdf";

// Utility function to generate and save PDF
const generateAndSavePDF = () => {
  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Add the content to the PDF
  pdf.text("This is going to be my resume!", 10, 10);

  // Save the PDF as a file
  pdf.save("MyResume.pdf");
};

export default generateAndSavePDF;
