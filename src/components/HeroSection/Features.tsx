import { Shield, TrendingUp, HeadphonesIcon, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Trusted & Verified",
    description: "All properties are thoroughly verified for authenticity and legal compliance",
  },
  {
    icon: TrendingUp,
    title: "Best Market Prices",
    description: "Competitive pricing with transparent market analysis and value assessment",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist you at every step",
  },
  {
    icon: Home,
    title: "Wide Selection",
    description: "Curated collection of premium properties across multiple locations",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose HomeHaven?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide exceptional service and expertise to make your home buying journey seamless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
