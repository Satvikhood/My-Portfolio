const certs = [
  {
    id: "c1",
    title: "Front-End Web Development with React",
    org: "Coursera - HKUST",
    date: "Mar 2022",
    url: "#",
  },
  {
    id: "c2",
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    date: "Jul 2021",
    url: "#",
  },
  {
    id: "c3",
    title: "Deep Learning Specialization",
    org: "Coursera - Andrew Ng",
    date: "Dec 2020",
    url: "#",
  },
];

function Certifications() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Certifications</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((c) => (
            <article key={c.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{c.org}</p>
                  <p className="text-sm text-gray-500 mt-2">{c.date}</p>
                </div>
                <div className="flex items-center">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-md bg-brand text-black text-sm"
                  >
                    View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Certifications;