
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {
    cartItems
  } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Count total items in cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold text-orange-500">
            Desi <span className="text-gray-950">Flavors Katy</span>
          </span>
        </Link>

        {/* Desktop Navigation - Updated Order */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium">
            Home
          </Link>
          <Link to="/menu" className="nav-link font-medium">
            Menu
          </Link>
          <Link to="/order" className="nav-link font-medium">
            Order
          </Link>
          <Link to="/about" className="nav-link font-medium">
            About Us
          </Link>
          <Link to="/cart" className="nav-link font-medium relative">
            <ShoppingCart size={20} />
            {itemCount > 0 && <span className="absolute -top-2 -right-2 bg-desi-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="relative mr-2">
            <ShoppingCart size={20} className="text-desi-black" />
            {itemCount > 0 && <span className="absolute -top-2 -right-2 bg-desi-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>}
          </Link>
          <button className="text-desi-black hover:text-desi-orange transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated Order */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 hover:bg-desi-orange/10 rounded-md transition-colors text-desi-black hover:text-desi-orange">
              Home
            </Link>
            <Link to="/menu" className="px-4 py-2 hover:bg-desi-orange/10 rounded-md transition-colors text-desi-black hover:text-desi-orange">
              Menu
            </Link>
            <Link to="/order" className="px-4 py-2 hover:bg-desi-orange/10 rounded-md transition-colors text-desi-black hover:text-desi-orange">
              Order
            </Link>
            <Link to="/about" className="px-4 py-2 hover:bg-desi-orange/10 rounded-md transition-colors text-desi-black hover:text-desi-orange">
              About Us
            </Link>
          </nav>
        </div>}
    </header>;
};

export default Navbar;
