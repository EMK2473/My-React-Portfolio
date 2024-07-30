import jsPDF from "jspdf";

const generateAndSavePDF = () => {
  const pdf = new jsPDF();

  // Header
  pdf.setFontSize(16);
  pdf.text("Eric M. Keeton", 10, 10);

  pdf.setFontSize(8);
  pdf.text("3801 Haylors Beach Way, Richmond, VA 23060", 10, 15);
  pdf.text("Phone: (804) 937-3742 | Email: emk2473@gmail.com", 10, 20);

  // Links
  pdf.setTextColor(0, 0, 0);
  pdf.text("GitHub:", 10, 25, {
  });
  pdf.setTextColor(0, 0, 255);
  pdf.text("https://github.com/EMK2473", 20, 25, {
    link: "https://github.com/EMK2473",
  });
  pdf.setTextColor(0, 0, 0);
  pdf.text("LinkedIn:", 10, 30, {

  });
  pdf.setTextColor(0, 0, 255);

  pdf.text("www.linkedin.com/in/eric-keeton-509a032a9/", 22, 30, {
    link: "https://www.linkedin.com/in/eric-keeton-509a032a9/",
  });
  pdf.setTextColor(0, 0, 0);
  pdf.text(
    "Portfolio:",
    10,
    35,
  );
  pdf.setTextColor(0, 0, 255);
  pdf.text(
    "https://magnificent-pithivier-fd5a98.netlify.app/",
    22,
    35,
    { link: "https://magnificent-pithivier-fd5a98.netlify.app/" }
  );

  pdf.setTextColor(0, 0, 0);

  // Summary
  pdf.setFontSize(12);
  pdf.text("SUMMARY", 10, 45);
  pdf.setFontSize(8);
  pdf.text(
    "Software Developer pursuing a Computer Science Degree in Software Engineering at Virginia Commonwealth University. Completed Full Stack Web Development and Machine Learning AI certificates from University of Richmond. SCRUM and Agile workflow enthusiast. Strong project management, leadership, and communication skills.",
    10,
    50,
    { maxWidth: 180 }
  );

  // Technical Skills
  pdf.setFontSize(12);
  pdf.text("TECHNICAL SKILLS", 10, 70);
  pdf.setFontSize(8);
  pdf.text(
    "Languages: Python, JavaScript, HTML, CSS, SQL, NoSQL, .Net, AWS",
    10,
    75
  );
  pdf.text(
    "Frameworks & Libraries: ReactJS, NodeJS, NextJS, GraphQL, MongoDB, TensorFlow, Keras, Pandas, scikit-learn, NumPy, Matplotlib, tesseract",
    10,
    80,
    { maxWidth: 180 }
  );
  pdf.text("Methodologies: Agile Workflow", 10, 85);
  pdf.text(
    "Tools: Spreadsheet technologies, data visualization, modeling & design, cloud services",
    10,
    90
  );

  // Projects
  pdf.setFontSize(12);
  pdf.text("PROJECTS", 10, 100);
  pdf.setFontSize(8);

  pdf.setTextColor(0, 0, 0);
  pdf.text(
    "Wreck’d Treasure | Heroku:",
    10,
    105,
  );
  pdf.setTextColor(0, 0, 255);
  pdf.text(
    "https://sheltered-island-02345-cf3621cb29c3.herokuapp.com/",
    45,
    105,
    { link: "https://sheltered-island-02345-cf3621cb29c3.herokuapp.com/" }
  );
  pdf.setTextColor(0, 0, 0);
  pdf.text(
    "Summary: Project lead in planning, designing and developing a M.E.R.N. Full Stack Application utilizing GraphQL and Apollo Servers.",
    10,
    110,
    { maxWidth: 180 }
  );
  pdf.text(
    "Developed backend logic, frontend React components, and integrated GoogleMaps API functionality.",
    10,
    115
  );
  pdf.setTextColor(0, 0, 0);
  pdf.text(
    "Password Generator | Heroku:",
    10,
    125,
  );
  pdf.setTextColor(0, 0, 255);
  pdf.text(
    "https://emk2473.github.io/Password-Generator/",
    49,
    125,
    { link: "https://emk2473.github.io/Password-Generator/" }
  );
  pdf.setTextColor(0, 0, 0);
  pdf.text("Summary: A flexible and scalable password generator.", 10, 130, {
    maxWidth: 180,
  });
  pdf.text(
    "Desinged as a single function application handling all necessary logic.",
    10,
    135,
    { maxWidth: 180 }
  );
  pdf.setTextColor(0, 0, 0);
  pdf.text(
    "Spam Detection Model | GitHub:",
    10,
    145,
  );
  pdf.setTextColor(0, 0, 255);
  pdf.text(
    "https://github.com/EMK2473/spam_detection_model",
    51,
    145,
    { link: "https://github.com/EMK2473/spam_detection_model" }
  );
  pdf.setTextColor(0, 0, 0);
  pdf.text(
    "Summary: Preprocessed and partitioned data for training and testing. Implemented feature scaling techniques to enhance model performance.",
    10,
    150,
    { maxWidth: 180 }
  );
  pdf.text(
    "Developed and trained logistic regression and random forest classifier models.",
    10,
    155,
    { maxWidth: 180 }
  );
  pdf.text(
    "Conducted comprehensive model evaluation and performance analysis to assess effectiveness.",
    10,
    160,
    { maxWidth: 180 }
  );

  // Professional Experience
  pdf.setFontSize(12);
  pdf.text("PROFESSIONAL EXPERIENCE", 10, 170);
  pdf.setFontSize(8);

  pdf.text(
    "Caretaker | 2020-2023: Full-time care for stroke patient. Managed wellness plan, therapy, and medications.",
    10,
    175,
    { maxWidth: 180 }
  );
  pdf.text(
    "Sales Rep | 2019-2020 | Go Wireless, Denver & Richmond: Utilized software platforms, managed client info, and ensured service delivery.",
    10,
    180,
    { maxWidth: 180 }
  );
  pdf.text(
    "Pharmacy Technician | 2018-2019 | Walgreens, Denver: Prescription processing, inventory management, and customer service.",
    10,
    185,
    { maxWidth: 180 }
  );

  // Education
  pdf.setFontSize(12);
  pdf.text("EDUCATION", 10, 200);
  pdf.setFontSize(8);

  pdf.text(
    "Certificate, Full Stack Web Development: U of R, Richmond, VA, 2024",
    10,
    205
  );
  pdf.text(
    "Certificate, A.I. Machine Learning: U of R, Richmond, VA, 2024",
    10,
    210
  );
  pdf.text(
    "Associates of Science: J. Sargeant Reynolds, Richmond, VA, 2023",
    10,
    215
  );
  pdf.text(
    "Pursuing Bachelor’s in Software Engineering: VCU, Richmond, VA, Expected 2026",
    10,
    220
  );

  pdf.save("Eric_Keeton_Resume.pdf");
};

export default generateAndSavePDF;
