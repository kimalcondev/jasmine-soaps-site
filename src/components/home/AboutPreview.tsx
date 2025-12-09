import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Over 20 years of industry experience",
  "State-of-the-art manufacturing facility",
  "Eco-friendly and biodegradable products",
  "Strict quality control processes",
  "Competitive pricing for bulk orders",
  "Fast and reliable delivery across Kenya",
];

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <div className="aspect-[4/3] bg-hero-gradient flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="w-24 h-24 rounded-full bg-jasmine-gold/20 flex items-center justify-center mx-auto mb-6">
                    <span className="font-display text-4xl font-bold text-jasmine-gold">20+</span>
                  </div>
                  <p className="text-xl font-medium">Years of Excellence</p>
                  <p className="text-primary-foreground/70 mt-2">in Chemical Manufacturing</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="slide-in-right">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Our Company
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Crafting Quality Since 2004
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Jasmine Soaps & Detergents Limited is a leading manufacturer of premium
              cleaning products in East Africa. We combine traditional expertise with
              modern technology to create products that are effective, affordable,
              and environmentally responsible.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg">
              <Link to="/about">
                More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
