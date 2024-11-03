import { useNavigate } from 'react-router-dom';
// import { Link as LinkIcon } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <ScrollLink to="hero" className="flex items-center cursor-pointer">
            <img src="src/assets/logo.svg" alt="logo" className='w-16' />
            {/* <LinkIcon className="h-8 w-8 text-purple-600" /> */}
            <span className="ml-2 text-2xl font-bold text-gray-900">Quikscribe.in</span>
          </ScrollLink>

          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink to="features" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">Features</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">About</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</ScrollLink>
            <ScrollLink to="pricing" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">Pricing</ScrollLink>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900" onClick={() => navigate('/signin')}>Log in</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors" onClick={() => navigate('/signup')}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav >
  );
}