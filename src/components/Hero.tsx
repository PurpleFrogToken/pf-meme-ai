import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-pink/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left">
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight">
              <span className="gradient-text text-shadow-glow">The Meme That Thinks</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A revolutionary crypto project merging <span className="text-accent-pink font-semibold">meme power</span> with
              <span className="text-accent font-semibold"> advanced AI intelligence</span>
            </p>

            <div className="space-y-4">
              <p className="text-lg text-gray-400">
                70 Billion Tokens • 60% to Community • Self-Evolving Protocol
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="gradient-bg hover:opacity-90 transition-all hover:scale-105 font-heading text-lg px-8 py-6 relative overflow-hidden"
                >
                  Read Whitepaper
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-accent/30 bg-transparent hover:bg-accent/10 backdrop-blur-sm font-heading text-lg px-8 py-6"
                >
                  Join Community
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="card-glass rounded-lg p-4">
                <p className="text-3xl font-bold gradient-text">97/100</p>
                <p className="text-sm text-gray-400">Fair Launch Score</p>
              </div>
              <div className="card-glass rounded-lg p-4">
                <p className="text-3xl font-bold gradient-text">60%</p>
                <p className="text-sm text-gray-400">Community Owned</p>
              </div>
              <div className="card-glass rounded-lg p-4">
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-sm text-gray-400">Years Distribution</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-pink/20 blur-3xl" />
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/76de4598-2c48-4590-a341-c1e1c1e028ce.png"
                  alt="AI Brain Network"
                  className="w-full h-auto rounded-2xl relative z-10 animate-pulse-glow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 rounded-full card-glass flex items-center justify-center">
            <ArrowDown className="text-accent" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}