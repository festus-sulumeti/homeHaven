import { Search, Calendar, Key } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Find Your Home",
    description: "Browse through our extensive collection of verified properties using smart filters",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Schedule Visit",
    description: "Book a convenient time to tour your favorite properties with our expert agents",
  },
  {
    icon: Key,
    number: "03",
    title: "Move In",
    description: "Complete paperwork seamlessly and get the keys to your dream home",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to find and secure your dream home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-border" style={{ width: "calc(100% - 120px)", marginLeft: "60px" }} />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="h-24 w-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto shadow-elegant relative z-10">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;