import React from 'react';

// Main App Component
function App() {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 bg-gray-50 text-gray-800 font-inter">
      <Header />
      <FeaturedProject />
      <Skills />
      <Experience />
      <EducationCertifications />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="text-center mb-16">
      <div className="mb-6">
        {/* Profile Image - Corrected alt text */}
        <img
          src="screenshot_1.jpg" // Using the provided image filename
          alt="Hubert Torres Pozo" // Removed 'Imagen'
          className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
        />
      </div>
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 leading-tight mb-4">
        Hubert Torres Pozo
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6">
        Software Engineer | Data Solutions | Full-Stack Developer
      </p>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Over 15 years of experience in software development and data analysis, specializing in building and optimizing robust data engineering solutions and enterprise applications. Expert in the Azure ecosystem, Full-Stack development with <strong className="font-semibold">.NET and Angular</strong>, and the creation of innovative <strong className="font-semibold">IoT-based systems</strong> for automation and data-driven decision-making. Proven ability to drive operational efficiency and cost reduction through advanced technological solutions.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/hubert-torres-pozo-250538127" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg hover:opacity-90 transition-opacity">
          View LinkedIn
        </a>
        <a href="mailto:hubertornadot@gmail.com" className="inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gray-700 shadow-lg hover:bg-gray-800 transition-colors">
          Contact Me
        </a>
      </div>
    </header>
  );
}

// Featured Project Component
function FeaturedProject() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Featured Project: Laundry Metric
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Laundry Metric: Revolution in Smart Linen Management
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          I led the development of <strong className="font-semibold">"Laundry Metric"</strong>, a comprehensive IoT and cloud-based system designed to automate and optimize linen management in hotels and other establishments. This project demonstrates my ability to merge data engineering, full-stack development, and IoT solutions to solve complex business problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">The Challenge Solved</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="font-semibold">Linen Loss and Misplacement:</strong> Reduction of hidden costs and frequent replacement needs.</li>
              <li><strong className="font-semibold">Inaccurate Inventory:</strong> Lack of real-time stock knowledge, leading to shortages or excesses.</li>
              <li><strong className="font-semibold">Operational Inefficiency:</strong> Time and resources dedicated to manual counting and tracking tasks.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Key Impact and Achievements</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Achieved an <strong className="font-semibold">estimated 20% reduction in linen inventory losses</strong>, optimizing operational efficiency.</li>
              <li>Engineered ETL/ELT pipelines with Azure Data Factory and Databricks, resulting in a <strong className="font-semibold">75% reduction in data processing time</strong>.</li>
              <li>Provided <strong className="font-semibold">real-time inventory visibility</strong>, enhancing strategic decision-making.</li>
            </ul>
          </div>
        </div>

        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Architecture and Key Technologies</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-blue-800 mb-2">IoT and Hardware</h5>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong className="font-medium">Raspberry Pi:</strong> Automatic control devices.</li>
              <li><strong className="font-medium">Weight Sensors:</strong> For real-time inventory monitoring.</li>
            </ul>
            {/* Corrected alt text */}
            <img src="https://placehold.co/400x200/E0F2FE/0284C7?text=Raspberry+Pi+Device" alt="Raspberry Pi Device with Sensors" className="mt-4 rounded-md shadow-md w-full h-auto" />
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-green-800 mb-2">Backend and Cloud</h5>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong className="font-medium">.NET 8 API:</strong> Backend microservice.</li>
              <li><strong className="font-medium">Azure Kubernetes:</strong> Cluster for microservices.</li>
              <li><strong className="font-medium">Microsoft SQL Server (Serverless):</strong> OLTP and DWH databases.</li>
            </ul>
            {/* Corrected alt text */}
            <img src="https://placehold.co/400x200/E0F2FE/0284C7?text=Azure+Data+Factory+Dashboard" alt="Azure Data Factory Dashboard" className="mt-4 rounded-md shadow-md w-full h-auto" />
          </div>
          <div className="p-4 bg-purple-50 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-purple-800 mb-2">Frontend and BI</h5>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong className="font-medium">Angular 16:</strong> Frontend web application.</li>
              <li><strong className="font-medium">Power BI:</strong> Embedded dashboards for data analysis.</li>
              <li><strong className="font-medium">Multi-Tenant Management:</strong> Configuration per establishment.</li>
            </ul>
            {/* Corrected alt text */}
            <img src="https://placehold.co/400x200/E0F2FE/0284C7?text=Power+BI+Dashboards" alt="Power BI Dashboards" className="mt-4 rounded-md shadow-md w-full h-auto" />
          </div>
        </div>

        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Competitive Advantage</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong className="font-semibold">IoT Innovation:</strong> Real-time weight sensors for unparalleled accuracy.</li>
          <li><strong className="font-semibold">Cutting-Edge Technology:</strong> Robust and scalable Azure infrastructure.</li>
          <li><strong className="font-semibold">Powerful Data Analytics:</strong> Power BI dashboards transform data into actionable business intelligence.</li>
          <li><strong className="font-semibold">Intuitive User Experience:</strong> Modern and easy-to-use web application.</li>
        </ul>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skillsData = {
    "Data Engineering & BI": [
      "Azure Data Factory", "Azure Databricks", "Azure Synapse Analytics", "Azure Data Lake",
      "Microsoft Azure SQL Database", "Azure Cosmos DB", "Power BI", "Tableau", "SQL",
      "Oracle", "PostgreSQL", "Statistics", "ETL/ELT", "Dimensional Data Modeling", "Data Warehousing"
    ],
    "Full-Stack Development & Cloud": [
      ".NET", "C#", "Angular", "JavaScript", "APIs", "Kubernetes", "Docker", "Microservices",
      "Azure Cloud", "IoT (Raspberry Pi, Weight Sensors)"
    ],
    "Other Languages & Tools": [
      "Python", "Java", "C++", "Git", "MySQL", "HDInsight"
    ]
  };

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Technical Skills
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience Component
function Experience() {
  const experienceData = [
    {
      title: "Senior Business Intelligence (BI) Developer",
      company: "inswitch",
      location: "Montevideo, Uruguay",
      dates: "August 2017 – February 2024",
      description: [
        "Designed, developed, and implemented Data Warehouse and BI solutions (Power BI, Looker, Tableau), improving business visibility.",
        "Led the implementation of data pipelines in Azure Cloud, ensuring CI/CD with Azure DevOps, Docker, and Kubernetes.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "ArkanoSoft",
      location: "Montevideo, Uruguay",
      dates: "October 2016 – August 2017",
      description: [
        "Developed enterprise applications based on Microsoft .NET.",
        "Analyzed user requirements and translated client needs into application designs.",
      ],
    },
    {
      title: "University Lecturer and System Developer",
      company: "Methodist University of Angola",
      location: "Angola",
      dates: "February 2013 – June 2016",
      description: [
        "Taught courses and developed applications in Artificial Intelligence, Computer Decision Support Systems, and Distributed Systems.",
      ],
    },
    {
      title: "Developer",
      company: "Software Development Center - CEDESA",
      location: "Santiago de Cuba, Cuba",
      dates: "September 2010 – January 2013",
      description: [
        "Developed SCADA applications in C++ and enterprise applications in Java (Hibernate + Spring).",
      ],
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Work Experience
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-6xl mx-auto space-y-8">
        {experienceData.map((job, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-lg text-gray-600">{job.company} - {job.location} | {job.dates}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
              {job.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// Education and Certifications Component
function EducationCertifications() {
  const educationData = [
    {
      degree: "Computer Science Engineer",
      university: "Universidad de Oriente",
      location: "Santiago de Cuba, Cuba",
      dates: "September 2005 – July 2010",
    },
  ];

  const certificationsData = [
    "The Business Intelligence Analyst Course 2025 - April 2025 – Present",
    "Inferential Statistics for Machine Learning with R and Python - March 2025 – Present",
    "Azure Data Engineer Technologies for Beginners [Bundle] - February 2025 – Present",
    "Unit Testing in .Net - December 2024 – Present",
    "FullStack Application in Angular and Net - October 2024 – Present",
    "Mastering LookML: Looker's Modeling Language - February 2021 – Present",
    "Complete Power BI Course for Data Analysis - August 2020 – Present",
    "Tableau A-Z: Data Analytics Training - August 2020 – Present",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Education & Certifications
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {educationData.map((edu, index) => (
              <li key={index}>
                <strong className="font-semibold">{edu.degree}</strong><br />
                {edu.university} - {edu.location}<br />
                <em>{edu.dates}</em>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certifications & Licenses</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {certificationsData.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Contact Me
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          I am seeking challenging opportunities in Austin, TX, where I can apply my expertise in data engineering, full-stack development, and innovative solutions to drive your organization's success.
        </p>
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Email: <a href="mailto:hubertornadot@gmail.com" className="text-blue-600 hover:underline">hubertornadot@gmail.com</a>
        </p>
        <p className="text-xl font-semibold text-gray-800">
          Phone: +17373518151
        </p>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm py-8">
      <p>&copy; 2025 Hubert Torres Pozo. All rights reserved.</p>
    </footer>
  );
}

export default App; // Export the main App component
