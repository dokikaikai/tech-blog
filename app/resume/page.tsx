import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Kai Daniels - Software Engineer Resume",
};

export default function ResumePage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">Resume</h1>
        <a
          href="/Kai_Daniels_Resume.pdf"
          download
          className="text-sm px-4 py-2 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
        >
          Download PDF
        </a>
      </div>

      <div className="space-y-12">
        {/* Experience */}
        <section>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-6">Experience</h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Software Engineer</h3>
                <span className="text-sm text-muted">Sep 2023 – Present</span>
              </div>
              <p className="text-muted mb-3">Microsoft – Redmond, WA</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Developed a cache purging backend to maintain metadata integrity for the Azure Linux (PMC) platform, a critical component for ensuring service reliability during Linux package publishing.</li>
                <li>Implemented token-based authentication for the PMC CLI, improving security compliance by reducing certificate-based validation along with enabling greater API flexibility for publishers.</li>
                <li>Led end-to-end automation of Linux repository creation and updates via Azure DevOps pipelines, establishing standardized validation schemas, reducing manual prod touches by over 95%.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Seasonal Lecturer</h3>
                <span className="text-sm text-muted">Jun 2023 – Aug 2023</span>
              </div>
              <p className="text-muted mb-3">University of Washington – Seattle, WA</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Lectured for CSE 12x (introductory Java) to nearly 100 students, managing course content and leading a large team of teaching assistants across the intro series.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Head Teaching Assistant</h3>
                <span className="text-sm text-muted">Sep 2020 – Jun 2023</span>
              </div>
              <p className="text-muted mb-3">University of Washington – Seattle, WA</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Oversaw 9 quarters as head TA for the CSE 12x series and CSE 421, coordinating instruction in courses ranging from basic data structures to advanced algorithms.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Software Engineering Intern</h3>
                <span className="text-sm text-muted">Jun 2022 – Sep 2022</span>
              </div>
              <p className="text-muted mb-3">Microsoft – Redmond, WA</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Produced Scala (Spark) scripts that used daily device telemetry to quantify Azure cloud usage for over 16,000 endpoints, resulting in crucial Windows OS insights to estimate quarterly costs.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Software Development Intern</h3>
                <span className="text-sm text-muted">Jun 2021 – Sep 2021</span>
              </div>
              <p className="text-muted mb-3">Kaiser Permanente – Renton, WA</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Collaborated with senior engineers to optimize data transformation scripts resulting in a 96% decrease in functional runtime and a 2100% increase in parallel process efficiency.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-6">Education</h2>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-medium text-foreground">University of Washington</h3>
              <span className="text-sm text-muted">Jun 2023</span>
            </div>
            <p className="text-muted">B.S. in Computer Science, Minor in Informatics</p>
            <p className="text-muted">GPA: 3.92 (Magna Cum Laude)</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-6">Skills</h2>
          <p className="text-foreground">Python, Java, SQL, C++, Linux, Kubernetes, R, CI/CD, Git</p>
        </section>

        {/* Projects & Volunteering */}
        <section>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-6">Projects & Volunteering</h2>

          <ul className="list-disc pl-5 space-y-3 text-foreground">
            <li>
              <strong>Debate Coach:</strong> Instruct students on effective communication, public speaking, and critical advocacy skills on topics ranging from social theory to governmental politics.
            </li>
            <li>
              <strong>CS Educator (TEALS):</strong> Built CS education resources and instructional coursework via the Microsoft TEALS program for underfunded high school programs in Memphis, TN.
            </li>
            <li>
              <strong>Hackathons:</strong> Collaborated on an AI-powered news aggregator to reduce bias in political news and implemented an indexing configuration for an AI-powered chatbot&apos;s document search algorithm.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
