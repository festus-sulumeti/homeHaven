import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroHouse from "@/assets/hero-house.jpg";
import NavbarPage from "./Navbar";

const Hero = () => {
  return (

    <>
        <NavbarPage />
        <section className="min-h-screen pt-32 pb-16 px-6 lg:px-12">
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Gateway to
                    <br />
                    <span className="text-foreground">Dream Homes</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                    Discover a curated collection of dream homes at your fingertips,
                    simplified and personalized.
                </p>
                </div>

                <div className="flex flex-wrap gap-4">
                <Button size="lg">
                    Discover Now
                </Button>
                <Button variant="outline" size="lg">
                    <Play className="h-5 w-5 mr-2 fill-current" />
                    Watch Demo
                </Button>
                </div>
            </div>

            <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-hover">
                <img
                    src={heroHouse}
                    alt="Modern luxury dream home"
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>
            </div>

        
        </div>
        </section>
    
    </>

    
  );
};

export default Hero;
