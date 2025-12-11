const experiences = [
  {
    id: "e1",
    role: "Frontend Intern",
    company: "Vebnox",
    period: "Jun 2024 - Aug 2024",
    bullets: [
      "Built responsive UI components using React and Tailwind.",
      "Improved page load time by optimizing images and code-splitting.",
    ],
  },
  {
    id: "e2",
    role: "AI Intern",
    company: "CodSoft",
    period: "Jan 2025 - Apr 2025",
    bullets: [
      "Implemented NLP preprocessing pipelines using NLTK.",
      "Developed rule-based chatbot features and test cases.",
    ],
  },
];

function Experience() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>

              <ul className="mt-4 ml-4 list-disc text-gray-300">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="mt-1">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Experience;