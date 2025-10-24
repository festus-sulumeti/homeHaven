import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold tracking-tight">
           HomeHaven 
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#properties" className="text-foreground hover:text-primary transition-colors">
              Properties
            </a>
            <a href="#blogs" className="text-foreground hover:text-primary transition-colors">
              Blogs
            </a>
          </div>
          
          <Button size="default">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
