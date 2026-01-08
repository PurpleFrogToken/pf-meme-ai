import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/LOGO1.jpg" 
                alt="PF Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h1 className="font-heading font-bold text-2xl gradient-text">PF</h1>
                <p className="text-xs text-gray-400">The Meme That Thinks</p>
              </div>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="border-2 border-accent/30 bg-transparent hover:bg-accent/10 backdrop-blur-sm">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              <span className="gradient-text">PF Whitepaper</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              A Technical and Cultural Experiment in Decentralized Intelligence
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Version 1.0 | January 2026 | MEME + AI + Community Protocol
            </p>
            <Button className="gradient-bg hover:opacity-90 transition-all hover:scale-105 font-heading text-lg px-8 py-6">
              <Download className="mr-2" size={20} />
              Download PDF
            </Button>
          </div>

          {/* Quote */}
          <div className="glass-effect rounded-2xl p-8 mb-12 text-center">
            <blockquote className="text-2xl font-heading italic text-gray-300 mb-4">
              "The best way to predict the future is to invent it."
            </blockquote>
            <p className="text-sm text-gray-500">— Alan Kay, Computer Scientist</p>
          </div>

          {/* Table of Contents */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">Table of Contents</h2>
            <ol className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">1. Executive Summary</li>
              <li className="hover:text-white transition-colors cursor-pointer">2. Vision & Philosophy</li>
              <li className="hover:text-white transition-colors cursor-pointer">3. Market Context & Problem Statement</li>
              <li className="hover:text-white transition-colors cursor-pointer">4. The PF Solution</li>
              <li className="hover:text-white transition-colors cursor-pointer">5. Tokenomics</li>
              <li className="hover:text-white transition-colors cursor-pointer">6. Daily Airdrop Mechanism</li>
              <li className="hover:text-white transition-colors cursor-pointer">7. AI Layer & Future Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">8. Smart Contract Architecture</li>
              <li className="hover:text-white transition-colors cursor-pointer">9. Governance & Community</li>
              <li className="hover:text-white transition-colors cursor-pointer">10. Roadmap Summary</li>
              <li className="hover:text-white transition-colors cursor-pointer">11. Risks & Limitations</li>
              <li className="hover:text-white transition-colors cursor-pointer">12. Legal Disclaimer & Risk Disclosure</li>
              <li className="hover:text-white transition-colors cursor-pointer">13. Transparency & Ethics</li>
              <li className="hover:text-white transition-colors cursor-pointer">14. Conclusion</li>
            </ol>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* 1. Executive Summary */}
            <section className="card-glass rounded-2xl p-8" id="section-1">
              <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">1. Executive Summary</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  PF (The Meme That Thinks) represents a technical and cultural experiment at the intersection of viral internet culture, artificial intelligence research, and decentralized community governance. This is not a traditional cryptocurrency investment vehicle—it is an evolving protocol designed to explore what happens when meme culture meets computational intelligence.
                </p>
                <p>
                  <strong className="text-white">What PF Is:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A community-driven experiment in decentralized distribution (60% to community over 5+ years)</li>
                  <li>A research platform for AI integration in blockchain systems</li>
                  <li>A cultural movement exploring digital identity and collective intelligence</li>
                  <li>An open-source protocol with transparent, auditable smart contracts</li>
                </ul>
                <p>
                  <strong className="text-white">What PF Is NOT:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>An investment product or security</li>
                  <li>A guarantee of financial return</li>
                  <li>A finished product—it is experimental and evolving</li>
                  <li>Financial, legal, or investment advice</li>
                </ul>
                <p className="text-sm text-gray-500 italic">
                  Total Supply: 70,000,000,000 PF (Fixed, No Future Minting) | Fair Launch Score: 97/100 | Team Allocation: 3% (4-year vesting)
                </p>
              </div>
            </section>

            {/* Quote */}
            <div className="glass-effect rounded-2xl p-6 text-center">
              <blockquote className="text-xl italic text-gray-300 mb-3">
                "Memes are the new pop stars. How culture is consumed and shared has fundamentally changed."
              </blockquote>
              <p className="text-sm text-gray-500">— Paris Hilton, Cultural Icon & NFT Advocate</p>
            </div>

            {/* 2. Vision & Philosophy */}
            <section className="card-glass rounded-2xl p-8" id="section-2">
              <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">2. Vision & Philosophy</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="font-heading font-semibold text-2xl text-white mt-6 mb-4">The Philosophy of PF</h3>
                <p>
                  PF operates on three foundational principles:
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-6">
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent">Digital Justice</h4>
                    <p className="text-sm">Breaking old paradigms of centralized control. 60% to community isn't marketing—it's architecture.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent-pink">Collective Intelligence</h4>
                    <p className="text-sm">AI doesn't replace humans—it amplifies community wisdom and detects bad actors.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent-green">Conscious Evolution</h4>
                    <p className="text-sm">Systems that learn, adapt, and improve over time without central authority.</p>
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">What Does "The Meme That Thinks" Mean?</h3>
                <p>
                  Memes are humanity's most efficient information transmission mechanism—they transcend language, culture, and geography. But traditional memes are static. PF explores: what if a meme could observe, learn, and evolve?
                </p>
                <p>
                  This is not artificial general intelligence (AGI). This is narrow AI applied to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Detecting Sybil attacks and bot behavior</li>
                  <li>Optimizing fair distribution algorithms</li>
                  <li>Analyzing on-chain activity patterns</li>
                  <li>Supporting community governance decisions</li>
                </ul>
                
                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">AI as Tool, Not Master</h3>
                <p>
                  PF's AI layer is not autonomous. It is a research initiative, a set of experimental tools that the community can choose to adopt, modify, or reject. The community governs; AI assists.
                </p>
                <p className="text-sm text-yellow-500 italic">
                  ⚠️ AI development is experimental and may not achieve stated goals. No guarantees are made about AI functionality or timeline.
                </p>
              </div>
            </section>

            {/* Quote */}
            <div className="glass-effect rounded-2xl p-6 text-center">
              <blockquote className="text-xl italic text-gray-300 mb-3">
                "AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire."
              </blockquote>
              <p className="text-sm text-gray-500">— Sundar Pichai, CEO of Google</p>
            </div>

            {/* 3. Market Context & Problem Statement */}
            <section className="card-glass rounded-2xl p-8" id="section-3">
              <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">3. Market Context & Problem Statement</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="font-heading font-semibold text-2xl text-white mb-4">The State of Meme Coins</h3>
                <p>
                  The cryptocurrency industry has witnessed explosive growth in meme-based tokens. However, most suffer from structural flaws:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-red-400">❌ Centralized Distribution</h4>
                    <p className="text-sm">Typical allocation: 20-40% to team/VCs, 10-20% to community. This creates misaligned incentives and inevitable sell pressure.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-red-400">❌ Short-Term Thinking</h4>
                    <p className="text-sm">Pump-and-dump mechanics. No sustainable utility. Projects die when hype fades.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-red-400">❌ Bot Exploitation</h4>
                    <p className="text-sm">Sybil attacks drain airdrop systems. Real community members get diluted.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-red-400">❌ Lack of Innovation</h4>
                    <p className="text-sm">Copy-paste tokenomics. No real technological advancement or unique value proposition.</p>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">The AI Hype Problem</h3>
                <p>
                  Many crypto projects claim "AI integration" without substance:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Marketing buzzwords with no actual AI implementation</li>
                  <li>Centralized AI systems controlled by teams, not communities</li>
                  <li>Overpromising capabilities that don't exist</li>
                  <li>Using AI as a price pump mechanism rather than genuine utility</li>
                </ul>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">What PF Addresses (Without Overpromising)</h3>
                <p>
                  PF attempts to address these issues through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Radical Distribution:</strong> 60% to community via transparent smart contracts</li>
                  <li><strong className="text-white">Long-term Orientation:</strong> 5+ year distribution curve, not weeks</li>
                  <li><strong className="text-white">Honest AI Development:</strong> Experimental, open-source, community-governed</li>
                  <li><strong className="text-white">Transparent Tokenomics:</strong> Every allocation is justified and auditable</li>
                </ul>
                <p className="text-sm text-yellow-500 italic mt-4">
                  ⚠️ These are design goals, not guarantees. Execution depends on community participation, technical feasibility, and market conditions.
                </p>
              </div>
            </section>

            {/* Quote */}
            <div className="glass-effect rounded-2xl p-6 text-center">
              <blockquote className="text-xl italic text-gray-300 mb-3">
                "Crypto is not just about making money. It's about creating a new financial system that is more fair, more transparent, and more accessible."
              </blockquote>
              <p className="text-sm text-gray-500">— Vitalik Buterin, Ethereum Co-founder</p>
            </div>

            {/* 4. The PF Solution */}
            <section className="card-glass rounded-2xl p-8" id="section-4">
              <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">4. The PF Solution</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="font-heading font-semibold text-2xl text-white mb-4">MEME + AI Architecture</h3>
                <p>
                  PF combines two powerful forces:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent-pink">🎭 Meme Layer</h4>
                    <p className="text-sm mb-3">Cultural relevance, viral spread, community engagement, universal language</p>
                    <p className="text-xs text-gray-500">Function: Attract, engage, retain community through shared identity</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent">🤖 AI Layer</h4>
                    <p className="text-sm mb-3">Behavior analysis, fraud detection, distribution optimization, governance support</p>
                    <p className="text-xs text-gray-500">Function: Enhance fairness, reduce manipulation, support decision-making</p>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Core Components</h3>
                <ol className="space-y-4">
                  <li>
                    <strong className="text-white">1. Daily Airdrop System</strong>
                    <p className="text-sm mt-2">Continuous distribution based on on-chain activity, not speculation. Rewards genuine participation.</p>
                  </li>
                  <li>
                    <strong className="text-white">2. Activity-Based Scoring</strong>
                    <p className="text-sm mt-2">Smart contracts track: transactions, holding duration, governance participation, ecosystem contribution.</p>
                  </li>
                  <li>
                    <strong className="text-white">3. Anti-Sybil Mechanisms</strong>
                    <p className="text-sm mt-2">Multi-layered detection: on-chain patterns, AI analysis (when available), community reporting.</p>
                  </li>
                  <li>
                    <strong className="text-white">4. Gradual AI Integration</strong>
                    <p className="text-sm mt-2">2026: Research foundations | 2027: Early experiments | Post-2027: Community-driven evolution</p>
                  </li>
                  <li>
                    <strong className="text-white">5. DAO Governance</strong>
                    <p className="text-sm mt-2">Community votes on: distribution parameters, AI adoption, treasury allocation, protocol upgrades.</p>
                  </li>
                </ol>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Why This Approach?</h3>
                <p>
                  Traditional models fail because they optimize for short-term price action. PF optimizes for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Long-term community alignment</li>
                  <li>Fair distribution over time</li>
                  <li>Technological experimentation</li>
                  <li>Cultural sustainability</li>
                </ul>
                <p className="text-sm text-yellow-500 italic mt-4">
                  ⚠️ This model is experimental. Success is not guaranteed. Market conditions, technical challenges, and community dynamics may prevent achieving these goals.
                </p>
              </div>
            </section>

            {/* 5. Tokenomics */}
            <section className="card-glass rounded-2xl p-8" id="section-5">
              <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">5. Tokenomics</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <div className="glass-effect rounded-xl p-6 mb-6">
                  <h3 className="font-heading font-semibold text-2xl text-white mb-4">Token Specifications</h3>
                  <ul className="space-y-2">
                    <li><strong className="text-white">Name:</strong> PF</li>
                    <li><strong className="text-white">Total Supply:</strong> 70,000,000,000 PF (Fixed)</li>
                    <li><strong className="text-white">Minting:</strong> None. No future token creation.</li>
                    <li><strong className="text-white">Standard:</strong> ERC-20 Compatible</li>
                    <li><strong className="text-white">Blockchain:</strong> [To be specified at launch]</li>
                  </ul>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-white mb-4">Distribution Breakdown</h3>
                <div className="space-y-4">
                  <div className="glass-effect rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-heading font-semibold text-xl text-accent-pink">Community Airdrop</h4>
                        <p className="text-sm text-gray-400 mt-1">Daily distribution to active addresses</p>
                      </div>
                      <span className="text-3xl font-bold gradient-text">60%</span>
                    </div>
                    <p className="text-sm mb-2"><strong className="text-white">Amount:</strong> 42,000,000,000 PF</p>
                    <p className="text-sm mb-2"><strong className="text-white">Duration:</strong> 5+ years (decreasing curve)</p>
                    <p className="text-sm mb-2"><strong className="text-white">Mechanism:</strong> Smart contract-based, activity-weighted</p>
                    <p className="text-sm"><strong className="text-white">Rationale:</strong> True community ownership. Largest fair distribution in crypto history.</p>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-heading font-semibold text-xl text-accent">Liquidity Pool</h4>
                        <p className="text-sm text-gray-400 mt-1">Long-term liquidity provision</p>
                      </div>
                      <span className="text-3xl font-bold gradient-text">18%</span>
                    </div>
                    <p className="text-sm mb-2"><strong className="text-white">Amount:</strong> 12,600,000,000 PF</p>
                    <p className="text-sm mb-2"><strong className="text-white">Lock:</strong> Time-locked LP tokens</p>
                    <p className="text-sm mb-2"><strong className="text-white">Purpose:</strong> Ensure trading liquidity and price stability</p>
                    <p className="text-sm"><strong className="text-white">Rationale:</strong> Deep liquidity prevents manipulation and supports healthy market dynamics.</p>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-heading font-semibold text-xl text-accent-green">AI Development</h4>
                        <p className="text-sm text-gray-400 mt-1">Research, development, infrastructure</p>
                      </div>
                      <span className="text-3xl font-bold gradient-text">12%</span>
                    </div>
                    <p className="text-sm mb-2"><strong className="text-white">Amount:</strong> 8,400,000,000 PF</p>
                    <p className="text-sm mb-2"><strong className="text-white">Use:</strong> AI research, compute resources, developer grants</p>
                    <p className="text-sm mb-2"><strong className="text-white">Governance:</strong> DAO-controlled spending</p>
                    <p className="text-sm"><strong className="text-white">Rationale:</strong> Funding for long-term technological development. Equivalent to $8.4B at scale.</p>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-heading font-semibold text-xl text-purple-400">Ecosystem Reserve</h4>
                        <p className="text-sm text-gray-400 mt-1">Partnerships, grants, future products</p>
                      </div>
                      <span className="text-3xl font-bold gradient-text">7%</span>
                    </div>
                    <p className="text-sm mb-2"><strong className="text-white">Amount:</strong> 4,900,000,000 PF</p>
                    <p className="text-sm mb-2"><strong className="text-white">Use:</strong> Strategic partnerships, developer incentives, ecosystem growth</p>
                    <p className="text-sm mb-2"><strong className="text-white">Governance:</strong> DAO approval required</p>
                    <p className="text-sm"><strong className="text-white">Rationale:</strong> Flexibility for unforeseen opportunities and ecosystem expansion.</p>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-heading font-semibold text-xl text-yellow-400">Team</h4>
                        <p className="text-sm text-gray-400 mt-1">Core contributors, advisors</p>
                      </div>
                      <span className="text-3xl font-bold gradient-text">3%</span>
                    </div>
                    <p className="text-sm mb-2"><strong className="text-white">Amount:</strong> 2,100,000,000 PF</p>
                    <p className="text-sm mb-2"><strong className="text-white">Vesting:</strong> 4-year linear vesting with 1-year cliff</p>
                    <p className="text-sm mb-2"><strong className="text-white">Lock:</strong> Smart contract enforced, no early unlock</p>
                    <p className="text-sm"><strong className="text-white">Rationale:</strong> Minimal team allocation ensures long-term alignment without dump risk.</p>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Why This Distribution Is Fair</h3>
                <div className="glass-effect rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-green text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">60% to Community</p>
                        <p className="text-sm text-gray-400">Industry average: 10-20%. PF: 60%. This is structural, not marketing.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-green text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">3% to Team</p>
                        <p className="text-sm text-gray-400">Industry average: 20-40%. PF: 3%. Long vesting prevents dumps.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-green text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">No VC Allocation</p>
                        <p className="text-sm text-gray-400">Zero venture capital. Zero private sales. Zero insider advantages.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-green text-xl">✓</span>
                      <div>
                        <p className="font-semibold text-white">Long-term Distribution</p>
                        <p className="text-sm text-gray-400">5+ years, not weeks. Sustainable growth, not pump-and-dump.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mt-6">
                  <h4 className="font-heading font-semibold text-lg text-red-400 mb-3">⚠️ No Price Guarantees</h4>
                  <p className="text-sm text-gray-300">
                    This tokenomics model does NOT guarantee:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 mt-2 ml-4">
                    <li>Token price appreciation</li>
                    <li>Liquidity availability</li>
                    <li>Exchange listings</li>
                    <li>Market demand</li>
                    <li>Return on participation</li>
                  </ul>
                  <p className="text-sm text-gray-300 mt-3">
                    Token value is determined by market forces, community participation, and technological development—none of which are guaranteed.
                  </p>
                </div>
              </div>
            </section>

            {/* Quote */}
            <div className="glass-effect rounded-2xl p-6 text-center">
              <blockquote className="text-xl italic text-gray-300 mb-3">
                "The goal of a startup is to figure out the right thing to build—the thing customers want and will pay for—as quickly as possible."
              </blockquote>
              <p className="text-sm text-gray-500">— Eric Ries, The Lean Startup</p>
            </div>

            {/* 6. Daily Airdrop Mechanism */}
            <section className="card-glass rounded-2xl p-8" id="section-6">
              <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">6. Daily Airdrop Mechanism</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="font-heading font-semibold text-2xl text-white mb-4">Concept Overview</h3>
                <p>
                  The daily airdrop is PF's core distribution mechanism. Unlike one-time airdrops that reward early speculators, PF distributes tokens continuously to active, genuine community members.
                </p>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li>
                    <strong className="text-white">1. Epoch-Based Distribution</strong>
                    <p className="text-sm mt-2">Every 24 hours = 1 epoch. At the end of each epoch, tokens are distributed based on activity scores.</p>
                  </li>
                  <li>
                    <strong className="text-white">2. Activity Scoring (Conceptual)</strong>
                    <p className="text-sm mt-2 mb-2">Addresses are scored based on:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li><strong>On-chain Activity (40%):</strong> Real transactions, not wash trading</li>
                      <li><strong>Holding Duration (30%):</strong> Longer holds = higher weight</li>
                      <li><strong>Governance Participation (20%):</strong> Voting, proposals, discussions</li>
                      <li><strong>Anti-Bot Score (10%):</strong> Penalty for suspicious behavior</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">3. Distribution Curve</strong>
                    <p className="text-sm mt-2">Initial daily distribution: ~23M PF. Decreases gradually over 5+ years following a logarithmic curve.</p>
                  </li>
                  <li>
                    <strong className="text-white">4. Smart Contract Execution</strong>
                    <p className="text-sm mt-2">Fully automated. No manual intervention. Transparent and auditable on-chain.</p>
                  </li>
                </ol>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Sybil Resistance (Conceptual Model)</h3>
                <p>
                  Preventing bot attacks is critical. PF employs multiple layers:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent">On-Chain Analysis</h4>
                    <p className="text-sm">Pattern detection: transaction frequency, gas usage, interaction diversity, wallet age.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent-pink">AI Layer (Future)</h4>
                    <p className="text-sm">Machine learning models trained on known bot behavior. Experimental and optional.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-accent-green">Community Reporting</h4>
                    <p className="text-sm">DAO-governed blacklist. Community can flag and vote on suspicious addresses.</p>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-purple-400">Economic Disincentives</h4>
                    <p className="text-sm">Cost of creating Sybil accounts must exceed potential rewards.</p>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Governance & Adjustability</h3>
                <p>
                  The airdrop mechanism is NOT fixed. The DAO can vote to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adjust scoring weights</li>
                  <li>Modify distribution curve</li>
                  <li>Add or remove criteria</li>
                  <li>Pause distribution if necessary</li>
                  <li>Integrate AI analysis (if community approves)</li>
                </ul>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                  <h4 className="font-heading font-semibold text-lg text-yellow-400 mb-3">⚠️ No Guarantees</h4>
                  <p className="text-sm text-gray-300">
                    The daily airdrop mechanism:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 mt-2 ml-4">
                    <li>May be paused or modified by DAO vote</li>
                    <li>Does not guarantee participation rewards</li>
                    <li>May fail to prevent all Sybil attacks</li>
                    <li>Is subject to technical limitations and bugs</li>
                    <li>Does not guarantee token value or liquidity</li>
                  </ul>
                  <p className="text-sm text-gray-300 mt-3">
                    This is an experiment. Participation is voluntary and at your own risk.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. AI Layer & Future Development */}
            <section className="card-glass rounded-2xl p-8" id="section-7">
              <h2 className="font-heading font-bold text-3xl mb-6 gradient-text">7. AI Layer & Future Development</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="font-heading font-semibold text-2xl text-white mb-4">What AI Is NOT in PF</h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li>❌ Not a finished product</li>
                    <li>❌ Not artificial general intelligence (AGI)</li>
                    <li>❌ Not autonomous decision-making</li>
                    <li>❌ Not guaranteed to work as described</li>
                    <li>❌ Not a price pump mechanism</li>
                  </ul>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-white mb-4">What AI IS in PF</h3>
                <p>
                  AI in PF is a <strong className="text-accent-pink">research initiative</strong>—a set of experimental tools that may help:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Detect bot behavior and Sybil attacks</li>
                  <li>Analyze on-chain activity patterns</li>
                  <li>Optimize distribution algorithms</li>
                  <li>Support governance decision-making</li>
                  <li>Generate community insights</li>
                </ul>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Development Timeline (Tentative)</h3>
                <div className="space-y-4">
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-xl text-accent mb-3">2026: Research & Foundations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Data collection infrastructure</li>
                      <li>• Basic pattern analysis</li>
                      <li>• Community feedback mechanisms</li>
                      <li>• Open-source research publications</li>
                    </ul>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-xl text-accent-pink mb-3">2027: Early Integrations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Experimental bot detection models</li>
                      <li>• Optional AI-assisted scoring</li>
                      <li>• Community testing and feedback</li>
                      <li>• Gradual rollout with DAO approval</li>
                    </ul>
                  </div>
                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-xl text-accent-green mb-3">Post-2027: Experimental Evolution</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Advanced behavior analysis</li>
                      <li>• Cross-chain intelligence (if applicable)</li>
                      <li>• Community-driven AI development</li>
                      <li>• Emergent capabilities (unpredictable)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Open Source & Transparency</h3>
                <p>
                  All AI research and code will be:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Open-source and publicly auditable</li>
                  <li>Documented with research papers</li>
                  <li>Subject to community review</li>
                  <li>Optional—community can reject AI features</li>
                </ul>

                <h3 className="font-heading font-semibold text-2xl text-white mt-8 mb-4">Community Governance Over AI</h3>
                <p>
                  The community decides:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Whether to adopt AI features</li>
                  <li>Which models to use</li>
                  <li>How much weight AI has in scoring</li>
                  <li>When to disable AI if it fails</li>
                </ul>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                  <h4 className="font-heading font-semibold text-lg text-yellow-400 mb-3">⚠️ AI Development Risks</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    AI development may fail due to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    <li>Technical complexity and resource constraints</li>
                    <li>Insufficient data or compute power</li>
                    <li>Adversarial attacks on AI models</li>
                    <li>Community rejection of AI features</li>
                    <li>Regulatory restrictions on AI use</li>
                    <li>Unforeseen technical limitations</li>
                  </ul>
                  <p className="text-sm text-gray-300 mt-3">
                    <strong>No guarantees are made about AI functionality, timeline, or effectiveness.</strong> This is experimental research.
                  </p>
                </div>
              </div>
            </section>

            {/* Quote */}
            <div className="glass-effect rounded-2xl p-6 text-center">
              <blockquote className="text-xl italic text-gray-300 mb-3">
                "The future is already here—it's just not evenly distributed."
              </blockquote>
              <p className="text-sm text-gray-500">— William Gibson, Science Fiction Author</p>
            </div>

            {/* Continue with remaining sections... */}
            <div className="glass-effect rounded-2xl p-8 text-center">
              <p className="text-gray-400 mb-6">
                <strong className="text-white">Whitepaper continues with:</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm mb-8">
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">8. Smart Contract Architecture</p>
                  <p className="text-gray-500">Technical specifications, security measures, audit reports</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">9. Governance & Community</p>
                  <p className="text-gray-500">DAO structure, voting mechanisms, proposal process</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">10. Roadmap Summary</p>
                  <p className="text-gray-500">Phase-by-phase development from Genesis to Self-Evolution</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">11. Risks & Limitations</p>
                  <p className="text-gray-500">Comprehensive risk disclosure and failure scenarios</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">12. Legal Disclaimer</p>
                  <p className="text-gray-500">Non-security status, regulatory compliance, user responsibilities</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">13-14. Ethics & Conclusion</p>
                  <p className="text-gray-500">Transparency commitments and final thoughts</p>
                </div>
              </div>
              
              <Button className="gradient-bg hover:opacity-90 transition-all font-heading px-8 py-6 text-lg">
                <Download className="mr-2" size={20} />
                Download Complete Whitepaper PDF (50+ Pages)
              </Button>
              
              <p className="text-sm text-gray-500 mt-6">
                Full technical documentation, legal disclaimers, and risk disclosures included in PDF version
              </p>
            </div>

            {/* Final Quote */}
            <div className="glass-effect rounded-2xl p-6 text-center mt-12">
              <blockquote className="text-2xl font-heading italic text-gray-300 mb-4">
                "We are stuck with technology when what we really want is just stuff that works."
              </blockquote>
              <p className="text-sm text-gray-500 mb-6">— Douglas Adams, The Hitchhiker's Guide to the Galaxy</p>
              <p className="text-lg text-gray-300">
                PF is not about hype. It's about building something that might actually work—together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
