import { ReactNode } from "react";

interface CalloutProps {
  type?: "info" | "warning" | "tip";
  children: ReactNode;
}

const styles = {
  info: "bg-blue-900/20 border-blue-500 text-blue-200",
  warning: "bg-yellow-900/20 border-yellow-500 text-yellow-200",
  tip: "bg-green-900/20 border-green-500 text-green-200",
};

const icons = {
  info: "i",
  warning: "!",
  tip: "~",
};

export function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div
      className={`border-l-4 ${styles[type]} p-4 my-6 rounded-r-lg font-serif`}
    >
      <div className="flex gap-3">
        <span className="font-sans font-bold text-lg">{icons[type]}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}
