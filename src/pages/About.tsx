import Terminal from "../components/terminal.tsx";

export default function About() {
  const terminalLines = [
    "echo \"Hello — I'm Satvik 👋\"",
    "cd ~/portfolio",
    "git status",
    "echo \"Skills: React, TypeScript, Tailwind, AI\"",
    "npm run build",
    "echo \"Thanks for visiting!\"",
  ];

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-start pt-28 px-6">
      <h2 className="text-3xl text-white mb-6">About</h2>

      <div className="w-full max-w-4xl">
        <Terminal lines={terminalLines} typingSpeed={30} lineDelay={700} />
      </div>
    </main>
  );
}