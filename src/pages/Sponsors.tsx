import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HandshakeIcon, Star, Zap, Award, Users, ArrowRight } from "lucide-react";

const sponsorTiers = [
  {
    name: "Platinum",
    price: "$10,000+",
    color: "from-primary to-primary/60",
    benefits: [
      "Logo on car (premium placement)",
      "Logo on team apparel",
      "Feature in all marketing materials",
      "VIP access to competitions",
      "Exclusive networking events",
      "Recruitment priority access",
    ],
  },
  {
    name: "Gold",
    price: "$5,000+",
    color: "from-amber-500 to-amber-600",
    benefits: [
      "Logo on car",
      "Logo on team apparel",
      "Social media features",
      "Competition tickets",
      "Workshop tours",
    ],
  },
  {
    name: "Silver",
    price: "$2,500+",
    color: "from-zinc-400 to-zinc-500",
    benefits: [
      "Logo on team website",
      "Social media mentions",
      "Newsletter features",
      "Workshop tours",
    ],
  },
  {
    name: "Bronze",
    price: "$1,000+",
    color: "from-amber-700 to-amber-800",
    benefits: [
      "Logo on team website",
      "Social media thanks",
      "Certificate of partnership",
    ],
  },
];

const whySponsor = [
  {
    icon: Users,
    title: "Access Top Talent",
    description: "Connect directly with motivated engineering students ready to join your workforce.",
  },
  {
    icon: Star,
    title: "Brand Visibility",
    description: "Your logo seen at competitions, on our car, and across our marketing channels.",
  },
  {
    icon: Zap,
    title: "Innovation Partnership",
    description: "Collaborate with us on cutting-edge electric vehicle technology development.",
  },
  {
    icon: Award,
    title: "Community Impact",
    description: "Support STEM education and the next generation of engineers.",
  },
];

export default function Sponsors() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.3em] uppercase text-primary">
              <span className="w-8 h-px bg-primary" />
              Partnership
              <span className="w-8 h-px bg-primary" />
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              Our <span className="text-gradient-electric">Sponsors</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Our success wouldn't be possible without the generous support of our sponsors. 
              Partner with us to support the future of electric motorsport.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <SectionTitle
            subtitle="Partners"
            title="Current Sponsors"
            description="Thank you to all our partners who make our mission possible."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-[2/1] bg-background border border-border rounded flex items-center justify-center hover-lift"
              >
                <span className="text-muted-foreground font-display text-sm uppercase tracking-wider">
                  Sponsor Logo
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-circuit opacity-10" />
        <div className="container relative px-4">
          <SectionTitle
            subtitle="Benefits"
            title="Why Sponsor Us"
            description="Partnering with our team offers unique opportunities for visibility and talent acquisition."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whySponsor.map((item) => (
              <div key={item.title} className="p-6 bg-card border border-border rounded hover-lift">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <SectionTitle
            subtitle="Packages"
            title="Sponsorship Tiers"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className="p-6 bg-background border border-border rounded hover-lift relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`} />
                <h3 className="font-display text-xl font-bold mb-1">{tier.name}</h3>
                <div className="text-primary font-display text-2xl font-bold mb-4">{tier.price}</div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="text-muted-foreground font-body text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="container relative px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <HandshakeIcon className="w-16 h-16 text-primary mx-auto" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Become a Partner
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Interested in sponsoring our team? We'd love to discuss partnership 
              opportunities and create a custom package that meets your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sponsors@fsaeev.com">
                <Button variant="hero" size="lg">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
