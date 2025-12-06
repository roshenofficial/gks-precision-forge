import { Link } from "react-router-dom";
import { ArrowRight, Cog, Wrench, Gauge, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import multiSpindle from "@/assets/multi-spindle.jpg";
import vmcMachine from "@/assets/vmc-machine.jpg";
import slidingHead from "@/assets/sliding-head.jpg";
import threadRolling from "@/assets/thread-rolling.jpg";
import polygonMilling from "@/assets/polygon-milling.jpg";
import hydroPress from "@/assets/hydro-press.jpg";
import toolGrinder from "@/assets/tool-grinder.jpg";
import heroCnc from "@/assets/hero-cnc.jpg";

const machines = [
  {
    title: "CNC Lathes",
    subtitle: "Cub LM, LT-16, Fluxturn",
    description: "High-precision bar feeder type CNC lathes delivering tight tolerances and multi-axis capabilities for complex automotive components.",
    specs: ["Multi-axis machining", "Bar feeder automation", "±0.01mm tolerance", "High-volume production"],
    image: multiSpindle,
  },
  {
    title: "Multi-Spindle Automats",
    subtitle: "Gildemeister, Wickman, Traub",
    description: "German-engineered multi-spindle automatic lathes for high-volume, cost-effective production with exceptional consistency.",
    specs: ["6-8 spindle configurations", "Simultaneous operations", "Cost-effective production", "High repeatability"],
    image: heroCnc,
  },
  {
    title: "CNC Sliding Head",
    subtitle: "Citizen A20-3F7, SHA-20 Magna",
    description: "Swiss-type sliding headstock machines for ultra-precision machining of slender and complex parts.",
    specs: ["Swiss-type precision", "Slender part capability", "Live tooling", "Sub-spindle operations"],
    image: slidingHead,
  },
  {
    title: "VMC - Vertical Machining",
    subtitle: "AMS 540V, DART",
    description: "3-axis vertical machining centers for precision milling, drilling, and complex contouring operations.",
    specs: ["3-axis milling", "High-speed spindle", "Automatic tool changer", "CAD/CAM integration"],
    image: vmcMachine,
  },
  {
    title: "Polygon Milling",
    subtitle: "BRISKTECH 42mm",
    description: "Specialized polygon milling machines for creating hex, square, and custom profiles on cylindrical parts.",
    specs: ["Hex/square profiles", "High accuracy", "42mm capacity", "Fast cycle times"],
    image: polygonMilling,
  },
  {
    title: "Thread Rolling",
    subtitle: "TFMI, SUNRISE",
    description: "Cold-forming thread rolling machines producing superior surface finish and enhanced thread strength.",
    specs: ["Superior surface finish", "Enhanced strength", "Cold forming process", "High production rates"],
    image: threadRolling,
  },
  {
    title: "Hydro-Pneumatic Presses",
    subtitle: "Custom configurations",
    description: "Precision forming and assembly operations with controlled force application for consistent results.",
    specs: ["Controlled force", "Precision forming", "Assembly operations", "Quality monitoring"],
    image: hydroPress,
  },
  {
    title: "Tool & Cutter Grinders",
    subtitle: "In-house tooling",
    description: "Complete in-house tool sharpening and reconditioning capabilities ensuring optimal cutting performance.",
    specs: ["Tool reconditioning", "Custom tool grinding", "Quick turnaround", "Cost savings"],
    image: toolGrinder,
  },
];

const applications = [
  { title: "Diesel Rotary Pumps", icon: Cog },
  { title: "CRDI Fuel Injection Systems", icon: CircuitBoard },
  { title: "Engine & Transmission Units", icon: Wrench },
  { title: "Stoplight & Pressure Switches", icon: Gauge },
  { title: "Hydraulic & Pneumatic Connectors", icon: Cog },
  { title: "Diesel Injector Parts", icon: CircuitBoard },
  { title: "Solenoid Valve Bodies", icon: Wrench },
  { title: "Sensor & Switch Components", icon: Gauge },
];

export default function Capabilities() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <span className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Manufacturing Capabilities
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              State-of-the-Art<br />
              <span className="text-primary">Precision Machining</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From CNC lathes to specialized threading equipment, our comprehensive machine shop delivers components that meet the most demanding specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Equipment</h2>
            <p className="section-subtitle mx-auto">
              Invest in the best — our machinery represents decades of engineering excellence
            </p>
          </div>
          
          <div className="space-y-16">
            {machines.map((machine, index) => (
              <div 
                key={machine.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-medium">
                    <img 
                      src={machine.image} 
                      alt={machine.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {machine.subtitle}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mt-2 mb-4">
                    {machine.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {machine.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {machine.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Product Applications</h2>
            <p className="section-subtitle mx-auto">
              Our precision components power critical systems across the automotive industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div 
                key={app.title}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-medium transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <app.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{app.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Need Custom Machined Components?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Share your specifications and let us demonstrate our manufacturing excellence.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
