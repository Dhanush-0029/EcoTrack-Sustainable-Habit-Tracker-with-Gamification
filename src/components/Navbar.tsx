
import React from 'react';
import { Leaf, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-eco-leaf/90 backdrop-blur-sm text-white py-3 px-4 md:px-6 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <Leaf className="h-6 w-6" />
        <span className="text-xl font-semibold">EcoTrack</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-eco-forest/30">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-eco-forest/30">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
