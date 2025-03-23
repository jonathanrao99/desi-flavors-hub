
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-desi-cream px-4">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-6xl font-display font-bold mb-4 text-desi-black">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-desi-orange hover:bg-desi-orange/90 
            text-white rounded-full font-medium transition-colors shadow-md"
        >
          <Home size={18} className="mr-2" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
