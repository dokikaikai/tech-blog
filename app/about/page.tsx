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
          Hello! I&apos;m Kai Daniels, a researcher and engineer interested in the
          intersection of computer science education, technology policy, and
          critical approaches to understanding the tech industry.
        </p>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">
          Research Interests
        </h2>

        <p>My work spans three interconnected areas:</p>

        <ul className="list-disc pl-6 space-y-3 text-muted">
          <li>
            <strong className="text-foreground">CS Education</strong> — I study how
            we can scale personalized learning while maintaining the
            human elements that make education meaningful.
          </li>
          <li>
            <strong className="text-foreground">Critical Tech Studies</strong> — I
            examine the political economy of the tech industry, with particular
            attention to labor conditions and the hidden costs of AI systems.
          </li>
          <li>
            <strong className="text-foreground">Technology &amp; Society</strong> — I
            explore how technological systems shape and are shaped by social
            structures, asking questions about power, equity, and values.
          </li>
        </ul>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">
          Background
        </h2>

        <p>
          I hold degrees in Computer Science and have worked across industry and
          academia. My experience ranges from building production systems at
          scale to conducting qualitative research on how people learn to code.
        </p>

        <p className="text-muted">
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
            href="mailto:your@email.com"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            your@email.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
