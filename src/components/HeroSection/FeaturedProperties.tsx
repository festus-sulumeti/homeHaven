import { MapPin, BedDouble, Bath, Square } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const properties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    location: "Mercy Njeri, Nakuru",
    price: "$8,500",
    period: "month",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    tag: "Featured",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Kiamunyi, Nakuru",
    price: "$12,000",
    period: "month",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tag: "New",
  },
  {
    id: 3,
    title: "Coastal Retreat",
    location: "Mercy Njeri, Nakuru",
    price: "$15,000",
    period: "month",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    tag: "Premium",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked luxury homes for discerning buyers
            </p>
          </div>
          <Button variant="outline" size="lg" className="hidden md:flex">
            View All Properties
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className="group overflow-hidden bg-card border-border hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {property.tag}
                </Badge>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">{property.price}</span>
                    <span className="text-muted-foreground">/{property.period}</span>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" size="lg" className="w-full">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
