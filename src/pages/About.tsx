import Layout from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Award, Users, Leaf, Factory } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in all our products through rigorous quality control.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Our commitment to eco-friendly practices protects the environment for future generations.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We prioritize customer satisfaction and build lasting relationships through trust.",
  },
  {
    icon: Factory,
    title: "Innovation",
    description: "Continuous research and development keeps us at the forefront of the industry.",
  },
];

const milestones = [
  { year: "2004", event: "Company founded in Nairobi" },
  { year: "2008", event: "Expanded to industrial cleaning products" },
  { year: "2012", event: "Achieved ISO 9001 certification" },
  { year: "2016", event: "Opened new manufacturing facility" },
  { year: "2020", event: "Launched eco-friendly product line" },
  { year: "2024", event: "Celebrating 20 years of excellence" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bubble w-20 h-20 top-20 right-[20%] opacity-20" />
          <div className="bubble w-32 h-32 bottom-10 left-[10%] opacity-15" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Jasmine Soaps & Detergents
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              For over two decades, we have been Kenya's trusted partner in delivering
              premium quality cleaning solutions for homes and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                A Legacy of Clean Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2004, Jasmine Soaps & Detergents Limited began as a small
                  family business with a simple mission: to provide high-quality, affordable
                  cleaning products to Kenyan households.
                </p>
                <p>
                  Over the years, we have grown into one of East Africa's leading chemical
                  manufacturers, serving thousands of customers ranging from individual
                  households to large industrial clients.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility in Nairobi combines traditional
                  craftsmanship with modern technology, allowing us to produce products that
                  meet international quality standards while remaining accessible to all.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Our Journey
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">
                          {milestone.year.slice(-2)}
                        </span>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm text-accent font-medium">{milestone.year}</p>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To manufacture and deliver premium quality cleaning products that enhance
                hygiene and cleanliness in homes and industries, while maintaining our
                commitment to environmental sustainability and customer satisfaction.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading manufacturer of eco-friendly cleaning products in Africa,
                recognized for innovation, quality, and our positive impact on communities
                and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make and every product we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-card shadow-soft border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
