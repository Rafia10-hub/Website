import logo from '@assets/boltay_poday_logo_2.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <a href="#home" className="shrink-0">
            <img 
              src={logo} 
              alt="Boltay Poday Logo" 
              className="h-12 object-contain brightness-0 invert" 
            />
          </a>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Home', 'Product', 'Our Story', 'Team', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-gray-400 hover:text-white transition-colors font-medium text-sm"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>
            &copy; {currentYear} Boltay Poday. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with passion at <span className="text-white font-semibold">University</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}
