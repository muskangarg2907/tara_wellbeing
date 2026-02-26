"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-[#d4a3a333] bg-background/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-serif text-2xl font-bold">tara_wellbeing</span>
          <div className="flex items-center gap-5 text-sm font-medium md:text-base">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-foreground px-5 py-2 text-background transition-opacity hover:opacity-90"
            >
              Book a Session
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative isolate flex min-h-[78vh] items-center justify-center overflow-hidden px-6 text-center">
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(30,20,20,0.45),rgba(30,20,20,0.45)),url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="max-w-3xl text-white">
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">Let&apos;s Shine From Within</h1>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Book a Session
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Meet Tanisha</h2>
            <p className="mt-3 text-lg font-medium text-accent">Psychologist | Energy Healer</p>
            <p className="mt-6 max-w-xl leading-8 text-foreground/85">
              I guide people back to emotional steadiness through a gentle blend of modern psychology and holistic healing. My practice is designed as a calm space where you can pause, breathe, and reconnect with your inner clarity.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="Tanisha"
              className="h-80 w-80 rounded-full border-8 border-accent object-cover"
            />
          </div>
        </section>

        <section className="bg-accent px-6 py-16 text-center">
          <p className="mx-auto max-w-4xl font-serif text-3xl italic text-white md:text-4xl">
            “Healing is not becoming someone new. It is remembering who you were before the world told you to be small.”
          </p>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-center font-serif text-4xl md:text-5xl">Services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1:1 Therapy Sessions",
                body: "Personalized sessions focused on emotional resilience, stress regulation, and healing patterns that no longer serve you.",
              },
              {
                title: "Energy Healing",
                body: "Soft, restorative work to support energetic balance, release emotional heaviness, and invite inner calm.",
              },
              {
                title: "Mindfulness Coaching",
                body: "Practical guidance to build grounding rituals and mindful habits that keep you centered in everyday life.",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-foreground/80">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-center font-serif text-4xl md:text-5xl">Get in Touch</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#d4a3a366] bg-white px-4 py-3 outline-none focus:border-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-[#d4a3a366] bg-white px-4 py-3 outline-none focus:border-accent"
              />
              <textarea
                name="message"
                placeholder="How can I support you?"
                rows={5}
                className="w-full rounded-xl border border-[#d4a3a366] bg-white px-4 py-3 outline-none focus:border-accent"
              />
              <label className="flex items-start gap-3 text-sm leading-6 text-foreground/85">
                <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-foreground" />
                I agree to the privacy terms and consent to being contacted regarding my inquiry.
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
              >
                Send Inquiry
              </button>
              {isSubmitted && (
                <p className="text-sm font-medium text-foreground">
                  Your response has been recorded.
                </p>
              )}
            </form>

            <aside className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="font-serif text-2xl">Practice Details</h3>
              <div className="mt-5 space-y-4 text-foreground/85">
                <p>
                  <span className="font-semibold text-foreground">Location:</span> 128 Serenity Lane, Mumbai, India
                </p>
                <p>
                  <span className="font-semibold text-foreground">Hours:</span> Mon–Sat, 10:00 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold text-foreground">Terms & Conditions:</span> Session bookings are confirmed after payment and can be rescheduled with 24-hour notice.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-[#d4a3a366] p-4">
                <h4 className="font-serif text-xl">Consent Form</h4>
                <a href="/consent-form" className="mt-3 inline-block font-medium text-foreground underline underline-offset-2">
                  View Consent Form
                </a>
                <p className="mt-2 text-sm text-foreground/80">
                  This helps clients understand confidentiality, boundaries, and informed agreement before beginning sessions.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
