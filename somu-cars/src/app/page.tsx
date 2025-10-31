import Image from "next/image";

const heroStats = [
  { label: "Cars Delivered", value: "1,200+" },
  { label: "Average Rating", value: "4.9 / 5" },
  { label: "Years Serving Chennai", value: "18" },
];

const inventory = [
  {
    name: "2019 Honda City VX",
    price: "₹9.3L",
    mileage: "24,800 km",
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1f?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Certified Single Owner", "Zero Accidents", "Full Service History"],
  },
  {
    name: "2020 Hyundai Creta SX",
    price: "₹12.5L",
    mileage: "19,450 km",
    transmission: "Automatic",
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1523987355523-c7b5b84bef81?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Panoramic Sunroof", "Free 2-Year Service Pack", "360° Camera"],
  },
  {
    name: "2018 Maruti Suzuki Baleno Zeta",
    price: "₹6.2L",
    mileage: "32,300 km",
    transmission: "Manual",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Best Seller", "7-Day Exchange Promise", "Complimentary Insurance"],
  },
];

const services = [
  {
    title: "Certified Quality",
    description:
      "Each car passes a 210-point inspection, verified service history, and genuine documentation.",
    icon: "file-check",
  },
  {
    title: "Flexible Financing",
    description:
      "Up to 90% on-road funding with same-day approvals from trusted banking partners.",
    icon: "bank",
  },
  {
    title: "Transparent Exchange",
    description:
      "Instant valuation for your existing car with fair, market-linked buyback offers.",
    icon: "repeat",
  },
  {
    title: "12-Month Warranty",
    description:
      "Enjoy peace of mind with our complimentary warranty and roadside assistance coverage.",
    icon: "shield-check",
  },
];

const testimonials = [
  {
    name: "Mohan Raj",
    role: "Tech Professional, OMR",
    quote:
      "Somu Cars delivered exactly what they promised. The car was spotless, documentation was handled end-to-end, and they even arranged doorstep delivery.",
  },
  {
    name: "Priya & Santhosh",
    role: "Small Business Owners, Velachery",
    quote:
      "We traded in our old hatchback for an SUV. The valuation was transparent, financing was seamless, and we were on the road within 72 hours.",
  },
  {
    name: "Anisha Devi",
    role: "Marketing Lead, Guindy",
    quote:
      "Loved the test drive experience and the friendly team. Their after-sales support and warranty coverage give complete confidence.",
  },
];

const faqs = [
  {
    question: "Do you provide financing for all used cars?",
    answer:
      "Yes. We partner with leading banks and NBFCs to offer up to 90% funding with flexible EMI options. Approvals typically take less than 24 hours.",
  },
  {
    question: "What documents are required to purchase a car?",
    answer:
      "You need valid ID proof, address proof, salary slips or bank statements for financing, and PAN card. Our team guides you through each step.",
  },
  {
    question: "Can I schedule a home test drive?",
    answer:
      "Absolutely. Home test drives are available across Chennai with 24-hour advance notice. Call or WhatsApp us to block your slot.",
  },
  {
    question: "How do you ensure vehicle quality?",
    answer:
      "Every vehicle is inspected by Somu Certified engineers. We share the inspection report, service history, and deliver cars with comprehensive detailing.",
  },
];

const iconMap: Record<string, string> = {
  "file-check":
    "M5.25 4.5h3a.75.75 0 0 1 .53.22l2.47 2.47a.75.75 0 0 1 .22.53v7.5A2.25 2.25 0 0 1 9.22 17.25H6.75A2.25 2.25 0 0 1 4.5 15V6.75A2.25 2.25 0 0 1 6.75 4.5z M8.25 4.5v2.25c0 .414.336.75.75.75h2.25",
  bank: "M3 9.75 9 4.5l6 5.25M4.5 19.5h9M4.5 19.5v-7.5M13.5 19.5v-7.5M21 8.25v1.5M21 11.25v1.5M21 14.25v1.5M21 17.25v1.5",
  repeat:
    "M4.5 4.5h11.25M15.75 4.5l-2.25-2.25M15.75 4.5l-2.25 2.25M19.5 19.5H8.25M8.25 19.5l2.25-2.25M8.25 19.5l2.25 2.25",
  "shield-check":
    "M12 3.75 4.5 6v6.75c0 4.364 2.937 6.973 7.05 8.5 4.113-1.527 7.05-4.136 7.05-8.5V6z M9 11.25l2.25 2.25 3.75-3.75",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <Header />
        <main className="flex-1 py-10">
          <Hero />
          <Stats />
          <Inventory />
          <Services />
          <Process />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <Image
          src="/somu-logo.svg"
          alt="Somu Cars"
          width={48}
          height={48}
          className="rounded-full border border-white/20 bg-white/10 p-2"
        />
        <div>
          <p className="text-lg font-semibold tracking-wide uppercase text-orange-300">
            Somu Cars
          </p>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-300/80">
            Pre-Owned Excellence
          </p>
        </div>
      </div>
      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
        <a className="transition hover:text-orange-300" href="#inventory">
          Inventory
        </a>
        <a className="transition hover:text-orange-300" href="#services">
          Services
        </a>
        <a className="transition hover:text-orange-300" href="#process">
          Process
        </a>
        <a className="transition hover:text-orange-300" href="#testimonials">
          Stories
        </a>
        <a className="transition hover:text-orange-300" href="#contact">
          Contact
        </a>
      </nav>
      <a
        className="hidden rounded-full bg-orange-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-300 md:inline-flex"
        href="tel:+919444500123"
      >
        Call 94445 00123
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative my-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-14 shadow-[0_20px_80px_-40px_rgba(255,165,0,0.6)] sm:px-10 md:my-20 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(252,165,165,0.35),_transparent_55%)]" />
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-1 text-sm font-medium text-orange-200">
            Trusted Pre-Owned Cars in Chennai Since 2006
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Drive home quality cars with{" "}
            <span className="text-orange-300">Somu Confidence</span>.
          </h1>
          <p className="max-w-xl text-lg text-slate-200/90 sm:text-xl">
            Curated second-hand cars, transparent pricing, and concierge-style ownership support.
            Experience the joy of driving a premium car without the premium price tag.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#inventory"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-orange-300"
            >
              Explore Inventory
              <span aria-hidden className="text-lg">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-orange-300 hover:text-orange-200"
            >
              Book Test Drive
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-8 z-10 rounded-full bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-200 shadow-lg sm:-left-10">
            Somu Assured
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-lg shadow-orange-500/10">
            <Image
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80"
              alt="Somu Cars showroom"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:grid-cols-3">
      {heroStats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-3xl font-semibold text-orange-200 sm:text-4xl">{stat.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-300/80">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}

function Inventory() {
  return (
    <section id="inventory" className="mt-20 space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/90">
            Featured Inventory
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Curated cars ready for your driveway
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-300/40 px-5 py-3 text-sm font-semibold text-orange-200 transition hover:bg-orange-300/10"
        >
          View Full Inventory Sheet
          <span aria-hidden>↗</span>
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {inventory.map((car) => (
          <article
            key={car.name}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] transition hover:border-orange-200/40 hover:shadow-[0_30px_70px_-40px_rgba(251,191,36,0.8)]"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">
                Somu Select
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <h3 className="text-xl font-semibold text-white">{car.name}</h3>
                <p className="mt-1 text-sm font-medium text-orange-200">{car.price}</p>
              </div>
              <dl className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div>
                  <dt className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Mileage
                  </dt>
                  <dd>{car.mileage}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Transmission
                  </dt>
                  <dd>{car.transmission}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Fuel Type
                  </dt>
                  <dd>{car.fuel}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Status
                  </dt>
                  <dd>Ready for Delivery</dd>
                </div>
              </dl>
              <ul className="mt-2 flex flex-wrap gap-2">
                {car.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-200"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-200 transition hover:text-orange-100"
                >
                  Reserve Now
                  <span aria-hidden className="text-lg">
                    →
                  </span>
                </a>
                <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  EMI from ₹16,900/mo
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mt-24 space-y-8">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/90">
        Why Somu Cars
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Elevating the pre-owned car experience
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-400/10 blur-xl" />
            <div className="mb-6 inline-flex items-center justify-center rounded-full border border-orange-200/40 bg-black/40 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 stroke-orange-200"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.4}
                  d={iconMap[service.icon]}
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-base text-slate-200">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mt-24 space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/90">
            Hassle-Free Ownership
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            From discovery to delivery in 5 simple steps
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-200">
          Whether you are upgrading or buying your first car, our concierge team guides you across
          paperwork, financing, insurance, and delivery — keeping everything transparent.
        </p>
      </div>
      <ol className="grid gap-6 md:grid-cols-5">
        {[
          "Book personalised consultation",
          "Test drive at showroom or home",
          "Choose finance & insurance",
          "Complete documentation",
          "Drive home under 72 hours",
        ].map((step, index) => (
          <li
            key={step}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200"
          >
            <span className="text-3xl font-semibold text-orange-200">{index + 1}</span>
            <p className="mt-3 font-medium text-white">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="mt-24 space-y-8">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/90">
        Customer Stories
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Chennai trusts Somu for their dream drives
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6"
          >
            <p className="text-lg font-medium text-white">“{testimonial.quote}”</p>
            <footer className="mt-6 text-sm text-orange-200">
              <p className="font-semibold uppercase tracking-[0.25em]">
                {testimonial.name.toUpperCase()}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-300">
                {testimonial.role}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mt-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/90">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Answers to common questions
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-200">
              Not finding what you were looking for? Call us on{" "}
              <a className="text-orange-200 underline decoration-dotted" href="tel:+919444500123">
                94445 00123
              </a>{" "}
              or WhatsApp{" "}
              <a
                className="text-orange-200 underline decoration-dotted"
                href="https://wa.me/919444500123"
              >
                chat instantly
              </a>
              .
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-24">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-orange-300/10 p-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-100">
            Visit Somu Cars
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Book a consultation or drop by our Guindy showroom.
          </h2>
          <div className="space-y-4 text-sm text-slate-100">
            <div>
              <p className="font-semibold uppercase tracking-[0.28em] text-orange-100">
                Showroom
              </p>
              <p className="mt-1 text-base text-white">
                42A GST Road, Near Kathipara Junction, Guindy, Chennai 600032.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="font-semibold uppercase tracking-[0.28em] text-orange-100">
                  Contact
                </p>
                <p className="mt-2 text-base">
                  Phone:{" "}
                  <a className="text-white underline decoration-dotted" href="tel:+919444500123">
                    +91 94445 00123
                  </a>
                  <br />
                  WhatsApp:{" "}
                  <a className="text-white underline decoration-dotted" href="https://wa.me/919444500123">
                    94445 00123
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.28em] text-orange-100">
                  Hours
                </p>
                <p className="mt-2 text-base">
                  Monday - Sunday
                  <br />
                  9:30 AM – 8:30 PM
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
            <a
              href="tel:+919444500123"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-200"
            >
              Call Now
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://wa.me/919444500123"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-white transition hover:border-white hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <form
          className="space-y-5 rounded-3xl border border-white/20 bg-black/40 p-8 backdrop-blur"
          action="#"
          method="post"
        >
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-100">
              Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-sm text-white outline-none ring-orange-200/40 placeholder:text-slate-400 focus:ring-2"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-100">
                Phone
              </label>
              <input
                required
                name="phone"
                type="tel"
                placeholder="+91 9XXX XXXXXX"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-sm text-white outline-none ring-orange-200/40 placeholder:text-slate-400 focus:ring-2"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-100">
                Preferred Car
              </label>
              <input
                name="car"
                type="text"
                placeholder="Model / Budget"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-sm text-white outline-none ring-orange-200/40 placeholder:text-slate-400 focus:ring-2"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-100">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Share any specific requirements..."
              className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-sm text-white outline-none ring-orange-200/40 placeholder:text-slate-400 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
          >
            Submit Enquiry
          </button>
          <p className="text-xs text-slate-300">
            We will call you within 2 working hours. No spam. Your information is safe with Somu
            Cars.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-slate-300 sm:flex-row">
      <p>© {new Date().getFullYear()} Somu Cars. Crafted with care in Chennai.</p>
      <div className="flex gap-5 text-xs uppercase tracking-[0.35em]">
        <a className="transition hover:text-orange-200" href="#inventory">
          Inventory
        </a>
        <a className="transition hover:text-orange-200" href="#services">
          Services
        </a>
        <a className="transition hover:text-orange-200" href="#contact">
          Visit
        </a>
      </div>
    </footer>
  );
}
