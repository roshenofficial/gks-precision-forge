import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const clients = [
  { name: "Delphi-TVS Diesel Systems", type: "Tier-2", description: "Fuel injection systems and diesel technology leader" },
  { name: "Electromags", type: "Tier-2", description: "Automotive electromagnetic components manufacturer" },
  { name: "Lucas-TVS", type: "Tier-2", description: "Automotive electrical and electronics manufacturer" },
  { name: "Bosch", type: "Tier-1", description: "Global automotive technology and solutions provider" },
  { name: "Mahindra", type: "Tier-1", description: "Leading Indian automotive manufacturer" },
  { name: "Nissan", type: "Tier-1", description: "Japanese multinational automobile manufacturer" },
  { name: "Renault", type: "Tier-1", description: "French multinational automotive manufacturer" },
  { name: "JCB", type: "Tier-1", description: "Construction equipment and machinery leader" },
  { name: "Simson", type: "Tier-2", description: "Precision automotive components supplier" },
];

const industries = [
  { name: "Automotive", icon: Truck, description: "Passenger vehicles, commercial vehicles, and two-wheelers" },
  { name: "Construction Equipment", icon: Building2, description: "Heavy machinery and construction vehicles" },
  { name: "Industrial Automation", icon: Factory, description: "Automated systems and industrial machinery" },
];

const supplyChain = [
  { level: "Tier-3", label: "Raw Material Processing", entity: "Geekay's Engineering Works" },
  { level: "Tier-2", label: "Component Assembly", entity: "Delphi-TVS, Electromags" },
  { level: "Tier-1", label: "System Integration", entity: "Bosch, Delphi" },
  { level: "OEM", label: "Vehicle Manufacturing", entity: "Mahindra, Nissan, Renault" },
];

export default function Clients() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <span className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Partners
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Trusted by<br />
              <span className="text-primary">Industry Leaders</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From Tier-2 suppliers to global OEMs, we're proud to support the automotive industry's most demanding manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Valued Clients</h2>
            <p className="section-subtitle mx-auto">
              Building long-term partnerships through consistent quality and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div 
                key={client.name}
                className="industrial-card p-6 text-center hover:border-primary transition-colors"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  {client.type}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Role in the Supply Chain</h2>
            <p className="section-subtitle mx-auto">
              As a Tier-3 supplier, we form the foundation of the automotive supply chain
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center max-w-4xl mx-auto">
            {supplyChain.map((step, index) => (
              <div key={step.level} className="flex-1 flex flex-col">
                <div 
                  className={`industrial-card p-6 flex-1 ${
                    step.level === "Tier-3" ? "bg-primary text-primary-foreground border-primary" : ""
                  }`}
                >
                  <span className={`font-display font-bold text-2xl ${
                    step.level === "Tier-3" ? "text-primary-foreground" : "text-primary"
                  }`}>
                    {step.level}
                  </span>
                  <h3 className={`font-semibold text-sm mt-2 ${
                    step.level === "Tier-3" ? "text-primary-foreground/90" : "text-foreground"
                  }`}>
                    {step.label}
                  </h3>
                  <p className={`text-xs mt-2 ${
                    step.level === "Tier-3" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {step.entity}
                  </p>
                </div>
                {index < supplyChain.length - 1 && (
                  <div className="hidden md:flex justify-center py-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle mx-auto">
              Our precision components power critical applications across diverse sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div 
                key={industry.name}
                className="industrial-card p-8 text-center hover:shadow-medium transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Join Our Network of Partners
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the reliability and precision that global OEMs trust.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
