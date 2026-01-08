import { Card } from '@/components/ui/card';
import { Activity, Clock, MessageSquare, Shield } from 'lucide-react';

export default function AirdropSection() {
  const criteria = [
    {
      icon: <Activity className="w-10 h-10 text-accent" />,
      title: 'Activity Score',
      percentage: '40%',
      description: 'Real on-chain transactions, actual protocol interaction',
    },
    {
      icon: <Clock className="w-10 h-10 text-accent-pink" />,
      title: 'Holding Duration',
      percentage: '30%',
      description: 'Rewards for long-term commitment, hold longer earn more',
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-accent-green" />,
      title: 'Community Engagement',
      percentage: '20%',
      description: 'Governance participation, voting, and ecosystem contribution',
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-500" />,
      title: 'Anti-Bot Protection',
      percentage: '10%',
      description: 'AI detects and prevents Sybil attacks and fake addresses',
    },
  ];

  return (
    <section id="airdrop" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Daily Airdrop System</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The largest fair airdrop in crypto history - <span className="text-accent-pink font-semibold">60% of supply</span> distributed daily to the community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-pink/10 blur-3xl" />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/9bfd7a0d-8fbf-4f81-8c63-842b8f7575b9.png"
              alt="Daily Airdrop Distribution"
              className="w-full h-auto rounded-2xl relative z-10"
            />
          </div>

          {/* Criteria Cards */}
          <div className="space-y-6 order-1 lg:order-2">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading font-semibold text-xl">{item.title}</h3>
                      <span className="font-heading font-bold text-2xl gradient-text">{item.percentage}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution Stats */}
        <div className="glass-effect rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold gradient-text mb-2">~23M</p>
              <p className="text-lg text-gray-300 mb-1">Tokens Daily (Initial)</p>
              <p className="text-sm text-gray-500">Decreases gradually over 5 years</p>
            </div>
            <div>
              <p className="text-5xl font-bold gradient-text mb-2">42B</p>
              <p className="text-lg text-gray-300 mb-1">Total Airdrop</p>
              <p className="text-sm text-gray-500">60% of total supply</p>
            </div>
            <div>
              <p className="text-5xl font-bold gradient-text mb-2">100%</p>
              <p className="text-lg text-gray-300 mb-1">Fair & Transparent</p>
              <p className="text-sm text-gray-500">No manipulation or favoritism</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 text-center">
          <h3 className="font-heading font-bold text-3xl mb-8 gradient-text">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-accent">1</span>
              </div>
              <h4 className="font-heading font-semibold text-xl mb-2">Be Active</h4>
              <p className="text-gray-400">Make real transactions, interact with the protocol</p>
            </div>
            <div className="card-glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-accent-pink/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-accent-pink">2</span>
              </div>
              <h4 className="font-heading font-semibold text-xl mb-2">Hold Tokens</h4>
              <p className="text-gray-400">The longer you hold, the more you earn</p>
            </div>
            <div className="card-glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-accent-green">3</span>
              </div>
              <h4 className="font-heading font-semibold text-xl mb-2">Earn Daily</h4>
              <p className="text-gray-400">Automatic daily distribution based on your activity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}