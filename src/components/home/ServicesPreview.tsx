import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Factory, Sparkles, Package, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Liquid Detergents",
    description: "High-performance liquid cleaning solutions for laundry, dishes, and general cleaning purposes.",
  },
  {
    icon: Factory,
    title: "Industrial Cleaners",
    description: "Heavy-duty cleaning products designed for factories, workshops, and commercial establishments.",
  },
  {
    icon: Sparkles,
    title: "Hand & Body Soaps",
    description: "Gentle yet effective soaps for personal hygiene, available in bars and liquid formulations.",
  },
  {
    icon: Package,
    title: "Custom Formulations",
    description: "Tailored cleaning solutions to meet your specific industrial or commercial requirements.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Premium Products & Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From household cleaning essentials to industrial-grade solutions,
            we deliver quality products that meet the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon
                  size={28}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
