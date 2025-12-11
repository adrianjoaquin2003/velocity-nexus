import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, GraduationCap, Briefcase, Wrench, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const positions = [
  {
    icon: Wrench,
    title: "Mechanical Engineering",
    areas: ["Chassis Design", "Suspension", "Manufacturing", "Composites"],
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    areas: ["Power Electronics", "Motor Control", "BMS", "Embedded Systems"],
  },
  {
    icon: Users,
    title: "Business & Marketing",
    areas: ["Sponsorship", "Social Media", "Event Management", "Finance"],
  },
  {
    icon: GraduationCap,
    title: "Software & Data",
    areas: ["Telemetry", "Data Analysis", "Simulation", "Vehicle Dynamics"],
  },
];

const benefits = [
  "Hands-on engineering experience building a real race car",
  "Industry connections and networking opportunities",
  "Resume-building project experience",
  "Competition travel and team bonding",
  "Access to professional manufacturing equipment",
  "Mentorship from alumni and industry sponsors",
];

export default function Involved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    year: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll be in touch soon about next steps.",
    });
    setFormData({ name: "", email: "", major: "", year: "", interest: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.3em] uppercase text-primary">
              <span className="w-8 h-px bg-primary" />
              Join Us
              <span className="w-8 h-px bg-primary" />
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              Get <span className="text-gradient-electric">Involved</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              No prior experience required – just passion and dedication. 
              We welcome students from all majors and skill levels.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <SectionTitle
            subtitle="Opportunities"
            title="Open Positions"
            description="Find your place on our team across various disciplines."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {positions.map((pos) => (
              <div key={pos.title} className="p-6 bg-background border border-border rounded hover-lift">
                <pos.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold mb-3">{pos.title}</h3>
                <ul className="space-y-2">
                  {pos.areas.map((area) => (
                    <li key={area} className="text-muted-foreground font-body text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-10" />
        <div className="container relative px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Why Join"
                title="Member Benefits"
                align="left"
              />
              <ul className="space-y-4 mt-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-body text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-display text-2xl font-bold mb-6">Apply Now</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Major"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    required
                    className="bg-background"
                  />
                  <Input
                    placeholder="Year (e.g., Sophomore)"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <Input
                  placeholder="Area of Interest (e.g., Powertrain, Electronics)"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  required
                  className="bg-background"
                />
                <Textarea
                  placeholder="Why do you want to join the team?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background min-h-[100px]"
                />
                <Button type="submit" variant="hero" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <SectionTitle
            subtitle="Questions"
            title="FAQ"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="p-6 bg-background border border-border rounded">
              <h4 className="font-display font-semibold mb-2">Do I need experience?</h4>
              <p className="text-muted-foreground font-body text-sm">
                No! We welcome all skill levels. Training is provided for all roles.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded">
              <h4 className="font-display font-semibold mb-2">What's the time commitment?</h4>
              <p className="text-muted-foreground font-body text-sm">
                Typically 8-15 hours per week, with flexibility around exams.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded">
              <h4 className="font-display font-semibold mb-2">When do you recruit?</h4>
              <p className="text-muted-foreground font-body text-sm">
                We recruit year-round, with major drives at the start of each semester.
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded">
              <h4 className="font-display font-semibold mb-2">Do I need to be an engineer?</h4>
              <p className="text-muted-foreground font-body text-sm">
                Not at all! We need business, marketing, and media students too.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
