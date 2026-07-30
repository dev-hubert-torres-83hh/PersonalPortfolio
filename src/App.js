import React, { useState } from 'react';

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
        <img
          src="screenshot_1.jpg"
          alt="Hubert Torres Pozo"
          className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
        />
      </div>
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 leading-tight mb-4">
        Hubert Torres Pozo
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6">
        Senior Data Engineer | Python &amp; PySpark | Looker Tech Lead
      </p>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Data Engineer with 15 years in software development, focused on Python/PySpark pipelines
        and Looker BI at scale. The last several years have been in Azure's Data Lakehouse stack —
        Databricks, Azure Data Factory, Delta Lake — building pipelines that hold up under production
        loads. On the BI side, I led Looker's full implementation at inswitch for nearly 7 years,
        from LookML data modeling to Git-based governance workflows across multiple business units.
        I've shipped in production across 3 continents.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/hubert-torres-pozo-250538127"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg hover:opacity-90 transition-opacity"
        >
          View LinkedIn
        </a>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gray-700 shadow-lg hover:bg-gray-800 transition-colors"
        >
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
          Laundry Metric: IoT Linen Management System
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          I built <strong className="font-semibold">"Laundry Metric"</strong> — an IoT and
          cloud-based system that automates linen tracking in hotels and hospitality businesses.
          The stack runs on Raspberry Pi weight sensors feeding real-time data into an Azure
          Data Lakehouse, with a .NET API backend, Angular frontend, and Power BI dashboards
          for operations teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">The Problem</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="font-semibold">Linen Loss:</strong> Hidden costs from misplaced items and frequent replacements.</li>
              <li><strong className="font-semibold">No Real-Time Inventory:</strong> Manual counts led to shortages and excess stock.</li>
              <li><strong className="font-semibold">Manual Tracking:</strong> Staff time wasted on counting tasks that sensors can handle.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Results</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong className="font-semibold">~20% reduction</strong> in linen inventory losses.</li>
              <li>ETL/ELT pipelines (Azure Data Factory + Databricks) cut data processing time by <strong className="font-semibold">75%</strong>.</li>
              <li>Operations teams got <strong className="font-semibold">real-time inventory visibility</strong> for the first time.</li>
            </ul>
          </div>
        </div>

        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Architecture and Key Technologies</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-blue-800 mb-2">IoT and Hardware</h5>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong className="font-medium">Raspberry Pi:</strong> Automatic control devices.</li>
              <li><strong className="font-medium">Weight Sensors:</strong> Real-time inventory monitoring.</li>
            </ul>
            <img src="https://placehold.co/400x200/E0F2FE/0284C7?text=Raspberry+Pi+Device" alt="Raspberry Pi Device with Sensors" className="mt-4 rounded-md shadow-md w-full h-auto" />
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-green-800 mb-2">Backend and Cloud</h5>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong className="font-medium">.NET API:</strong> Backend microservice.</li>
              <li><strong className="font-medium">Azure Kubernetes:</strong> Cluster for microservices.</li>
              <li><strong className="font-medium">SQL Server (Serverless):</strong> OLTP and DWH databases.</li>
            </ul>
            <img src="https://placehold.co/400x200/E0F2FE/0284C7?text=Azure+Data+Factory+Dashboard" alt="Azure Data Factory Dashboard" className="mt-4 rounded-md shadow-md w-full h-auto" />
          </div>
          <div className="p-4 bg-purple-50 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-purple-800 mb-2">Frontend and BI</h5>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong className="font-medium">Angular:</strong> Frontend web application.</li>
              <li><strong className="font-medium">Power BI:</strong> Embedded dashboards for data analysis.</li>
              <li><strong className="font-medium">Multi-Tenant:</strong> Configuration per establishment.</li>
            </ul>
            <img src="https://placehold.co/400x200/E0F2FE/0284C7?text=Power+BI+Dashboards" alt="Power BI Dashboards" className="mt-4 rounded-md shadow-md w-full h-auto" />
          </div>
        </div>

        <h4 className="text-2xl font-semibold text-gray-800 mb-4">What Made It Work</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong className="font-semibold">Weight sensors over manual counts:</strong> Real-time accuracy without staff involvement.</li>
          <li><strong className="font-semibold">Azure-native stack:</strong> Databricks + Data Factory handled the data volume without custom infrastructure.</li>
          <li><strong className="font-semibold">Power BI embedded:</strong> Operations managers got dashboards inside the app, not a separate BI tool.</li>
          <li><strong className="font-semibold">Multi-tenant from day one:</strong> Each hotel location configured independently.</li>
        </ul>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skillsData = {
    "Data Engineering & BI": [
      "Python", "PySpark", "Looker / LookML", "Azure Databricks", "Azure Data Factory",
      "Azure Synapse Analytics", "Azure Data Lake", "Azure SQL Database", "Azure Cosmos DB",
      "Power BI", "Tableau", "SQL", "PostgreSQL", "Oracle",
      "ETL/ELT", "Dimensional Modeling", "Data Warehousing", "Statistics", "AI-Assisted Analytics (NL-to-Query)"
    ],
    "Applied AI / GenAI Engineering": [
      "LLMs (GPT-4, Claude, Gemini)", "Prompt Engineering", "RAG Architecture",
      "Vector Embeddings & Semantic Search", "AI Agents & Tool-Calling",
      "No-Code Orchestration (n8n, Make, Zapier)", "Multimodal AI (OCR, Whisper)",
      "AI Governance (EU AI Act, GDPR)"
    ],
    "Full-Stack Development & Cloud": [
      ".NET", "C#", "Angular", "JavaScript", "APIs", "Kubernetes", "Docker",
      "Microservices", "Azure Cloud", "IoT (Raspberry Pi, Weight Sensors)"
    ],
    "Other Languages & Tools": [
      "Java", "C++", "Git", "MySQL", "HDInsight"
    ]
  };

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Technical Skills
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      title: "Data Engineer & Full-Stack Developer",
      company: "SCALATER (Contract)",
      location: "Austin, TX",
      dates: "Feb 2024 – Present",
      description: [
        "Built ETL/ELT pipelines in Databricks (Python/PySpark + Azure Data Factory) to process high-frequency IoT time-series data — cut processing time by 75%.",
        "Wrote Python ingestion and transformation logic for real-time streams from Raspberry Pi and weight sensors, feeding a centralized Azure Data Lakehouse.",
        "Tuned PySpark code and Spark cluster configs in Databricks to keep the pipeline reliable from raw ingestion through to the consumption layer.",
        "Led full-stack development of \"Laundry Metric\" — an Azure IoT system (.NET API, Angular frontend) that automated linen tracking and cut inventory losses by ~20%.",
      ],
    },
    {
      title: "Senior Business Intelligence Developer",
      company: "inswitch",
      location: "Montevideo, Uruguay",
      dates: "Aug 2017 – Feb 2024",
      description: [
        "Looker Tech Lead: Designed and rolled out Looker as the company's primary BI platform, owning the data model architecture and dashboard delivery end-to-end.",
        "LookML: Built complex models with PDTs, advanced joins, and Liquid parameters to speed up queries and give analysts more flexibility in exploration.",
        "Data Governance: Set up Git-based version control and development workflows for Looker, keeping data definitions consistent across multiple business units.",
        "BI Stack: Built Data Warehouse reporting across Looker, Power BI, and Tableau for different internal teams.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "ArkanoSoft",
      location: "Montevideo, Uruguay",
      dates: "Oct 2016 – Aug 2017",
      description: [
        "Built enterprise .NET applications across the full project lifecycle, from requirements through delivery.",
        "Worked directly with clients to understand their needs and translate them into application designs.",
      ],
    },
    {
      title: "University Lecturer & System Developer",
      company: "Methodist University of Angola",
      location: "Angola",
      dates: "Feb 2013 – Jun 2016",
      description: [
        "Taught courses and developed applications in Artificial Intelligence, Computer Decision Support Systems, and Distributed Systems.",
      ],
    },
    {
      title: "Developer",
      company: "CEDESA",
      location: "Santiago de Cuba, Cuba",
      dates: "Sep 2010 – Jan 2013",
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
            <p className="text-lg text-gray-600">{job.company} · {job.location} | {job.dates}</p>
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
      degree: "Master's Degree in Applied AI and Optimization of Production Processes, Artificial Intelligence",
      university: "Visual Business School",
      location: "",
      dates: "April 2026 – October 2026",
    },
    {
      degree: "Computer Science Engineer",
      university: "Universidad de Oriente",
      location: "Santiago de Cuba, Cuba",
      dates: "September 2005 – July 2010",
    },
  ];

  const certificationsData = [
    "The Business Intelligence Analyst Course — Apr 2025",
    "Inferential Statistics for Machine Learning with R and Python — Mar 2025",
    "Azure Data Engineer Technologies for Beginners [Bundle] — Feb 2025",
    "Unit Testing in .NET — Dec 2024",
    "FullStack Application in Angular and .NET — Oct 2024",
    "Mastering LookML: Looker's Modeling Language (Udemy) — Feb 2021",
    "LookML Foundations / Getting Started with LookML / Building Reports in Looker (Google Cloud) — Dec 2020 – Jan 2021",
    "Complete Power BI Course for Data Analysis — Aug 2020",
    "Tableau A-Z: Data Analytics Training — Aug 2020",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Education &amp; Certifications
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {educationData.map((edu, index) => (
              <li key={index}>
                <strong className="font-semibold">{edu.degree}</strong><br />
                {edu.location ? `${edu.university} — ${edu.location}` : edu.university}<br />
                <em>{edu.dates}</em>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h3>
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

// Obfuscated contact data (char codes, reversed)
// To decode: reverse array, map charCodeAt back to char
const _e = [109,111,99,46,108,105,97,109,103,64,116,111,100,97,110,114,111,116,114,101,98,117,104].reverse();
const _p = [49,53,49,56,49,53,51,55,51,55,49,43].reverse();

function decode(arr) {
  return arr.map(c => String.fromCharCode(c)).join('');
}

// Contact Section Component
function ContactSection() {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <section id="contact" className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Contact Me
      </h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Based in Austin, TX. Open to Senior Data Engineer and BI Lead roles —
          remote or hybrid. Feel free to reach out directly.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl font-semibold text-gray-800">Email:</span>
            {emailRevealed ? (
              <a
                href={`mailto:${decode(_e)}`}
                className="text-blue-600 hover:underline text-xl"
              >
                {decode(_e)}
              </a>
            ) : (
              <button
                onClick={() => setEmailRevealed(true)}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium"
              >
                Click to reveal email
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-xl font-semibold text-gray-800">Phone:</span>
            {phoneRevealed ? (
              <a
                href={`tel:${decode(_p)}`}
                className="text-blue-600 hover:underline text-xl"
              >
                {decode(_p)}
              </a>
            ) : (
              <button
                onClick={() => setPhoneRevealed(true)}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium"
              >
                Click to reveal phone
              </button>
            )}
          </div>
        </div>
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

export default App;
