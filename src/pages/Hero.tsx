import satvik from "../assets/satvik.jpg";

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <img
        src={satvik}
        alt="profile"
        className="w-50 h-50 rounded-full border border-white/20 shadow-lg mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Hi, I’m Satvik 👋
      </h1>

      <p className="mt-4 text-gray-300 max-w-xl">
        I love building cool things with React, TypeScript, and AI.
        Exploring, experimenting, and always leveling up!
      </p>

      <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
        Contact Me
      </button>
    </section>
  );
}
export default Hero;