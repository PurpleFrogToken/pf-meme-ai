import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Vision', href: '#vision' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Airdrop', href: '#airdrop' },
    { label: 'AI Roadmap', href: '#ai' },
    { label: 'Brand Story', href: '#brand' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://mgx-backend-cdn.metadl.com/generate/images/710370/2026-01-07/5c7f87a6-8cbc-4b12-b0e1-0e160c105be3.png" 
              alt="PF Logo" 
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h1 className="font-heading font-bold text-2xl gradient-text">PF</h1>
              <p className="text-xs text-gray-400">The Meme That Thinks</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-heading font-semibold text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="gradient-bg hover:opacity-90 transition-opacity font-heading">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 glass-effect rounded-xl p-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block font-heading font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full gradient-bg hover:opacity-90 transition-opacity font-heading">
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}