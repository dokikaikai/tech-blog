import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching experience, resources, and reflections.",
};

interface TeachingLink {
  label: string;
  href: string;
}

interface TeachingCard {
  title: string;
  description: string;
  tags?: string[];
  links?: TeachingLink[];
}

const teachingItems: TeachingCard[] = [
  {
    title: "Summer Lecturer",
    description:
      "Running my own classroom changed how I think about scale in CS education. With 50 students and 8 TAs, I explored various classroom redesigns such as categorical mastery grading, partially flipped classroom activities, and resubmission policies.",
    tags: ["Java", "Curriculum Design", "Teaching"],
    links: [
      { label: "CSE 121 Su", href: "https://courses.cs.washington.edu/courses/cse121/23su/" },
    ],
  },
  {
    title: "Microsoft TEALS Volunteer",
    description:
      "Working with educators at Trezevant forced me to consider curriculum design in a resource-constrained environment, and the limitations of individual contributions and goodwill in K-12 education.",
    tags: ["CS Education Pedagogy", "Social Justice", "K-12"],
    links: [
      { label: "TEALS Program", href: "https://www.microsoft.com/en-us/teals" },
      { label: "Reflection", href: "/blog/trezevant-reflection" },
    ],
  },
  {
    title: "Intro TA Coordinator",
    description:
      "The strongest teaching communities are cooperative, collectivized, and feel supported by administration. My experience as coordinator taught me how to train and instill confidence in teaching staff, how to bridge TA needs with teaching faculty goals, and what leadership looks like in the CS education community.",
    tags: ["TA Training", "Course Administration", "CS Teaching Community"],
  },
  {
    title: "Teaching Assistant",
    description:
      "Three years as a teaching assistant allowed me to find my footing teaching CS, and reshaped my philosophical perspective on the purpose of the classroom, curriculum, the role of the student, etc.",
    tags: ["Teaching", "Algorithms", "Theory"],
  },
  {
    title: "Debate Coach",
    description:
      "My teaching contributions were an extension of half a decade of Policy Debate, and were incredibly formative in creating an ideological base centered in justice that my educational philosophy grew from.",
    tags: ["Public Speaking", "K-12", "Social Justice"],
  },
];

function TeachingCardComponent({ item }: { item: TeachingCard }) {
  return (
    <div className="border border-border rounded-lg p-6">
      <h3 className="text-lg font-medium text-foreground mb-2">
        {item.title}
      </h3>
      <p className="text-muted leading-relaxed mb-4">{item.description}</p>
      {item.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-neutral-100 text-muted rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {item.links && item.links.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 pt-4 mt-2 border-t border-border">
          <span className="text-xs text-muted uppercase tracking-wide">Links</span>
          {item.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TeachingPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pt-16 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-4">
        Teaching
      </h1>

      <p className="text-lg leading-relaxed text-muted mb-10">
        This section is dedicated to my teaching experience, and will compile
        resources, links, and reflections I have had on that experience.
      </p>

      <div className="space-y-5">
        {teachingItems.map((item) => (
          <TeachingCardComponent key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
