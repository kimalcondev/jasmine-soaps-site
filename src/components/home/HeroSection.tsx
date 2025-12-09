import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cleaning products and soap manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Decorative Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble w-20 h-20 top-20 left-[10%]" style={{ animationDelay: "0s" }} />
        <div className="bubble w-14 h-14 top-40 right-[15%]" style={{ animationDelay: "1s" }} />
        <div className="bubble w-32 h-32 bottom-32 left-[20%]" style={{ animationDelay: "2s" }} />
        <div className="bubble w-16 h-16 bottom-20 right-[25%]" style={{ animationDelay: "0.5s" }} />
        <div className="bubble w-24 h-24 top-1/2 right-[8%]" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
            <Sparkles size={16} className="text-jasmine-gold" />
            Leading Chemical Manufacturer in Kenya
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Premium Quality{" "}
            <span className="text-gradient">Soaps & Detergents</span>{" "}
            for Every Need
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-2xl">
            Trusted by thousands of households and businesses across East Africa.
            We manufacture eco-friendly cleaning solutions that deliver exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore Our Products
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jasmine-gold/20 flex items-center justify-center">
                <Shield size={20} className="text-jasmine-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">ISO Certified</p>
                <p className="text-xs text-primary-foreground/70">Quality Assured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jasmine-gold/20 flex items-center justify-center">
                <Leaf size={20} className="text-jasmine-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Eco-Friendly</p>
                <p className="text-xs text-primary-foreground/70">Sustainable Products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jasmine-gold/20 flex items-center justify-center">
                <Sparkles size={20} className="text-jasmine-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">20+ Years</p>
                <p className="text-xs text-primary-foreground/70">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
