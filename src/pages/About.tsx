import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroCnc from "@/assets/hero-cnc.jpg";

const timeline = [
  { year: "1995", title: "Foundation", description: "Started with a single lathe machine, driven by vision and determination" },
  { year: "2005", title: "Expansion", description: "Added CNC capabilities and multi-spindle automats" },
  { year: "2010", title: "IATF Certification", description: "Achieved IATF16949 certification for automotive quality" },
  { year: "2015", title: "Global Reach", description: "Expanded client base to include global OEMs" },
  { year: "2020", title: "Excellence Awards", description: "Recognized by Delphi-TVS for quality excellence" },
  { year: "2024", title: "Continued Growth", description: "Investing in advanced CNC sliding head technology" },
];

const values = [
  { 
    icon: Target, 
    title: "Zero-Defect Mindset", 
    description: "Every component is a commitment to perfection. We don't settle for 'good enough.'" 
  },
  { 
    icon: Eye, 
    title: "Process Excellence", 
    description: "Continuous improvement through systematic analysis and optimization." 
  },
  { 
    icon: Heart, 
    title: "On-Time Delivery", 
    description: "Your production schedules are our priority. 100% on-time delivery is our standard." 
  },
  { 
    icon: Users, 
    title: "Customer Partnership", 
    description: "We grow together. Your success is our success." 
  },
];

const founders = [
  { 
    name: "Mr. Nachimuthu Ganesan", 
    title: "Co-Founder", 
    description: "Visionary leader who established the foundation of precision machining excellence." 
  },
  { 
    name: "Mr. Balasubramanian", 
    title: "Co-Founder", 
    description: "Technical pioneer who built our manufacturing capabilities from the ground up." 
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <span className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              From One Lathe to<br />
              <span className="text-primary">Global Reach</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Driven by purpose, powered by passion. Three decades of engineering excellence serving the automotive industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Geekay's Engineering Works (GKS) is a precision machining company based in Ambattur, Chennai, India, serving the automobile industry since 1995. What began with a single lathe machine has grown into a comprehensive manufacturing facility equipped with state-of-the-art CNC technology.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a trusted Tier-3 supplier to world-class Tier-2 clients like Delphi TVS Diesel Systems and Electromags, we contribute critical machined components for Tier-1 OEMs such as Mahindra, Nissan, Renault, Bosch, JCB, and Simson.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are certified under IATF16949:2016 and known for our zero-defect delivery mindset, process capability, consistency, and on-time delivery across high-volume production.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-medium">
              <img 
                src={heroCnc} 
                alt="GKS Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Vision & Values</h2>
            <p className="section-subtitle mx-auto">
              Become a globally recognized name for machined components through performance, commitment, and continuous improvement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle mx-auto">
              30+ years of growth, innovation, and engineering excellence
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            {timeline.map((event, index) => (
              <div 
                key={event.year}
                className={`relative flex items-start gap-8 mb-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} hidden lg:block`}>
                  <div className="inline-block">
                    <span className="font-display font-bold text-3xl text-primary">{event.year}</span>
                    <h3 className="font-display font-bold text-lg text-foreground mt-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-2" />
                
                <div className="flex-1 pl-16 lg:pl-0">
                  <div className="lg:hidden">
                    <span className="font-display font-bold text-2xl text-primary">{event.year}</span>
                    <h3 className="font-display font-bold text-lg text-foreground mt-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-gradient-steel">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Founders</h2>
            <p className="section-subtitle mx-auto">
              The visionaries who built Geekay's Engineering Works
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">{founder.name}</h3>
                <span className="text-primary text-sm font-semibold">{founder.title}</span>
                <p className="text-sm text-muted-foreground mt-3">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our legacy of precision manufacturing excellence.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
