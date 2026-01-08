import { Card } from '@/components/ui/card';
import { Code, Lock, Shield, Zap, RefreshCw, Users } from 'lucide-react';

export default function SmartContractSection() {
  const contracts = [
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: 'Token Contract',
      features: [
        'ERC-20 Compatible',
        '70B Total Supply (Mint Once)',
        'No Future Minting',
        'Transparent & Auditable',
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-pink" />,
      title: 'Airdrop Engine',
      features: [
        'Separate Contract Architecture',
        'Daily Epoch-Based Distribution',
        'Activity Score Calculation',
        'No Manual Distribution',
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-accent-green" />,
      title: 'Anti-Bot Protection',
      features: [
        'Smart Limits & Cooldowns',
        'AI Signal Integration',
        'DAO-Controlled Blacklist',
        'Sybil Attack Prevention',
      ],
    },
    {
      icon: <Lock className="w-10 h-10 text-purple-500" />,
      title: 'Team Vesting',
      features: [
        'Long-Term Lock (4 Years)',
        'Cliff + Linear Vesting',
        'No Early Unstake',
        'Public Transparency',
      ],
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-yellow-500" />,
      title: 'Liquidity Lock',
      features: [
        'LP Tokens Locked',
        'Time-Based Unlock',
        'Emergency DAO Vote Only',
        'Price Stability Mechanism',
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: 'Governance',
      features: [
        'DAO-Controlled Upgrades',
        'Community Proposals',
        'Transparent Voting',
        'Decentralized Decision Making',
      ],
    },
  ];

  const securityPrinciples = [
    {
      title: 'Immutability',
      description: 'Core logic cannot be changed by anyone, including team',
    },
    {
      title: 'Transparency',
      description: 'All contract code is open-source and verified',
    },
    {
      title: 'Decentralization',
      description: 'No single point of failure or control',
    },
    {
      title: 'Upgradeability',
      description: 'Only through DAO governance, never unilateral',
    },
  ];

  return (
    <section className="py-24 section-glass relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Smart Contract Architecture</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built on <span className="text-accent-pink font-semibold">battle-tested principles</span>, 
            designed for <span className="text-accent font-semibold">long-term sustainability</span> and security
          </p>
        </div>

        {/* Contract Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-6"
            >
              <div className="mb-4">{contract.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-4">{contract.title}</h3>
              <ul className="space-y-2">
                {contract.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture Flow */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center gradient-text">Contract Flow Logic</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-accent">1</span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg mb-2">User Interaction</h4>
                <p className="text-gray-400">User performs on-chain activities (transactions, holding, governance participation)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-accent-pink">2</span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg mb-2">Activity Tracking</h4>
                <p className="text-gray-400">Smart contracts record and calculate activity scores automatically</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-accent-green">3</span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg mb-2">AI Analysis</h4>
                <p className="text-gray-400">AI layer analyzes patterns, detects bots, optimizes distribution</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-purple-500">4</span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg mb-2">Daily Distribution</h4>
                <p className="text-gray-400">Airdrop engine distributes tokens based on calculated scores</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-yellow-500">5</span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg mb-2">Governance Oversight</h4>
                <p className="text-gray-400">Community DAO monitors and can propose improvements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Philosophy */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center gradient-text">Security Philosophy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPrinciples.map((principle, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6 text-center"
              >
                <h4 className="font-heading font-semibold text-lg mb-3 gradient-text">{principle.title}</h4>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Future-Proof */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading font-bold text-3xl mb-6 gradient-text">Why PF Contracts Are Future-Proof</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">0</p>
              <p className="text-gray-300">Centralized Control Points</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">100%</p>
              <p className="text-gray-300">Open Source & Verified</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">∞</p>
              <p className="text-gray-300">Designed for Longevity</p>
            </div>
          </div>
          <p className="text-lg text-gray-400 mt-8">
            Built to last decades, not months. PF's smart contracts are designed for the long game.
          </p>
        </div>
      </div>
    </section>
  );
}