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
          I&apos;m Kai Daniels, a software engineer and educator based in Seattle. I studied
          Computer Science at the University of Washington, where I also spent several years
          teaching introductory programming and algorithms courses.
        </p>

        <p>
          Currently, I work at Microsoft on the Azure Linux team, building infrastructure
          for Linux package management and distribution. My day-to-day involves cloud systems,
          CI/CD pipelines, and finding ways to make complex workflows more reliable.
        </p>

        <p>
          Teaching has shaped how I think about technology. I&apos;ve taught in a few different
          contexts—as a lecturer for UW&apos;s{" "}
          <a
            href="https://courses.cs.washington.edu/courses/cse121/23su/"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            introductory CS course
          </a>
          , as a TA for nine quarters across the intro series and algorithms, and more recently
          through{" "}
          <a
            href="https://www.microsoft.com/en-us/teals"
            className="underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Microsoft TEALS
          </a>
          , where I helped develop a data science curriculum for a high school in Memphis
          serving students with limited prior access to CS education.
        </p>

        <p>
          These experiences inform what I think about and write about here: how we teach
          programming, who gets access to technical education, and what it means to build
          technology responsibly. I&apos;m particularly interested in the tension between
          scaling CS education and preserving the parts of learning that require human
          attention and care.
        </p>

        <p className="text-muted">
          This blog is where I work through ideas—mostly half-formed, sometimes
          wrong, always in progress.
        </p>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">
          Get in Touch
        </h2>

        <p>
          Feel free to reach out at{" "}
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
