import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Trophy, Calendar, Target, Zap, Award, Flag } from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Team Founded",
    description: "A group of passionate engineering students came together with a shared vision of electric motorsport.",
  },
  {
    year: "2019",
    title: "First Prototype",
    description: "Successfully built our first electric drivetrain prototype, laying the foundation for future success.",
  },
  {
    year: "2020",
    title: "Competition Debut",
    description: "First official Formula SAE competition entry, finishing in the top 20 despite being newcomers.",
  },
  {
    year: "2021",
    title: "Design Award",
    description: "Won Best Design Innovation award for our custom battery management system.",
  },
  {
    year: "2022",
    title: "Top 10 Finish",
    description: "Achieved our best placement yet, breaking into the top 10 at the national championship.",
  },
  {
    year: "2023",
    title: "New Records",
    description: "Set new team records for acceleration and efficiency, pushing our engineering limits.",
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Team grew to 50+ members across multiple engineering disciplines.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in everything we design and build.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries and embracing new technologies to stay ahead.",
  },
  {
    icon: Award,
    title: "Teamwork",
    description: "Success comes from collaboration across all disciplines.",
  },
  {
    icon: Flag,
    title: "Sustainability",
    description: "Committed to the future of clean, efficient motorsport.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.3em] uppercase text-primary">
              <span className="w-8 h-px bg-primary" />
              Our Story
              <span className="w-8 h-px bg-primary" />
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              About <span className="text-gradient-electric">Us</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              We are a student-led Formula SAE Electric racing team dedicated to designing, 
              building, and racing high-performance electric vehicles while developing the 
              next generation of engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionTitle
                subtitle="Our Mission"
                title="Engineering Tomorrow's Mobility"
                align="left"
              />
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Our mission is to provide hands-on engineering experience that bridges 
                the gap between classroom learning and real-world application. We believe 
                in learning by doing – designing, building, and racing electric vehicles 
                that push the boundaries of what's possible.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Every member gains invaluable skills in project management, teamwork, 
                and cutting-edge automotive technology that prepares them for careers 
                in the rapidly evolving electric vehicle industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="p-6 bg-background border border-border rounded hover-lift">
                  <value.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-10" />
        <div className="container relative px-4">
          <SectionTitle
            subtitle="Team History"
            title="Our Journey"
            description="From a small group of passionate students to a championship-contending team."
          />

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}>
                    <div className="inline-block p-6 bg-card border border-border rounded hover-lift">
                      <span className="font-display text-primary text-sm tracking-wider">{item.year}</span>
                      <h3 className="font-display text-xl font-bold mt-2">{item.title}</h3>
                      <p className="text-muted-foreground font-body text-sm mt-2">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            subtitle="Recognition"
            title="Our Achievements"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold">12+</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider">Competitions</div>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold">5</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider">Awards Won</div>
            </div>
            <div className="text-center p-6">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold">6</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider">Years Active</div>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold">Top 10</div>
              <div className="text-muted-foreground font-body text-sm uppercase tracking-wider">Best Finish</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
