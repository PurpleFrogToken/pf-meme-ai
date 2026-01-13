import { Twitter, Send, Github, FileText, Map, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-accent/20 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/200x200xLogoPF.jpg"
                alt="PF Logo" 
                className="w-12 h-12 rounded-lg object-cover"
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
                href="https://x.com/PurpleFrogToken" 
                className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Twitter size={20} />
              </a>

              <a
                    href="https://t.me/PurpleFrogToken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
                    aria-label="Telegram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 240 240"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M120 0C53.7 0C53.7 120 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm58.5 82.8l-19.9 94c-1.5 6.7-5.4 8.3-11 5.2l-30.4-22.4-14.7 14.1c-1.6 1.6-3 3-6.1 3l2.2-31.2 56.8-51.3c2.5-2.2-.5-3.4-3.9-1.2L87 133.4 56.7 123.9c-6.6-2-6.7-6.6 1.4-9.8l118.3-45.6c5.5-2 10.3 1.3 8.1 14.3z"/>
                    </svg>
                  </a>

              <a 
                href="mailto:support@pf-ai.org" 
                className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Send size={20} />
              </a>
              <a 
                href="https://github.com/PurpleFrogToken" 
                className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 pt-6 text-center">
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
