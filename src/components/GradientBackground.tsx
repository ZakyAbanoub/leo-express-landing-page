export default function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-teal-500/10 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-teal-500/5 animate-gradient-slow" />
      <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/5 via-transparent to-blue-500/5 animate-gradient-slower" />
    </div>
  );
}
