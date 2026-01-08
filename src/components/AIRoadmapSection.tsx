import { Card } from '@/components/ui/card';
import { Cpu, Network, Sparkles, Bot, Rocket } from 'lucide-react';

export default function AIRoadmapSection() {
  const phases = [
    {
      year: '2026',
      phase: 'Phase 1',
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Foundation',
      items: [
        'Core AI Engine',
        'Address Behavior Analysis',
        'Smart Distribution System',
        'Bot Protection',
      ],
      color: 'border-accent',
    },
    {
      year: '2027',
      phase: 'Phase 2',
      icon: <Network className="w-8 h-8" />,
      title: 'AI On-Chain Integration',
      items: [
        'Fully Autonomous Distribution',
        'Predictive Analytics',
        'Smart Reputation System',
        'Automatic Fraud Detection',
      ],
      color: 'border-accent-pink',
    },
    {
      year: '2028',
      phase: 'Phase 3',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Meme Generator',
      items: [
        'Smart Content Creation',
        'Trend Analysis',
        'AI Community Interaction',
        'Dynamic Distribution Optimization',
      ],
      color: 'border-accent-green',
    },
    {
      year: '2029',
      phase: 'Phase 4',
      icon: <Bot className="w-8 h-8" />,
      title: 'DAO Assistant',
      items: [
        'Smart Governance Assistant',
        'Automatic Proposals',
        'Cross-Chain Intelligence',
        'Self-Optimizing System',
      ],
      color: 'border-purple-500',
    },
    {
      year: '2030+',
      phase: 'Phase 5',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Self-Evolution',
      items: [
        'Self-Evolving Protocol',
        'Emergent AI Behaviors',
        'Autonomous Ecosystem',
        'The Unpredictable Future',
      ],
      color: 'border-yellow-500',
    },
  ];

  return (
    <section id="ai" className="py-24 section-glass relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">AI Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A continuous evolution journey from <span className="text-accent font-semibold">2026</span> to <span className="text-accent-pink font-semibold">beyond 2030</span> - 
            AI learns from the community, not the other way around
          </p>
        </div>

        {/* Timeline Image */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-pink/10 blur-3xl" />
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/52de71e3-ed03-4482-a43e-3c97e20e5077.png"
            alt="AI Roadmap Timeline"
            className="w-full h-auto rounded-2xl relative z-10"
          />
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`glass-effect border-2 ${phase.color} rounded-2xl p-8`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center">
                    {phase.icon}
                  </div>
                  <p className="font-heading font-bold text-2xl text-center mt-2 gradient-text">
                    {phase.year}
                  </p>
                  <p className="text-sm text-center text-gray-400">{phase.phase}</p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl mb-4">{phase.title}</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✦</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principle */}
        <div className="mt-16 glass-effect rounded-2xl p-8 text-center">
          <p className="text-2xl font-heading font-bold gradient-text mb-4">
            "AI learns from the community, not the other way around"
          </p>
          <p className="text-lg text-gray-300">
            Every interaction, every transaction, every decision - contributes to the system's evolution
          </p>
        </div>
      </div>
    </section>
  );
}