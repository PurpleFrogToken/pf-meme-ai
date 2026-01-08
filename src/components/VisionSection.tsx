import { Card } from '@/components/ui/card';
import { Brain, Zap, Users, Shield } from 'lucide-react';

export default function VisionSection() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-accent" />,
      title: 'Advanced AI Intelligence',
      description: 'AI system that learns from the community and evolves autonomously, analyzing behavior and distributing rewards fairly',
    },
    {
      icon: <Zap className="w-12 h-12 text-accent-pink" />,
      title: 'Viral Meme Power',
      description: 'Conscious meme culture combining entertainment with long-term technical investment',
    },
    {
      icon: <Users className="w-12 h-12 text-accent-green" />,
      title: 'True Fair Distribution',
      description: '60% to community via daily airdrop, real decentralization without team control',
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: 'Anti-Manipulation Protection',
      description: 'Smart mechanisms to prevent bots and Sybil attacks, only active addresses deserve rewards',
    },
  ];

  return (
    <section id="vision" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Our Revolutionary Vision</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            PF isn't just a speculation token, but a <span className="text-accent-pink font-semibold">living digital entity</span> that evolves over time.
            We're building a <span className="text-accent font-semibold">new economic ecosystem</span> merging memes, AI, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-6"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="mt-16 glass-effect rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-4">
            "A Token From The Future"
          </blockquote>
          <p className="text-lg text-gray-300">
            Social Experiment • New Digital Economy • Conscious Meme + Smart AI
          </p>
        </div>
      </div>
    </section>
  );
}