"use client";

import {
  Code2, Zap, BarChart3, Eye, Brain, Cpu, Database,
  Plug, Cloud, ArrowRight, Terminal, Box, FileText,
  Shield, ChevronRight, Menu, X, Sparkles, Globe,
  MessageSquare, Image, Music, Video
} from "lucide-react";
import { useState } from "react";

/* =======================================================
   REGLA: Todos los objetos de estilo extraidos a constantes.
   Jamas usar objetos inline en JSX.
   ======================================================= */

const heroGradient = {
  background: "radial-gradient(ellipse at 50% -20%, rgba(16,185,129,0.15) 0%, transparent 60%)",
};

const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

const NAV_LINKS = [
  { label: "Productos", href: "#productos" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Precios", href: "#precios" },
  { label: "Docs", href: "#docs" },
];

const FEATURES = [
  {
    icon: Code2,
    tag: "INFRA PROGRAMABLE",
    title: "Infra programable",
    desc: "Define todo en codigo puro. Sin YAML, sin archivos de configuracion. Manten entorno y requisitos de hardware siempre sincronizados.",
  },
  {
    icon: Zap,
    tag: "ALTO RENDIMIENTO",
    title: "Construido para rendimiento",
    desc: "Lanza y escala contenedores en segundos para mantener ciclos de retroalimentacion rapidos y latencia ultra baja.",
  },
  {
    icon: BarChart3,
    tag: "ESCALADO ELASTICO",
    title: "Escalado elastico de GPU",
    desc: "Capacidad elastica y acceso a miles de GPUs en multiples nubes. Sin cuotas, sin reservas. Escala a cero cuando no se usa.",
  },
  {
    icon: Eye,
    tag: "OBSERVABILIDAD",
    title: "Observabilidad unificada",
    desc: "Logging integrado y visibilidad completa de cada funcion, contenedor y carga de trabajo en tiempo real.",
  },
];

const PRODUCTS = [
  {
    icon: Brain,
    title: "Inferencia",
    desc: "Despliega y escala inferencia para LLMs, audio, generacion de imagen y video.",
  },
  {
    icon: Cpu,
    title: "Entrenamiento",
    desc: "Fine-tunea modelos open-source en clusters de uno o multiples nodos al instante.",
  },
  {
    icon: Shield,
    title: "Sandboxes",
    desc: "Escala entornos seguros y efimeros para ejecutar codigo no confiable.",
  },
  {
    icon: Box,
    title: "Batch",
    desc: "Escala a miles de contenedores para cargas de trabajo batch bajo demanda.",
  },
  {
    icon: FileText,
    title: "Notebooks",
    desc: "Colabora en codigo y datos en tiempo real con notebooks compartibles.",
  },
];

const PLATFORM = [
  {
    icon: Terminal,
    title: "Runtime nativo de IA",
    desc: "Disenado desde cero para cargas pesadas de IA. Autoescalado ultra rapido e inicializacion de modelos 100x mas rapida que Docker.",
  },
  {
    icon: Database,
    title: "Almacenamiento integrado",
    desc: "Sistema de almacenamiento distribuido globalmente para alto throughput y baja latencia. Ideal para carga rapida de modelos y datasets.",
  },
  {
    icon: Plug,
    title: "Integraciones nativas",
    desc: "Monta tus buckets cloud existentes, conecta herramientas MLOps y envia datos a tus vendors de telemetria.",
  },
  {
    icon: Cloud,
    title: "Pool multi-cloud",
    desc: "Capacidad multi-cloud profunda con scheduling inteligente. Siempre tendras las CPUs y GPUs que necesitas.",
  },
];

const USE_CASES = [
  { icon: MessageSquare, label: "Chatbots IA" },
  { icon: Image, label: "Generacion de imagenes" },
  { icon: Music, label: "Audio y voz" },
  { icon: Video, label: "Procesamiento de video" },
  { icon: Globe, label: "Agentes autonomos" },
  { icon: Sparkles, label: "RAG y busqueda" },
];

const TESTIMONIALS = [
  {
    quote: "Usamos esta plataforma para ejecutar inferencia en el edge con menos de 10ms de overhead y jobs batch a gran escala. Nuestro equipo ama la potencia y flexibilidad.",
    author: "Director de Ingenieria",
    company: "Startup IA Series B",
  },
  {
    quote: "Hace facil escribir codigo que corre en cientos de GPUs en paralelo, procesando datos en una fraccion del tiempo.",
    author: "Head of Data",
    company: "Empresa de Media Tech",
  },
  {
    quote: "Todos aqui lo aman porque nos ayuda a movernos mucho mas rapido. Confiamos en la plataforma para manejar picos masivos de volumen.",
    author: "VP de Ingenieria",
    company: "AI Research Lab",
  },
];

const SECURITY = [
  "Controles de equipo",
  "Aislamiento battle-tested",
  "SOC2 y HIPAA",
  "Controles de residencia de datos",
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <span className="text-gradient">Servicio IA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contacto" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2">
              Contacto
            </a>
            <a href="#empezar" className="text-sm bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold px-5 py-2 rounded-lg transition-colors">
              Empezar gratis
            </a>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-white/5 bg-gray-950/95 backdrop-blur-xl px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="block text-gray-300 hover:text-white py-2">
                {link.label}
              </a>
            ))}
            <a href="#empezar" className="block text-center bg-emerald-500 text-gray-950 font-semibold px-5 py-2.5 rounded-lg mt-4">
              Empezar gratis
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={heroGradient}>
        <div className="hero-glow" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Nuevos modelos disponibles. Prueba ahora</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Infraestructura de IA que<br />
            <span className="text-gradient">los desarrolladores aman</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ejecuta inferencia, entrenamiento y procesamiento por lotes con arranques sub-segundo,
            autoescalado instantaneo y una experiencia que se siente local.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#empezar" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 text-base">
              Empezar gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contacto" className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-8 py-3.5 rounded-lg transition-all text-base">
              Contactar ventas
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {FEATURES.map((f) => (
              <div key={f.tag} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-sm text-gray-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all cursor-pointer">
                <f.icon className="w-4 h-4" />
                {f.tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-24" style={gridBg}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Por que elegirnos</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Disenado para ayudar a equipos de IA<br className="hidden md:block" />
              a desplegar mas rapido.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-8 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <f.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="productos" className="relative py-24">
        <div className="section-glow top-0 right-0" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Productos</p>
            <h2 className="text-3xl md:text-5xl font-bold">Potenciando cualquier carga de trabajo ML</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-6 group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <p.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Aprender mas <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="plataforma" className="relative py-24" style={gridBg}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Plataforma</p>
            <h2 className="text-3xl md:text-5xl font-bold">Construye sobre una base poderosa</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Desde el sistema de archivos hasta el runtime, cada capa esta disenada para darte las herramientas para construir aplicaciones robustas y escalables.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PLATFORM.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-8 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <p.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="casos" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Casos de uso</p>
            <h2 className="text-3xl md:text-5xl font-bold">Construido con nuestra plataforma</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {USE_CASES.map((uc) => (
              <div key={uc.label} className="glass-card rounded-xl p-5 text-center hover:scale-105 cursor-pointer group transition-transform">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-colors">
                  <uc.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-sm text-gray-300">{uc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="py-16 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center text-xl font-semibold mb-8">Seguridad y gobernanza</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {SECURITY.map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-emerald-400" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-emerald-400 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="empezar" className="relative py-24 overflow-hidden">
        <div className="section-glow" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Lanza tu primera app<br />
            <span className="text-gradient">en minutos.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">$30/mes en computo gratis</p>
          <a href="#" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold px-10 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 text-lg">
            Empezar gratis
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-sm mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Inferencia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Entrenamiento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sandboxes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Batch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Notebooks</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentacion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seguridad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terminos de servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politica de privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SLA</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-gradient">Servicio IA</span>
            </div>
            <p className="text-sm text-gray-500">&copy; 2026 Servicio IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}