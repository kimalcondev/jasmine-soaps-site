import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble w-40 h-40 -top-10 -left-10 opacity-30" />
        <div className="bubble w-24 h-24 top-1/2 right-10 opacity-20" style={{ animationDelay: "1s" }} />
        <div className="bubble w-32 h-32 -bottom-10 left-1/3 opacity-25" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Cleaning Experience?
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today for custom quotes, bulk orders,
            or to learn more about our products and services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+254700000000">
                <Phone size={20} />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
