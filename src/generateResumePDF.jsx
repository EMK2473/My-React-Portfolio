import jsPDF from "jspdf";

const generateAndSavePDF = () => {
  const pdf = new jsPDF();
  pdf.text("This is going to be my resume!", 10, 10);
  pdf.save("MyResume.pdf");
};

export default generateAndSavePDF;
