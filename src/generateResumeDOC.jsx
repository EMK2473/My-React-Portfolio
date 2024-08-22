import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const generateAndSaveDocx = () => {
  const doc = new Document({
    sections: [
      {
        children: [
          // Header
          new Paragraph({
            children: [new TextRun({ text: "Eric M. Keeton", bold: true, size: 32 })],
          }),
          new Paragraph({
            children: [new TextRun({ text: "3801 Haylors Beach Way, Richmond, VA 23060", size: 20 })],
          }),
          new Paragraph({
            children: [new TextRun({ text: "Phone: (804) 937-3742 | Email: emk2473@gmail.com", size: 20 })],
          }),

          // Links
          new Paragraph({
            children: [
              new TextRun({ text: "GitHub:", size: 20 }),
              new TextRun({
                text: " https://github.com/EMK2473",
                color: "0000FF",
                underline: {},
                link: "https://github.com/EMK2473",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "LinkedIn:", size: 20 }),
              new TextRun({
                text: " www.linkedin.com/in/eric-keeton-509a032a9/",
                color: "0000FF",
                underline: {},
                link: "https://www.linkedin.com/in/eric-keeton-509a032a9/",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Portfolio:", size: 20 }),
              new TextRun({
                text: " https://magnificent-pithivier-fd5a98.netlify.app/",
                color: "0000FF",
                underline: {},
                link: "https://magnificent-pithivier-fd5a98.netlify.app/",
                size: 20,
              }),
            ],
          }),

          // Summary
          new Paragraph({
            children: [new TextRun({ text: "SUMMARY", bold: true, size: 24 })],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Software Developer pursuing a Computer Science Degree in Software Engineering at Virginia Commonwealth University. Completed Full Stack Web Development and Machine Learning AI certificates from University of Richmond. SCRUM and Agile workflow enthusiast. Strong project management, leadership, and communication skills.",
                size: 20,
              }),
            ],
          }),

          // Technical Skills
          new Paragraph({
            children: [new TextRun({ text: "TECHNICAL SKILLS", bold: true, size: 24 })],
          }),
          new Paragraph({
            children: [new TextRun({ text: "Languages: Python, JavaScript, HTML, CSS, SQL, NoSQL, .Net, AWS", size: 20 })],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Frameworks & Libraries: ReactJS, NodeJS, NextJS, GraphQL, MongoDB, TensorFlow, Keras, Pandas, scikit-learn, NumPy, Matplotlib, tesseract",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [new TextRun({ text: "Methodologies: Agile Workflow", size: 20 })],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Tools: Spreadsheet technologies, data visualization, modeling & design, cloud services",
                size: 20,
              }),
            ],
          }),

          // Projects
          new Paragraph({
            children: [new TextRun({ text: "PROJECTS", bold: true, size: 24 })],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Wreck’d Treasure | Heroku:", size: 20 }),
              new TextRun({
                text: " https://sheltered-island-02345-cf3621cb29c3.herokuapp.com/",
                color: "0000FF",
                underline: {},
                link: "https://sheltered-island-02345-cf3621cb29c3.herokuapp.com/",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Summary: Project lead in planning, designing and developing a M.E.R.N. Full Stack Application utilizing GraphQL and Apollo Servers. Developed backend logic, frontend React components, and integrated GoogleMaps API functionality.",
                size: 20,
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({ text: "Password Generator | Heroku:", size: 20 }),
              new TextRun({
                text: " https://emk2473.github.io/Password-Generator/",
                color: "0000FF",
                underline: {},
                link: "https://emk2473.github.io/Password-Generator/",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Summary: A flexible and scalable password generator. Designed as a single function application handling all necessary logic.",
                size: 20,
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({ text: "Spam Detection Model | GitHub:", size: 20 }),
              new TextRun({
                text: " https://github.com/EMK2473/spam_detection_model",
                color: "0000FF",
                underline: {},
                link: "https://github.com/EMK2473/spam_detection_model",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Summary: Preprocessed and partitioned data for training and testing. Implemented feature scaling techniques to enhance model performance. Developed and trained logistic regression and random forest classifier models. Conducted comprehensive model evaluation and performance analysis to assess effectiveness.",
                size: 20,
              }),
            ],
          }),

          // Professional Experience
          new Paragraph({
            children: [new TextRun({ text: "PROFESSIONAL EXPERIENCE", bold: true, size: 24 })],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Caretaker | 2020-2023: Full-time care for stroke patient. Managed wellness plan, therapy, and medications.",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Sales Rep | 2019-2020 | Go Wireless, Denver & Richmond: Utilized software platforms, managed client info, and ensured service delivery.",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Pharmacy Technician | 2018-2019 | Walgreens, Denver: Prescription processing, inventory management, and customer service.",
                size: 20,
              }),
            ],
          }),

          // Education
          new Paragraph({
            children: [new TextRun({ text: "EDUCATION", bold: true, size: 24 })],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Certificate, Full Stack Web Development: U of R, Richmond, VA, 2024",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Certificate, A.I. Machine Learning: U of R, Richmond, VA, 2024",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Associates of Science: J. Sargeant Reynolds, Richmond, VA, 2023",
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Pursuing Bachelor’s in Software Engineering: VCU, Richmond, VA, Expected 2026",
                size: 20,
              }),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "Eric_Keeton_Resume.docx");
  });
};

export default generateAndSaveDocx;
