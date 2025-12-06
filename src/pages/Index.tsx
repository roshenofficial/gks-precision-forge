import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroCnc from "@/assets/hero-cnc.jpg";
import multiSpindle from "@/assets/multi-spindle.jpg";
import vmcMachine from "@/assets/vmc-machine.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import logo from "@/assets/gks-logo.png";

const stats = [
  { number: "30+", label: "Years Experience", icon: Clock },
  { number: "0", label: "Defect Mindset", icon: Target },
  { number: "8+", label: "Major OEM Clients", icon: Users },
  { number: "100%", label: "On-Time Delivery", icon: Award },
];

const capabilities = [
  {
    title: "CNC Lathes",
    description: "Bar feeder types including Cub LM, LT-16, and Fluxturn for tight tolerances",
    image: multiSpindle,
  },
  {
    title: "VMC Machining",
    description: "Vertical Machining Centers - AMS 540V, DART for precision 3-axis milling",
    image: vmcMachine,
  },
  {
    title: "Quality Assurance",
    description: "Advanced inspection lab with Mitutoyo equipment ensuring zero-defect delivery",
    image: qualityLab,
  },
];

const clients = ["Delphi-TVS", "Electromags", "Bosch", "Mahindra", "Nissan", "Renault", "JCB", "Simson"];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCnc})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        </div>
        
        <div className="relative container-wide section-padding text-center lg:text-left">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start animate-fade-up">
              <img src={logo} alt="GKS" className="h-16 w-auto" />
              <div className="h-12 w-px bg-primary-foreground/30" />
              <span className="font-display text-primary text-sm font-semibold tracking-widest uppercase">
                IATF16949:2016 Certified
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Precision Engineering<br />
              <span className="text-primary">Since 1995</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              From one lathe to global reach. Trusted Tier-3 supplier delivering zero-defect machined components for world-class automotive manufacturers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/capabilities">
                  Our Capabilities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Manufacturing Excellence</h2>
            <p className="section-subtitle mx-auto">
              State-of-the-art machinery delivering precision components for global automotive leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <div 
                key={cap.title}
                className="industrial-card overflow-hidden group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={cap.image} 
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/capabilities">
                View All Capabilities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-gradient-steel">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle mx-auto">
              Tier-3 supplier delivering precision components to the automotive industry's finest
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={client}
                className="bg-card border border-border rounded-lg p-8 flex items-center justify-center animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-display font-bold text-lg text-steel">{client}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/clients">
                See All Clients
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Looking for a precision machining partner you can rely on?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our network of global OEM suppliers and experience zero-defect manufacturing excellence.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
