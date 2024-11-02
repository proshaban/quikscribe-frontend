import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Link as LinkIcon, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <LinkIcon className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">Quikscribe.in</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transform speech into text instantly with AI-powered transcription.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <ScrollLink to="features" className="text-gray-300 hover:text-white cursor-pointer">
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="pricing" className="text-gray-300 hover:text-white cursor-pointer">
                  Pricing
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <ScrollLink to="about" className="text-gray-300 hover:text-white cursor-pointer">
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" className="text-gray-300 hover:text-white cursor-pointer">
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Quikscribe. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}