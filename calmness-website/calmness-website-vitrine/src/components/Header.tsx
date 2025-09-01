'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-700">
              Calmness Trading
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition-colors duration-200 hover:text-primary-600 ${
                  pathname === item.href
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Navigation Mobile - Simple menu button */}
          <div className="md:hidden">
            <button className="text-secondary-700 hover:text-primary-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Mobile - Menu déroulant simple */}
        <nav className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium py-2 px-3 rounded transition-colors duration-200 hover:bg-primary-50 hover:text-primary-600 ${
                  pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-secondary-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;