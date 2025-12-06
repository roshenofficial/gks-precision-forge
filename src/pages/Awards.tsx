import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const certifications = [
  { 
    name: "IATF16949:2016", 
    description: "International Automotive Task Force quality management standard - the most rigorous quality certification for automotive suppliers worldwide.",
    icon: Shield,
  },
  { 
    name: "ISO 9001:2015", 
    description: "International standard for quality management systems demonstrating consistent delivery of products meeting customer and regulatory requirements.",
    icon: Shield,
  },
];

const awards = [
  {
    year: "2023",
    title: "Delphi-TVS Best Supplier Award",
    description: "Recognized for outstanding quality, delivery performance, and partnership excellence.",
  },
  {
    year: "2022",
    title: "Electromags Zero-Defect Achievement",
    description: "Achieved zero-defect delivery across all shipments for the entire fiscal year.",
  },
  {
    year: "2021",
    title: "Industry Association Excellence in Manufacturing",
    description: "Awarded for innovation and excellence in precision machining processes.",
  },
  {
    year: "2020",
    title: "Delphi-TVS Quality Excellence Award",
    description: "Acknowledged for maintaining exceptional Cpk values and process consistency.",
  },
];

const testimonial = {
  quote: "Geekay's Engineering Works consistently delivers components that meet our stringent quality requirements. Their zero-defect approach and commitment to continuous improvement make them an invaluable partner in our supply chain.",
  author: "Quality Assurance Team",
  company: "Delphi-TVS Diesel Systems",
};

export default function Awards() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <span className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Recognition
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Awards &<br />
              <span className="text-primary">Certifications</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Our commitment to excellence has been recognized by industry leaders and certified by international standards bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mx-auto">
              Meeting the highest international standards for automotive manufacturing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="industrial-card p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-subtitle mx-auto">
              Celebrating our achievements in quality and manufacturing excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award) => (
              <div key={award.title} className="bg-card border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <span className="font-display font-bold text-2xl text-primary">{award.year}</span>
                  <h3 className="font-display font-bold text-lg text-foreground mt-1">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-8">
              "{testimonial.quote}"
            </blockquote>
            
            <div>
              <div className="font-display font-bold text-lg text-foreground">{testimonial.author}</div>
              <div className="text-primary font-semibold">{testimonial.company}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="section-padding bg-gradient-steel">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="stat-number mb-2">30+</div>
              <div className="text-muted-foreground font-medium">Years of Excellence</div>
            </div>
            <div>
              <div className="stat-number mb-2">100%</div>
              <div className="text-muted-foreground font-medium">On-Time Delivery</div>
            </div>
            <div>
              <div className="stat-number mb-2">0</div>
              <div className="text-muted-foreground font-medium">Defect Tolerance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Experience Award-Winning Quality
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with a supplier that's recognized for manufacturing excellence.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
