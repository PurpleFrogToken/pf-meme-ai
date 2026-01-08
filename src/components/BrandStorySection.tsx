import { Card } from '@/components/ui/card';
import { Eye, Zap, Shield, Sparkles, Target, Globe } from 'lucide-react';

export default function BrandStorySection() {
  const brandPillars = [
    {
      icon: <Eye className="w-10 h-10 text-accent" />,
      title: 'Digital Justice',
      description: 'Breaking old paradigms of centralized control and unfair distribution',
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-pink" />,
      title: 'Collective Intelligence',
      description: 'The wisdom of the crowd amplified by AI, creating unprecedented synergy',
    },
    {
      icon: <Shield className="w-10 h-10 text-accent-green" />,
      title: 'Greed Resistance',
      description: 'Built-in mechanisms that prevent exploitation and promote fairness',
    },
  ];

  const mascotTraits = [
    'Observes silently, learns constantly',
    'Not just funny - conscious and aware',
    'Evolves with every interaction',
    'The meme is the message, laughter is the weapon',
  ];

  const taglines = [
    'The Meme That Thinks',
    'Born As a Meme. Evolved As Intelligence',
    'Not Just a Token. A Digital Species',
    'PF Is Watching',
  ];

  return (
    <section id="brand" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">The Legendary Brand</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            PF is not just another meme coin - it's a <span className="text-accent-pink font-semibold">digital cultural movement</span>, 
            a mythical entity that doesn't ask for attention, it <span className="text-accent font-semibold">commands it</span>
          </p>
        </div>

        {/* Brand DNA */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center gradient-text">Brand DNA</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-semibold text-xl mb-4 text-accent-pink">Personality</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-accent mt-1" />
                  <span className="text-gray-300">Intelligent & Strategic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-accent-pink mt-1" />
                  <span className="text-gray-300">Sarcastic & Witty</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-accent-green mt-1" />
                  <span className="text-gray-300">Futuristic & Visionary</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-1" />
                  <span className="text-gray-300">Conscious & Self-Aware</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-xl mb-4 text-accent-pink">The Mascot</h4>
              <p className="text-gray-300 mb-4">A sentient meme entity that:</p>
              <ul className="space-y-2">
                {mascotTraits.map((trait, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-accent mt-1" />
                    <span className="text-gray-300">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center gradient-text">Brand Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {brandPillars.map((pillar, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h4 className="font-heading font-semibold text-xl mb-3">{pillar.title}</h4>
                <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Taglines Showcase */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center gradient-text">Brand Voice</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {taglines.map((tagline, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6 text-center"
              >
                <p className="text-2xl font-heading font-bold gradient-text">{tagline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Identity */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-heading font-bold text-3xl mb-6 gradient-text">Visual Identity</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Minimal & Dark</p>
                  <p className="text-sm text-gray-400">Futuristic aesthetic with clean typography</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-accent-pink/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-pink">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Hidden Symbols</p>
                  <p className="text-sm text-gray-400">Easter eggs and secret messages throughout</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-green">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Secret Society Vibe</p>
                  <p className="text-sm text-gray-400">Exclusive feel that draws people in</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-pink/10 blur-3xl" />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/90d8588b-cf8f-42fa-8aaf-24d7bded01eb.png"
              alt="Meme Culture Meets AI"
              className="w-full h-auto rounded-2xl relative z-10"
            />
          </div>
        </div>

        {/* Why Culturally Unstoppable */}
        <div className="glass-effect rounded-2xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center gradient-text">Why PF Is Culturally Unstoppable</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-glass rounded-xl p-6">
              <Globe className="w-10 h-10 text-accent mb-4" />
              <h4 className="font-heading font-semibold text-xl mb-3">Universal Language</h4>
              <p className="text-gray-400">Memes transcend borders, languages, and cultures - PF speaks to everyone</p>
            </div>
            <div className="card-glass rounded-xl p-6">
              <Zap className="w-10 h-10 text-accent-pink mb-4" />
              <h4 className="font-heading font-semibold text-xl mb-3">Viral By Nature</h4>
              <p className="text-gray-400">Built-in virality through meme culture, amplified by AI intelligence</p>
            </div>
            <div className="card-glass rounded-xl p-6">
              <Shield className="w-10 h-10 text-accent-green mb-4" />
              <h4 className="font-heading font-semibold text-xl mb-3">Community-First DNA</h4>
              <p className="text-gray-400">60% to community creates unstoppable grassroots movement</p>
            </div>
            <div className="card-glass rounded-xl p-6">
              <Sparkles className="w-10 h-10 text-purple-500 mb-4" />
              <h4 className="font-heading font-semibold text-xl mb-3">Evolves With Time</h4>
              <p className="text-gray-400">Not static - grows smarter, stronger, more relevant every day</p>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-16 text-center">
          <p className="text-3xl font-heading font-bold gradient-text mb-4">
            PF doesn't promise. PF evolves.
          </p>
          <p className="text-xl text-gray-300">
            Not a movement you join. A species you become part of.
          </p>
        </div>
      </div>
    </section>
  );
}