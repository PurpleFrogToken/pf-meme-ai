import { Twitter, MessageCircle, Send, Github, FileText, Map, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-accent/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/5c7f87a6-8cbc-4b12-b0e1-0e160c105be3.png" 
                alt="PF Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h3 className="font-heading font-bold text-2xl gradient-text">PF</h3>
                <p className="text-sm text-gray-400">The Meme That Thinks</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              A revolutionary crypto project merging meme power with advanced AI. 
              60% fair distribution, self-evolving protocol, and true decentralization.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              Total Supply: 70,000,000,000 PF
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vision" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                  <BookOpen size={16} />
                  Vision
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                  <FileText size={16} />
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#airdrop" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                  <FileText size={16} />
                  Airdrop
                </a>
              </li>
              <li>
                <a href="#ai" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                  <Map size={16} />
                  AI Roadmap
                </a>
              </li>
              <li>
                <a href="#brand" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                  <BookOpen size={16} />
                  Brand Story
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Send size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2026 PF Community. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Disclaimer: Investing in cryptocurrencies carries risks. Do Your Own Research (DYOR) before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}