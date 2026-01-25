'use client';

import { signOutUser } from '@/lib/actions/user.action';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';

export function SignOutButton() {
  return (
    <DropdownMenuItem
      onClick={() => signOutUser()}
      className="flex items-center text-red-600 cursor-pointer"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Sign Out
    </DropdownMenuItem>
  );
}
