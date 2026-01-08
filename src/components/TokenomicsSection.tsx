import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function TokenomicsSection() {
  const distribution = [
    {
      name: 'Community Airdrop',
      percentage: 60,
      amount: '42,000,000,000',
      color: 'bg-accent',
      description: 'Continuous daily distribution to active addresses only',
    },
    {
      name: 'Liquidity Pool',
      percentage: 18,
      amount: '12,600,000,000',
      color: 'bg-accent-pink',
      description: 'Long-term liquidity with smart time-lock',
    },
    {
      name: 'AI Development',
      percentage: 12,
      amount: '8,400,000,000',
      color: 'bg-accent-green',
      description: 'Investment in AI Agents & On-chain AI',
    },
    {
      name: 'Ecosystem Reserve',
      percentage: 7,
      amount: '4,900,000,000',
      color: 'bg-purple-500',
      description: 'Partnerships and future products',
    },
    {
      name: 'Team',
      percentage: 3,
      amount: '2,100,000,000',
      color: 'bg-yellow-500',
      description: '4-year time-lock, no dumps',
    },
  ];

  return (
    <section id="tokenomics" className="py-24 section-glass relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Total Supply: <span className="font-mono font-bold text-accent-pink">70,000,000,000 PF</span>
          </p>
          <p className="text-gray-400">(Fixed, no future minting)</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-pink/10 blur-3xl" />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/0833991b-f0ca-4dac-95eb-e4db4dfc1f78.png"
              alt="Tokenomics Distribution"
              className="w-full h-auto rounded-2xl relative z-10"
            />
          </div>

          {/* Distribution Details */}
          <div className="space-y-6">
            {distribution.map((item, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading font-bold text-2xl gradient-text">{item.percentage}%</p>
                  </div>
                </div>
                
                <Progress value={item.percentage} className="h-3 mb-2" />
                
                <p className="font-mono text-sm text-gray-400">
                  {item.amount} PF
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="stats-card rounded-xl p-6 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">97/100</p>
            <p className="text-gray-300">Fair Launch Score</p>
            <p className="text-sm text-gray-500 mt-2">60% to community, 3% to team</p>
          </div>
          <div className="stats-card rounded-xl p-6 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">$8.4B</p>
            <p className="text-gray-300">AI Investment</p>
            <p className="text-sm text-gray-500 mt-2">Equivalent value at scale</p>
          </div>
          <div className="stats-card rounded-xl p-6 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">5+ Years</p>
            <p className="text-gray-300">Distribution Curve</p>
            <p className="text-sm text-gray-500 mt-2">Long-term sustainability</p>
          </div>
        </div>
      </div>
    </section>
  );
}