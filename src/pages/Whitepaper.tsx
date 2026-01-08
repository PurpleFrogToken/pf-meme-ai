import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-08/272bbfbd-badd-4603-b11f-3225cd9e45de.png" 
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

            {/* Continue with remaining sections... */}
            <div className="glass-effect rounded-2xl p-8 text-center">
              <p className="text-gray-400 mb-6">
                <strong className="text-white">Full whitepaper content continues with detailed sections on:</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm mb-8">
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">Vision & Philosophy</p>
                  <p className="text-gray-500">Digital Justice, Collective Intelligence, AI as Tool</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">Tokenomics</p>
                  <p className="text-gray-500">70B supply breakdown, fair distribution model</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">AI Development</p>
                  <p className="text-gray-500">2026-2027+ timeline, experimental approach</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">Smart Contracts</p>
                  <p className="text-gray-500">Architecture, security, audit reports</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">Governance</p>
                  <p className="text-gray-500">DAO structure, voting, proposals</p>
                </div>
                <div className="card-glass rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">Legal & Risks</p>
                  <p className="text-gray-500">Comprehensive disclaimers, risk disclosure</p>
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