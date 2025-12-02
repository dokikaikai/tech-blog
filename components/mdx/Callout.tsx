import { ReactNode } from "react";

interface CalloutProps {
  type?: "info" | "warning" | "tip";
  children: ReactNode;
}

const styles = {
  info: "bg-neutral-100 border-neutral-400",
  warning: "bg-amber-50 border-amber-400",
  tip: "bg-emerald-50 border-emerald-400",
};

export function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div
      className={`border-l-2 ${styles[type]} p-5 my-8 text-foreground`}
    >
      {children}
    </div>
  );
}
