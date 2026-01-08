import { Card } from '@/components/ui/card';
import { Trophy, Target, TrendingUp, Lock, Zap, Globe } from 'lucide-react';

export default function DifferentiationSection() {
  const advantages = [
    {
      icon: <Trophy className="w-12 h-12 text-accent" />,
      title: 'Impossible to Replicate',
      description: 'Daily airdrop history creates a competitive advantage that cannot be copied - time is the barrier',
    },
    {
      icon: <Target className="w-12 h-12 text-accent-pink" />,
      title: 'Self-Funded AI Development',
      description: 'AI development funded by tokenomics, not VC money or external investors',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent-green" />,
      title: 'Community Owns Majority',
      description: '60% to community from day one - true decentralization, not empty slogans',
    },
    {
      icon: <Lock className="w-12 h-12 text-purple-500" />,
      title: 'Growing Technical Moat',
      description: 'As the system evolves, it becomes harder for competitors to catch up',
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Culture + Technology',
      description: 'Unique hybrid positioning combining viral meme power with serious technical investment',
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: 'Time-Based Evolution',
      description: 'The project gets smarter and stronger over time - investment in the future',
    },
  ];

  return (
    <section className="py-24 section-glass relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Why PF Cannot Be Replicated</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Seven strengths that make PF <span className="text-accent-pink font-semibold">the strongest of its era</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-6"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass-effect rounded-2xl p-8 overflow-x-auto">
          <h3 className="font-heading font-bold text-2xl mb-6 text-center gradient-text">
            Comparison with Traditional Projects
          </h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-accent/20">
                <th className="py-4 px-4 font-heading text-left">Feature</th>
                <th className="py-4 px-4 font-heading text-accent">PF</th>
                <th className="py-4 px-4 font-heading text-gray-500">Traditional Projects</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-4">Community Distribution</td>
                <td className="py-4 px-4 text-accent font-bold">60%</td>
                <td className="py-4 px-4 text-gray-500">10-20%</td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-4">Team Allocation</td>
                <td className="py-4 px-4 text-accent font-bold">3%</td>
                <td className="py-4 px-4 text-gray-500">20-40%</td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-4">AI Investment</td>
                <td className="py-4 px-4 text-accent font-bold">12% ($8.4B)</td>
                <td className="py-4 px-4 text-gray-500">0%</td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-4">Distribution Period</td>
                <td className="py-4 px-4 text-accent font-bold">5+ years</td>
                <td className="py-4 px-4 text-gray-500">Weeks/Months</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Fair Launch Score</td>
                <td className="py-4 px-4 text-accent font-bold">97/100</td>
                <td className="py-4 px-4 text-gray-500">30-50/100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}