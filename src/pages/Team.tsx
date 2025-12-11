import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Users, Settings, Cpu, Briefcase, Palette, Wrench } from "lucide-react";

const departments = [
  {
    icon: Settings,
    name: "Powertrain",
    lead: "Lead: Powertrain Director",
    description: "Responsible for the motor, inverter, gearbox, and all drivetrain components.",
    roles: ["Motor Integration", "Inverter Design", "Gearbox Engineering", "Cooling Systems"],
  },
  {
    icon: Cpu,
    name: "Electronics",
    lead: "Lead: Electronics Director",
    description: "Develops the vehicle control systems, telemetry, and all electrical systems.",
    roles: ["VCU Development", "BMS Engineering", "Telemetry Systems", "Wiring Harness"],
  },
  {
    icon: Wrench,
    name: "Chassis & Suspension",
    lead: "Lead: Mechanical Director",
    description: "Designs and manufactures the frame, suspension, and steering systems.",
    roles: ["Frame Design", "Suspension Geometry", "Steering System", "Ergonomics"],
  },
  {
    icon: Palette,
    name: "Aerodynamics",
    lead: "Lead: Aero Director",
    description: "CFD analysis and design of all aerodynamic components for maximum downforce.",
    roles: ["Wing Design", "Undertray", "CFD Analysis", "Wind Tunnel Testing"],
  },
  {
    icon: Briefcase,
    name: "Business",
    lead: "Lead: Business Director",
    description: "Handles sponsorship, marketing, finance, and team operations.",
    roles: ["Sponsorship", "Marketing", "Finance", "Event Planning"],
  },
  {
    icon: Users,
    name: "Operations",
    lead: "Lead: Operations Manager",
    description: "Manages team logistics, workshop operations, and competition preparation.",
    roles: ["Workshop Management", "Logistics", "Safety", "Documentation"],
  },
];

const leadership = [
  { role: "Team Principal", description: "Overall team leadership and strategic direction" },
  { role: "Technical Director", description: "Oversees all engineering departments" },
  { role: "Chief Engineer", description: "Vehicle design integration and performance" },
  { role: "Business Director", description: "Sponsorship, finance, and operations" },
];

export default function Team() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.3em] uppercase text-primary">
              <span className="w-8 h-px bg-primary" />
              Organization
              <span className="w-8 h-px bg-primary" />
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              Team <span className="text-gradient-electric">Structure</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Our team is organized into specialized departments, each led by experienced 
              members who guide their teams to deliver championship-level results.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <SectionTitle
            subtitle="Leadership"
            title="Executive Team"
            description="The core leadership team that guides our strategic vision."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {leadership.map((leader) => (
              <div key={leader.role} className="p-6 bg-background border border-border rounded hover-lift text-center">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{leader.role}</h3>
                <p className="text-muted-foreground font-body text-sm mt-2">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-10" />
        <div className="container relative px-4">
          <SectionTitle
            subtitle="Departments"
            title="Our Teams"
            description="Each department plays a crucial role in bringing our race car from concept to competition."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {departments.map((dept) => (
              <div key={dept.name} className="group p-6 bg-card border border-border rounded hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <dept.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{dept.name}</h3>
                    <span className="text-primary font-body text-sm">{dept.lead}</span>
                  </div>
                </div>
                <p className="text-muted-foreground font-body text-sm mb-4">{dept.description}</p>
                <div className="space-y-1">
                  {dept.roles.map((role) => (
                    <div key={role} className="text-sm font-body text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="font-display text-4xl font-bold text-gradient-electric">50+</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider mt-2">Active Members</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl font-bold text-gradient-electric">6</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider mt-2">Departments</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl font-bold text-gradient-electric">10+</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider mt-2">Disciplines</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl font-bold text-gradient-electric">4</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider mt-2">Years Avg Experience</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
