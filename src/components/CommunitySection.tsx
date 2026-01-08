import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Twitter, MessageCircle, Send, Github } from 'lucide-react';

export default function CommunitySection() {
  const socials = [
    {
      icon: <Twitter className="w-8 h-8" />,
      name: 'Twitter',
      handle: '@PF_Crypto',
      color: 'hover:bg-blue-500/20',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      name: 'Discord',
      handle: 'discord.gg/pf',
      color: 'hover:bg-indigo-500/20',
    },
    {
      icon: <Send className="w-8 h-8" />,
      name: 'Telegram',
      handle: 't.me/pf_official',
      color: 'hover:bg-blue-400/20',
    },
    {
      icon: <Github className="w-8 h-8" />,
      name: 'GitHub',
      handle: 'github.com/pf-crypto',
      color: 'hover:bg-gray-500/20',
    },
  ];

  return (
    <section id="community" className="py-24 section-glass relative">
      <div className="container mx-auto px-6">
        {/* Community Globe Image */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-pink/10 blur-3xl" />
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/40e6da68-25b8-412d-881a-4c6bb511111b.png"
            alt="Global Community Network"
            className="w-full max-w-2xl mx-auto h-auto rounded-2xl relative z-10"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Join The Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Be part of the largest social experiment in crypto history. 
            <span className="text-accent-pink font-semibold"> The community is the beating heart</span> of PF
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 transition-all hover:scale-105 font-heading text-lg px-8 py-6"
            >
              Start Now - Get Airdrop
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-accent/30 bg-transparent hover:bg-accent/10 backdrop-blur-sm font-heading text-lg px-8 py-6"
            >
              Read Documentation
            </Button>
          </div>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socials.map((social, index) => (
            <div
              key={index}
              className={`card-glass rounded-xl p-6 text-center cursor-pointer ${social.color}`}
            >
              <div className="flex justify-center mb-4 text-accent">{social.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-2">{social.name}</h3>
              <p className="text-gray-400 font-mono text-sm">{social.handle}</p>
            </div>
          ))}
        </div>

        {/* Meme Culture Image */}
        <div className="glass-effect rounded-2xl p-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-pink/10 blur-3xl" />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/90d8588b-cf8f-42fa-8aaf-24d7bded01eb.png"
              alt="Meme Culture"
              className="w-full max-w-xl mx-auto h-auto rounded-xl mb-6 relative z-10"
            />
          </div>
          <h3 className="font-heading font-bold text-2xl mb-4 gradient-text">
            Meme Culture Meets AI Intelligence
          </h3>
          <p className="text-lg text-gray-300">
            We're not just a crypto project - we're a digital cultural movement
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text mb-2">100K+</p>
            <p className="text-gray-400">Community Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text mb-2">50+</p>
            <p className="text-gray-400">Countries Worldwide</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text mb-2">24/7</p>
            <p className="text-gray-400">Community Support</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text mb-2">∞</p>
            <p className="text-gray-400">Infinite Possibilities</p>
          </div>
        </div>
      </div>
    </section>
  );
}