import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FaHome, FaLeaf, FaInfoCircle, FaTachometerAlt } from "react-icons/fa";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start font-medium">
      
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
          >
            <FaHome className="text-green-600" />
            Home
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/browse-tips"
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
          >
            <FaLeaf className="text-green-600" />
            Browse Tips
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/about"
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
          >
            <FaInfoCircle className="text-green-600" />
            About
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
          >
            <FaTachometerAlt className="text-green-600" />
            Dashboard
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);
