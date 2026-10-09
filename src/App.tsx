import React, { useState } from "react";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import EtchedAccretion, {
  ACCRETION_PRESETS,
  AccretionPreset,
} from "@/components/ui/etched-accretion";
import {
  Sparkles,
  Layers,
  Code2,
  Sliders,
  Maximize2,
  Compass,
  ArrowDown,
  ExternalLink,
  Copy,
  Check,
  Palette,
  Terminal,
  FolderTree,
  Flame,
  Snowflake,
  Orbit,
  Sparkle,
} from "lucide-react";

// Curated high-resolution Unsplash stock imagery
const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    alt: "Fluid 3D abstract chromatic flow",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    alt: "Futuristic neon microcircuit geometry",
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    alt: "Ethereal northern lights arctic horizon",
  },
  {
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
    alt: "Iridescent crystalline prism in dark void",
  },
  {
    src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
    alt: "Cyberpunk Tokyo rain reflection streaks",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    alt: "Dramatic misty mountain ridge silhouette",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    alt: "Deep orbital space nebula and celestial glow",
  },
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    alt: "Neon synthesizer aesthetics and retro hardware",
  },
  {
    src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop",
    alt: "Dynamic impasto oil textural gradients",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop",
    alt: "Starry cosmos over sharp alpine peaks",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"showcase" | "docs">("showcase");
  const [selectedPreset, setSelectedPreset] = useState<AccretionPreset>("crimson");
  const [curve, setCurve] = useState(80);
  const [speed, setSpeed] = useState(4);
  const [tileHeight, setTileHeight] = useState(26);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const presetIcons: Record<AccretionPreset, React.ReactNode> = {
    crimson: <Flame className="w-3.5 h-3.5 text-red-500" />,
    ember: <Sparkle className="w-3.5 h-3.5 text-amber-500" />,
    glacier: <Snowflake className="w-3.5 h-3.5 text-sky-400" />,
    ash: <Orbit className="w-3.5 h-3.5 text-zinc-400" />,
    orchid: <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />,
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Top Floating Glass Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <div className="flex items-center justify-between px-5 py-3 rounded-full bg-background/70 backdrop-blur-xl border border-border/60 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-black text-xs text-background shadow-md shadow-primary/20">
              ✦
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-sm md:text-base">
                CINEMATIC UI
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] tracking-widest font-mono uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                shadcn/ui ready
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            <button
              onClick={() => setActiveTab("showcase")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "showcase"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Interactive Showcase
            </button>
            <button
              onClick={() => setActiveTab("docs")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === "docs"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Integration Docs
            </button>
          </div>
        </div>
      </header>

      {activeTab === "docs" ? (
        /* ================= DOCUMENTATION & SETUP VIEW ================= */
        <main className="relative z-10 pt-28 pb-20 px-6 max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <FolderTree className="w-3.5 h-3.5" />
              Standard Architecture Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Component Integration & Architecture
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Complete setup guide for <span className="text-foreground font-semibold">shadcn project structure</span>,
              {" "}<span className="text-foreground font-semibold">Tailwind CSS</span>, and{" "}
              <span className="text-foreground font-semibold">TypeScript</span> path aliases.
            </p>
          </div>

          {/* Section 1: Default path explanation */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/80 shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <FolderTree className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Why the default path is /components/ui</h2>
                <p className="text-xs text-muted-foreground">Standardized conventions in the React and shadcn ecosystem</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In modern React applications powered by shadcn/ui and modern bundlers, components are categorized into two tiers:
            </p>
            <ul className="text-sm space-y-2 text-muted-foreground list-disc list-inside">
              <li>
                <strong className="text-foreground">Primitive UI components (`/components/ui`):</strong> Reusable, headless or low-level primitives like buttons, dialogs, shaders, hero carousels, and footers. The shadcn CLI and community registries expect this folder by default.
              </li>
              <li>
                <strong className="text-foreground">Domain feature components (`/components` or `/src/features`):</strong> Business-specific views, widgets, and multi-step forms that assemble primitives together.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Following this structure prevents namespace collisions, enables automated CLI updates (<code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono">npx shadcn@latest add ...</code>), and guarantees clean TypeScript path aliases like <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono">@/components/ui/*</code>.
            </p>
          </div>

          {/* Section 2: Step by step setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Terminal className="w-4 h-4 text-primary" />
                  1. Setup shadcn CLI
                </div>
                <button
                  onClick={() => copyToClipboard("npx shadcn@latest init", "cli-init")}
                  className="p-1.5 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground text-xs transition"
                >
                  {copiedCode === "cli-init" ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-background text-xs font-mono text-muted-foreground overflow-x-auto border border-border/50">
{`# Initialize shadcn in your project:
npx shadcn@latest init

# Answer prompts:
# Style: Default or New York
# Base color: Neutral or Slate
# CSS variables for colors: Yes`}
              </pre>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Sliders className="w-4 h-4 text-secondary" />
                  2. Required Dependencies
                </div>
                <button
                  onClick={() => copyToClipboard("npm install gsap clsx tailwind-merge lucide-react", "deps-cmd")}
                  className="p-1.5 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground text-xs transition"
                >
                  {copiedCode === "deps-cmd" ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-background text-xs font-mono text-muted-foreground overflow-x-auto border border-border/50">
{`# Install animation & utility libraries:
npm install gsap clsx tailwind-merge lucide-react`}
              </pre>
            </div>
          </div>

          {/* Section 3: TypeScript Paths & utils.ts */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/80 shadow-lg space-y-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              TypeScript Alias (@/) & utils.ts Helper
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All components reference <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono">@/lib/utils</code>. Ensure your <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono">tsconfig.json</code> and <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono">vite.config.ts</code> configure the alias, and place the following in <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono">lib/utils.ts</code>:
            </p>
            <pre className="p-4 rounded-xl bg-background text-xs font-mono text-muted-foreground overflow-x-auto border border-border/50">
{`// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
            </pre>
          </div>

          {/* Components summary */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/80 shadow-lg space-y-4">
            <h3 className="text-base font-bold">Integrated Components Inventory</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-background/50 border border-border/60">
                <span className="font-mono text-primary font-bold">components/ui/motion-footer.tsx</span>
                <p className="mt-1 text-muted-foreground">GSAP ScrollTrigger curtain reveal, 3D magnetic buttons, oklch glass pills, and heartbeat animation.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/60">
                <span className="font-mono text-secondary font-bold">components/ui/tilted-grid-hero.tsx</span>
                <p className="mt-1 text-muted-foreground">3D cylindrical arc carousel with multi-strip vertical facets, ResizeObserver, and continuous compositor-only scrolling.</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/60">
                <span className="font-mono text-destructive font-bold">components/ui/etched-accretion.tsx</span>
                <p className="mt-1 text-muted-foreground">Self-contained WebGL2 fragment shader rendering an engraved black hole accretion disk with pointer parallax and hold-to-feed.</p>
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveTab("showcase")}
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow-md hover:opacity-90 transition"
              >
                Back to Live Showcase →
              </button>
            </div>
          </div>
        </main>
      ) : (
        /* ================= COMPLETE INTEGRATED SHOWCASE ================= */
        <div className="relative w-full">
          {/* 
            MAIN SCROLLABLE CONTENT (relative z-10 with background)
            This is essential for the CinematicFooter curtain-reveal effect!
          */}
          <main className="relative z-10 w-full bg-background border-b border-border/60 shadow-2xl rounded-b-[2.5rem]">
            {/* HERO SECTION 1: Etched Accretion WebGL2 Singular Experience */}
            <div className="relative w-full overflow-hidden">
              <EtchedAccretion
                preset={selectedPreset}
                height="92vh"
                interactive={true}
                className="w-full"
              >
                <div className="pointer-events-none flex h-full flex-col justify-between p-6 sm:p-12 md:p-16 text-white">
                  {/* Top Bar Spacer */}
                  <div className="pt-16 sm:pt-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md border border-white/10 text-white/80">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      WebGL2 Realtime Simulation
                    </span>
                  </div>

                  {/* Main Hero Headline */}
                  <div className="max-w-3xl space-y-4">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-tight">
                      Nothing <span className="italic font-normal text-[#ff3b47]">escapes</span>
                      <br />
                      the horizon.
                    </h1>
                    <p className="max-w-xl text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white/60">
                      Move cursor for parallax drift · Hold mouse to feed singularity
                    </p>
                  </div>

                  {/* Interactive Preset Palette Selector (Pointer Events Enabled) */}
                  <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                      {(["crimson", "ember", "glacier", "ash", "orchid"] as AccretionPreset[]).map(
                        (p) => (
                          <button
                            key={p}
                            onClick={() => setSelectedPreset(p)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                              selectedPreset === p
                                ? "bg-white text-black shadow-md"
                                : "text-white/60 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {presetIcons[p]}
                            {p}
                          </button>
                        )
                      )}
                    </div>

                    <a
                      href="#tilted-hero"
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition group"
                    >
                      <span>Explore 3D Curved Gallery</span>
                      <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </EtchedAccretion>
            </div>

            {/* SECTION 2: Tilted Grid 3D Cylinder Hero Section */}
            <section id="tilted-hero" className="relative py-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Cylindrical Arc Transforms
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                    Tilted Grid Hero
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                    One continuous stream of high-resolution stock tiles turning around a virtual 3D cylinder. Each tile is segmented into 16 slices for a smooth composite curve.
                  </p>
                </div>

                {/* Live Controls for Tilted Grid Hero */}
                <div className="flex flex-wrap items-center gap-4 p-3 rounded-2xl bg-card border border-border/80 shadow-sm text-xs">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-muted-foreground">
                      <span>Bend Curve</span>
                      <span className="font-mono text-foreground">{curve}°</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={85}
                      value={curve}
                      onChange={(e) => setCurve(Number(e.target.value))}
                      className="w-24 sm:w-28 accent-primary cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-muted-foreground">
                      <span>Cycle Speed</span>
                      <span className="font-mono text-foreground">{speed}s</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={8}
                      value={speed}
                      onChange={(e) => setSpeed(Number(e.target.value))}
                      className="w-24 sm:w-28 accent-primary cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-muted-foreground">
                      <span>Tile Height</span>
                      <span className="font-mono text-foreground">{tileHeight}%</span>
                    </div>
                    <input
                      type="range"
                      min={18}
                      max={35}
                      value={tileHeight}
                      onChange={(e) => setTileHeight(Number(e.target.value))}
                      className="w-24 sm:w-28 accent-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* TiltedGridHero Component Mounted */}
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
                <TiltedGridHero
                  images={HERO_IMAGES}
                  speed={speed}
                  curve={curve}
                  tileHeight={tileHeight}
                  className="h-[520px] sm:h-[600px] w-full"
                >
                  <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 sm:py-16 text-center pointer-events-none">
                    <div className="px-6 space-y-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[11px] font-mono uppercase tracking-widest text-primary">
                        Transform-Only Compositor Loop
                      </span>
                      <h3 className="text-balance text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground drop-shadow-md">
                        Every frame,
                        <br />
                        brought into focus.
                      </h3>
                    </div>
                    <div className="max-w-md px-6 py-2 rounded-full bg-background/70 backdrop-blur-md border border-border/60 text-xs sm:text-sm text-muted-foreground">
                      Images bend in from the right edge, flatten face-on at the center, then curl away toward the left horizon.
                    </div>
                  </div>
                </TiltedGridHero>
              </div>
            </section>

            {/* SECTION 3: Architectural Feature Grid & Scroll Transition to Footer */}
            <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto space-y-16">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Unified Component Architecture
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Engineered with shadcn standard directory patterns, Tailwind CSS OKLCH tokens, zero extraneous bundle weight, and smooth GPU-accelerated motion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/80 hover:border-primary/50 transition-colors space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold">1. Curtain Reveal Wrapper</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The motion footer sits in standard document flow using a CSS <code className="text-foreground">polygon clip-path</code> while the footer stays pinned to the viewport.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/80 hover:border-secondary/50 transition-colors space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold">2. Zero-Dependency Physics</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Custom magnetic buttons use GSAP elastic interpolation for zero lag cursor tracking, paired with theme-adaptive OKLCH glass pills.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/80 hover:border-destructive/50 transition-colors space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                    <Orbit className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold">3. Procedural Shader Engine</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The WebGL2 fragment shader calculates differential rotation shear, relativistic Doppler beaming, and gravitational lensing purely procedurally.
                  </p>
                </div>
              </div>

              {/* Scroll Down Prompt for the Curtain Reveal Footer */}
              <div className="flex flex-col items-center justify-center pt-12 pb-6 space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground text-center">
                  Scroll down slowly to unlock the Cinematic Curtain Footer
                </p>
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
                  <div className="w-1.5 h-2.5 rounded-full bg-primary animate-bounce" />
                </div>
              </div>
            </section>
          </main>

          {/* THE CINEMATIC FOOTER (Curtain reveal underneath the main page content) */}
          <CinematicFooter />
        </div>
      )}
    </div>
  );
}
