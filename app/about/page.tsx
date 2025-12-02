import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the author and this blog.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <h1 className="font-sans text-4xl font-bold text-white mb-8">About</h1>

      <div className="font-serif text-lg leading-relaxed space-y-6 text-foreground">
        <p>
          Hello! I&apos;m Kai Daniels, a researcher and engineer interested in the
          intersection of computer science education, technology policy, and
          critical approaches to understanding the tech industry.
        </p>

        <h2 className="font-sans text-2xl font-semibold text-white mt-10 mb-4">
          Research Interests
        </h2>

        <p>My work spans three interconnected areas:</p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-white">CS Education</strong> - I study how
            we can scale personalized learning while maintaining the
            human elements that make education meaningful. This includes work on
            AI tutoring systems, automated feedback mechanisms, and the
            pedagogy of programming.
          </li>
          <li>
            <strong className="text-white">Critical Tech Studies</strong> - I
            examine the political economy of the tech industry, with particular
            attention to labor conditions, the hidden costs of AI systems, and
            movements for worker power in tech.
          </li>
          <li>
            <strong className="text-white">Technology &amp; Society</strong> - I
            explore how technological systems shape and are shaped by social
            structures, asking questions about power, equity, and the values
            embedded in the things we build.
          </li>
        </ul>

        <h2 className="font-sans text-2xl font-semibold text-white mt-10 mb-4">
          Background
        </h2>

        <p>
          I hold degrees in Computer Science and have worked across industry and
          academia. My experience ranges from building production systems at
          scale to conducting qualitative research on how people learn to code.
        </p>

        <p>
          This blog is a space for me to think through ideas at the intersection
          of my interests. The writing here represents work in progress&mdash;
          attempts to make sense of complex topics rather than definitive
          statements.
        </p>

        <h2 className="font-sans text-2xl font-semibold text-white mt-10 mb-4">
          Get in Touch
        </h2>

        <p>
          I&apos;m always happy to connect with others working on similar
          questions. You can reach me at{" "}
          <a
            href="mailto:your@email.com"
            className="text-accent hover:text-accent-hover underline underline-offset-2"
          >
            your@email.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
