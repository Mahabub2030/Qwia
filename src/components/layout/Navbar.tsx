import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { Link, useLocation } from "react-router";

// import Logo from "../../assets/images/logo.png";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#623283] text-white text-xs py-1 text-center">
        Ems · Simplify your group’s finances →
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-8">
              {/* Mobile Menu */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="6" x2="20" y2="6" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                  </Button>
                </PopoverTrigger>

                <PopoverContent align="start" className="w-56 md:hidden">
                  <nav className="flex flex-col gap-1">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                          "px-3 py-2 text-sm rounded-md hover:bg-gray-100",
                          location.pathname === link.href &&
                            "text-blue-600 font-medium",
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </PopoverContent>
              </Popover>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                {/* <img src={Logo} alt="Logo" className="w-8 h-8" /> */}
                <span className="text-xl font-bold text-blue-700 uppercase">
                  EMS
                </span>
              </Link>

              {/* Desktop Menu */}
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex gap-6">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className={cn(
                            "text-sm font-medium text-gray-700 hover:text-blue-600 transition",
                            location.pathname === link.href && "text-blue-600",
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* RIGHT */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link to="/login">Login</Link>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="text-green-600">
                  {/* <LogOut className="mr-2 h-4 w-4" /> */}
                  <Link to="/login">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}
