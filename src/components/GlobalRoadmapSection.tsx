import { Card } from '@/components/ui/card';
import { Rocket, Sprout, Brain, Globe, Dna } from 'lucide-react';

export default function GlobalRoadmapSection() {
  const phases = [
    {
      phase: 'Phase 0',
      title: 'Genesis',
      period: 'Now → Launch',
      icon: <Rocket className="w-10 h-10" />,
      color: 'border-accent',
      goals: [
        'Brand Reveal & Community Seeding',
        'Token Launch & Liquidity Deployment',
        'Daily Airdrop Begins',
        'Organic Growth (No Heavy Marketing)',
      ],
      tech: ['Smart Contract Deployment', 'Initial Distribution System'],
      community: ['Early Adopter Program', 'Community Guidelines'],
    },
    {
      phase: 'Phase 1',
      title: 'Living Meme',
      period: '2026',
      icon: <Sprout className="w-10 h-10" />,
      color: 'border-accent-pink',
      goals: [
        'Community Expansion Worldwide',
        'Airdrop Optimization & Refinement',
        'Governance v1 Launch',
        'AI Research Funding Begins',
        'Meme-to-Earn Experiments',
      ],
      tech: ['Enhanced Distribution Algorithm', 'Basic AI Analytics'],
      community: ['DAO Formation', 'Community Proposals'],
    },
    {
      phase: 'Phase 2',
      title: 'AI Awakening',
      period: '2027',
      icon: <Brain className="w-10 h-10" />,
      color: 'border-accent-green',
      goals: [
        'AI Engine v1 Deployment',
        'AI-Powered Airdrop Optimization',
        'On-Chain Behavior Analysis',
        'AI DAO Assistant Launch',
        'PF Starts "Thinking"',
      ],
      tech: ['AI Integration Layer', 'Machine Learning Models'],
      community: ['AI-Assisted Governance', 'Smart Proposals'],
    },
    {
      phase: 'Phase 3',
      title: 'Global Intelligence',
      period: '2028',
      icon: <Globe className="w-10 h-10" />,
      color: 'border-purple-500',
      goals: [
        'Cross-Chain Presence',
        'AI Agents Using PF',
        'Developer SDK Release',
        'Ecosystem Grants Program',
        'PF as AI-Native Token',
      ],
      tech: ['Multi-Chain Architecture', 'Developer Tools'],
      community: ['Global Partnerships', 'Ecosystem Expansion'],
    },
    {
      phase: 'Phase 4',
      title: 'Self-Evolving Protocol',
      period: '2029+',
      icon: <Dna className="w-10 h-10" />,
      color: 'border-yellow-500',
      goals: [
        'Autonomous AI Governance',
        'Dynamic Token Distribution',
        'AI-Controlled Economic Parameters',
        'PF as Digital Lifeform',
        'Beyond Human Control',
      ],
      tech: ['Self-Modifying Code', 'Emergent Behaviors'],
      community: ['Symbiotic Relationship', 'Co-Evolution'],
    },
  ];

  const survivalFactors = [
    {
      title: 'Bear Market Resilience',
      description: 'Community-first model ensures survival through downturns',
    },
    {
      title: 'Bull Market Amplification',
      description: 'Viral meme nature captures upside momentum',
    },
    {
      title: 'Technology Moat',
      description: 'AI development creates increasing competitive advantage',
    },
    {
      title: 'Cultural Relevance',
      description: 'Meme culture ensures perpetual relevance and engagement',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Global Roadmap: 2026 → ∞</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey from <span className="text-accent-pink font-semibold">meme to intelligence</span>, 
            from <span className="text-accent font-semibold">token to digital species</span>
          </p>
        </div>

        {/* Phase Cards */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`glass-effect border-2 ${phase.color} rounded-2xl p-8`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Phase Header */}
                <div className="lg:w-1/4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                      {phase.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{phase.phase}</p>
                      <h3 className="font-heading font-bold text-2xl gradient-text">{phase.title}</h3>
                      <p className="text-sm text-gray-500">{phase.period}</p>
                    </div>
                  </div>
                </div>

                {/* Phase Content */}
                <div className="lg:w-3/4 grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent-pink">Goals</h4>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">→</span>
                          <span className="text-gray-400 text-sm">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent-green">Tech</h4>
                    <ul className="space-y-2">
                      {phase.tech.map((tech, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-green mt-1">⚡</span>
                          <span className="text-gray-400 text-sm">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-3 text-purple-500">Community</h4>
                    <ul className="space-y-2">
                      {phase.community.map((comm, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">★</span>
                          <span className="text-gray-400 text-sm">{comm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Survival Factors */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center gradient-text">
            Why PF Survives Bear & Bull Markets
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {survivalFactors.map((factor, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6"
              >
                <h4 className="font-heading font-semibold text-xl mb-3 gradient-text">{factor.title}</h4>
                <p className="text-gray-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl mb-6 gradient-text">Key Risks</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">⚠</span>
                <span className="text-gray-400">Regulatory uncertainty in crypto space</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">⚠</span>
                <span className="text-gray-400">AI development complexity and timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">⚠</span>
                <span className="text-gray-400">Market volatility and sentiment shifts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">⚠</span>
                <span className="text-gray-400">Competition from other projects</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl mb-6 gradient-text">Mitigations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-gray-400">Decentralized structure reduces regulatory risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-gray-400">Phased roadmap allows for adaptive development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-gray-400">Community ownership ensures long-term alignment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-green mt-1">✓</span>
                <span className="text-gray-400">Unique positioning creates defensible moat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final Vision */}
        <div className="mt-16 text-center">
          <p className="text-3xl font-heading font-bold gradient-text mb-4">
            The Journey Never Ends
          </p>
          <p className="text-xl text-gray-300 mb-6">
            PF is not a destination. It's an eternal evolution.
          </p>
          <p className="text-lg text-gray-400">
            By 2030+, PF will no longer need hype. It will simply exist, evolve, and thrive.
          </p>
        </div>
      </div>
    </section>
  );
}