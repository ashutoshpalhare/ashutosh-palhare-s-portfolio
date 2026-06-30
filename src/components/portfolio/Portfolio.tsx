import { useEffect, useRef, useState } from "react";
import {
  Shield, Code2, Smartphone, Palette, Github, Linkedin, Mail, Phone,
  Moon, Sun, ArrowRight, ExternalLink, Briefcase, GraduationCap, Quote, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroPortrait from "@/assets/hero-portrait.jpg";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const TYPING = [
  "Web Developer",
  "App Developer",
  "Cybersecurity Enthusiast",
  "Graphic Designer",
];

const SERVICES = [
  { icon: Shield, title: "Cyber Security", desc: "Protecting systems, networks and data from threats with modern security practices." },
  { icon: Code2, title: "Web Development", desc: "Crafting fast, modern, responsive websites with clean code and great UX." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Building cross-platform mobile applications that feel native and polished." },
  { icon: Palette, title: "Graphic Designing", desc: "Creating clean visuals, branding and editorial design for digital products." },
];

const SKILLS = [
  { name: "Web Development", value: 80 },
  { name: "Application Development", value: 70 },
  { name: "Cyber Security", value: 80 },
  { name: "Graphic Design", value: 90 },
];

const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "StudioVity",
    period: "Mar 2021 – May 2021",
    desc: "Built responsive marketing pages and product surfaces, focusing on performance, accessibility and clean component architecture.",
  },
  {
    role: "Application Developer",
    company: "AKJ Digital",
    period: "Jan 2021 – Mar 2021",
    desc: "Developed mobile application features end-to-end, collaborating with design and backend to ship reliable releases.",
  },
];

const EDUCATION = [
  {
    title: "B.E. Computer Engineering",
    place: "Vishwabharati Academy's College of Engineering",
    period: "2021 – 2024",
  },
  {
    title: "Diploma in Computer Engineering",
    place: "Government Polytechnic",
    period: "2018 – 2021",
  },
  {
    title: "Higher Secondary Certificate",
    place: "State Board",
    period: "2016 – 2018",
  },
];

type Cat = "Websites" | "Applications" | "Other Tools";
const PROJECTS: { title: string; category: Cat; desc: string; color: string }[] = [
  { title: "Finance", category: "Websites", desc: "Modern landing page for a fintech product with a polished hero and pricing.", color: "from-indigo-500 to-violet-500" },
  { title: "Orizon", category: "Websites", desc: "Architectural studio website with editorial typography and smooth scroll.", color: "from-amber-500 to-rose-500" },
  { title: "Fundo", category: "Websites", desc: "Playful brand site for a creative agency with bold colours and motion.", color: "from-pink-500 to-fuchsia-500" },
  { title: "Brawlhalla", category: "Applications", desc: "Companion app for tracking match history, characters and stats.", color: "from-emerald-500 to-teal-500" },
  { title: "DSM", category: "Applications", desc: "Internal dashboard application for managing daily site operations.", color: "from-sky-500 to-blue-600" },
  { title: "MetaSpark", category: "Applications", desc: "AI-powered idea generator with conversational interface and history.", color: "from-violet-500 to-indigo-600" },
  { title: "Task Manager", category: "Other Tools", desc: "Lightweight productivity tool with boards, tags and quick capture.", color: "from-orange-500 to-red-500" },
  { title: "Arrival", category: "Other Tools", desc: "Notification and arrival tracker with clean micro-interactions.", color: "from-cyan-500 to-sky-500" },
  { title: "Summary", category: "Other Tools", desc: "Text summarisation utility with adjustable length and tone presets.", color: "from-lime-500 to-emerald-500" },
];

const FILTERS = ["All", "Websites", "Applications", "Other Tools"] as const;

const TESTIMONIALS = [
  { name: "Bhakti Gujar", role: "Designer", text: "Ashutosh is incredibly versatile. He moves between code and design with ease and always ships polished work." },
  { name: "Aniket Pandore", role: "Developer", text: "A reliable teammate with a sharp eye for detail. His full-stack instincts saved us weeks on our last project." },
  { name: "Sarfraz Sayyad", role: "Project Lead", text: "Professional, fast and genuinely curious. He treats every project like it's his own — and it shows." },
  { name: "Rohan Khire", role: "Founder", text: "From security audits to slick UI, Ashutosh delivers. Easy to work with and obsessed with quality." },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  return { theme, toggle };
}

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const timeout = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI(i + 1); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, del, i, words]);
  return text;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Nav({ theme, toggle }: { theme: string; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-primary/20 shadow-[0_8px_30px_-15px_rgb(255_98_0_/_0.3)]" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold glow-shadow group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">AP</span>
          <span className="hidden sm:inline font-display font-semibold tracking-tight">Ashutosh Palhare</span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <button key={n.id} onClick={() => go(n.id)} className="relative px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map(n => (
              <button key={n.id} onClick={() => go(n.id)} className="text-left px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const typed = useTyping(TYPING);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-in">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">Available for work</Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">Ashutosh Palhare</span>
          </h1>
          <div className="mt-6 text-xl sm:text-2xl text-muted-foreground font-medium min-h-[2.5rem]">
            I'm a <span className="text-foreground">{typed}</span><span className="caret">&nbsp;</span>
          </div>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground italic">
            Jack of all trades in IT | Turning ideas into reality
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Passionate about creating innovative solutions in web development, mobile apps, cybersecurity, and graphic design.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => go("projects")} className="bg-gradient-to-r from-primary to-accent text-primary-foreground glow-shadow hover:opacity-90">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => go("contact")}>
              Contact Me
            </Button>
          </div>
        </div>
        <div className="relative justify-self-center lg:justify-self-end">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary to-accent opacity-30 blur-2xl" />
          <div className="relative float">
            <img
              src={heroPortrait}
              alt="Ashutosh Palhare portrait"
              width={420}
              height={420}
              className="relative rounded-3xl border border-border w-72 sm:w-96 aspect-square object-cover glow-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-primary font-medium">{eyebrow}</div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid lg:grid-cols-5 gap-10">
        <Card className="lg:col-span-2 p-8">
          <p className="text-muted-foreground leading-relaxed">
            Hello! I'm <span className="text-foreground font-semibold">Ashutosh Palhare</span>, a versatile IT
            professional passionate about creating innovative solutions. With extensive experience in web
            development, app development, cybersecurity, web design, and graphic editing — I love turning
            complex problems into clean, dependable products.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I care about craft, performance and the little details that make great software feel effortless.
          </p>
        </Card>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {SERVICES.map(s => (
            <Card key={s.title} className="p-6 group hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="What I bring" title="Skills">
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {SKILLS.map(s => (
          <Card key={s.name} className="p-6">
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-sm text-primary font-semibold">{s.value}%</span>
            </div>
            <Progress value={s.value} className="mt-4" />
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="My journey" title="Experience & Education">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <Briefcase className="h-5 w-5 text-primary" /> Experience
          </h3>
          <div className="space-y-4">
            {EXPERIENCE.map(e => (
              <Card key={e.role + e.company} className="p-6 relative border-l-4 border-l-primary">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold">{e.role}</h4>
                  <span className="text-xs text-muted-foreground">{e.period}</span>
                </div>
                <div className="text-sm text-primary mt-1">{e.company}</div>
                <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <GraduationCap className="h-5 w-5 text-accent" /> Education
          </h3>
          <div className="space-y-4">
            {EDUCATION.map(e => (
              <Card key={e.title} className="p-6 relative border-l-4 border-l-accent">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold">{e.title}</h4>
                  <span className="text-xs text-muted-foreground">{e.period}</span>
                </div>
                <div className="text-sm text-accent mt-1">{e.place}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  return (
    <Section id="projects" eyebrow="My work" title="Projects">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map(f => (
          <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)}
            className={filter === f ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" : ""}>
            {f}
          </Button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <Card key={p.title} className="group overflow-hidden p-0 hover:border-primary/50 transition-all hover:-translate-y-1">
            <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color} overflow-hidden`}>
              <div className="absolute inset-0 grid place-items-center text-white/95 font-display text-4xl font-bold tracking-tight">
                {p.title}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors grid place-items-center opacity-0 group-hover:opacity-100">
                <Button size="sm" variant="secondary" className="gap-2">
                  View Project <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold truncate">{p.title}</h3>
                <Badge variant="secondary" className="text-xs shrink-0">{p.category}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Kind words" title="Testimonials">
      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {TESTIMONIALS.map(t => (
          <Card key={t.name} className="p-6 relative">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
            <p className="text-muted-foreground leading-relaxed">"{t.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };
  return (
    <Section id="contact" eyebrow="Let's talk" title="Get In Touch">
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="p-8">
          <h3 className="text-xl font-semibold">Send a message</h3>
          <p className="text-sm text-muted-foreground mt-1">I'll reply within 24–48 hours.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Input required name="name" placeholder="Your name" />
            <Input required type="email" name="email" placeholder="Your email" />
            <Textarea required name="message" placeholder="Your message" rows={5} />
            <Button disabled={submitting} className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
        <div className="space-y-4">
          <Card className="p-6 flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary"><Mail className="h-5 w-5" /></div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="font-medium truncate">ashutosh.palhare@email.com</div>
            </div>
          </Card>
          <Card className="p-6 flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><Phone className="h-5 w-5" /></div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
              <div className="font-medium">+91 00000 00000</div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Find me online</div>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border hover:border-primary hover:text-primary transition-colors">
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ashutosh Palhare. All rights reserved.</div>
        <div>Crafted with care.</div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const { theme, toggle } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}