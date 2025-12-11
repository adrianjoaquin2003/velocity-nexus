import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Battery, Cpu, Gauge, Zap, Weight, Timer, ArrowRight, Settings } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const specs = [
  { icon: Battery, label: "Battery", value: "600V / 7.2 kWh" },
  { icon: Zap, label: "Peak Power", value: "80 kW" },
  { icon: Gauge, label: "Top Speed", value: "150+ km/h" },
  { icon: Timer, label: "0-100 km/h", value: "3.2 seconds" },
  { icon: Weight, label: "Weight", value: "240 kg" },
  { icon: Settings, label: "Motor", value: "AMK Racing" },
];

const systems = [
  {
    title: "Powertrain",
    description: "Our custom powertrain features a high-performance AMK racing motor paired with an in-house designed inverter. The system delivers instant torque and precise power delivery for maximum acceleration off the line.",
    features: ["80kW Peak Power", "Custom Inverter Design", "Regenerative Braking", "Torque Vectoring Ready"],
  },
  {
    title: "Battery System",
    description: "The accumulator pack uses high-density lithium cells arranged for optimal weight distribution. Our custom BMS monitors every cell in real-time for safety and performance.",
    features: ["600V Architecture", "7.2 kWh Capacity", "Custom BMS", "Active Cooling"],
  },
  {
    title: "Chassis & Aero",
    description: "A lightweight tubular steel spaceframe provides the perfect balance of rigidity and weight. The aerodynamics package generates significant downforce for improved cornering.",
    features: ["Steel Spaceframe", "Carbon Fiber Bodywork", "Full Aero Package", "Adjustable Wings"],
  },
  {
    title: "Electronics",
    description: "State-of-the-art vehicle control unit manages all systems in real-time. Comprehensive telemetry allows us to optimize performance during testing and competition.",
    features: ["Custom ECU", "Live Telemetry", "Data Logging", "Driver Display"],
  },
];

export default function Car() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit opacity-20" />
        <div className="container relative px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.3em] uppercase text-primary">
                <span className="w-8 h-px bg-primary" />
                The Machine
                <span className="w-8 h-px bg-primary" />
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
                The <span className="text-gradient-electric">Car</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Every component of our electric race car has been engineered, tested, 
                and refined by our student team. From the battery pack to the aerodynamics, 
                this is the culmination of thousands of hours of dedicated work.
              </p>
              <Link to="/involved">
                <Button variant="hero" size="lg">
                  Help Build the Next One
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-transparent blur-3xl" />
              <img
                src={heroCar}
                alt="FSAE Electric Race Car"
                className="relative w-full rounded-lg shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="text-center p-4 bg-background border border-border rounded hover-lift">
                <spec.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-lg font-bold">{spec.value}</div>
                <div className="text-muted-foreground font-body text-xs uppercase tracking-wider">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-10" />
        <div className="container relative px-4">
          <SectionTitle
            subtitle="Engineering"
            title="Core Systems"
            description="A deep dive into the technology that powers our championship-contending electric race car."
          />

          <div className="mt-16 space-y-12">
            {systems.map((system, index) => (
              <div
                key={system.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="font-display text-2xl font-bold">{system.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{system.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {system.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm font-body">
                        <Zap className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-card border border-border rounded-lg p-8 h-64 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-center">
                    <Cpu className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <span className="text-muted-foreground font-display text-sm uppercase tracking-wider">
                      {system.title} Diagram
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            subtitle="Performance"
            title="By The Numbers"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <StatCard value="3.2s" label="0-100 km/h" />
            <StatCard value="80kW" label="Peak Power" />
            <StatCard value="240kg" label="Curb Weight" />
            <StatCard value="1.8G" label="Lateral Grip" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
