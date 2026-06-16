export function SectionTopGlow() {
  return (
    <>
      {/* Centered ellipse glow above the border */}
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl" />
      {/* Hairline with gradient */}
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-linear-to-r from-transparent to-transparent" />
    </>
  );
}
