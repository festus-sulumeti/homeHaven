import { Play } from "lucide-react";
import { MapPin, Home, DollarSign, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import heroHouse from "@/assets/hero-house.jpg";
import NavbarPage from "./Navbar";
import Features from "./Features";
import FooterSection from "./Footer";


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

            {/* Search Bar */}
            <div className="mt-16">
              <div className="bg-card rounded-3xl shadow-elegant p-6 flex flex-col md:flex-row items-stretch gap-4">
                <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-background rounded-2xl">
                    <MapPin className="text-muted-foreground h-5 w-5" />
                    <Select defaultValue="los-angeles">
                    <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
                        <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                        <SelectItem value="los-angeles">Kiamunyi, Nakuru</SelectItem>
                        <SelectItem value="new-york">Mercy Njeri, Nakuru</SelectItem>
                        <SelectItem value="miami">Oloika, Nakuru</SelectItem>
                        <SelectItem value="chicago">Kwa Maziwa, Nakuru</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-background rounded-2xl">
                    <Home className="text-muted-foreground h-5 w-5" />
                    <Select defaultValue="apartment">
                    <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
                        <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                        <SelectItem value="apartment">Classic Apartment</SelectItem>
                        <SelectItem value="house">Modern House</SelectItem>
                        <SelectItem value="villa">Luxury Villa</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-background rounded-2xl">
                    <DollarSign className="text-muted-foreground h-5 w-5" />
                    <Select defaultValue="6k-12k">
                    <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
                        <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                        <SelectItem value="6k-12k">$60 - $120 / month</SelectItem>
                        <SelectItem value="3k-6k">$300 - $600 / month</SelectItem>
                        <SelectItem value="12k-20k">$1200 - $2000 / month</SelectItem>
                        <SelectItem value="20k+">$2000+ / month</SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <Button size="icon" className="h-14 w-14 shrink-0">
                    <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
        
        </div>
        </section>
        <Features />

        <FooterSection />
    
    </>

    
  );
};

export default Hero;
