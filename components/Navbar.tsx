'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, Search, Gem } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

interface NavbarProps {
  userButton?: React.ReactNode;
}

export function Navbar({ userButton }: NavbarProps) {
  // TODO: Replace with actual cart context when implemented
  const cartCount = 0;

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Gem className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight bg-linear-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                Opulence Tools
              </div>
              <div className="text-[10px] text-emerald-600 font-medium -mt-1">
                Luxury Craftsmanship
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <button
              className="hidden md:block text-neutral-500 hover:text-emerald-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <div className="hidden md:block">
              {userButton}
            </div>
            <Link href="/cart" className="relative group">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-neutral-600 group-hover:text-emerald-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-linear-to-br from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
            {/* Mobile Menu Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden text-neutral-600 hover:text-emerald-600 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Gem className="w-5 h-5 text-white" />
                    </div>
                    <span>Menu</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map(link => (
                    <SheetClose asChild key={link.path}>
                      <Link
                        href={link.path}
                        className="text-lg font-medium text-neutral-600 hover:text-emerald-600 transition-colors py-2 border-b border-neutral-100"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <div className="py-2 border-b border-neutral-100">
                    {userButton}
                  </div>
                  <button className="flex items-center space-x-2 text-lg font-medium text-neutral-600 hover:text-emerald-600 transition-colors py-2">
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
