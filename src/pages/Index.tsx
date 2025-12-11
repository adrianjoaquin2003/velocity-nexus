import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { Layout } from "@/components/Layout";
import { Zap, Users, Trophy, Gauge, ArrowRight, ChevronDown, Battery, Cpu } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const stats = [
  { value: "0-60", label: "in 3.2 seconds" },
  { value: "80kW", label: "peak power" },
  { value: "240kg", label: "total weight" },
  { value: "12+", label: "competitions" },
];

const features = [
  {
    icon: Battery,
    title: "Full Electric",
    description: "600V battery pack with custom BMS delivering peak performance on every run.",
  },
  {
    icon: Cpu,
    title: "Advanced Electronics",
    description: "State-of-the-art motor controllers and telemetry systems designed in-house.",
  },
  {
    icon: Users,
    title: "50+ Members",
    description: "Engineering students from multiple disciplines working together as one team.",
  },
  {
    icon: Trophy,
    title: "Competition Ready",
    description: "Designed and built to compete at the highest level of Formula SAE events.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-circuit opacity-30" />
        
        {/* Racing lines animation */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-primary/20 overflow-hidden">
          <div className="h-full w-20 bg-primary animate-race" />
        </div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-primary/10 overflow-hidden">
          <div className="h-full w-32 bg-primary/60 animate-race" style={{ animationDelay: "2s" }} />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.3em] uppercase text-primary animate-fade-in">
                  <span className="w-8 h-px bg-primary" />
                  Electric Racing
                  <span className="w-8 h-px bg-primary" />
                </span>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
                  Engineering
                  <br />
                  <span className="text-gradient-electric">The Future</span>
                </h1>
                <p className="text-muted-foreground font-body text-lg md:text-xl max-w-lg mx-auto lg:mx-0 animate-fade-in stagger-2">
                  We are a student-led Formula SAE Electric team pushing the boundaries of 
                  sustainable motorsport engineering.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in stagger-3">
                <Link to="/car">
                  <Button variant="hero" size="xl">
                    Explore The Car
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/involved">
                  <Button variant="electric" size="xl">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-transparent blur-3xl" />
              <img
                src={heroCar}
                alt="FSAE Electric Race Car"
                className="relative w-full rounded-lg shadow-2xl border border-border"
              />
              {/* Speed indicator overlay */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded border border-border">
                <div className="flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-display text-lg font-bold">150+ km/h</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider">Top Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in stagger-4">
            <span className="text-muted-foreground text-xs uppercase tracking-wider font-display">Scroll</span>
            <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card diagonal-cut-reverse">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                className={`stagger-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-20" />
        <div className="container relative px-4">
          <SectionTitle
            subtitle="What We Do"
            title="Driven by Innovation"
            description="Building championship-caliber electric race cars through cutting-edge engineering and passionate teamwork."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 bg-card border border-border rounded hover-lift stagger-${index + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Ready to Join the 
              <span className="text-gradient-electric"> Revolution?</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Whether you're an engineer, designer, or business enthusiast – there's a place for you on our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/involved">
                <Button variant="hero" size="lg">
                  Join Our Team
                  <Zap className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/sponsors">
                <Button variant="outline" size="lg">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
