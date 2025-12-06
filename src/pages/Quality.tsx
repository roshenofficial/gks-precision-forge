import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle2, Target, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import qualityLab from "@/assets/quality-lab.jpg";

const certifications = [
  { name: "IATF16949:2016", description: "International Automotive Task Force quality management certification" },
  { name: "ISO 9001:2015", description: "International standard for quality management systems" },
];

const equipment = [
  { name: "Sipcon Video Measuring Machine", capability: "Precision optical measurement and inspection" },
  { name: "Mitutoyo Profile Projector", capability: "Contour and profile verification" },
  { name: "Mitutoyo Surface Roughness Tester", capability: "Ra surface finish measurement" },
  { name: "Mitutoyo Roundness Tester RA-2000", capability: "Cylindricity and roundness analysis" },
  { name: "FIE Rockwell Hardness Tester", capability: "Material hardness verification" },
  { name: "Fischer Coating Thickness Gauge FMP10-20", capability: "Plating and coating measurement" },
];

const metrics = [
  { label: "Ra", title: "Surface Roughness", description: "Precise surface finish measurement ensuring component quality" },
  { label: "Cpk", title: "Process Capability", description: "Statistical verification of manufacturing consistency" },
  { label: "GD&T", title: "Geometric Dimensioning", description: "Complete geometric tolerance verification" },
  { label: "SPC", title: "Statistical Process Control", description: "Real-time process monitoring and control" },
];

const commitments = [
  { icon: Shield, title: "Zero-Defect Mindset", description: "Every component inspected before shipment" },
  { icon: CheckCircle2, title: "100% Inspection", description: "Complete dimensional verification on all parts" },
  { icon: Target, title: "ISO Compliant", description: "Adherence to international quality standards" },
  { icon: Gauge, title: "Process Excellence", description: "Continuous improvement in all operations" },
];

export default function Quality() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <span className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Quality Assurance
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Precision You Can<br />
              <span className="text-primary">Measure and Trust</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Our advanced inspection laboratory and rigorous quality processes ensure every component meets the exacting standards of global OEMs.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Certified Excellence</h2>
              <p className="section-subtitle mb-8">
                Our quality management system is certified to the highest international standards
              </p>
              
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-medium">
              <img 
                src={qualityLab} 
                alt="Quality Inspection Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Equipment */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Inspection Equipment</h2>
            <p className="section-subtitle mx-auto">
              Industry-leading metrology equipment for comprehensive quality verification
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <div key={item.name} className="industrial-card p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="section-padding bg-gradient-steel">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Quality Metrics</h2>
            <p className="section-subtitle mx-auto">
              Measurable standards that ensure component excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-card border border-border rounded-lg p-6 text-center">
                <span className="font-display font-bold text-3xl text-primary">{metric.label}</span>
                <h3 className="font-semibold text-foreground mt-2 mb-2">{metric.title}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Experience Zero-Defect Manufacturing
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Request a quality audit or facility tour to see our processes firsthand.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              Schedule a Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
