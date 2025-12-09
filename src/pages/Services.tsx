import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Droplets,
  Factory,
  Sparkles,
  Package,
  Beaker,
  Truck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Liquid Detergents",
    description:
      "Our premium liquid detergents are formulated to deliver powerful cleaning action while being gentle on fabrics and the environment.",
    features: [
      "Multi-purpose cleaning",
      "Concentrated formulas",
      "Fresh fragrances",
      "Biodegradable ingredients",
    ],
  },
  {
    icon: Sparkles,
    title: "Bar & Hand Soaps",
    description:
      "Gentle yet effective soaps for personal hygiene, crafted with quality ingredients that nourish and protect your skin.",
    features: [
      "Moisturizing formulas",
      "Antibacterial options",
      "Natural ingredients",
      "Various fragrances",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Cleaners",
    description:
      "Heavy-duty cleaning solutions designed to tackle the toughest cleaning challenges in industrial and commercial settings.",
    features: [
      "Degreasing agents",
      "Floor cleaners",
      "Sanitizers",
      "Descaling solutions",
    ],
  },
  {
    icon: Beaker,
    title: "Chemical Manufacturing",
    description:
      "We manufacture a wide range of chemical compounds for various industrial applications with strict quality control.",
    features: [
      "Custom formulations",
      "Bulk production",
      "Quality testing",
      "Technical support",
    ],
  },
  {
    icon: Package,
    title: "Private Label Services",
    description:
      "Partner with us to create your own branded cleaning products. We handle manufacturing while you focus on marketing.",
    features: [
      "Custom branding",
      "Flexible quantities",
      "Quality assurance",
      "Market-ready products",
    ],
  },
  {
    icon: Truck,
    title: "Distribution & Logistics",
    description:
      "Reliable delivery services across Kenya and East Africa. We ensure your products arrive safely and on time.",
    features: [
      "Nationwide delivery",
      "Bulk shipping",
      "Tracking available",
      "Safe handling",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bubble w-24 h-24 top-10 left-[10%] opacity-20" />
          <div className="bubble w-16 h-16 bottom-10 right-[15%] opacity-15" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
              <Sparkles size={16} className="text-jasmine-gold" />
              Complete Cleaning Solutions
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Services & Products
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              From household essentials to industrial-grade cleaners, we offer a comprehensive
              range of products and services to meet all your cleaning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon
                    size={32}
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We can develop tailored cleaning products to meet your specific requirements.
            Get in touch with our team to discuss your needs.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
