import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="Projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Projects
      </h2>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;