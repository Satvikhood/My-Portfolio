import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState<null | "sent" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    // Try mailto fallback (no backend)
    try {
      const subject = encodeURIComponent(`Contact from portfolio: ${name}`);
      const body = encodeURIComponent(String(message) + `\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <label className="block">
            <span className="text-gray-300">Name</span>
            <input name="name" required className="mt-1 w-full rounded-md p-2 bg-transparent border border-white/8" />
          </label>

          <label className="block">
            <span className="text-gray-300">Email</span>
            <input name="email" type="email" required className="mt-1 w-full rounded-md p-2 bg-transparent border border-white/8" />
          </label>

          <label className="block">
            <span className="text-gray-300">Message</span>
            <textarea name="message" required className="mt-1 w-full rounded-md p-2 bg-transparent border border-white/8 h-32" />
          </label>

          <div className="flex items-center gap-4">
            <button type="submit" className="px-4 py-2 bg-white text-black rounded-md">Send</button>
            {status === "sent" && <span className="text-green-400">Opening mail client…</span>}
            {status === "error" && <span className="text-red-400">Something went wrong.</span>}
          </div>
        </form>

        <div className="mt-6 text-gray-300">
          <p>You can also email me directly at <a className="text-white underline" href="mailto:satvik4390@gmail.com">satvik4390@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
export default Contact;