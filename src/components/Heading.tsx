import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-sans font-extrabold uppercase",
        size === "xl" &&
          "text-[clamp(2.25rem,3vw+1rem,3rem)] leading-[clamp(3.75rem,4vw+1rem,6rem)]",
        size === "lg" &&
          "text-[clamp(2.25rem,3vw+1rem,3rem)] leading-[clamp(3rem,3vw+1rem,4.5rem)]",
        size === "md" &&
          "text-[clamp(1.875rem,2.5vw+0.75rem,2.25rem)] leading-[clamp(2rem,2.5vw+0.75rem,3rem)]",
        size === "sm" &&
          "text-[clamp(1.5rem,2vw+0.5rem,1.75rem)] leading-[clamp(1.5rem,2vw+0.5rem,2.25rem)]",
        size === "xs" &&
          "text-[clamp(1.125rem,1.5vw+0.25rem,1.25rem)] leading-[clamp(1.25rem,1.5vw+0.25rem,1.5rem)]",
        className
      )}
    >
      {children}
    </Comp>
  );
}
