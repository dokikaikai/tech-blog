import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the author and this blog.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-12">About</h1>

      <div className="text-lg leading-relaxed space-y-6 text-foreground">
        <p>
          Hello! I&apos;m Kai Daniels, a software engineer and educator interested in computer science
          education, pedagogical tooling, technology policy, and
          critical approaches to understanding tech and society.
        </p>

        <p>
          I hold a BS in Computer Science from the University of Washington.
        </p>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">
          Industry
        </h2>

        <p>
          I&apos;m currently a Software Engineer at Microsoft (Sep 2023–Present), where I work on the
          Azure Linux team maintaining an internal service for Linux repositories—specifically
          RPM and DEB-based distributions. My work touches on cloud engineering, CI/CD pipelines,
          automation, and integrating AI into development workflows.
        </p>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">
          Education Work
        </h2>

        <p>
          Most recently, I volunteered through the{" "}
          <a
            href="https://www.microsoft.com/en-us/teals"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Microsoft TEALS program
          </a>{" "}
          at Trezevant High School in Memphis, TN (Aug–Oct 2024), doing high-impact
          CS education work in a historically disenfranchised school district.
        </p>

        <p>
          Prior to that, I was a Summer Lecturer at the University of Washington (Jun–Sep 2023),
          where I taught the inaugural offering of{" "}
          <a
            href="https://courses.cs.washington.edu/courses/cse121/23su/"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            CSE 121
          </a>
          , an introductory programming course.
        </p>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">
          Research Interests
        </h2>

        <p>My interests span three interconnected areas:</p>

        <ul className="list-disc pl-6 space-y-3 text-muted">
          <li>
            <strong className="text-foreground">CS Education</strong> — Scaling personalized
            learning while maintaining the human elements that make education meaningful.
          </li>
          <li>
            <strong className="text-foreground">Critical Tech Studies</strong> — The political
            economy of the tech industry, labor conditions, and the hidden costs of AI systems.
          </li>
          <li>
            <strong className="text-foreground">Technology &amp; Society</strong> — How
            technological systems shape and are shaped by social structures, power, and equity.
          </li>
        </ul>

        <p className="text-muted mt-8">
          This blog is a space for me to think through ideas at the intersection
          of my interests. The writing here represents work in progress—attempts
          to make sense of complex topics rather than definitive statements.
        </p>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">
          Get in Touch
        </h2>

        <p>
          I&apos;m always happy to connect with others working on similar
          questions. You can reach me at{" "}
          <a
            href="mailto:daikaile13@gmail.com"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            daikaile13@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
