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

        {/* Teaching Experience */}
        <section>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-6">Teaching Experience</h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Seasonal Lecturer</h3>
                <span className="text-sm text-muted">Jun 2023 – Sep 2023</span>
              </div>
              <p className="text-muted mb-3">University of Washington – Seattle, WA</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Lectured for CSE 121 (Introduction to Computer Programming I) to nearly 50 students—managing a team of 8 TAs to deliver Java fundamentals curriculum with coding assessments, in-person lectures, creative projects, and weekly quiz sections.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Teaching Assistant</h3>
                <span className="text-sm text-muted">Sep 2020 – Jun 2023</span>
              </div>
              <p className="text-muted mb-3">University of Washington – Seattle, WA</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li><strong>Head TA:</strong> Taught 9 cumulative quarters for the intro CSE 12x series and the algorithm theory class CSE 421, instructing on topics such as CS fundamentals, dynamic programming, and graph theory.</li>
                <li><strong>Intro TA Coordinator:</strong> Oversaw intro CSE 12x with duties such as new TA hiring, course redesign, leading community meetings, and TA training for hundreds of undergraduate teaching staff.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium text-foreground">Microsoft TEALS Data Science Instructor</h3>
                <span className="text-sm text-muted">Aug 2024 – Dec 2024</span>
              </div>
              <p className="text-muted mb-3">Trezevant High School – Memphis, TN</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Developed a data science curriculum for Trezevant High School, training teachers in CS pedagogy to build sustainable program capacity for underserved students with limited STEM exposure.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Engineering Experience */}
        <section>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-6">Engineering Experience</h2>

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
      </div>
    </div>
  );
}
